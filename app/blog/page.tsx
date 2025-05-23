import Link from 'next/link';
import { fonts } from "app/components/ui/fonts";
import { getBlogPosts } from "app/blog/util";


export default function Blog() {
  const posts = getBlogPosts();

  return (
    <>
      <h1 className={`${fonts.nunito_sans} text-xl pb-5 border-b-1 border-neutral-300`}>BLOG</h1>

      <div className='flex flex-col md:pl-8 divide-y-1 divide-neutral-500 '>
        {posts.map(({ metadata }) => (
          <div key={metadata.title} className='flex flex-col md:flex-row items-baseline gap-1 md:gap-10 py-8 group'>
            <p className={`${fonts.montserrat} text-nowrap text-neutral-600`}>{metadata.date}</p>
            <div className='group-hover:translate-x-1 duration-400'>
              <Link className={`${fonts.nunito_sans} text-xl`}
                href={`blog/${metadata.slug}`}
              >{metadata.title}</Link>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
}