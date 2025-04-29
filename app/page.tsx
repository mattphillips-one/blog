import Image from 'next/image';
import { assets } from 'assets/assets';
import { cousine, roboto, source_code_pro, nunito_sans } from 'app/ui/fonts';

export default function Page() {
  return (
    <section className='flex'>
      <div>
        <Image className='max-w-xl'
          src={assets.profile_pic}
          alt='Picture of me'
        />
      </div>
      <div className='flex flex-col justify-between mb-1'>
        <h1 className={`${nunito_sans.className} tracking-wide mt-1 text-3xl text-right mr-1`}>
          MATTHEW PHILLIPS
        </h1>

        <Buttons />

        <p className={`${roboto.className}  flex mb-4 ml-12 text-right text-sm/6`}>
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
      <div className='flex flex-row justify-end gap-4 mr-1'>
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
          href="/resume.pdf"
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