import React, { Component } from "react";
import ContactCard from "./components/ContactCard";
import { Helmet } from "react-helmet";
import "./style/index.scss";
import PageTitle from "./components/PageTitle";

class App extends Component {
  render() {
    return (
      <div className="">
        <Helmet>
          <title>Peter East</title>
        </Helmet>
        <div className="hero is-fullheight is-white">
          <div className="hero-body">
            <div className="container">
              <h1 className="title big-title">
                Let's build some high quality software together.
              </h1>
              <h2 className="subtitle is-size-2">
                <ul>
                  <li>
                    Software development services for{" "}
                    <strong>interesting projects</strong>.
                  </li>
                  <li>
                    <strong>Scalable architecture</strong> to suit business
                    needs.
                  </li>
                  <li>
                    <strong>Pragmatic approach</strong> to complex problems.
                  </li>
                  <li>
                    Strong belief in <strong>open source</strong> and
                    progressive development techniques.
                  </li>
                </ul>
              </h2>
              <div className="container">
                <h2 className="subtitle is-size-4">
                  If this sounds interesting, maybe it's time to get in touch.
                </h2>
                <a
                  href="mailto:hello@peterea.st"
                  className="button is-success is-rounded is-outlined is-large"
                >
                  Get In Touch&nbsp;
                  <span className="icon is-small">
                    <i className="fa fa-arrow-right" />
                  </span>
                </a>
                <PageTitle />
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <div className="level">
              <div className="level-item">(maybe scroll down)</div>
            </div>
          </div>
        </div>
        <div className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="section">
                <h1 className="title is-size-2">
                  Software that scales is important
                </h1>
                <p className="is-size-4">
                  I beleive in building software that will scale to cope with
                  current and future needs, both in terms of runtime and
                  development peformance.
                </p>
              </div>
              <div className="section">
                <h1 className="title is-size-2">Pragmatism, not idealism</h1>
                <p className="is-size-4">
                  I'm not just quoting Radiohead, idealism in software design
                  and implementation costs a lot of money. While it's possible
                  for a piece of software to be perfect first time, it's
                  difficult, and makes it much harder to guarentee that the
                  software actually meets the requirements.
                </p>
              </div>
              <div className="section">
                <h1 className="title is-size-2">
                  Open Source builds sustainable software
                </h1>
                <p className="is-size-4">
                  Sure, it's not always appropriate to open source everything,
                  but where possible, I believe that it's important because it
                  helps build a community around software.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*

        Let's wait until contact.peterea.st is done.

        <div className="hero is-large">
          <div className="hero-body">
            <div className="container">
              <div className="section">
                <h1 className="title is-size-2">Let's get in touch</h1>
                <p className="is-size-4">
                  Leave your contact details here, and I'll get back to you as soon as I can:
                </p>
              </div>
              <div className="section">
            
                <button className="button is-success is-rounded is-outlined is-large">
                  Submit&nbsp;
                  <span className="icon is-small">
                    <i className="fa fa-arrow-right" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        */}
        <div className="hero is-white">
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
          <div className="footer is-dark">
            <div className="content has-text-centered has-text-white">
              <p>
                Peter East Software Consultancy Limited is a registered company
                in the UK, registration number: 12138329
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
