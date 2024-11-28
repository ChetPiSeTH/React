import React from 'react'
import '../Assets/css/style.css'
import '../Assets/css/bootstrap.min.css'
import p_1 from '../Assets/images/product-1.png'
import cross from '../Assets/images/cross.svg'
import p_2 from '../Assets/images/product-2.png'
import p_3 from '../Assets/images/product-3.png'

function Shop() {
  return (
    <div>
    {/* <!-- Start Hero Section --> */}
			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>Shop</h1>
							</div>
						</div>
						<div class="col-lg-7">
							
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}

		<div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">

		      {/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_1} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_2} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}


					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 1 --> */}
						
					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_1} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_2} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-4 col-lg-3 mb-5">
						<a class="product-item" href="#">
							<img src={p_3} class="img-fluid product-thumbnail"/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>
							<span class="icon-cross">
								<img src={cross} class="img-fluid"/>
							</span>
						</a>
					</div>
					{/* <!-- End Column 4 --> */}
		      </div>
		    </div>
		  </div>
    </div>
  )
}

export default Shop