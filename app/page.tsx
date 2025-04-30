import Header from 'app/ui/Header';
import { assets } from 'assets/assets';
import { cousine, roboto, nunito_sans } from 'app/ui/fonts';

export default function Page() {
  return (
    <section className='flex flex-col gap-10 md:px-3 lg:gap-14'>
      
      <Header />

      <section className='border-t-1 border-stone-400'>
        <h1 className={`${cousine.className} text-2xl font-normal text-stone-800 ml-10 mt-3 tracking-tight`}>
          Projects
        </h1>

      </section>
    </section>
  )
}