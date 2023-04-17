import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer class="footer">
            <div class="container footer-container">
                <div class="row footer-row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            {/* <li><a href="#">privacy policy</a></li> */}
                            <li><a href="#">More</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Our Event</h4>
                        <ul>
                            <li><a href="#">E-Webinar</a></li>
                            <li><a href="#">Seminar</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">More</a></li>
                            {/* <li><a href="#">payment options</a></li> */}
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Category list</h4>
                        <ul>
                            <li><a href="#">Technology</a></li>
                            <li><a href="#">Machine Learning</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">More</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div> 
        </footer>


            
    </div>
  )
}

export default Footer
