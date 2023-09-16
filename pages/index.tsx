import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center sm:items-start justify-start sm:justify-end p-4 sm:p-24 ${inter.className}`}>
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
        <h1 className="text-black dark:text-white text-3xl grid place-items-center justify-start">Rhythm Garg</h1>

        <h2 className="header-text mt-8">Currently</h2>
        <div className="mt-8 content-column">
          <ul>
            <li>
              Stanford University
              <ul>
                <li className="project-bullet">
                  Bachelor&apos;s in Computer Science with a Minor in Math.
                </li>
                <li className="project-bullet">
                  Master&apos;s in Computer Science.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <h2 className="header-text mt-4">Previously</h2>
        <div className="mt-4 content-column">
          <ul>
            <li>
              Projects with <a href="https://miles.land/" className="underline">a good friend</a>
              <ul>
                <li className="project-bullet">
                  AI meeting notes app called <a href="https://www.paxo.ai/" className="underline">Paxo</a> that
                  we grew it to $20k in ARR. We didn&apos;t spend any money on advertising, and
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
            </li>
            <li className="mt-2">
              Google
              <ul>
                <li className="project-bullet">
                  Parallel compute infrastructure.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              Bridgewater Associates
              <ul>
                <li className="project-bullet">
                  Quantitative research for portfolio and trading analytics.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              Actively.ai
              <ul>
                <li className="project-bullet">
                  Second hire at an AI startup out of Stanford.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              TreeHacks
              <ul>
                <li className="project-bullet">
                  Co-Directed Stanford&apos;s largest annual hackathon!
                </li>
              </ul>
            </li>
            <li className="mt-2">
              Facebook
              <ul>
                <li className="project-bullet">
                  Machine learning for ads and growth.
                </li>
              </ul>
            </li>
            <li className="mt-2">
              Stanford AI Lab
              <ul>
                <li className="project-bullet">
                  Reinforcement learning for fraud detection.
                </li>
              </ul>
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
