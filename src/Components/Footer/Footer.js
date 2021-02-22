import React from 'react'
import { withRouter } from 'react-router-dom'

const Footer = () => {

    const styles = {
        footerStyles: {
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
        },
    }

    return (
        <div>
            <nav className= "navbar fixed-bottom navbar-light bg-dark" style = {styles.footerStyles}>
                <p className="justify-content-center">&#169; copyright 2021</p>
            </nav>
        </div>
    )
}

export default Footer
