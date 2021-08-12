import React, { useEffect } from 'react'
import NavbarDemo from '../components/NavbarDemo'
import {connect} from 'react-redux'
import { checkAuthenticated,load_user } from '../actions/auth'

const Layout = (props) => {

    useEffect(() => {
        props.checkAuthenticated()
        props.load_user()

    },[])


    return (
        <div>
            <NavbarDemo />
            {props.children}
        </div>
    )
}

export default connect(null, {checkAuthenticated, load_user})(Layout)
