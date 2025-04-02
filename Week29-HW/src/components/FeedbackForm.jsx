import React, {useState} from 'react';
import '../index.css';



export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[message, setMessage] = useState('');
  const[comment, setComment] = useState('');
  const[rating, setRating] = useState('');
  const[reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);
  


  const nameValidation =/^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/
  
  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    let res = {name,email,comment}
    console.log( 'Result:',res)
    if(!nameValidation.test(name) ) {
      setMessage('Аты жөніңіз тек әріптерден тұруы керек!');
      return
    }
    if (!email) {
        alert("Email таңдаңыз!");
        return;
    }
    
    if (!comment) {
        alert("Пікір таңдаңыз!");
        return;
    }
    
    if (rating < 3 && !reason) {
        alert("Төмен баға үшін себебін жазыңыз!");
        return;
    }
    setSubmitted(true);
    
    
    
    setMessage('')
    setEmail('')
    setName('')
    setComment('')
    setRating('');
    setReason('');
   
  };
   

  return (
    <div className='form'>
        {submitted ? (
                <p style={{color:'green', backgroundColor:'#f2f2f2', padding:'10px', margin:'10px'}}>Рахмет, сіздің пікіріңіз маңызды!😊 </p>
            ) : (
                <>
      <h2>Кері Байланыс Формасы</h2>
      <form onSubmit={handleSubmit}>
        <div className='email-box'> 
        <label htmlFor=''>Аты жөні:</label>
        <input type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
         />
      

        <label htmlFor=''>Email:</label>
        <input type="email"  
        value={email}
        onChange={(e) => setEmail(e.target.value)} 

         />
        </div>
       
        <div className='pikir'>
          <label htmlFor="">Пікіріңіз</label>
          <textarea name="" id=""
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          minLength={20}/>
        </div>
        <label>Бағаңызды қойыңыз:</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)} >
        <option value="">Таңдаңыз</option>
        <option value="1">⭐</option>
        <option value="2">⭐⭐(Нашар)</option>
        <option value="3">⭐⭐⭐(Орташа)</option>
        <option value="4">⭐⭐⭐⭐(Жақсы)</option>
        <option value="5">⭐⭐⭐⭐⭐(Өте жақсы)</option>
        </select>            
                
        {rating && parseInt(rating) < 3 && (
        <div>
        <label>Не себепті төмен бағаладыңыз?</label>
        <textarea value={reason} onChange={(e) => setReason(e.target.value)}></textarea> 
        </div>
        
        )}
                
       {message&& <p style={{color:'red'}}>{message}</p>  }
        <button type="submit">Жіберу</button>
      </form> 
     
    </>
  ) 
}
</div>
  );
}

