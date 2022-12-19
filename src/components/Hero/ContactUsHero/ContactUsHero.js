import { Link } from 'react-router-dom';
import './ContactUsHero.css';

const ContactUsHero = () => {
    return (
        <section className="contactUsHeroSection">
            <div className="contactUsHeroText">
                <Link to='/contact' className='contactUsHeroLink'>
                    <h1>Contact Us</h1>
                    <p>
                        Request us for your next event or sign up for our newsletter!
                    </p>
                </Link>
            </div>
        </section>
    )
};

export default ContactUsHero;