import React from "react";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import Features from "./Components/Features";
import FunFacts from "./Components/FunFacts";
import WhyChoose from "./Components/WhyChoose";
import Schedules from "./Components/Schedules";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
function App() {
  return (
    <div>
      {/* Preloader */}
      {/* <div className="preloader">
        <div className="loader">
          <div className="loader-outter" />
          <div className="loader-inner" />
          <div className="indicator">
            <svg width="16px" height="12px">
              <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6" />
              <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6" />
            </svg>
          </div>
        </div>
      </div> */}
     <Header/>
      {/* Slider Area */}
      <Slider/>
      {/*/ End Slider Area */}
      {/* Start Schedule Area */}
      <Schedules/>
      {/*/End Start schedule Area */}
      {/* Start Feautes */}
      <Features/>
      {/*/ End Feautes */}
      {/* Start Fun-facts */}
      <FunFacts/>
      {/*/ End Fun-facts */}
      {/* Start Why choose */}
      <WhyChoose/>
      {/*/ End Why choose */}
      {/* Start Call to action */}
      <section
        className="call-action overlay"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call @ 1234 56789</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque porttitor dictum turpis nec gravida.
                </p>
                <div className="button">
                  <a href="#" className="btn">
                    Contact Now
                  </a>
                  <a href="#" className="btn second">
                    Learn More
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End Call to action */}
      {/* Start portfolio */}
      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                <div className="single-pf">
                  <img src="img/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="img/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="img/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="img/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="img/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="img/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="img/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="img/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/ End portfolio */}
      {/* Start service */}
      <Services/>
      {/*/ End service */}
      {/* Pricing Table */}
      <Pricing/>
      {/*/ End Pricing Table */}
      {/* Start Blog Area */}
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Keep up with Our Most Recent Medical News.</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="img/blog1.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">22 Aug, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We have annnocuced our new product.
                      </a>
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="img/blog2.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">15 Jul, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        Top five way for solving teeth problems.
                      </a>
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Single Blog */}
              <div className="single-news">
                <div className="news-head">
                  <img src="img/blog3.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">05 Jan, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We provide highly business soliutions.
                      </a>
                    </h2>
                    <p className="text">
                      Lorem ipsum dolor a sit ameti, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt sed do incididunt
                      sed.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Area */}
      {/* Start clients */}
      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="owl-carousel clients-slider">
                <div className="single-clients">
                  <img src="img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client4.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client5.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="img/client4.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/Ens clients */}
      {/* Start Appointment */}
      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex={0}
                      >
                        <span className="current">Department</span>
                        <ul className="list">
                          <li data-value={1} className="option selected ">
                            Department
                          </li>
                          <li data-value={2} className="option">
                            Cardiac Clinic
                          </li>
                          <li data-value={3} className="option">
                            Neurology
                          </li>
                          <li data-value={4} className="option">
                            Dentistry
                          </li>
                          <li data-value={5} className="option">
                            Gastroenterology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div
                        className="nice-select form-control wide"
                        tabIndex={0}
                      >
                        <span className="current">Doctor</span>
                        <ul className="list">
                          <li data-value={1} className="option selected ">
                            Doctor
                          </li>
                          <li data-value={2} className="option">
                            Dr. Akther Hossain
                          </li>
                          <li data-value={3} className="option">
                            Dr. Dery Alex
                          </li>
                          <li data-value={4} className="option">
                            Dr. Jovis Karon
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Date" id="datepicker" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Your Message Here....."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Book An Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <p>( We will be confirm by an Text Message )</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="appointment-image">
                <img src="img/contact-img.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Appointment */}
      {/* Start Newsletter Area */}
      <section className="newsletter section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6  col-12">
              {/* Start Newsletter Form */}
              <div className="subscribe-text ">
                <h6>Sign up for newsletter</h6>
                <p className>
                  Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,
                  <br /> homero alterum.
                </p>
              </div>
              {/* End Newsletter Form */}
            </div>
            <div className="col-lg-6  col-12">
              {/* Start Newsletter Form */}
              <div className="subscribe-form ">
                <form
                  action="mail/mail.php"
                  method="get"
                  target="_blank"
                  className="newsletter-inner"
                >
                  <input
                    name="EMAIL"
                    placeholder="Your email address"
                    className="common-input"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your email address'"
                    required
                    type="email"
                  />
                  <button className="btn">Subscribe</button>
                </form>
              </div>
              {/* End Newsletter Form */}
            </div>
          </div>
        </div>
      </section>
      {/* /End Newsletter Area */}
      {/* Footer Area */}
      <footer id="footer" className="footer ">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit am consectetur adipisicing elit do
                    eiusmod tempor incididunt ut labore dolore magna.
                  </p>
                  {/* Social */}
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-vimeo" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-pinterest" />
                      </a>
                    </li>
                  </ul>
                  {/* End Social */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Our Cases
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Other Links
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Consuling
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Finance
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-caret-right"
                              aria-hidden="true"
                            />
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Open Hours</h2>
                  <p>
                    Lorem ipsum dolor sit ame consectetur adipisicing elit do
                    eiusmod tempor incididunt.
                  </p>
                  <ul className="time-sidual">
                    <li className="day">
                      Monday - Fridayp <span>8.00-20.00</span>
                    </li>
                    <li className="day">
                      Saturday <span>9.00-18.30</span>
                    </li>
                    <li className="day">
                      Monday - Thusday <span>9.00-15.00</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Newsletter</h2>
                  <p>
                    subscribe to our newsletter to get allour news in your
                    inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit,
                  </p>
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    className="newsletter-inner"
                  >
                    <input
                      name="email"
                      placeholder="Email Address"
                      className="common-input"
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Your email address'"
                      required
                      type="email"
                    />
                    <button className="button">
                      <i className="icofont icofont-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Footer Top */}
        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    © Copyright 2018 | All Rights Reserved by{" "}
                    <a href="https://www.wpthemesgrid.com" target="_blank">
                      wpthemesgrid.com
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Copyright */}
      </footer>
      {/*/ End Footer Area */}
    </div>
  );
}

export default App;
