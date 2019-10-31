import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class DoctorRegistration extends Component {

    render(){
        return(
            <div>
                DoctorRegistration
                <Link to='/patients'><button>Register</button></Link>
            </div>
        )
    }
}

export default DoctorRegistration;