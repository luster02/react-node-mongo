import React, { useState } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarToggler,
    MDBCollapse,
} from 'mdbreact'

const NavbarComponent = () => {
    let [isOpen, setisOpen] = useState(false)

    function toggleCollapse() {
        setisOpen(isOpen = !isOpen)
    }

    return (
        <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">Notes App</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>

            </MDBCollapse>
        </MDBNavbar>
    )
}

export default NavbarComponent
