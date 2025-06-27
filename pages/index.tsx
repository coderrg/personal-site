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
