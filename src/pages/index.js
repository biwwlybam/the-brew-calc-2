import React from "react";
import "../styles/index.css";
import { Helmet } from "react-helmet"

import { Abv } from "../components/Abv";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="App">
      <Helmet>
        <html lang='en' />
        <meta charSet="utf-8" name='description' content='The Brew Calc' />
        <meta name="viewport" content="width=device-width, initial-scale = 1.0, 
maximum-scale=1.0, user-scalable=no" />
        <title>The Brew Calc</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <body>
        <div className="calculatorContainer">
          <div className="abvCalc">
            <Abv />
          </div>
        </div>
      </body>
    </div>   
  )
}