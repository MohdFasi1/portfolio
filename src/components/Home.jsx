import React, { useEffect, useRef, useState } from 'react'
import profile from '../assets/profile.png'
import mohdfasiresume from '../assets/mohdfasiresume.pdf'
import About from './About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
const Home = () => {
    const [lastScrollTop, setLastScrollTop] = useState(0);
  const ref = useRef();
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            mirror: false,
        });

        const handleScroll = () => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
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
          { threshold: 0.1 }
        );
    
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach((el) => observer.observe(el));
    
        return () => {
          elements.forEach((el) => observer.unobserve(el));
        };
      }, []);


    return (
        <div className='h-screen overflow-y-scroll overflow-x-hidden scroll-smooth snap-y snap-mandatory topPage'>
        <div className='p-24 min-h-screen snap-start flex flex-col justify-center'>
            <h1 ref={ref} data-aos="fade-down" className='font-ubuntu text-7xl  text-primary md:flex justify-center items-center hidden'>Developer&nbsp;&nbsp;&nbsp;</h1>
            <div className='flex md:flex-row flex-col justify-between gap-[10%]'>
                <section ref={ref} data-aos="fade-up" className='border-primary border-l-4 border-t-4 rounded-ss-[45%] self-center w-max'>
                    <div className='flex items-center flex-col h-full border-4 rounded-ss-[44%] p-6 rounded-ee-[45%]'>
                        <img src={profile} alt="" width={96} height={96} />
                        <h1 className='font-display text-2xl text-white font-bold'>Fasi Uddin</h1>
                        <h3 className='font-display text-base text-white'>Full Stack Developer</h3>
                        <div className='my-6 flex flex-col gap-1'>
                            <a href="mailto:mohdfasi7451@gmail.com" className='flex items-center text-white font-display '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#12F7D6" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                                mohdfasi7451@gmail.com</a>
                            <a href="tel:+919603195691" className='flex items-center text-white font-display'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#12F7D6" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>+919603195691
                            </a>
                            <p className='flex text-white items-center font-display'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#12F7D6" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                                Hyderabad,Telangana
                            </p>
                        </div>
                        <div className='flex justify-start items-start w-full'>
                            <a href={mohdfasiresume} download="mohdfasiresume.pdf" className='flex items-center bg-white py-2 px-4 rounded-3xl'>Download CV &nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                            </svg>
                            </a>
                        </div>
                    </div>
                </section>
                <section ref={ref} data-aos="fade-left" className='my-6'>
                    <h1 className='text-4xl text-white font-ubuntu'>
                        <i className='text-primary text-base'>&lt;h1&gt;</i> <br />
                        <i className='text-5xl'>Hey</i> <br />
                        I'm <i className='text-primary'>Fasi</i>, <br />
                        Full Stack Developer <i className='text-primary text-base'>&lt;/h1&gt;</i>
                    </h1>
                    <p className='text-white pt-8 '>
                    <i className='text-primary text-base leading-8'>&lt;p&gt;</i> <br />
                    Full Stack Developer specializing in building seamless and scalable web applications using MongoDB, Express, React, nextJs and Node.js. <br />
                    <i className='text-primary text-base leading-8'>&lt;/p&gt;</i>
                    </p>
                </section>
            </div>
        </div>
        <About/>
        <Skills/>
        {/* <Projects/> */}
        <Contact/>
    </div>
    )
}

export default Home