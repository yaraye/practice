
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row} from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
// import Footer from "../../components/Footer";
import { List, ListItem } from "../List";



class AccountDetail extends Component {
  state = {
    members: [],
    member:"",
    payment: "",
    reason:"",
    description: "",
    id:""
  };


  componentDidMount() {
    this.loadMembers();
  }

  loadMembers = () => {
    API.getMembers()
      .then(res =>
        this.setState({ members: res.data, member: "", payment: "",reason: "", description: "" })
      )
      .catch(err => console.log(err));
  };
  render(){
  return(
    <Row>
  <Col size=" sm-12">
  <Jumbotron>
    <h1>Account Detail of Members</h1>
  </Jumbotron>
  
  {this.state.members.length ? (
    <List>
      {this.state.members.map(member => (
        <ListItem key={member._id}>
        <Row  className='account'>
        <Col size="md-3 sm-12">
            <strong>
              {member.member}
            </strong>
         </Col>
         <Col size="md-3 sm-12">
            <strong>
              {member.payment}
            </strong>
         </Col>
         <Col size="md-3 sm-12">
            <strong>
              {member.reason}
            </strong>
         </Col>
         <Col size="md-3 sm-12">
            <strong>
              {member.description}
            </strong>
         </Col>
        </Row>
         
        </ListItem>
      ))}
    </List>
  ) : (
    <h3>No Member(s) to Display</h3>
  )}
</Col>
  </Row>

  )
  }

  }  
  // render() {
  //   return (
  //     <div>
  //     <Container fluid>
  //       <Row>
  //         <Col size="md-12">
  //           <Jumbotron>
  //             <h1>
  //               Account Detail of Members
  //             </h1>
  //           </Jumbotron>
  //             <h3 className="account">
  //               <span>{this.props.account}</span>
  //             </h3>

  //         </Col>
  //       </Row>

  //       <Row>
  //         <br></br><br></br>
  //         <Col size="md-2">
  //           <Link to="/">← Back to Membership Form</Link>
  //         </Col>
  //       </Row>
  //     </Container>
  //     <Footer/>
  //     </div>
  //   );
  // }


export default AccountDetail;