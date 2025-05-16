import MarkdownView from "react-showdown";
import { getBlogPosts } from "../util";
import ArrowLeft from "app/components/ui/arrow-left";
import { fonts } from "app/components/ui/fonts";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: Promise<{slug:string}>}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.metadata.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <nav className='flex flex-row-reverse justify-end mb-4 text-neutral-600 dark:text-neutral-300'>
        <Link href='/blog' className={`${fonts.roboto} font-light pl-2 block peer`}>back</Link>
        <div className='transition peer-hover:-translate-x-1 duration-400'>
          <ArrowLeft/>
        </div>
      </nav>
      
      <MarkdownView
        markdown={post.content}
      />
    </section>
    
  )
}