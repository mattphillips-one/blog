import Header from 'app/components/Header';
import Projects from 'app/components/Projects';
import Contact from 'app/components/Contact';
import { cousine, roboto, nunito_sans } from 'app/components/fonts';

export default function Page() {
  return (
    <section className='flex flex-col gap-10 md:px-3 lg:gap-14'>
      
      <Header />

      <Projects />

      <Contact />
    </section>
  );
}