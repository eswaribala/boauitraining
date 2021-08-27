import logo from './logo.svg';
import './App.css';
import React from "react";
import BankLogo from './Logo/logo'
//convert to stateful component
class App extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state={
            currentTime:new Date()
        }
    }

    tickHandler=()=>{
        //updating the state
        this.setState({
            currentTime:new Date()
        })
    }


    componentDidMount() {
        //super.componentDidMount();
        console.log("Component ready.....");
        setInterval(this.tickHandler,1000);
    }

    render() {
      return(
        <div>
           <header className="App-header">
           <BankLogo/>
               <h4 className="multicolortext">Bank of America</h4>
           <h6>{this.state.currentTime.toLocaleTimeString()}</h6>
           </header>
        </div>
      )
    }
}

export default App;
