import { createReducer, on } from "@ngrx/store"
import { addPost, addRow, addSrc } from "./app.actions"
import { initialState } from "./app.state";



const _postsReducer = createReducer(
    initialState,
    on(addRow, (state: any, action: any) => {
        let persons = { ...action.person };
        const t = {
            ...state,
            person: { ...state.person, persons }
        }
        console.log(' persons ', t)
        return t
    }),
    on(addPost, (state: any, action: any) => {
        let post = { ...action.post };
        const t = {
            ...state,
            posts: { ...state.posts, post }
        }
        console.log('posts', t)
        return t
    }),
    on(addSrc, (state: any, action: any) => { 
        let src =   action.src ;
        const t = {
            ...state,
            src:  {...state.src, src } 
        } 
        return t
    })
)

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