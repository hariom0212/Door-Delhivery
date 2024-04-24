import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div>


      <footer className="text-center text-lg-start bg-light text-muted" style={{ marginTop: "30px" }}>

        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>



          <div>
            <a href="https://www.facebook.com/profile.php?id=100064075683396" className="me-4 text-reset">
              <i className="fab fa-facebook-f"><FacebookIcon /></i>
            </a>
            <a href="https://instagram.com/shrihariomlpm02?igshid=NzZlODBkYWE4Ng==" className="me-4 text-reset">
              <i className="fab fa-twitter"><InstagramIcon /></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"><TwitterIcon /></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"><LinkedInIcon /></i>
            </a>
            <a href="https://jsdl.in/DT-9927YLJSPIU" className="me-4 text-reset">
              <i className="fab fa-linkedin"><GoogleIcon /></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"><YouTubeIcon /></i>
            </a>
          </div>

        </section>



        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Door Delhivery
                </h6>
                <p>

                </p>
              </div>



              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Services
                </h6>
                <p>
                  <a href="./services" className="text-reset">PACKING & MOVING SERVICES</a>
                </p>
                <p>
                  <a href="./services" className="text-reset">LOADING & UNLOADING SERVICES</a>
                </p>
                <p>
                  <a href="./services" className="text-reset">HOUSEHOLD GOODS SHIFTING</a>
                </p>
                <p>
                  <a href="./services" className="text-reset">COURIER SERVICES</a>
                </p>
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Greater Noida Uttar Pradesh</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  doordelhivery@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> 9616412393</p>
                <p><i className="fas fa-print me-3"></i> 7007723368</p>
              </div>

            </div>

          </div>
        </section>



        <div className="text-center p-4" style={{ background: "rgba(0, 0, 0, 0.05)" }}>
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="#">doordelhivery.com</a>
        </div>

      </footer>
    </div>
  )
}
