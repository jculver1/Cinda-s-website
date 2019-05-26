import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import Services from './Services'

const Navbar = () => {
    return(
        <Router>
            <div class='row'>
                <nav class="navbar navbar-custom navbar-expand-lg navbar navbar-light">
                    <a class="navbar-brand" href="#">Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link to="/services/">Services</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Route path ="/" exact component={Home}/>
            <Route path ="/services/" component={Services}/>
        </Router>
    )
}

export default Navbar


