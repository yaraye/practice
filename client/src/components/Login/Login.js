import React, {Component} from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import 'whatwg-fetch';

class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoding: true,
            token: '',
            signUpError:'',
            signInError:'',
            signInName:'',
            signInPassword:'',
            signUpName:'',
            signUpPassword:''
        };
    
    this.onTextboxChangeSignInName = this.onTextboxChangeSignInName.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpName = this.onTextboxChangeSignUpName.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this)
    }

    onTextboxChangeSignInName(event) {
        this.setState({
          signInName: event.target.value,
        });
      }
      onTextboxChangeSignInPassword(event) {
        this.setState({
          signInPassword: event.target.value,
        });
      }
      onTextboxChangeSignUpName(event) {
        this.setState({
          signUpName: event.target.value,
        });
      }
      onTextboxChangeSignUpPassword(event) {
        this.setState({
          signUpPassword: event.target.value,
        });
      }


      componentDidMount(){
          this.setState({
              isLoading:false
          });
      }
      onSignUp() {
        // Grab state
        const {
          signUpName,
          signUpPassword,
        } = this.state;this.setState({
            isLoading: true,
        });
    
    // Post request to backend
    fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name: signUpName,
          password: signUpPassword,
        }),
      }).then(res => res.json())
        .then(json => {
          console.log('json', json);
          if (json.success) {
            this.setState({
              signUpError: json.message,
              isLoading: false,
              signUpName: '',
              signUpPassword: '',
            });
          } else {
            this.setState({
              signUpError: json.message,
              isLoading: false,
            });
          }
        });
    }
    render(){
        const{
            // isLoding,
            token,
            signUpError,
            signInError,
            signInName,
            signInPassword,
            signUpName,
            signUpPassword
        }=this.state;

        // if(isLoding){
        //     return (<div><p>Loading..</p></div>)
        // }
        if(!token){
            return(
                <div>
                    <div>
                    {
                        (signInError)?(<p>{signInError}</p>):
                        (null)
                    }
                    <Jumbotron className="container">
                            <h1>Sign In</h1>
                    
                        <form className="form">
                                
                            <h3>User Name</h3>
                            <input onChange={this.onTextboxChangeSignInName} type="userName" placeholder="User name" value={signInName}/>
                            <h3>Password</h3>
                            <input onChange={this.onTextboxChangeSignInPassword} type="password" placeholder="Password" value={signInPassword}/>
                            <br></br><br></br>
                            <Button onClick={this.handleSubmit} bsStyle="primary">Sign In</Button>
                        </form>
                    </Jumbotron>
                    </div>

                    <br></br><br></br><br></br>
                    {
                        <div>
                        {
                            (signUpError)?(<p>{signUpError}</p>):
                            (null)
                        }
                        <Jumbotron className="container">
                                <h1>Sign Up</h1>
                        
                            <form className="form">
                                    
                                <h3>User Name</h3>
                                <input onChange={this.onTextboxChangeSignUpName} type="userName" placeholder="User name" value={signUpName}/>
                                <h3>Password</h3>
                                <input value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword} type="password" placeholder="Password" />
                                <br></br><br></br>
                                <Button onClick={this.onSignUp} bsStyle="primary">Sign Up</Button>
                            </form>
                        </Jumbotron>
                        </div>
                    }
                </div>
            );
        }
        return(
            <div>
                <p>Signed In</p>
            </div>
        )
    }
}

export default Login;


// class Login extends Component {

//     state = {
//         username: "",
//         password: ""
//     };

//     handleOnChange = (event) =>
//     {

//         const {name, value}  = event.target;

//         this.setState({
//             [name] :value
//         })
//     }

//     handleSubmit = (event) =>
//     {
//         event.preventDefault();
//         //this would go to server using ajax
//         alert(this.state.username);
//         alert(this.state.password);

//     };


//     render(){
//         return(
//             <Jumbotron className="container">
//             <h1>Login Form</h1>

//             <form className="form">
            
//                 <h3>User Name</h3><input onChange={this.handleOnChange} name="username" placeholder="User name"/>
//                 <h3>Password</h3><input onChange={this.handleOnChange} name="password" placeholder="Password"/>
//                <br></br><br></br>
//                 <Button onClick={this.handleSubmit} bsStyle="primary">Submit</Button>

//             </form>
//             </Jumbotron>
//         );

//     }


// }
