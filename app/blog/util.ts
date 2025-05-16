import fs from 'fs';

type Metadata = {
    title: string,
    author: string,
    date: string,
    slug: string
}

function parseMDX(fileContents: string) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContents);
    let frontMatterBlock = match![1];
    let content = fileContents.replace(frontmatterRegex, '').trim();
    let frontMatterLines = frontMatterBlock.trim().split('\n');
    let metadata: Partial<Metadata> = {};

    for (const line of frontMatterLines) {
        let [key, value] = line.split(': ');
        metadata[key] = value;
    }

    return ({metadata: metadata as Metadata, content});
}

export function getBlogPosts() {
    const path = 'app/blog/posts'
    
    let posts = fs.readdirSync(path).map((file) => {
        let rawContent = fs.readFileSync(`${path}/${file}`).toString();
        return parseMDX(rawContent);
    });

    return posts;
}