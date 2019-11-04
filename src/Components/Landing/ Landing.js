import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            <div className='login-container'>
                Login
                <section className='input-container'>

                <input 
                    placeholder='Username'
                    value={this.state.username}
                    name='username'
                    onChange={(e) => this.handleInput(e)}/>

                <input 
                    placeholder='Password'
                    type='password'
                    value={this.state.password}
                    name='password'
                    onChange={(e) => this.handleInput(e)}/>
    
                </section>

                <article>
                    <button onClick={this.handleLogin}>Login</button>

                    <Link to='/patient-registration'><button>Register</button></Link>
                </article>
            </div>
        )
    }
}

//redux

export default Landing;