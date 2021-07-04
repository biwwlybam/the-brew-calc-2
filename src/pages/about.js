import React from "react";
import "../styles/index.css";
import { Helmet } from "react-helmet"

import NavBar from "../components/NavBar/NavBar";

export default function About() {
  return (
    <div className="App">
      <Helmet>
        <html lang='en' />
        <meta charSet="utf-8" name='description' content='The Brew Calc' />
        <title>The Brew Calc</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <body>
          <div>
            <h1>About</h1>
            <p className="aboutParagraph">Premium content becomes viewable when Nick gets Snapchat again.</p>
          </div>
      </body>
    </div>
  )
}