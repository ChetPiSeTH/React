import React from 'react'
import cart_icon from '../Assets/images/cart.svg'
import user_icon from '../Assets/images/user.svg'

function Navbar() {
  return (
    <div>
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
			<div className="container">
				<a className="navbar-brand" href="/">Modern Interior</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsFurni">
					<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
						<li className="nav-item active">
							<a className="nav-link" href="/">Home</a>
						</li>
						<li><a className="nav-link" href="/shop">Shop</a></li>
						<li><a className="nav-link" href="/about">About us</a></li>
						<li><a className="nav-link" href="/service">Services</a></li>
						<li><a className="nav-link" href="/blog">Blog</a></li>
						<li><a className="nav-link" href="/contact">Contact us</a></li>
					</ul>
					<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link" href="#"><img src={user_icon}/></a></li>
						<li><a className="nav-link" href="/cart"><img src={cart_icon}/></a></li>
					</ul>
				</div>
			</div>
		</nav>
    </div>
  )
}

export default Navbar