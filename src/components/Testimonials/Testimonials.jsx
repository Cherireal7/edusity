
import { React, useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'    
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'




const Testimonials = () => {
    const slider = useRef();
    const tx = useRef(0); // Persist translation across renders

    const slideForward = () => {
        if (tx.current > -75) { // 4 items, show 1 at a time: max left = -75%
            tx.current -= 25;
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    };

    const slideBackward = () => {
        if (tx.current < 0) {
            tx.current += 25;
            slider.current.style.transform = `translateX(${tx.current}%)`;
        }
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    {[user_1, user_2, user_3, user_4].map((user, index) => (
                        <li key={index}>
                            <div className="slide">
                                <div className="userinfo">
                                    <img src={user} alt={`User ${index + 1}`} />
                                    <div>
                                        <h3>User {index + 1}</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                    Choosing to pursue my degree at Edusity was one of the
                                    best decisions I've ever made. The supportive
                                    community, state-of-the-art facilities, and
                                    commitment to academic excellence have truly
                                    exceeded my expectations.
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
