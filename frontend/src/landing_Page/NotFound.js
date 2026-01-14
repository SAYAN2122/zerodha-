import React from "react";
function NotFound() {
  return (
    <div className="container p-5 mb-5">
      {" "}
      {/*i have created some padding with the help of the p tag*/}
      <div className="row text-center">
        {/* applies to all the components in the home page*/}
        <h1>404 Not Found </h1>
        <p>Sorry the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
