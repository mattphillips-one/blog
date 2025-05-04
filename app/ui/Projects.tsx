import { fonts } from 'app/ui/fonts';
import { themes } from 'app/ui/themes';
import { ProjectItemsType } from 'app/types/types';
import ArrowIcon from 'app/components/arrow-icon';

const projectItems: ProjectItemsType = {
  "behr-news": {
    title: "BEHR News",
    desc: [
      `Business Environment Human Rights News is an in-beta news platform that compiles
      multi-source journalism and reporting on the nexus of business, environment, and
      human rights`,
      `Utilizes a custom search engine and web scraping to fetch relevant articles`,
    ],
    tech: "Typescript, Next.js",
    link: "https://behr-news-app.vercel.app"
  },

  "codescanner": {
    title: "CodeScanner",
    desc: [
      `A simple React Native app that scans product barcodes to display 
      information about the corporation that produces it, emphasizing corporate
      transparency and highlighting environmental and human rights abuses.`
    ],
    tech: "Typescript, React Native, Expo Router",
    link: "https://github.com/mattphillips-one/codescanner"
  },

  "noteClassifier": {
    title: "Clinical Note Classifier",
    desc: [`Worked with a team of three others to analyze the effectiveness of multiple 
            transformer-based natural language models to categorize unstructured clinical
            patient notes by specialization`,
            `Fine-tuned pre-trained BERT, BioBERT, RoBERTa, ELECTRA transformer models and an ensemble method
            and used multiple techniques to clean, process, and augment unstructured, natural language clinical patient notes`
          ],
    tech: "Python, PyTorch",
    link: "/clinical_note_classification.pdf"
  }
};


export default function Projects() {
  return (
    <section id='projects' className={`${themes.sectionBorder}`}>
      <h1 className={`${fonts.section_header}`}>
        Projects
      </h1>

      <div className='px-8'>
        {Object.entries(projectItems).map(([key, data]) => {
          return (
            <div className='flex flex-col py-4'
              key={key}
            >
              <a className='flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100'
                href={data.link}
                target='_blank'
                rel="noopener noreferrer"
              >
                <h1 className={`${fonts.lato} text-2xl font-base flex flex-row mr-1`}>
                  {data.title}
                </h1>
                <div className='text-stone-600 dark:text-white'><ArrowIcon /></div>
              </a>

              <ul className={`${fonts.montserrat_body} py-2`}>
                {data.desc.map((line, i) => {
                  return(
                    <li key={i} className='flex flex-row px-2'>
                      -
                      <p className='text-left ml-1'>
                        {line}
                      </p>
                    </li>
                  )
                })}
              </ul>
              <p className={`${fonts.roboto_body} text-stone-900 dark:text-stone-50 ml-5`}>
                {data.tech}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}