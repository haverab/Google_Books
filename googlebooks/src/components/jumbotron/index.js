  
import React from "react";

function Jumbotron({ children }) {
  return (

    <div
      style={{ height: 200, clear: "both", textAlign: "center" }}
      className="jumbotron">
      
      <h3>Google Books Search</h3>
      <h6>Search And Save All Of Your Favorite Books</h6>

    </div>

  );
}

export default Jumbotron;