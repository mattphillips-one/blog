import Header from 'app/ui/Header';
import Projects from 'app/ui/Projects';
import { cousine, roboto, nunito_sans } from 'app/ui/fonts';

export default function Page() {
  return (
    <section className='flex flex-col gap-10 md:px-3 lg:gap-14'>
      
      <Header />

      <Projects />
    </section>
  );
}