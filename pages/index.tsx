import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-end p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-[1fr,2fr] gap-x-4">
        <div className="rounded-full overflow-hidden w-24 h-24 grid place-items-center justify-start">
          <Image
            src="/rhythm_headshot_square.png"
            alt="Rhythm Garg"
            width={64}
            height={64}
            layout="responsive"
          />
        </div>
        <h1 className="text-black dark:text-white text-3xl grid place-items-center justify-start">Rhythm Garg</h1>

        <h2 className="text-stone-500 dark:text-stone-500 mt-8">Currently</h2>
        <p className="mt-8">CS and Math at Stanford</p>
        <p></p>
        <p>Building with <a href="https://miles.land/" className="underline">Miles</a></p>

        <h2 className="text-stone-500 dark:text-stone-500 mt-4">Previously</h2>
        <p className="mt-4">Bridgewater</p>
        <p></p>
        <p>Google</p>
        <p></p>
        <p>Facebook</p>
        <p></p>
        <p>Stanford AI Lab</p>
        <p></p>
        <p>TreeHacks</p>
        <p></p>
        <p>Actively</p>

        <h2 className="text-stone-500 dark:text-stone-500 mt-4">Contact</h2>
        <p className="mt-4 underline"><a href="mailto:rhythmrrg@gmail.com">Email</a></p>
        <p></p>
        <p className="underline"><a href="https://www.linkedin.com/in/rhythm-garg/">LinkedIn</a></p>

      </div>
    </main>
  )
}
