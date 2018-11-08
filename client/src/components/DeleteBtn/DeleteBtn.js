import React from "react";
import "./DeleteBtn.css";
import {Button } from 'react-bootstrap';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
  <Button>Delete</Button>
  </span>
);

export default DeleteBtn;
