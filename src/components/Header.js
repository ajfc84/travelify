import React from 'react'
import '../css/Header.css'

const Header = () => {
    return (
        <header id="branding" >		
            <div className="container clearfix">
                <div className="hgroup-wrap clearfix">
                    <section className="hgroup-right">
                        <a href="/">login</a>
                    </section>
                    <hgroup id="site-logo" className="clearfix">
                        <h1 id="site-title"><a href="/" title="Morro de São Paulo" rel="home">Morro de São Paulo</a></h1>
                    </hgroup>
                </div>
            </div>
            <div className="nav-destination">
                <form id="destination">
                    <label htmlFor="place">Para</label><select id="place"><option value="morro">Morro de Sao Paulo</option></select>
                    <label htmlFor="from">de</label><input type="date" name="from" id="from" />
                    <label htmlFor="to">ate</label><input type="date" name="to" id="to" />
                    <input type="submit" value="Ir" />
                </form>
            </div>
        </header>
    )
}

export default Header