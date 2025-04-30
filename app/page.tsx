import Image from 'next/image';
import { assets } from 'assets/assets';
import { cousine, roboto, nunito_sans } from 'app/ui/fonts';

export default function Page() {
  return (
    <section className='flex flex-col items-center md:flex-row md:items-stretch'>
      <div className='flex max-w-sm mb-10 md:max-w-xl md:mb-0'>
        <Image className='h-full'
          src={assets.profile_pic}
          alt='Picture of me'
        />
      </div>

      <div className='flex flex-col items-center mb-1 gap-8 md:items-end md:justify-between'>
        <h1 className={`${nunito_sans.className} tracking-wide mt-1 text-3xl text-center md:text-right mr-1`}>
          MATTHEW PHILLIPS
        </h1>

        <Buttons />

        <p className={`${roboto.className} mb-4 text-sm/6 text-center md:ml-12 md:text-right`}>
          {`I'm a full-stack developer with a passion for large problems. My interests include
            climate, finance, resource management, consumer advocacy, and human rights. 
            Download my resume and view my projects below to see what I've been up to.`}
        </p>

      </div>
    </section>
  )
}

// "contact me" and "my resume" buttons
const Buttons = () => {
  return (
    <>
      <div className='flex flex-row gap-4 mr-1 justify-center md:justify-end '>
        <a className='px-10 py-3 border border-white bg-black text-white flex items-center gap-2'
          href="#contact"
        >
          contact me
          <Image className='w-4'
            src={assets.right_arrow}
            alt='right white arrow'
          />
        </a>
        <a className='px-10 py-3 border border-gray-500 flex items-center gap-2'
          href="/matthew_phillips_resume.pdf"
          target='_blank'
          rel="noopener noreferrer"
          download
        >
          my resume
          <Image className='w-4'
            src={assets.download_icon}
            alt='download icon'
          />
        </a>
      </div>
    </>
  )
}