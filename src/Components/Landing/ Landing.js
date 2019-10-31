import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Landing extends Component {

    render(){
        return(
            <div>
                Login
                <Link to='/dashboard/tracker'><button>Login</button></Link>
                <Link to='/patient-registration'><button>Patient Registration</button></Link>
            </div>
        )
    }
}

export default Landing;