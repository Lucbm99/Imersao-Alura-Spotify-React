import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-area">
                Testar o Premium de graça<br />
                Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
                <button className="footer__button">
                    <span>Inscreva-se grátis!</span>
                </button>
            </div>
        </footer>
    )
}

export default Footer;