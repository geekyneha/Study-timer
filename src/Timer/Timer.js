import React, { useState, useEffect } from 'react';
import style from './timer.module.css';
import { MdOutlineReplay } from "react-icons/md";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";


const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [isRunning, setIsRunning] = useState(false);
  const [quote, setQuote] = useState('');

  
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const quotes = [
    'Keep going.',
    'You got this.',
    'Dream big.',
    'Stay strong.',
    'Believe in yourself.',
    'Make it happen.',
    'Never settle.',
    'Stay positive.',
    'Embrace change.',
    'Be fearless.',
  ];
  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60); 
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]); 
  };

  return (
    
    <div className={style['container']} >
        
      <div className={style['timer-container']}>
        <div>
           
        <img className={style['logo']} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UZVoDSOMiX7-05yuqPW1dxu6apRCraLnBYjOZfzi_sM7G6r1d_G5BwL6xwCJe57E-fg&usqp=CAU" alt="Study Timer"  width={40} height={40}/>
        </div>
        
      <h2>{formatTime(timeLeft)}</h2>
      <div className={style['control-buttons']}>
      <button onClick={handleStart}><FaPlay /></button>
      <button onClick={handlePause}><FaPause /></button>
      <button onClick={handleReset}><MdOutlineReplay /></button>
      </div>
      <p> {quote && <p className={style.quote}>"{quote}"</p>} {/* Display the quote */}</p>
      </div>
    </div>
  );
};

export default Timer;
