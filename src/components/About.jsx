import React, { useEffect, useRef, useState } from 'react'
import image from '../assets/Image.png'
import AOS from 'aos'
import 'aos/dist/aos.css';
const About = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const ref = useRef();
    useEffect(() => {
        AOS.init({
            duration: 400,
            once: false,
            mirror: false,
        });

        const handleScroll = () => {
            const st = window.scrollY || document.documentElement.scrollTop;
            setLastScrollTop(st <= 0 ? 0 : st); 
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
          { threshold: 0 }
        );
    
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach((el) => observer.observe(el));
    
        return () => {
          elements.forEach((el) => observer.unobserve(el));
        };
      },[]);
  return (
    <div className='bg-secondary md:h-full h-max min-h-screen snap-start flex md:flex-row flex-col justify-between items-center md:py-0 py-24 px-8'>
      <div className=' flex flex-col justify-center md:w-2/3 h-full md:py-[10%] md:pl-[10%] md:pr-[5%] gap-8'>
        <div data-aos="fade-down" className='text-4xl text-white bg-tertary w-max rounded-ss-[50px] rounded-ee-[50px] p-6 font-ubuntu'>About Me</div>
        <article data-aos="fade-up" className='text-white bg-tertary p-4 rounded-2xl font-display'>
          <i className='text-primary text-base'>&lt;p&gt;</i> <br />
          <h1 className='text-primary text-3xl leading-8'>Hello!</h1>
          <p>My name is Fasi, and I specialize in web development that utilizes MongoDB, Express.js, React, and Node.js, among other technologies. <br /> &nbsp; &nbsp;&nbsp; &nbsp; I am a highly motivated individual and an eternal optimist, dedicated to writing clear, concise, robust code that works. I strive to never stop learning and improving.</p>
          <br /><i className='text-primary text-base leading-8'>&lt;/p&gt;</i>
        </article>
      </div>
      <div data-aos="fade-up" className='md:w-1/3 md:h-full md:py-[10%] md:pr-16 py-16'>
        <img  src={image} alt="" className='md:w-full md:h-full object-contain ' />
      </div>
    </div>
  )
}

export default About