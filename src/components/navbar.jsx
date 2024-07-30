import React, { Component } from 'react';



class Navbar extends Component {
    state = {}
    render() {
        return <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-md">
                <a className="navbar-brand" href="/">Navbar</a>
            </div>
        </nav>
    }
}

export default Navbar;
