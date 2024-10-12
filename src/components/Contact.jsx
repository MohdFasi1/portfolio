import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import Shape from '../assets/Shape.png'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('');
  const textareaRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (e.target.name === 'message') {
      e.target.style.height = 'auto'; // Reset the height
      e.target.style.height = `${Math.min(e.target.scrollHeight, 160)}px`; // Set height based on content, limit to 5 lines (~160px)
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending...');

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then((res) => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }).catch((err) => {
      console.error('EmailJS error:', error);
      setStatus('Failed to send message. Please try again.');
    })
  }
  return (
    <div id='contact' className='relative bg-secondary snap-start flex flex-col sm:justify-between justify-center items-center min-h-screen h-full max-h-max gap-8 py-24'>
      <div className='  relative border-b-primary border-b-4 before:content-["."] before:w-3 before:h-3 before:bg-primary before:absolute before:-bottom-2 before:rounded-full before:-left-2 
        after:content-["."] after:w-3 after:h-3 after:bg-primary after:absolute after:-bottom-2 after:rounded-full after:-right-2 '>
        <h1 className='text-primary text-5xl font-ubuntu mb-6'>Contact</h1>
      </div>
      <p className='text-white font-display px-4 text-balance text-center'>Send Me A Message</p>
      <form onSubmit={handleSubmit} className='w-3/5 flex flex-col gap-8'>
        <div className='flex justify-center md:flex-row flex-col md:gap-[10%] gap-8 w-full'>
          <div className='w-full flex flex-col gap-3'>
            <label htmlFor="name" className='text-primary font-ubuntu '>Name*</label>
            <input type="text"
              className='w-full bg-transparent border-b border-primary focus:outline-none text-white'
              placeholder='Enter Your Name'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required />
          </div>
          <div className='w-full flex flex-col gap-3'>

            <label htmlFor="email" className='text-primary font-ubuntu '>Email*</label>
            <input type="email"
              placeholder='Enter Your Email'
              className='w-full bg-transparent border-b border-primary text-white focus:outline-none'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required />
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor="message*" className='text-primary font-ubuntu'>Message</label>
          <textarea
            className='w-full bg-inherit border-b border-primary text-white focus:outline-none h-8 resize-none overflow-y-auto'
            placeholder='Enter Your Message'
          ref={textareaRef}
            rows='1'
            style={{ maxHeight: "6rem" }}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex justify-center'>
          <button
            className='bg-primary px-6 py-3 font-medium flex justify-center items-center text-tertary font-display rounded-3xl leading-6'
            type="submit" disabled={status === 'Sending...'}>
            <p>Send Message &nbsp;</p>
            <img src={Shape} alt="send" />
          </button>
        </div>
      </form>
      <p className='text-white font-display'>{status}</p>
    </div>
  )
}

export default Contact