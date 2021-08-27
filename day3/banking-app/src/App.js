import logo from './logo.svg';
import './App.css';
import React from "react";
import BankLogo from './Logo/logo'
import {BankMenu} from "./BankMenu/bankmenu";
//convert to stateful component
class App extends React.Component{

    constructor(props, context) {
        super(props, context);
        this.state={
            currentTime:new Date(),
            menu:[{
                label:'CreditCards',icon:'pi pi-fw pi-credit-card',command:()=>{
                    window.location.hash="/CreditCards"
                }
            },
                {
                    label:'Savings',icon:'',command:()=>{
            window.location.hash="/Savings"
        }
                },
                {
                    label:'Checking',icon:'',command:()=>{
                        window.location.hash="/Bankmenu"
                    }
                }]

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
           <section>

               <BankMenu items={this.state.menu}/>
           </section>
        </div>
      )
    }
}

export default App;
