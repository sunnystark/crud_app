import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ArticleList extends Component {
  render() {                                                        //1
    if(this.props.articles.length) {                                //1a
      return (
        <div>
          <h4>Articles</h4>
          {this.props.articles.map(article => {                     //1b
            return (
              <div key={ article.id }>                              
                <hr/>          
                <h4><Link to={`/articles/${article.id}`}>{article.id}: {article.title}</Link></h4>  
                <p>{article.content}</p>
              </div>
            );
          })}
        </div>
      )    
    } else {
      return (<div>No Articles</div>)
    }
  }
}

const mapStateToProps = (state) => ({ articles: state.articles });  //2

export default connect(mapStateToProps)(ArticleList);               //3
