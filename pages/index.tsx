import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-start justify-start p-4 sm:p-24 ${inter.className}`}>
      <Head>
        <title>Rhythm Garg</title>
        <meta
          name="description"
          content="Hi there! My name is Rhythm."
        />
      </Head>
      <div className="grid grid-cols-[100px,1fr] gap-x-8">
        <div className="rounded-full overflow-hidden w-24 h-24 grid place-items-center justify-start">
          <Image
            src="/rhythm_headshot_square.webp"
            alt="Rhythm Garg"
            width={64}
            height={64}
            layout="responsive"
            priority={true}
          />
        </div>
        <h1 className="text-black dark:text-white text-3xl grid place-items-center justify-start">Rhythm Garg 👋</h1>

        <h2 className="header-text mt-8">Currently</h2>
        <div className="mt-8 content-column">
          <ul>
            <li>
              OpenAI
            </li>
            <li>
              Stanford University (on leave)
            </li>
          </ul>
        </div>

        <h2 className="header-text mt-4">Previously</h2>
        <div className="mt-4 content-column">
          <ul>
            <li>
              Google
            </li>
            <li>
              Bridgewater Associates
            </li>
            <li>
              Actively.ai
            </li>
            <li>
              TreeHacks
            </li>
            <li>
              Facebook
            </li>
            <li>
              Stanford AI Lab
            </li>
          </ul>
        </div>

        <h2 className="header-text mt-4">Projects</h2>
        <div className="mt-4 content-column">
          <ul>
            Co-created with my good friend <a href="https://miles.land/" className="underline">Miles</a>:
            <li className="project-bullet">
              AI meeting notes app called <a href="https://www.paxo.ai/" className="underline">Paxo</a> that
              we grew to $20k in ARR. We didn&apos;t spend any money on advertising, and
              we ended up selling the business!
            </li>
            <li className="project-bullet">
              Semantic observability tool called Watchpost to give businesses a way
              to monitor the quality of their generative AI model outputs.
            </li>
            <li className="project-bullet">
              End-to-end encrypted location sharing app for family safety called <a href="https://heylatitude.com/" className="underline">Latitude</a>.
            </li>
          </ul>
        </div>

        <h2 className="header-text mt-4">Contact</h2>
        <div className="mt-4 content-column">
          <ul>
            <li className="underline"><a href="mailto:rhythmrrg@gmail.com">Email</a></li>
            <li className="underline"><a href="https://www.linkedin.com/in/rhythm-garg/">LinkedIn</a></li>
          </ul>
        </div>

      </div>
    </main>
  )
}
