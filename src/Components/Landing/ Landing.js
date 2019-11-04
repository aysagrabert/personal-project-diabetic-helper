import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Landing.css'

//redux
// import {connect} from 'react-redux';
// import {updateUser} from '../redux/reducer';


class Landing extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount(){
    }

    handleLogin = () => {
        axios.post('/auth/login', {username: this.state.username, password: this.state.password}).then(res => {
            this.state = {
                username: '',
                password: ''
            }
            //redux
            // this.props.updateUser(res.data)
            this.props.history.push('/dashboard/tracker')
     
        })
        .catch(err => console.log(err))
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <article className='behind-login'>
                <div className='login-container'>
                     Login
                    <section                                className='input-container'>
                    <div className='username-input'>
                        <style>
                            @import url('https://fonts.googleapis.com/css?family=PT+Serif&display=swap');
                        </style>

                            <p>Username:</p>
                            

                        <input 
                            // placeholder='Username'
                            value={this.state.username}
                            name='username'
                            onChange={(e) => this.handleInput(e)}/>
                    </div>        
                
                <div className='password-input'>

                    <style>
                        @import url('https://fonts.googleapis.com/css?family=PT+Serif&display=swap');
                    </style>

                    <p>Password:</p>

                    <input 
                        // placeholder='Password'
                        type='password'
                        value={this.state.password}
                        name='password'
                        onChange={(e) => this.handleInput(e)}/>
                </div>        
        
                    </section>

                    <article className='login-register'>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=PT+Serif&display=swap');
                    </style>

                        <button onClick={this.handleLogin} className='login-register-button'>Login</button>


                        <Link to='/patient-registration'><button className='login-register-button'>Register</button></Link>
                    </article>
                </div>
            </article>
        )
    }
}

//redux

export default Landing;