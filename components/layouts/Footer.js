import React from 'react'

export default function Footer() {
    return (
        <>
        <footer id="main-footer" className="py-2">
                <div className="container footer-container">
                    <div>
                        <img src="./img/logo_light.png" alt="NewsGrid" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore earum porro ipsa assumenda at! Aliquid, nisi nam. Illum, officiis.</p>
                    </div>

                    <div>
                        <h3>Email Newsletter</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <form name="contact" method="POST" data-netlify="true">
                            <input name="email" type="email" placeholder="Enter Email..."/>
                            <input type="submit" value="Subscribe" className="btn btn-primary"/>
                        </form>
                    </div>

                    <div>
                        <h3>Site Links</h3>
                        <ul className="list">
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Join Our Club</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam.</p>
                        <a href="#" className="btn btn-secondary">Join Now</a>
                    </div>

                </div>

                <div className="footer-copyright">
                    <p>
                        Copyright &copy; 2021, All right reserved
                    </p>
                </div>
            </footer>  
        </>
    )
}
