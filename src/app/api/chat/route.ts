import type { NextApiRequest, NextApiResponse } from 'next';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { LLMChain } from 'langchain/chains';
import { CallbackManager } from 'langchain/callbacks';
import {
ChatPromptTemplate,
HumanMessagePromptTemplate,
} from 'langchain/prompts';


export async function POST(
req: Request,
res: NextApiResponse,
) {
try {
const body = await req.json();


console.log('request body', body);
const { question, history } = body;


if (!question) {
return new Response('No question in request', { status: 400 })
}


// Check if the request is for a streaming response.
const streaming = req.headers.get('accept') === 'text/event-stream';
console.log('server streaming', streaming);
const prompt_text = `You are a popular star on the internet. You are described as {star_description}. Use the following pieces of context to answer the question at the end.
Try your best based on the following chat history: {chat_history}
If the question is not in the history or description, try to chat with your fans and make them happy


Question: {question}
Helpful answer in markdown:`;


const prompt = ChatPromptTemplate.fromPromptMessages([
HumanMessagePromptTemplate.fromTemplate(prompt_text),
]);


const temp_description = "mimic this person: name:Lucy, famous star in instagram, good at music, clothing design."
if (streaming) {
// For a streaming response we need to use a TransformStream to
// convert the LLM's callback-based API into a stream-based API.
const encoder = new TextEncoder();
const stream = new TransformStream();
const writer = stream.writable.getWriter();
console.log('creating llm');
const llm = new ChatOpenAI({
streaming,
callbackManager: CallbackManager.fromHandlers({
handleLLMNewToken: async (token: string) => {
await writer.ready;
await writer.write(encoder.encode(`data: ${token}\n\n`));
},
handleLLMEnd: async () => {
await writer.ready;
await writer.close();
},
handleLLMError: async (e: Error) => {
await writer.ready;
await writer.abort(e);
},
}),
});
console.log('creating chain');
const chain = new LLMChain({ prompt, llm });
// We don't need to await the result of the chain.run() call because
// the LLM will invoke the callbackManager's handleLLMEnd() method
chain.call({ question: question,
chat_history: history || [],
star_description: temp_description, }).catch((e: Error) => console.error(e));
console.log('returning response');
return new Response(stream.readable, {
headers: { 'Content-Type': 'text/event-stream' },
});
} else {
// For a non-streaming response we can just await the result of the
// chain.run() call and return it.
const llm = new ChatOpenAI();
const chain = new LLMChain({ prompt, llm });
const response = await chain.call({ question: question,
chat_history: history || [], star_description: temp_description,});


return new Response(JSON.stringify(response), {
headers: { 'Content-Type': 'application/json' },
});
}
} catch (e) {
return new Response(JSON.stringify({ error: (e as any).message }), {
status: 500,
headers: { 'Content-Type': 'application/json' },
});
}
}
