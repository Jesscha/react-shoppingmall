import React from 'react';

import './sign-in.styles.scss'
import FormINput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an Account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormINput
                        label="email"
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        required />
                    <FormINput
                        label="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />
                    <div className="buttons">
                        <CustomButton type="submit" >
                            SIGN IN
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSigIn>
                           Google SIGN IN
                        </CustomButton>


                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn