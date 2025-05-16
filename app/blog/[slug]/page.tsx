import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { getBlogPosts } from "../util";
import ArrowLeft from "app/components/ui/arrow-left";
import { fonts } from "app/components/ui/fonts";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{slug:string}>}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.metadata.slug === slug);

  if (!post) {
    notFound(); // displays default 404 - not found in layout
  }

  return (
    <section className='px-0 lg: px-9'>
      <nav className='mb-4 text-neutral-600 dark:text-neutral-300 group inline-block'>
        <Link href='/blog' className={`${fonts.montserrat} font-light flex gap-2`}>
          <div className='transition group-hover:-translate-x-1 duration-400'>
            <ArrowLeft/>
          </div>
          <p>back</p>
        </Link>
      </nav>
      
      <div className={`${fonts.nunito_sans} prose`}>
        <Markdown
          remarkPlugins={[remarkGfm]}
        >
          {post.content}
        </Markdown>
      </div>
    </section>
    
  )
}