import Image from 'next/image';
import { assets } from 'assets/assets';
import { cousine, roboto, nunito_sans, fonts } from 'app/components/ui/fonts';

export default function Header() {
  return (
    <section className='flex flex-col items-center md:flex-row md:items-stretch'>
      <div className='flex max-w-xs mb-10 md:max-w-sm lg:max-w-md xl:max-w-lg md:mb-0'>
        <Image className='h-full'
          src={assets.profile_pic}
          alt='Picture of me'
        />
      </div>

      <div className='flex flex-col items-center mb-1 gap-8 md:ml-9 md:items-end md:justify-between'>
        <h1 className={`${fonts.header_text} text-center md:text-right mr-1`}>
          MATTHEW PHILLIPS
        </h1>

        <HeaderButtons />

        <p className={`${fonts.source_code_pro} mb-1 text-center md:text-right md:text-base/6`}>
          {`I'm a full-stack software engineer with a passion for environmental protection and human rights. 
            Download my resume or view my projects below to see what I've been up to.`}
        </p>
      </div>
    </section>
  )
}

// "contact me" and "my resume" buttons
const HeaderButtons = () => {
  return (
    <div className='flex flex-row gap-4 mr-1 justify-center md:justify-end '>
      <a className='border border-white dark:border-stone-300 bg-black text-white flex items-center gap-2 py-3 px-3 md:px-4 lg:px-10 hover:shadow-md shadow-stone-100/10 active:invert'
        href="#contact"
      >
        contact me
        
        <Image className='w-4'
          src={assets.right_arrow}
          alt='right white arrow'
        />
      </a>
      <a className='border border-stone-500 dark:border-stone-300 bg-white dark:bg-black dark:text-white flex items-center gap-2 py-3 px-3 md:px-4 lg:px-10 hover:shadow-md shadow-stone-100/10 active:invert'
        href="/matthew-phillips-resume.pdf"
        target='_blank'
        rel="noopener noreferrer"
        download
      >
        my resume
        <Image className='w-4 dark:invert'
          src={assets.download_icon}
          alt='download icon'
        />
      </a>
    </div>
  )
}