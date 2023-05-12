import React from "react";

class Form extends React.Component{
    constructor(){
        super()

        this.handleEmail = this.handleEmail.bind(this)

        this.state = {
            emailState: '',
        }
    }

    handleEmail(event){
        this.setState({
            emailState: event.target.value
        });
    }

    render(){
        return(
            <div>
                <select></select>
            <input type="email" placeholder="Email" value={this.state.handleEmail} onChange={this.handleEmail}></input>
            <input type="password" placeholder="Senha"></input>
            <textarea placeholder="Digite algo..."></textarea>
            </div>
        )
    }
}

export default Form;
