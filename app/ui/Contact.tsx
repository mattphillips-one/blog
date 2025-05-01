'use client';

import { fonts } from 'app/ui/fonts';
import { themes } from 'app/ui/themes';
import { useState } from 'react';
import Image from 'next/image';
import { assets } from 'assets/assets';

export default function Contact() {

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append('access_key', '788de787-9572-4238-9c36-ac106712d0a9');

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact' className='border-t-1 border-stone-400 scroll'>
      <h1 className={`${fonts.section_header}`}>
        Contact
      </h1>

      <div className='flex flex-col mx-[5%] md:hidden gap-5'>
        <h2 className={`${fonts.roboto} font-normal text-2xl`}>Get in touch!</h2>
        <p className={`${fonts.montserrat}`}>You can also email me at <span className={`${fonts.roboto} font-light inline-block hover:underline`}>mattphillips142@gmail.com</span>.</p>
      </div>

      <div className='flex flex-row justify-between mt-10 mx-[5%]'>
        <form onSubmit={handleSubmit}
        className={`w-full text-sm md:text-base md:w-1/2 flex flex-col gap-6`}>
          <input type='text' name='email' placeholder='your-email@email.com' required
            className={`w-2/3 md:w-1/2 p-3 ${themes.formBox} ${fonts.montserrat}`}></input>
          <textarea rows={6} name='message' placeholder='enter your message ...' required
          className={`${themes.formBox} w-full p-4 ${fonts.montserrat}`}></textarea>

          <div className='flex flex-row gap-6 items-center ml-2'>
            <button type='submit'
            className='border border-white bg-black text-white flex items-center gap-2 py-3 px-4 lg:px-10 hover:shadow-md shadow-stone-100/10 cursor-pointer'>
              Submit
              <Image className='w-4'
                src={assets.right_arrow}
                alt='right white arrow'
              />
            </button>
            <span className={`${fonts.roboto_body} md:text-base`}>{result}</span>
          </div>
        </form>

        <div className='hidden md:flex flex-col items-end gap-4 mr-10 w-1/4'>
          <h2 className={`${fonts.roboto} font-normal text-2xl`}>Get in touch!</h2>
          <p className={`${fonts.montserrat} text-right`}>You can also email me at <span className={`${fonts.roboto} font-light inline-block hover:underline`}>mattphillips142@gmail.com</span>.</p>
        </div>

      </div>
    </section>
  );
};