import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWraper">
        {/* suportWraper is a id given to those which are used as a container */}
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        {/* suportWraper is a id given to those which are used as a container */}
        <div className="col-6 row p-5">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg.  How do I activate F&O" /><br/>
          <ol className="ml-5" style={{lineHeight:"3"}}>
          <a href="">Track account opening</a>
          <a href="" style={{marginLeft:"45px"}}>segment activation</a>
         <a href="" style={{marginLeft:"45px"}}>Intraday margins</a>
          <a href="" style={{marginLeft:"45px"}}>Kite user manual</a>
          </ol>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="" style={{lineHeight:"50px"}} >Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="" >Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
