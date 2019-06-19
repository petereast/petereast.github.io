import React, { Component } from "react";
import ContactCard from "./components/ContactCard";
import { Helmet } from "react-helmet";
import "./style/index.scss";

class App extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>Peter East</title>
        </Helmet>
        <div className="hero is-light is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-light">
                Peter East's Personal Internet Dump
              </h1>
              <h2 className="subtitle is-size-3">
                Backend web developer based in <strong>Cambridge</strong>
                <br />I believe in <strong>functional programming</strong>,{" "}
                <strong>strong types</strong> and good <strong>coffee</strong>.
              </h2>
            </div>
          </div>
        </div>
        <div className="hero is-light">
          <div className="hero-body">
            <div className="section section--bottom-half">
              <div className="container section has-background-white">
                <h1 className="title is-size-3">Contact me in some places:</h1>
                <div className="columns">
                  <ContactCard
                    serviceName="LinkedIn"
                    url="https://www.linkedin.com/in/peter-east-a0937754"
                  />
                  <ContactCard
                    serviceName="GitHub"
                    url="http://www.github.com/petereast"
                  />
                  <ContactCard
                    serviceName="Instagram"
                    url="https://www.instagram.com/petereast_/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
