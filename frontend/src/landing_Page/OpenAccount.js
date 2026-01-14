import React from "react";
function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      {" "}
      {/*i have created some padding with the help of the p tag*/}
      <div className="row text-center">
        {/* applies to all the components in the home page*/}
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
