
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import logo from '../assets/IMG_0303.jpg';
import '../../App.css';
export default function Home() {
  return (
<MDBContainer className="mt-3">
      <MDBRow>
      <MDBCol md="12">
          <h2 className='text-center'>About Me</h2>
          <hr className=" solid bg-dark"/>
          <img
            style={{ height: "285px" }}
            src={logo}
            class="float-left pr-4 pb-3 img-fluid"
            alt="logo"
          />
          <p style={{ fontSize: "27px"}}>
          My name is Taylor Garrey and I Graduated from The University of Arizona's full-stack coding bootcamp. Currently I am looking for a Junior Development position remotely , or in Phoenix, Arizona. I have an Understanding of Javascript, HTML, CSS, Node.js, Express.js, React.js, MongoDB, Api's, OOP, mySQL, ORM, MVC, noSQL. I have a passion for technology and cannot wait to be a full time developer!
          </p>
      
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
