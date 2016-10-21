import React from 'react';

class menu extends React.Component{
  render(){
    return(
      <nav className="menubar">
        <ul>
          <li>Recent</li>
          <li>Starred</li>
        </ul>
      </nav>
    );
  }
}
export default menu;
