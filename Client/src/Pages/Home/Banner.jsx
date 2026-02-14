import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row justify-between">
                <div className=''>
                    {/* <motion.h1
                        animate={{
                            rotate: 180,
                            transition: { duration: 4 }
                        }}
                        className="text-5xl font-bold"><motion.span
                            animate={
                                {
                                    color: ["#3FA9F5", "#E94B3C", "#2ECC71", "#9B59B6", "#F1C40F"],
                                }
                            }
                        >Latest</motion.span> Jobs For You !</motion.h1> */}
                    <h1 className="text-5xl font-bold"><motion.span
                            animate={
                                {
                                    color: ["#3FA9F5", "#E94B3C", "#2ECC71", "#9B59B6", "#F1C40F"],
                                    transition:{ duration: 2 ,repeat:Infinity}

                                }
                            }
                        >Latest</motion.span> Jobs For You !</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className=''>
                    <motion.img
                    animate={
                        {
                            y:[100,150,100]
                        }
                       
                    }
                     transition={
                            {duration:4,repeat:Infinity}
                        }
                    src={team1}
                    className="md:max-w-sm lg:w-full rounded-lg shadow-2xl rounded-t-4xl border-s-4 border-b-4"
                />
                    <motion.img
                    animate={
                        {
                            x:[100,150,100],
                            y:-20
                        }
                       
                    }
                     transition={
                            {duration:7,repeat:Infinity}
                        }
                    src={team2}
                    className="md:max-w-sm lg:w-full rounded-lg shadow-2xl rounded-t-4xl border-s-4 border-b-4"
                />
                </div>
            </div>
        </div>
    );
};

export default Banner;