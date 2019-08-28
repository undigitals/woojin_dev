import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCount, decCount } from "../redux/actions";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
   
   
    this.onInc = this.onInc.bind(this);
    this.onDec = this.onDec.bind(this);
    this.state = {
      comment: []
    };
  }

 
  onDec(e) {
    this.props.onDec("DECREAMENT");
  }
  onInc() {
    // store.dispatch({type: 'INCREAMENT'})
    this.props.onInc("INCREAMENT");
  }
 
  render() {
    return (
      <div>
        <header >
         
          <a>Learn React</a>
          <div>
            <h1>Products</h1>
          </div>
          <div>
            <h2> Redux</h2>
            
            <button onClick={this.onInc}>+</button>
            <button onClick={this.onDec}>-</button>
            <p>Count {this.props.cnt}</p>
            {console.log(this.props.cnt)}
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cnt: state.itemQuantity.quantity,
  };
};

const mapActionsToProp = (dispatch, props) => {
    return bindActionCreators(
{
    onInc: updateCount,
    onDec: decCount,
}, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionsToProp
)(App);
