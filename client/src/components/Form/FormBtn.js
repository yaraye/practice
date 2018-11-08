import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor:'light grey',padding:'15px 32px', textAlign:'center' }} >
    {props.children}
  </button>
);
