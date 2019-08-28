// import { Button, Checkbox, Form, Input, Message, Row } from 'antd';
// import { Eye, Mail, Triangle } from 'react-feather';
// import Link from 'next/link';
// import Router from 'next/router';
// import styled from 'styled-components';
// import {connect} from 'react-redux'
// import actions from '../redux/actions'
// import initialize from '../utils/initialize'


// const FormItem = Form.Item;

// const Content = styled.div`
//   max-width: 400px;
//   z-index: 2;
//   min-width: 300px;
// `;

// const Signin = ({ form }) => (
//   <Row
//     type="flex"
//     align="middle"
//     justify="center"
//     className="px-3 bg-white mh-page"
//     style={{ minHeight: '100vh' }}
//   >
//     <Content>
//       <div className="text-center mb-5">
//         <Link href="/signin">
//           <a className="brand mr-0">
//             <Triangle size={32} strokeWidth={1} />
//           </a>
//         </Link>
//         <h5 className="mb-0 mt-3">Sign in</h5>

//         <p className="text-muted">get started with our service</p>
//       </div>

//       <Form
//         layout="vertical"
//         onSubmit={e => {
//           e.preventDefault();
//           form.validateFields((err, values) => {
//             if (!err) {
//               Message.success(
//                 'Sign complete. Taking you to your dashboard!'
//               ).then(() => Router.push('/'));
//             }
//           });
//         }}
//       >
//         <FormItem label="Email">
//           {form.getFieldDecorator('email', {
//             rules: [
//               {
//                 type: 'email',
//                 message: 'The input is not valid E-mail!'
//               },
//               {
//                 required: true,
//                 message: 'Please input your E-mail!'
//               }
//             ]
//           })(
//             <Input
//               prefix={
//                 <Mail
//                   size={16}
//                   strokeWidth={1}
//                   style={{ color: 'rgba(0,0,0,.25)' }}
//                 />
//               }
//               type="email"
//               placeholder="Email"
//             />
//           )}
//         </FormItem>

//         <FormItem label="Password">
//           {form.getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }]
//           })(
//             <Input
//               prefix={
//                 <Eye
//                   size={16}
//                   strokeWidth={1}
//                   style={{ color: 'rgba(0,0,0,.25)' }}
//                 />
//               }
//               type="password"
//               placeholder="Password"
//             />
//           )}
//         </FormItem>

//         <FormItem>
//           {form.getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true
//           })(<Checkbox>Remember me</Checkbox>)}
//           <Link href="/forgot">
//             <a className="text-xs-right">
//               <small>Forgot password</small>
//             </a>
//           </Link>
//           <Button type="primary" htmlType="submit" block className="mt-3">
//             Log in
//           </Button>
//         </FormItem>

//         <div className="text-center">
//           <small className="text-muted">
//             <span>Don't have an account yet?</span>{' '}
//             <Link href="/signup">
//               <a>&nbsp;Create one now!</a>
//             </Link>
//           </small>
//         </div>
//       </Form>
//     </Content>
//   </Row>
// );

// export default Form.create()(Signin);

// // libraries


import React, { Component } from "react";
// import PropTypes from "prop-types";
import Router from 'next/router';
import { connect } from "react-redux";
import styled from "styled-components";
import { loginUser } from "../redux/actions/auth.actions";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      Router.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      Router.push('/');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div  style={{ height: "100vh" }}>
          <div>
            <h1 >Sign in</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div>
                <input
                  type="password"
                  
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                {errors.password && (
                  <div >{errors.password}</div>
                )}
              </div>
              <button type="submit">
                Sign In
              </button>
            </form>
            <div className="signup">
             
  
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
