import React from 'react'
import NavbarDemo from '../components/NavbarDemo'

const Layout = (props) => {
    return (
        <div>
            <NavbarDemo />
            {props.children}
        </div>
    )
}

export default Layout
