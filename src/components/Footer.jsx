import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer-container">
  <div className="footer-section">
    <h3 className='bold'>О нас</h3>
    <p>Мы надежный и опытный гид в мире</p>
    <p>недвижимости, предоставляющий вам</p>
    <p>широкий выбор квартир и домов для аренды.</p>
  </div>
  <div className="footer-section">
    <h3 className='bold'>Помощь</h3>
    <p>Если у вас есть вопросы, свяжитесь с нами:</p>
    <p>1shatyr.kz.@gmail.com</p>
  </div>
  <div className="footer-section">
    <h3 className='bold'>Контакты</h3>
    <address>
      <p>Местоположение: Алматы</p>
      <p>Телефон: +7 (705) 555-5555</p>
    </address>
  </div>
</footer>
  );
}

export default Footer;
