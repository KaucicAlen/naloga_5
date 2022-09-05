import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="mainHeader">TEST 5 - Styling</h1>
      <div>
        Style the following react component in this way:
        <ul>
          <li>Set a background colour for this page</li>
          <li>Change the header "TEST 5 - Styling" to be centered</li>
          <li>
            Create a flex grid similar to the image below, it's important to
            avoid double borders between the cells. Create divs and css classes
            as needed
            <img src="/grid.png" alt="grid" />
          </li>
        </ul>
      </div>
      <div className="mainDiv">
        <div>Upper left box</div>
        <div>upper middle box</div>
        <div>upper right box</div>
        <div>bottom left box</div>
        <div>bottom middle box</div>
        <div>bottom right box</div>
      </div>
    </div>
  );
}
