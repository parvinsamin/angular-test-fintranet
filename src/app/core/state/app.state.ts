import { Post } from "../models/post.model"
import { Person } from "../services/persons"

 
 
export interface PostState {
    src: string ,
    posts: any ,
    person: any ,
}

export const initialState: PostState = {
    src: '',
    posts: {},
    person: {}
}
 
 