import React from "react";
import AccountDetail from "../../components/AccountDetail.js";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Account = () => (
  <span >
  <AccountDetail account="it will work"/>
  </span>
);
export default Account;

