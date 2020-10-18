import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
        <footer id="footerarea" className="clearfix">
                    <div id="keywords">
                        <a href="/">Assinar newsletter</a>
                    </div>
            <div id="site-generator">
            <p className="social-links"><a href="/">Facebook</a> | <a href="/">Instagram</a> | <a href="/">Youtube</a></p>
                <div className="container">
                    <div className="copyright">Copyright &copy; 2020 <a href="/" title="Morro de São Paulo" ><span>Morro de São Paulo</span></a></div>
                    <div className="footer-right">Default footer text</div>
                </div>
            </div>
            <div className="back-to-top"><a href="#branding">Inicio</a></div>
        </footer>
    )
}

export default Footer