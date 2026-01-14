import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3">
            <div>
              <a href={tryDemo} style={{ textDecoration: "none"}}>
                Try Demo{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              <a href={learnMore} style={{ textDecoration: "none",margin:"55px" }}>
                Learn More{" "} {/* the learn more and try demo parts are interconnected in the output as when one changes other also change and vice versa try to learn this again from youtube or ask it from discord*/}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
              </div>
            <a href={googlePLay}>
              <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;
