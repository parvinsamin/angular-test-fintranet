import { Post } from "../models/post.model"

export interface AppState {
    posts: Post[]
}
export const initialState: AppState = {
    posts: [
        { id: 1, source: '/' }
    ]
}