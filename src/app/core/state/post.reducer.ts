import { createReducer, on } from "@ngrx/store" 
import { addPost } from "./posts.actions"
import { initialState } from "./posts.state";

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state: any, action: any) => {
        let post = { ...action.post };
        post.id = state.posts.length + 1;
        return {
            ...state,
            posts: [...state.posts, post]
        }

    }))

export function PostReducer(state: any, action: any) {
    return _postsReducer(state, action);
}

// let a = {
//     name: 'parvin'
// }

// a.name = 'mostafa'; // mutate

// a = {
//     name: 'mostafa' // change reference
// }