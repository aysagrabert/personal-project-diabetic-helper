import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Landing extends Component {

    render(){
        return(
            <div className='login-container'>
                Login
                <section className='input-container'>
                    <input/>
                    <input/>
                </section>

                <article>
                    <Link to='/dashboard/tracker'><button>Login</button></Link>
                    <Link to='/patient-registration'><button>Register</button></Link>
                </article>
            </div>
        )
    }
}

export default Landing;