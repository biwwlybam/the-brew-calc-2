import React from "react";
import "../styles/index.css";
import { Helmet } from "react-helmet"

import NavBar from "../components/NavBar/NavBar";

export default function Faq() {
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
            <h1>FAQ</h1>
              <h2 className="faqQuestion">What does this website do?</h2>
                <p className="faqAnswer">The goal of this website is to provide high quality calculators to inform decisions or results in the brewing process.</p>
              <h2 className="faqQuestion">When will more calculators be available?</h2>
                <p className="faqAnswer">There are more calculator options in development currently, but there's no telling when a new one will actually get commited.</p>
          </div>
      </body>
    </div>
  )
}