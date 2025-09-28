import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = { ...prevTime };
                
                if (newTime.seconds > 0) {
                    newTime.seconds--;
                } else {
                    newTime.seconds = 59;
                    if (newTime.minutes > 0) {
                        newTime.minutes--;
                    } else {
                        newTime.minutes = 59;
                        if (newTime.hours > 0) {
                            newTime.hours--;
                        } else {
                            newTime.hours = 23;
                            if (newTime.days > 0) {
                                newTime.days--;
                            } else {
                                clearInterval(timer);
                                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                            }
                        }
                    }
                }
                
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-8 text-sm font-medium text-gray-600">
                <span>Days</span>
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
            </div>
            <div className="flex gap-4 text-2xl lg:text-3xl font-bold text-black">
                <span className="min-w-[50px] text-center">{formatTime(timeLeft.days)}</span>
                <span className='text-[crimson]'>:</span>
                <span className="min-w-[50px] text-center">{formatTime(timeLeft.hours)}</span>
                <span className='text-[crimson]'>:</span>
                <span className="min-w-[50px] text-center">{formatTime(timeLeft.minutes)}</span>
                <span className='text-[crimson]'>:</span>
                <span className="min-w-[50px] text-center">{formatTime(timeLeft.seconds)}</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
