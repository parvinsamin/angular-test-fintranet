import { Post } from "../models/post.model"

export interface PostState {
    posts: Post[]
}
export const initialState:PostState = {
    posts: [
        { id: 1, source: '/',amount:12, startDate:'2022-07-27 19:30:00.000', statuses:"IR","fund-src": 'Test'}
    ]
}