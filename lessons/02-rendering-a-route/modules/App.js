import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return(
    <div>
      <h3>Hello, React Router!</h3>
      <ul>
        <li>
          <Link to="/repos" >Repos</Link>

        </li>
        <li>
            <Link to="/about" activeStyle={{color: 'red'}}>About</Link>
        </li>
      </ul>

      {this.props.children}
    </div>)

  }
})
