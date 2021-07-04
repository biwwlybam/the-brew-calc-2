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
            <p className="aboutParagraph">Made for brewers, by brewers. Hopefully all you need is an extremely accurate ABV calculator because that's all we've got (for now)!</p>
          </div>
      </body>
    </div>
  )
}