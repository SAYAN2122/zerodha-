import React from "react";
function Hero() {
  return (
    <div
      className="container text-center mt-5 border-bottom mb-5"
      style={{ color: "#424242" }}
    >
      {" "}
      {/*boder-bottom property add a line in the final output */}
      <h1 className="" style={{ fontSize: "1.75rem", margin: ".67em 0" }}>
        Zerodha Products
      </h1>
      <p>Sleek, modern, and intuitive trading platforms</p>
      <p className="mt-3">
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings →
        </a>{" "}
      </p>
    </div>
  );
}

export default Hero;
