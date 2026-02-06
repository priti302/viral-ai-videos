import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 5, minutes: 17, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          return { hours: 5, minutes: 17, seconds: 48 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-2">
      <div className="countdown-box">
        <span className="text-xl font-bold text-foreground">{formatNumber(timeLeft.hours)}</span>
        <p className="text-xs text-muted-foreground">Hours</p>
      </div>
      <div className="countdown-box">
        <span className="text-xl font-bold text-foreground">{formatNumber(timeLeft.minutes)}</span>
        <p className="text-xs text-muted-foreground">Minutes</p>
      </div>
      <div className="countdown-box">
        <span className="text-xl font-bold text-foreground">{formatNumber(timeLeft.seconds)}</span>
        <p className="text-xs text-muted-foreground">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
