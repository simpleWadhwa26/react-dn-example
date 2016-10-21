import React from 'react';
import NewsArticleList from './newsArticleList';
import Menu from './menu';
import newsData from './data/newsData';
class CompleteNews extends React.Component{
  constructor(props){
    super(props);
    this.getupvote=this.getupvote.bind(this);
    this.state = {
      newsArticlelist: newsData
    }

  }

  getupvote(){

      var newsList = this.state.newsArticlelist.slice(0).map(newsData => Object.assign({}, newsData));



      var news = newsList.find(newsData => newsData.id === id);
      news.isUpvoted = true;
this.props.upvote = this.props.upvote +1;


      this.setState({
        newsArticlelist

      });
    }

  render(){
    return(
      <div className="container">
<Menu />
      <NewsArticleList
       newsArticlelist={this.state.newsArticlelist}
       />

      </div>
    );
  }
}
export default CompleteNews;
