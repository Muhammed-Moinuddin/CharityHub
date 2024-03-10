import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>CharityHub</h5>
                        <p>A platform for making a difference.</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>Email: info@charityhub.com</li>
                            <li>Phone: +1 123 456 7890</li>
                            <li>Address: 123 Main St, City, Country</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;