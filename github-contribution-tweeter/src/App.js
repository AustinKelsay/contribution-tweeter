import React, {Component} from 'react';
import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js';
import axios from 'axios';
import './App.css';

 // const T = new Twit({
  //   consumer_key:         'jNMoXfEBkssEkiC2yUybzHvy2',
  //   consumer_secret:      'KY1cQ0yoOSQDGwUClRJxZDbdc9EUxqxHP3ZJz4Dd5WidkugnVq',
  //   access_token:         '389527141-SIqsCJBndckDD6Rd9IlsefPDOFwql07b3IA03Jza',
  //   access_token_secret:  '30JHEQ0S49r0VfOt6YZquZFoLA6xjjnYp2XJBE1KXSrj3'
  // })



  class App extends Component {

    constructor() {
      super();
  
      this.onFailed = this.onFailed.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
    }
  
    onSuccess(response) {
      response.json().then(body => {
        alert(JSON.stringify(body));
      });
    }
  
    onFailed(error) {
      alert(error);
    }
  
    render() {
      const customHeader = {};
      customHeader['Test'] = 'test-header';
      return (
        <div>
          <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
                        onFailure={this.onFailed}
                        onSuccess={this.onSuccess}
                        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                        showIcon={true}
                        customHeaders={customHeader}
                        forceLogin={true}/>
        </div>
      );
    }
  }
  
  export default App;
