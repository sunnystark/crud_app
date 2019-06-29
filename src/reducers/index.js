import { combineReducers } from 'redux';
import articles from './articlesReducer';
import article from './articleReducer';

const rootReducer = combineReducers({
  articles: articles,
  article: article,
});
export default rootReducer;
