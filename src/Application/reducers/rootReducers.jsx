import { combineReducers } from "redux";
import articles from './articles'
import article from './article'
const rootReducer = combineReducers()({
    articles: articles,
    article:article,
})

export default rootReducer;