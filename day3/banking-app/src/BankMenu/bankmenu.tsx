import React from "react";
import {TabMenu} from "primereact/tabmenu";
import {Button} from "primereact/button";
import {HashRouter,Switch,Route} from "react-router-dom";

import "./bankmenu.css"
export class BankMenu extends React.Component<any, any>{

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            activeIndex: 2
        }
    }

    render() {
        return(
           <HashRouter>
           <div className="tab-menu">
               <nav className="navbar navbar-expand-lg navbar-dark bg-light ">

            <TabMenu model={this.props.items} activeIndex={this.state.activeIndex}
                     onTabChange={(e) => this.setState({ activeIndex: e.index })} />

               </nav>
                   </div>
               <Switch>
               <Route path="/Home" component={Home}/>
               <Route path="/Admin" component={Admin}/>
               <Route path="/Accounts" component={Accounts}/>
               <Route path="/AboutUS" component={AboutUS}/>
               <Route path="/FAQ" component={FAQ}/>
               <Route path="/Help" component={Help}/>
           </Switch>
           </HashRouter>
        );
    }
}
