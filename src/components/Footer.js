import React from 'react'
import '../css/Footer.css'
import Goal from './Goal'

const Footer = () => {
    return (
        <footer id="footerarea" className="clearfix">
            <Goal />
            <div id="keywords">
                <a href="/">Assinar newsletter</a>
            </div>
            <div id="site-generator">
            <p className="social-links"><a href="/">Facebook</a> | <a href="/">Instagram</a> | <a href="/">Youtube</a></p>
                <div className="container">
                    <div className="copyright">Copyright &copy; 2020 <a href="/" title="Travelify" ><span>Travelify</span></a></div>
                    <div className="footer-right">Default footer text</div>
                </div>
            </div>
            <div className="back-to-top"><a href="#branding">Inicio</a></div>
        </footer>
    )
}

export default Footer