import React, { useEffect, useRef, useState } from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import git from '../assets/git.png'
import boostrap from '../assets/boostrap.png'
import tailwind from '../assets/tailwind.svg'
import next from '../assets/next.svg'
import react from '../assets/react.svg'
import mongo from '../assets/mongo.png'
import node from '../assets/node.svg'
import ex from '../assets/ex.png'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Skills = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const ref = useRef();
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: false,
    });

    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      setLastScrollTop(st <= 0 ? 0 : st); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        } else {
          entry.target.classList.remove('aos-animate');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <div className='relative bg-bg1 bg-center bg-cover min-h-screen h-max bg-fixed snap-start'>
      <div className='absolute inset-0 bg-tertary opacity-80 h-full '></div>
        <div className='flex sm:justify-ceneter  flex-col h-full max-h-max items-center gap-8 md:px-0 px-4 py-24'>
          <div data-aos="fade-down" className='  relative border-b-primary border-b-4 before:content-["."] before:w-3 before:h-3 before:bg-primary before:absolute before:-bottom-2 before:rounded-full before:-left-2 
        after:content-["."] after:w-3 after:h-3 after:bg-primary after:absolute after:-bottom-2 after:rounded-full after:-right-2 '>
            <h1 className='text-primary text-5xl font-ubuntu mb-6'>Skills</h1>
          </div>
          <p className='text-white font-display px-4 text-balance text-center z-10'>I am striving to never stop learning and improving</p>x``
          <div className='flex flex-col items-center gap-8 z-10'>
            <h2 className='font-ubuntu text-3xl text-primary'>Full Stack Development</h2>
            <div className='grid grid-cols-2 sm:grid-cols-5 gap-6'>
                <article className='flex flex-col items-center'>
                  <img src={html} alt="" className='h-16' />
                  <p className='text-white font-display'>HTML</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={css} alt="" className='h-16' />
                  <p className='text-white font-display'>CSS</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={js} alt="" className='h-16' />
                  <p className='text-white font-display'>Java Script</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={boostrap} alt="" className='h-16' />
                  <p className='text-white font-display'>Boostrap</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={tailwind} alt="" className='h-16' />
                  <p className='text-white font-display'>Tailwind</p>
                </article>
                <article className='flex flex-col items-center'>
                  <img src={mongo} alt="" className='h-16' />
                  <p className='text-white font-display'>MongoDB</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={ex} alt="" className='h-16' />
                  <p className='text-white font-display'>Express.js</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={react} alt="" className='h-16' />
                  <p className='text-white font-display'>React</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={next} alt="" className='h-16' />
                  <p className='text-white font-display'>Next.js</p>
                </article>
                <article className='flex flex-col items-center '>
                  <img src={node} alt="" className='h-16' />
                  <p className='text-white font-display'>Node.js</p>
                </article>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Skills