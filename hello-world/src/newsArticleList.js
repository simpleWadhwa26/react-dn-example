import React from 'react';
import News from './news';

class newsArticleList extends React.Component {
  render(){
    var newsArticles = this.props.newsArticlelist.map(news => {
      return (
        <News
          key={news.id}
          getupvote={this.props.getupvote}
          {...news}
        />
      );
    });


    return(
      <div className="newsArticleList">
      <ul>
      {newsArticles}
      </ul>
      </div>
    );
  }
}

export default newsArticleList;
