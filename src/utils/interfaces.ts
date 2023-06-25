export interface Message {
    content: string, 
    sentFromUser: boolean
    sender: string
}

export interface Star {
    name: string
    id: string
    imageURL: string
}