import React from "react";
import {Grid, TextField} from "@material-ui/core";
import axios from "axios";
import Fab from "@material-ui/core/Fab";
import PersonIcon from '@material-ui/icons/Person'
import  './creditcards.css'
export class CreditCards extends React.Component{


    constructor(props, context) {
        super(props, context);
        this.state={
            ccNo:0,
            cardHolderName:"",
            expiryDate:"",
            limit:0,
            type:"",
            errors: {},
            formSubmitted: false,
        }
    }

    handleChange = input => e => {
        console.log(e.target.value);
        this.setState({ [input]: e.target.value });
    };
    validateForm() {
        const { ccNo,cardHolderName,expiryDate,limit,type} = this.state;
        let errors = {};
        let formIsValid = true;
        if (!ccNo) {
            formIsValid = false;
            errors["ccNoErr"] = "*Please enter your card number.";
        }
        if (typeof ccNo !== "undefined") {
            if (!(ccNo.match(/^[0-9]{12}$/))) {
                formIsValid = false;
                errors["ccNoErr"] = "*Please enter 12 digit number only.";
            }
        }

        if (!cardHolderName) {
            formIsValid = false;
            errors["cardHolderNameErr"] = "*Please enter Card Holder Name.";
        }
        if (typeof cardHolderName !== "undefined") {
            if (!(cardHolderName.match(/^[a-zA-Z ]*$/))) {
                formIsValid = false;
                errors["cardHolderNameErr"] = "*Please enter alphabet characters only.";
            }
        }


        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    submit=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.setState({
            formSubmitted: true
        });
/*
        if(this.validateForm()) {
            console.log(this.state);
            axios.post('',
                this.state)
                .then(res => {
                    console.log(res.data)
                    //window.location.href="/Driver";
                    this.setState({
                        formSubmitted: false
                    });
                });


            this.setState({
                ccNo:"",
               cardHolderName:"",
                expiryDate:"",
                limit:"",
                type:"",
                errors: {},
                formSubmitted: false
            });
            console.log(this.state);
        }
*/
    }

    render() {
        const { ccNoErr, cardHolderNameErr } = this.state
        return(
            <form  onSubmit={this.submit} style={{ backgroundColor: '#F0F0F0' }} className="registration border border-primary shadow-none p-3 mb-5 bg-light rounded w-275">
                <fieldset>
                    <legend>Credit Card Information</legend>
                <Grid>
                    <Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField

                                id="ccNo"
                                label="Credit Card Number"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange("ccNo")}
                                className={ccNoErr ? ' showError' : ''}
                            />
                            {ccNoErr &&
                            <div style={{ color: "red", paddingBottom: 10 }}>
                                {ccNoErr}</div>
                            }

                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField

                                id="cardHolderName"
                                label="Card Holder Name"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange("cardHolderName")}
                                className={cardHolderNameErr ? ' showError' : ''}
                            />
                            {cardHolderNameErr &&
                            <div style={{ color: "red", paddingBottom: 10 }}>
                                {cardHolderNameErr}</div>
                            }

                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField

                                id="expiryDate"
                                label="Expiry Date"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange("expiryDate")}

                            />


                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField

                                id="limit"
                                label="Limit"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange("limit")}

                            />


                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField

                                id="type"
                                label="Type"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange("type")}

                            />


                        </Grid>
                    </Grid>

                </Grid>
                    <div className="d-flex justify-content-center mt-5">
                        <Fab color="primary" aria-label="add"  type="submit" style={{marginRight:50}} >
                            <PersonIcon />
                        </Fab>

                        <Fab color="secondary" aria-label="add"  type="reset" >
                            <PersonIcon />
                        </Fab>
                    </div>
                </fieldset>
            </form>
        )
    }
}
