import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const requestToken = () => {
    axios.post('https://api.twitter.com/oauth/request_token&oauth_callback=http%3A%2F%2Fmyapp.com%3A3005%2Ftwitter%2Fprocess_callback')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  };

  return (
    <div className="App">
      <button onClick={requestToken} />
    </div>
  );
}

export default App;
