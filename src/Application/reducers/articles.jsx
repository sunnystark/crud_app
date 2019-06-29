import { RECIEIVE_ARTICLES } from '../actions/actionConstant'
const initialState = {
    articles:[]
}

const articles = ( state = initialState, action ) => {
switch(action.type){
    case RECIEIVE_ARTICLES:
        return action.articles;
        default:
            return state
}

}

export default articles;
