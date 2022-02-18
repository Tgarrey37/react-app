import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import logo from '../assets/IMG_0101.jpeg'

export default function Contact() {
  return (
    <div>
    <MDBContainer className="mt-3 ">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src={logo}
            class="pr-4 pb-3 img-fluid"
            alt="Tayor Garrey"
          />
        
        <p style={{ fontSize: "27px" }}>
            Feel free to contact me with anything you need !
          </p>
          <h3>Cell Phone</h3>
          
          <a href="tel:480-322-2698">
            <MDBIcon icon="phone-alt" /> 480-322-2698
          </a>
          
          <h3>E-mail</h3>
        
  
          <a href="mailto:tpopp0303@gmail.com">
            <MDBIcon icon="envelope" /> tpopp0303@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  {/* <div class="container ">
  <h1>FormSubmit Demo</h1>
  <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group ">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block ">Submit Form</button>
  </form>
</div> */}

  

</div>
  );
};


