export interface Message {
    content: string, 
        sender: string, 
        isUser: boolean, 
        time: string
    };


export interface Star {
    name: string
    id: string
    imageURL: string
}