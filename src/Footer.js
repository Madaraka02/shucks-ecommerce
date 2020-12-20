import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <h2 className="footer__title">CONTACT INFORMATION</h2>
                <h6>ADDRESS:</h6>
                <p>JUJA, KIAMBU</p>
                <h6>PHONE:</h6>
                <p>
                    
                   +254 707 031 397 / +254 735 754 922
                </p>
                <h6>EMAIL:</h6>
                <p>shucksFootwear@gmail.com</p>
                <h6>WORKING DAYS/HOURS:</h6>
                <p>24/7</p>
            </div>
            <div className="footer__middle">
            <h2 className="footer__title">SHIPPING</h2>
            <h6>NAIROBI CBD & JUJA:</h6>
                <p>Free shipping</p>
                <h6>OUTSIDE NAIROBI:</h6>
                <p>Shipping fees varry according to your location</p>
                &copy; ShucksFootwear Kenya. 
            {new Date().getFullYear()}. All Rights Reserved
            </div>
            <div className="footer__right">
            <h2 className="footer__title">FOLLOW US ON SOCIAL MEDIA</h2>
                <h6>INSTAGRAM:</h6>
                <p>
                    <a href="https://www.instagram.com/shucksfootwear/?hl=en" target="_blank">shucksfootwear</a></p>
                <h6>FACEBOOK:</h6>
                <p>
                    <a href="https://www.facebook.com/search/top?q=shucks%20footwear" target="_blank">shucks footwear</a></p>
            </div>
            
        </div>
    )
}

export default Footer
