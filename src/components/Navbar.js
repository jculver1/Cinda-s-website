import React from 'react'

const Navbar = () => {
    return(
        <div class='row'>
            <nav class="navbar navbar-custom navbar-expand-lg navbar navbar-light">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services & Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Order Items</a>
                    </li>
                    <li class="nav-item d-flex align-items-center">
                        <i class="fas fa-shopping-cart"></i>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


