import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPagePro = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5 pt-0">
      <div className="bg-success">
        <MDBContainer>
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <Link className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-1 mr-lg-4"> </i>
              </Link>
              <Link className="tw-ic">
                <i className="fab fa-twitter white-text mr-1  mr-lg-4"> </i>
              </Link>
              <Link className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-1 mr-lg-4"> </i>
              </Link>
              <Link className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-1 mr-lg-4"> </i>
              </Link>
              <Link className="ins-ic">
                <i className="fab fa-instagram white-text mr-1 mr-lg-4"> </i>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="4" lg="4" xl="4" className="mb-4 dark-grey-text">
            <h6 className="font-weight-bold">
              Room Allotment System
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "70px" }} />
            <p className="text-justify">
            To make students and warden get satisfied, our proposed system will help. Here warden will display
available or allocated floor with their respective year(E1 upto E4).students can register into the website with their caedentials.our website will display the floors which are allocated for the students with their respective years.students can book the available room with their friends.
            </p>
          </MDBCol>
          
          <MDBCol md="4" lg="4" xl="4" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            
            <p>
              <Link to="/cart" className="dark-grey-text">
                Wishlist
              </Link>
            </p>
            <p>
              <Link to="/contact" className="dark-grey-text">
                contact
              </Link>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> AP IIIT RGUKT RK VALLEY
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@roomallotmentsystem
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> 9100830996
            </p>
            <p>
              <i className="fa fa-print mr-3" /> 9100830996
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 bg-success">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://rguktrkv.ac.in/"> https://rguktrkv.ac.in/</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;