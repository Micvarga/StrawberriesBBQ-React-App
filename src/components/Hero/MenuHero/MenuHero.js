import { Link } from 'react-router-dom';
import './MenuHero.css';

const MenuHero = () => {
    return (
        <section className="menuHeroSection">
            <div className="menuHeroText">
                <Link to='/menu' className='menuHeroLink'>
                    <h1>Menu</h1>
                    <p>
                        Check out our awesome menu of delicious BBQ!
                    </p>
                </Link>
            </div>
        </section>
    )
};

export default MenuHero;

