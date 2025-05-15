import ArrowIcon from "app/components/arrow-icon"

const links = {
  "github": "https://github.com/mattphillips-one",
  "linkedin": "https://linkedin.com/in/matthew-phillips107",
  "view source": "https://github.com/mattphillips-one/blog"
}

export default function Footer() {
  return (
    <footer className="mb-10">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {Object.entries(links).map(([key, value]) => (
          <li key={key}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={value}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{key}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
