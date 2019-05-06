// REACT 15 syntax
import React, { Component } from 'react'

export default class FormContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tratarCambios = this.tratarCambios.bind(this);
    }

    handleSubmit(event) {
        if (this.state.firstName === "" || this.state.lastName === "") {
            alert('Please fill the form');
            event.preventDefault();
        } else {
            // FETCH -> Post 
            event.preventDefault();
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'post',
                body: JSON.stringify(this.state)
            })
                .then(response => response.json())
                .then(data => {alert(`WCS say :  
                
                
                ${JSON.stringify(data)}`)

                this.setState({
                    lastName:"",
                    firstName:""
                });
            
            
            });
        }
    }

    tratarCambios(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        // https://reactjs.org/docs/forms.html
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="firstName"
                        onChange={this.tratarCambios} 
                        value={this.state.firstName}/>
                    <input type="text" name="lastName" onChange={this.tratarCambios} value={this.state.lastName} />
                    <a href="http://google.com" >Google</a>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
