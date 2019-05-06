import React, { Component } from 'react'

export default class FormContainer extends Component {
    render() {
        // https://reactjs.org/docs/forms.html
        return (
            <div>
                <form onSubmit={() => {alert('submit')}}>
                    <input type="text" name="firstName" placeholder="firstName" />
                    <input type="text" name="lastName" />
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
