import React, { Component } from 'react'
import "./homepage.css";
import BackgroundImage from "../../Utils/BackgroundImage/backgroundImage";
    const HomePage = () => {
      return (
        <BackgroundImage>
        <div>
<section className="bg-light">
<div className="container"> 
  <div className="row">
    <div className="col-lg-6 order-2 order-lg-1">
      <h1>Luckmoshy Designer Template</h1>
      <p className="lead">Proident eu nisi commodo enim deserunt enim duis sunt nostrud anim. Sunt do sit enim veniam nostrud culpa adipisicing do ullamco occaecat et. </p>
      <p><a href="#" className="btn btn-primary shadow mr-2">Discover More</a><a href="#" className="btn btn-outline-primary">Some another action</a></p>
    </div>
    <div className="col-lg-6 order-1 order-lg-2"><img src="https://3.bp.blogspot.com/-_7vaKiNZPXk/XCWoF-0xj7I/AAAAAAAAAMk/Bx7Ne5WLEvINHPDoG1jwY6rGO2d62pprwCKgBGAs/s1600/ux-design.jpeg" alt="..." className="img-fluid" /> </div>
  </div>
</div>
</section>

<section>
<div className="container"> 
  <h2>Services</h2>
  <p className="text-muted mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
  <div className="row">
    <div className="col-sm-6 col-lg-4 mb-3">
      <svg className="lnr text-primary services-icon">
        <use xlinkHref="#lnr-magic-wand"></use>
      </svg>
      <h6>Ex cupidatat eu</h6>
      <p className="text-muted">Ex cupidatat eu officia consequat incididunt labore occaecat ut veniam labore et cillum id et.</p>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <svg className="lnr text-primary services-icon">
        <use xlinkHref="#lnr-heart"></use>
      </svg>
      <h6>Tempor aute occaecat</h6>
      <p className="text-muted">Tempor aute occaecat pariatur esse aute amet.</p>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <svg className="lnr text-primary services-icon">
        <use xlinkHref="#lnr-rocket"></use>
      </svg>
      <h6>Voluptate ex irure</h6>
      <p className="text-muted">Voluptate ex irure ipsum ipsum ullamco ipsum reprehenderit non ut mollit commodo.</p>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <svg className="lnr text-primary services-icon">
        <use xlinkHref="#lnr-paperclip"></use>
      </svg>
      <h6>Tempor commodo</h6>
      <p className="text-muted">Tempor commodo nostrud ex Lorem occaecat duis occaecat minim.</p>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <svg className="lnr text-primary services-icon">
        <use xlinkHref="#lnr-screen"></use>
      </svg>
      <h6>Et fugiat sint occaecat</h6>
      <p className="text-muted">Et fugiat sint occaecat voluptate incididunt anim nostrud ea cillum cillum consequat.</p>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <svg className="lnr text-primary services-icon">
        <use xlinkHref="#lnr-inbox"></use>
      </svg>
      <h6>Et labore tempor et</h6>
      <p className="text-muted">Et labore tempor et adipisicing dolor.</p>
    </div>
  </div>
</div>
</section>




<div className="container">
<div className="row mt-4">
<div className="col-md-6">

<p className="lead display-4">outline Button Materials</p>
<button type="button" className="btn btn-outline-primary">Primary</button>
<button type="button" className="btn btn-outline-secondary">Secondary</button>
<button type="button" className="btn btn-outline-success">Success</button>
<button type="button" className="btn btn-outline-danger">Danger</button>
<button type="button" className="btn btn-outline-warning">Warning</button>
<button type="button" className="btn btn-outline-info">Info</button>
<button type="button" className="btn btn-outline-light">Light</button>
<button type="button" className="btn btn-outline-dark">Dark</button>
</div>
<div className="col-md-6">
<p className="lead display-4"> Button Materials</p>

<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>
<button type="button" className="btn btn-link">Link</button>
</div></div>
</div>
  <div className="container mt-5">

<p className="lead display-4">block  Button Materials</p>

<button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>
<button type="button" className="btn btn-secondary btn-lg btn-block">Block level button</button>
</div>
   <div className="container mt-4">
<p className="lead display-4">Table</p>

<table className="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">First</th>
<th scope="col">Last</th>
<th scope="col">Handle</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Larry</td>
<td>the Bird</td>
<td>@twitter</td>
</tr>
</tbody>
</table>
</div>
   <div className="container mt-4">
<p className="lead display-4">Text color</p>

<p className="text-primary">.text-primary</p>
<p className="text-secondary">.text-secondary</p>
<p className="text-success">.text-success</p>
<p className="text-danger">.text-danger</p>
<p className="text-warning">.text-warning</p>
<p className="text-info">.text-info</p>
<p className="text-light bg-dark">.text-light</p>
<p className="text-dark">.text-dark</p>
<p className="text-body">.text-body</p>
<p className="text-muted">.text-muted</p>
<p className="text-white bg-dark">.text-white</p>
<p className="text-black-50">.text-black-50</p>
<p className="text-white-50 bg-dark">.text-white-50</p>

</div>

<section>
<div className="container">
    <div className="row">
<div className="card border-primary mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body text-primary">
<h5 className="card-title">Primary card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card border-secondary mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body text-secondary">
<h5 className="card-title">Secondary card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card border-success mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body text-success">
<h5 className="card-title">Success card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card border-danger mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body text-danger">
<h5 className="card-title">Danger card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card border-warning mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body text-warning">
<h5 className="card-title">Warning card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card border-info mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body text-info">
<h5 className="card-title">Info card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card border-light mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Light card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card border-dark mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body text-dark">
<h5 className="card-title">Dark card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="row">
<div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Primary card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card text-white bg-secondary mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Secondary card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card text-white bg-success mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Success card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card text-white bg-danger mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Danger card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card text-white bg-warning mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Warning card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card text-white bg-info mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Info card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card bg-light mb-3" style={{maxWidth:" 18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Light card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
<div className="card-header">Header</div>
<div className="card-body">
<h5 className="card-title">Dark card title</h5>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="container mt-4">
<div className="row">

<div className="card-columns">
<div className="card">
<img className="card-img-top" src="https://4.bp.blogspot.com/-InDD3Hm_bhU/XB4_TK3TT7I/AAAAAAAAAJ4/r5tUeCOqq1MTchFh7D7pWdf582A4qYIIwCEwYBhgL/s1600/Businesswoman-working-at-a-computer-1280x720.jpg" alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">Card title that wraps to a new line</h5>
<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
<div className="card p-3">
<blockquote className="blockquote mb-0 card-body">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<footer className="blockquote-footer">
  <small className="text-muted">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </small>
</footer>
</blockquote>
</div>
<div className="card">
<img className="card-img-top" src="https://4.bp.blogspot.com/-InDD3Hm_bhU/XB4_TK3TT7I/AAAAAAAAAJ4/r5tUeCOqq1MTchFh7D7pWdf582A4qYIIwCEwYBhgL/s1600/Businesswoman-working-at-a-computer-1280x720.jpg" alt="Card image cap" />
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
</div>
</div>
<div className="card bg-primary text-white text-center p-3">
<blockquote className="blockquote mb-0">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
<footer className="blockquote-footer">
  <small>
    Someone famous in <cite title="Source Title">Source Title</cite>
  </small>
</footer>
</blockquote>
</div>
<div className="card text-center">
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
</div>
</div>
<div className="card">
<img className="card-img" src="https://4.bp.blogspot.com/-InDD3Hm_bhU/XB4_TK3TT7I/AAAAAAAAAJ4/r5tUeCOqq1MTchFh7D7pWdf582A4qYIIwCEwYBhgL/s1600/Businesswoman-working-at-a-computer-1280x720.jpg" alt="Card image" />
</div>
<div className="card p-3 text-right">
<blockquote className="blockquote mb-0">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
<footer className="blockquote-footer">
  <small className="text-muted">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </small>
</footer>
</blockquote>
</div>
<div className="card">
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
</div>
</div>
</div>
</div>
</div>

<section>
<div className="container">
  <blockquote className="blockquote text-center mb-0">
    <svg className="lnr text-muted quote-icon pull-left">
      <use xlinkHref="#lnr-heart" />                                       
    </svg>
    <p className="mb-0">There is no place like 127.0.0.1</p>
    <footer className="blockquote-footer">Someone famous in 
      <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
</div>
</section>

<div className="py-5 bg-light">
<div className="container">
  <div className="row">
    <div className="col-lg-4 mb-4 mb-lg-0">
      <h5>Bootstrap 101</h5>
      <ul className="contact-info list-unstyled">
        <li><a href="mailto:sales@landy.com" className="text-dark">hello@bootstrap101.com</a></li>
        <li><a href="tel:123456789" className="text-dark">+00 123 456 789</a></li>
      </ul>
      <p className="text-muted">Laborum aute enim consectetur eu laboris commodo.</p>
    </div>
    <div className="col-lg-4 col-md-6">
      <h5>Pages</h5>
      <ul className="links list-unstyled">
        <li> <a href="#" className="text-muted">Nisi in commodo</a></li>
        <li> <a href="#" className="text-muted">reprehenderit</a></li>
        <li> <a href="#" className="text-muted">Nostrud</a></li>
        <li> <a href="#" className="text-muted">Et eu eu</a></li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-6">
      <h5>Favourites</h5>
      <ul className="links list-unstyled">
        <li> <a href="#" className="text-muted">Minim labore nulla</a></li>
        <li> <a href="#" className="text-muted">Nulla qui nisi</a></li>
        <li> <a href="#" className="text-muted">Iris Vor Arnim</a></li>
        <li> <a href="#" className="text-muted">Consectetur cupidatat</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
<div className="py-3 bg-dark text-white">
<div className="container">
  <div className="row">
    <div className="col-md-7 text-center text-md-left">
      <p className="mb-md-0">© 2018 Your company. All rights reserved.                        </p>
    </div>
    <div className="col-md-5 text-center text-md-right">
      <p className="mb-0">Template By <a href="https://bootstrapious.com/" className="external text-white">Bootstrapious</a>  </p>
    </div>
  </div>
</div>
</div>
</div>

        </BackgroundImage>

   
      )
    }
    
export default HomePage