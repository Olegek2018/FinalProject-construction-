import logo from './logo.svg';
import React, { useState, useEffect } from 'react'; //useState - send data to array; useEffect - queries processing, "axios" used here (ajax-queries to send JS>server)
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import 'static';


function App() {

    const [project, setProject] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/test-api/'
        }).then(response => {
            setProject(response.data);
        });
    }, []);

  return (
        // JSX - JavaScript extended for HTML-generation
        <div className="App">

 export const Foo = () => (
  <>
    <div id="loading">
      <div id="loading-center">
        <div id="loading-center-absolute">
          <div className="object" />
          <div className="object" />
          <div className="object" />
          <div className="object" />
          <div className="object" />
          <div className="object" />
          <div className="object" />
          <div className="object" />
          <div className="object" />
          <div className="object" />
        </div>
      </div>
    </div>
    <header>
      <div className="top_nav">
        <div className="container">
          <ul className="list-inline info">
            <li>
              <a href="#">
                <span className="fa fa-phone" /> 1234 - 5678 - 9012
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-envelope" /> support@Construct.com
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-clock-o" /> Mon - Sat 9:00 - 19:00
              </a>
            </li>
          </ul>
          <ul className="list-inline social_icon">
            <li>
              <a href>
                <span className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href>
                <span className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href>
                <span className="fa fa-behance" />
              </a>
            </li>
            <li>
              <a href>
                <span className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href>
                <span className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href>
                <span className="fa fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar bootsnav">
        <div className="top-search">
          <div className="container">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-search" />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-addon close-search">
                <i className="fa fa-times" />
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="attr-nav">
            <ul>
              <li className="search">
                <a href="#">
                  <i className="fa fa-search" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand" href>
              <img className="logo" src="/images/logo.png" alt />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav menu">
              <li>
                <a href>Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact_form">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section id="home" className="home">
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="./images/slider_img.jpg" alt="Construction" />
            <div className="overlay">
              <div className="carousel-caption">
                <h3>We are Certified Engineers</h3>
                <h1>Construction Services</h1>
                <h1 className="second_heading">Creative &amp; Professional</h1>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
                <a className="btn know_btn">know more</a>
                <a className="btn know_btn">view project</a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="static/admin/img/slider_img2.jpg" alt="Construction" />
            <div className="overlay">
              <div className="carousel-caption">
                <h3>We are Certified Engineers</h3>
                <h1>Construction Services</h1>
                <h1 className="second_heading">Creative &amp; Professional</h1>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
                <a className="btn know_btn">know more</a>
                <a className="btn know_btn">view project</a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./images/slider_img3.jpg" alt="Construction" />
            <div className="overlay">
              <div className="carousel-caption">
                <h3>We are Certified Engineers</h3>
                <h1>Construction Services</h1>
                <h1 className="second_heading">Creative &amp; Professional</h1>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
                <a className="btn know_btn">know more</a>
                <a className="btn know_btn">view project</a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-angle-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-angle-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
    <section id="about">
      <div className="container about_bg">
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <div className="about_content">
              <h2>Welcome to Our Company</h2>
              <h3>Aliquam lacus purus, auctor malesuada</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <p>
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur?{" "}
              </p>
              <a className="btn know_btn">know more</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-lg-offset-1">
            <div className="about_banner">
              <img src="images/man.png" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="why_us">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="head_title">
              <h2>WHY CHOOSE US?</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-leaf" />
              <h4>We deliver quality</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-futbol-o" />
              <h4>Always on time</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-group" />
              <h4>We are pasionate</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-line-chart" />
              <h4>Professional Services</h4>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="services">
      <div className="container">
        <h2>OUR SERVICES</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/service_img1.jpg" alt="Our Services" />
              <h3>CONSTRUCTION MANAGEMENT</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <a href="#services" className="btn know_btn">
                know more
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/service_img2.jpg" alt="Our Services" />
              <h3>RENOVATION</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <a href="#services" className="btn know_btn">
                know more
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="images/service_img3.jpg" alt="Our Services" />
              <h3>ARCHITECTURE</h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <a href="#services" className="btn know_btn">
                know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <div className="container portfolio_area text-center">
        <h2>Made with love</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit,
        </p>
        <div id="filters">
          <button className="button is-checked" data-filter="*">
            Show All
          </button>
          <button className="button" data-filter=".buildings">
            Buildings
          </button>
          <button className="button" data-filter=".interior">
            Interior Design
          </button>
          <button className="button" data-filter=".isolation">
            Isolation
          </button>
          <button className="button" data-filter=".plumbing">
            Plumbing
          </button>
        </div>
        <div className="grid">
          <div className="grid-sizer" />
          <div className="grid-item grid-item--width2 grid-item--height2 buildings plumbing interior">
            <img alt src="images/highligh_img.jpg" />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/highligh_img.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search" />
              </a>
              <a href="#">
                <span className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="grid-item buildings interior isolation">
            <img alt src="images/portfolio1.jpg" />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio1.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search" />
              </a>
              <a href="#">
                <span className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="grid-item interior plumbing isolation">
            <img alt src="images/portfolio2.jpg" />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio2.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search" />
              </a>
              <a href="#">
                <span className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="grid-item isolation buildings">
            <img alt src="images/portfolio3.jpg" />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio3.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search" />
              </a>
              <a href="#">
                <span className="fa fa-link" />
              </a>
            </div>
          </div>
          <div className="grid-item plumbing isolation">
            <img alt src="images/portfolio4.jpg" />
            <div className="portfolio_hover_area">
              <a
                className="fancybox"
                href="images/portfolio4.jpg"
                data-fancybox-group="gallery"
                title="Lorem ipsum dolor sit amet"
              >
                <span className="fa fa-search" />
              </a>
              <a href="#">
                <span className="fa fa-link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonial">
      <div className="container text-center testimonial_area">
        <h2>Customer Reviews</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit,
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content text-left">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
              </div>
              <img src="images/testimonial_img1.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
              </div>
              <img src="images/testimonial_img2.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit,
                </p>
              </div>
              <img src="images/testimonial_img1.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact_form">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Do you have any questions?</h2>
            <h2 className="second_heading">Feel free to contact us!</h2>
          </div>
          <form role="form" className="form-inline text-right col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={5}
                id="msg"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn submit_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
    <footer>
      <div className="container footer_top">
        <div className="row">
          <div className="col-lg-4 col-sm-7">
            <div className="footer_item">
              <h4>About Company</h4>
              <img className="logo" src="images/logo.png" alt="Construction" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              </p>
              <ul className="list-inline footer_social_icon">
                <li>
                  <a href>
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-5">
            <div className="footer_item">
              <h4>Explore link</h4>
              <ul className="list-unstyled footer_menu">
                <li>
                  <a href>
                    <span className="fa fa-play" /> Our services
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-play" /> Meet our team
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-play" /> Forum
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-play" /> Help center
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-play" /> Contact Cekas
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-play" /> Privacy Policy
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-play" /> Cekas terms
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-play" /> Site map
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-7">
            <div className="footer_item">
              <h4>Latest post</h4>
              <ul className="list-unstyled post">
                <li>
                  <a href>
                    <span className="date">
                      20 <small>AUG</small>
                    </span>{" "}
                    Luptatum omittantur duo ne mpetus indoctum
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="date">
                      20 <small>AUG</small>
                    </span>{" "}
                    Luptatum omittantur duo ne mpetus indoctum
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="date">
                      20 <small>AUG</small>
                    </span>{" "}
                    Luptatum omittantur duo ne mpetus indoctum
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="date">
                      20 <small>AUG</small>
                    </span>{" "}
                    Luptatum omittantur duo ne mpetus indoctum
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5">
            <div className="footer_item">
              <h4>Contact us</h4>
              <ul className="list-unstyled footer_contact">
                <li>
                  <a href>
                    <span className="fa fa-map-marker" /> 124 New Line, London
                    UK
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-envelope" /> hello@psdfreebies.com
                  </a>
                </li>
                <li>
                  <a href>
                    <span className="fa fa-mobile" />
                    <p>
                      +44 00 00 1234 <br />
                      +44 00 00 1234
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom text-center">
        <p className="wow fadeInRight">
          Made with
          <i className="fa fa-heart" />
          by
          <a target="_blank" href="http://bootstrapthemes.co">
            Bootstrap Themes
          </a>
          2016. All Rights Reserved
        </p>
      </div>
    </footer>
  </>
)


            <h2>Test version of API-service "Projects" </h2>
            <hr />
                <ul>
                    {project.map(s => (
                        <li> {s.id}. {s.name} - {s.age} years; rate: {s.rate} </li>
                    ))}
                </ul>


        </div>
    );
}
export default App;

