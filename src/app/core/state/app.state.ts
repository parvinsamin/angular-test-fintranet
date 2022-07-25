import { Post } from "../models/post.model"
import { Person } from "../services/persons"

export interface SrcState {
    src: string
}

export const initialState2: SrcState = {
    src: ''
}

export interface PostState {
    posts: Post 
}

export const initialState: PostState = {
    posts: {}
}

export interface PersonState {
    person: Person[]
}

export const initialState1: PersonState = {
    person: []
}

