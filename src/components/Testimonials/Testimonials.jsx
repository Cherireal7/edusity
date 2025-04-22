import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'    
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {

    const slideForward = () => {}


    const slideBackward = () => {}




  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
        <div className="slider">
        <ul>
            <li>
                <div className="slide"> 
                    <div className="userinfo">
                        <img src={user_1} />
                         <div>
                            <h3> John Doe</h3>
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

            <li>
                <div className="slide"> 
                    <div className="userinfo">
                        <img src={user_2} />
                         <div>
                            <h3>Doe's Brother</h3>
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

            <li>
                <div className="slide"> 
                    <div className="userinfo">
                        <img src={user_3} />
                         <div>
                            <h3> John Reacher</h3>
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

            <li>
                <div className="slide"> 
                    <div className="userinfo">
                        <img src={user_4} />
                         <div>
                            <h3> Ninja Man</h3>
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

        </ul>
        </div>
    </div>
  )
}

export default Testimonials
