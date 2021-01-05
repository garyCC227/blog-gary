import React from "react";
import { Helmet } from "react-helmet";

class Head extends React.Component {
  render() {
    return (
      <div className="head">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | Linchen Chen</title>
        </Helmet>
      </div>
    );
  }
}

export default Head;
