import React, { Component } from 'react';
import ContactCard from './components/ContactCard';
import './style/index.scss';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="hero is-light is-fullheight">
          <div className="hero-body">
            <div className="container" style={{position: "fixed", left: "5%"}}>
              <h1 className="title">Peter East's Personal Internet Dump</h1>
              <h2 className="subtitle">
                Fullstack software developer based in <strong>Cambridge</strong>
                <br/>
                I believe in <strong>strong types</strong>, functional programming and good <strong>coffee</strong>.
              </h2>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container section has-background-white">
            <h1 className="title is-size-3">Contact me in some places:</h1>
            <div className="columns">
              <ContactCard serviceName="LinkedIn" url="https://www.linkedin.com/in/peter-east-a0937754"/>
              <ContactCard serviceName="GitHub" url="http://www.github.com/petereast"/>
              <ContactCard serviceName="Instagram" url="https://www.instagram.com/petereast_/"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
