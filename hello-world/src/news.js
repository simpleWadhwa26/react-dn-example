import React from 'react';



class news extends React.Component {
  render(){
  
    return(
      <div>
      <li>
      <div className="upvotes">
      <div className="list-story-grouper list-story-upvote-grouper"><button aria-label="Upvote this story to 19 points" className="story-upvote-button toggle-login" itemScope="true" itemType="http://schema.org/LikeAction"><meta itemProp="name" content="Upvote &quot;Join Netflix and HTC Creative Labs at Design on the Rocks | Thursday Oct 27 | @ The Piranha Shop, Seattle WA&quot;"/><meta itemProp="url" content="https://www.designernews.co/stories/75738-join-netflix-and-htc-creative-labs-at-design-on-the-rocks--thursday-oct-27---the-piranha-shop-seattle-wa"/><svg aria-label="up-arrow" className="upvote-up-arrow" height="7" id="svg-up-arrow" role="img" version="1.1" viewBox="0 0 11 7" width="11"><path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"></path></svg><span className="story-upvote-button-number unvoted-number"></span><span className="story-upvote-button-number upvoted-number">{this.props.upvote}</span></button></div></div>
     <div className="newsContent">
        <span className="headline">
        {this.props.Headline} </span>
        <span className="clickOn">{this.props.storyDomain}</span>
        <div>
            <span className="comments"><u>{this.props.Comments}</u></span><span className="when">{this.props.time}</span> from
            <span className="publisherName">{this.props.AuthorName}</span>,
            <span className="Designation">{this.props.Designation}</span>
            <button
              className={this.props.isStarred ? "btn btn-danger" : "btn btn-primary"}
              onClick={this.upvote}
              >
              {this.props.isStarred ? "Unstar" : " RateStar"}
            </button>
          </div>
</div>
        </li>
      </div>
    );
  }
}
export default news;
