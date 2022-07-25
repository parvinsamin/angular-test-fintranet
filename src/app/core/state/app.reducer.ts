import { createReducer, on } from "@ngrx/store"
import { addPost, addRow, addSrc } from "./app.actions"
import { initialState, initialState1, initialState2 } from "./app.state";

const _tableRowReducer = createReducer(
    initialState1,
    on(addRow, (state: any, action: any) => { 
        let persons = {...action.person };

        return {
            ...state,
            person: {...state.person, persons}
        }
    }))

export function TableRowReducer(state: any, action: any) {
    return _tableRowReducer(state, action);
}

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state: any, action: any) => {
        let post = { ...action.src };
        return {
            ...state,
            posts: { ...state.posts, post }
        }

    }))

export function PostReducer(state: any, action: any) {
    return _postsReducer(state, action);
}
const _srcReducer = createReducer(
    initialState2,
    on(addSrc, (state: any, action: any) => {
        let post = { ...action.post };
        return {
            ...state,
            src: {...state.src, post}
        }
    }))

export function SrcReducer(state: any, action: any) {
    return _srcReducer(state, action);
}




// let a = {
//     name: 'parvin'
// }

// a.name = 'mostafa'; // mutate

// a = {
//     name: 'mostafa' // change reference
// }