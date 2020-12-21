import React, {useState, useEffect, useRef} from 'react';
import {
    Container,
    TimerWrapper,
    Timer,
    
} from './styles';
import {useAnimation} from 'framer-motion';

// animation
const appearVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
}


const CountDown = () => {

    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date(2020, 11, 21, 23, 59, 59); // 20/12/20 23:59:59

        interval = setInterval( () => {
            const dateNow = new Date().getTime();
            const distance = countDownDate - dateNow;

            const newHours = Math.floor( distance / (1000 * 60 * 60) );
            const newMinutes = Math.floor( (distance % (1000 * 60 * 60)) / (1000 * 60) );
            const newSeconds = Math.floor( ( (distance % (1000 * 60 * 60)) % (1000 * 60) ) / 1000 );


            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setHours(newHours);
                setMinutes(newMinutes);
                setSeconds(newSeconds);
            }
        }, 1000);
    };

    useEffect( () => {
        startTimer();
        return () => clearInterval(interval.current);
    });

    // Animation
    const countDownControl = useAnimation();
    useEffect( () => {
        const scrollHandle = () => {
        const totalScroll = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const currentScroll = document.documentElement.scrollTop;
        const scrollPercentage = (currentScroll * 100) / totalScroll;
    
            if ( scrollPercentage >= 20 ) {
                countDownControl.start("animate");
                window.removeEventListener('scroll', scrollHandle);
            }
        }

        window.addEventListener('scroll', scrollHandle);
    }, [countDownControl] );


    return (
        <Container
            variants={appearVariants}
            initial="initial"
            animate={countDownControl}
        >
            <h1>Oferta expira em:</h1>

            <TimerWrapper>
                <Timer>
                    <p>{hours}</p>
                    <p>Horas</p>
                </Timer>
                <span>:</span>

                <Timer>
                    <p>{minutes}</p>
                    <p>Minutos</p>
                </Timer>
                <span>:</span>

                <Timer>
                    <p>{seconds}</p>
                    <p>Segundos</p>
                </Timer>
            </TimerWrapper>
        </Container>
    )
}

export default CountDown;