import React from 'react';
import { useLanguage } from './LanguageProvider';

const Main = () => {
  const { language, changeLanguage, audar } = useLanguage();

  return (
    <div className='main'>
        <h3>This is Main component</h3>
        <div className='message-box'> 
      <p>{audar.message}</p>
      </div>
     
        
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="kk">Қазақша</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      
     
    </div>
  );
};

export default Main;
