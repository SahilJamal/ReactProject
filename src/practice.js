import React from "react"; 


var Greeting = () => {
  return (
    <React.Fragment>
      <div>
        <p>Hello</p>
        <h1>Hello</h1>
      </div>

      <img src="logo192.png" alt="" />

      <ul>
        <li>sahil</li>
        <li>jamal</li>
      </ul>

    <Person></Person>
    <Message></Message>
  </React.Fragment>
  );
};

var Person = () => {
  return (
    <div>
    <h1>Hello i am sahil</h1>
    <p>This is person tag</p>
    </div>
  );
}

var Message = () => {
  return (
    <div>
      <p>This is message from Messaeg Component</p>
    </div>
  );
}

