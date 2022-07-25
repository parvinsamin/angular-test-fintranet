import { createAction, props } from '@ngrx/store';
import { Post, Src } from '../models/post.model';
import { Person } from '../services/persons';

export const ADD_SRC_ACTION = "[home/form] addPost"
export const ADD_POST_ACTION = "[home/form] addPost"
export const ADD_ROW_ACTION = "[home/form] addPost"
export const addSrc = createAction(ADD_SRC_ACTION, props<{src:Src}>())
export const addPost = createAction(ADD_POST_ACTION, props<{post:Post}>())
export const addRow = createAction(ADD_ROW_ACTION, props<{tableRow:Person}>())
 