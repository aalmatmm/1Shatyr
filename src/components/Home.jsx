import './Home.css'
import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <div className="welcome">
        <div className="welcome-block">
          <h1>Добро пожаловать на наш сайт недвижимости!</h1>
          <p>Здесь вы найдете лучшие предложения по аренде и сдаче квартир. Наша команда готова помочь вам найти идеальное жилье, которое соответствует вашим потребностям и бюджету. Начните поиск уже сегодня!</p>
        </div>
      </div>
      <div className="image-container">
        <img src="/images/welcomePage.jpg" alt="Изображение дома" style={{ width: '1000px' }} />
      </div>
    </div>
  );
}

export default Home;
