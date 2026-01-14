import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row mt-5 text-center boder-top">
        <div className="col-8 p-4 ">
          <a href=" " style={{ textDecoration: "none" }}>
            {" "}
            <h4> Brokerage Calculator </h4>{" "}
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5",fontSize:"12px" }}
            className="text-muted "
          >
            <li>
              Call & Trade and RMS auto—squareoff: Additional charges of + GST
              per order.
            </li>
            <li>Digital contract notes will be sent via e—mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              per contract note. Courier charges apply.
            </li>

            <li>
              For NRI account (non-PIS) 0.5% or per executed order for equity
              (whichever is lower).
            </li>

            <li>
              For NRI account ("IS) 0.5% or per executed order for equity
              (whichever is lower) .
            </li>

            <li>
              If the account is in debit balance, any order placed will be
              charged «40 per executed order instead of per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 mt-5">
          <a href=" " style={{ textDecoration: "none" }}>
            <h4> List of charges </h4>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
