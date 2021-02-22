import React from 'react';

class Users extends React.Component {
  componentDidMount() {
    const url = 'https://randomuser.me/api/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log('Random User API Data:', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default Users;




