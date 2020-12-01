'use strict';
import styled from 'styled-components';

const api= 

const hoverWin = styled.div`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: auto;
width: 16rem;
background-color: white;
color: black;
`
function requestUserRepos(){
    
  // create new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // GitHub endpoint, dynamically passing in specified username
  const url = `https://api.github.com/users/${username}/repos`;
  
  // Open a new connection, using a GET request via URL endpoint
  // Providing 3 arguments (GET/POST, The URL, Async True/False)
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    
    // Parse API data into JSON
    const data = JSON.parse(this.response);
    
    // Log the response
    console.log(data);

}

// Send the request to the server
xhr.send();

}

// Call function passing in 'dstmarthe' as GitHub username
requestUserRepos('dstmarthe');

render(
  <div>
  <h2>${name}</h2>
  <p></p>
</div>
)

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#projInfo');
ReactDOM.render(e(LikeButton), domContainer);