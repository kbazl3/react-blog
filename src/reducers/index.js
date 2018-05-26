import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'; //renaming reducer to formReducer
import PostsReducer from './reducer_post'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
