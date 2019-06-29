import { RECIEIVE_ARTICLES } from './articlesFun'
import axios from 'axios'

export const getArticles = () => {
return(dispatch) => {
    return axios.get('')
    .then(res => {
        dispatch({type:RECIEIVE_ARTICLES, articles: res.data})
    }).catch(error => {
        throw(error)
    })
}
}

