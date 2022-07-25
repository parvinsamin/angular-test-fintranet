import { createAction, props } from '@ngrx/store';
import { Post, Src } from '../models/post.model';
import { Person } from '../services/persons';

export const ADD_SRC_ACTION = "[home/file-upload] addSrc"
export const ADD_POST_ACTION = "[home/form] addPost"
export const ADD_ROW_ACTION = "[home/table] addRow"
export const addSrc = createAction(ADD_SRC_ACTION, props<{src:Src}>())
export const addRow = createAction(ADD_ROW_ACTION, props<{person:Person}>())
export const addPost = createAction(ADD_POST_ACTION, props<{post:Post}>())
 