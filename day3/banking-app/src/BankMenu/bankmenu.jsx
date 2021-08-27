import React from "react";
import {TabMenu} from "primereact/tabmenu";
import {Button} from "primereact/button";
import {HashRouter,Switch,Route} from "react-router-dom";

import "./bankmenu.css"
import {CreditCards} from "../CreditCards/creditcards";
import {Savings} from "../Savings/savings";
import {Checking} from "../Checking/checking";
export class BankMenu extends React.Component{

    constructor(props, context) {
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
                    <Route path="/CreditCards" component={CreditCards}/>
                    <Route path="/Savings" component={Savings}/>
                    <Route path="/Checking" component={Checking}/>

                </Switch>
            </HashRouter>
        );
    }
}

