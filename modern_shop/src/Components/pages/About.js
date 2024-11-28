import React from 'react'
import '../Assets/css/style.css'
import '../Assets/css/bootstrap.min.css'
import couch from '../Assets/images/couch.png'
import truck from '../Assets/images/truck.svg'
import bag from '../Assets/images/bag.svg'
import support from '../Assets/images/support.svg'
import return_icon from '../Assets/images/return.svg'
import why from '../Assets/images/why-choose-us-img.jpg'
import person_1 from '../Assets/images/person_1.jpg'
import person_2 from '../Assets/images/person_2.jpg'
import person_3 from '../Assets/images/person_3.jpg'
import person_4 from '../Assets/images/person_4.jpg'




function About() {
  return (
    <div>
      {/* <!-- Start Hero Section --> */}
			<div className="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>About Us</h1>
								<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="hero-img-wrap">
								<img src={couch} class="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/* <!-- End Hero Section --> */}

		{/* <!-- Start Why Choose Us Section --> */}
		<div class="why-choose-section">
			<div class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-6">
						<h2 class="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
						<div class="row my-5">
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={truck} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={bag} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={support} alt="Image" class="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={return_icon} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="img-wrap">
							<img src={why} alt="Image" class="img-fluid"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End Why Choose Us Section --> */}

		{/* <!-- Start Team Section --> */}
		<div class="untree_co-section">
			<div class="container">
				<div class="row mb-5">
					<div class="col-lg-5 mx-auto text-center">
						<h2 class="section-title">Our Team</h2>
					</div>
				</div>
				<div class="row">
					{/* <!-- Start Column 1 --> */}
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_1} class="img-fluid mb-5"/>
						<h3 clas><a href="#"><span class="">Lawson</span> Arnold</a></h3>
            <span class="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
					</div> 
					{/* <!-- End Column 1 --> */}

					{/* <!-- Start Column 2 --> */}
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_2} class="img-fluid mb-5"/>
						<h3 clas><a href="#"><span class="">Jeremy</span> Walker</a></h3>
            <span class="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
					</div> 
					{/* <!-- End Column 2 --> */}

					{/* <!-- Start Column 3 --> */}
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_3} class="img-fluid mb-5"/>
						<h3 clas><a href="#"><span class="">Patrik</span> White</a></h3>
            <span class="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
					</div> 
					{/* <!-- End Column 3 --> */}

					{/* <!-- Start Column 4 --> */}
					<div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
						<img src={person_4} class="img-fluid mb-5"/>

						<h3 clas><a href="#"><span class="">Kathryn</span> Ryan</a></h3>
            <span class="d-block position mb-4">CEO, Founder, Atty.</span>
            <p>Separated they live in.
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <p class="mb-0"><a href="#" class="more dark">Learn More <span class="icon-arrow_forward"></span></a></p>
					</div> 
					{/* <!-- End Column 4 --> */}
				</div>
			</div>
		</div>
		{/* <!-- End Team Section --> */}
  </div>
  )
}

export default About