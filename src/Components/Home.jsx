import React from 'react'
import { animate, motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDoubleDown } from 'react-icons/bs'
import mypic from '../Assets/mypic.jpg'
import { useRef } from 'react';

const Home = () => {

    const projectCount = useRef(null);

    const animationProjectsCount = () => {
        animate(0, 10, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        });
    }

    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },

        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }



    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hi, I am <br />
                        Souvik Mitra
                    </motion.h1>

                    <TypewriterComponent
                        options={{
                            strings: ["A Developer", "A Musician", "A Learner"],
                            autoStart: true,
                            loop: true,
                            cursor: "",
                            wrapperClassName: "typewriterpara",
                        }}

                    />

                    <div>
                        <a href="mailto: mitrasouvik123@gmail.com">Hire Me!</a>
                        <a href="#work">Projects <BsArrowUpRight /></a>


                    </div>


                    <aside>
                        <article>
                            <p>
                                +<motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                            </p>
                            <span>Projects built</span>
                        </article>

                        <article data-special>
                            <p>
                                Contact
                            </p>
                            <span>mitrasouvik123@gmail.com</span>
                        </article>
                    </aside>


                </div>
            </section>
            <section>

                <img src={mypic} alt="myPic" />


            </section>

            <BsChevronDoubleDown />

        </div>
    )
}

export default Home
