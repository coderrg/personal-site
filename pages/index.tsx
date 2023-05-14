import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-end p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-2 items-center">
        <div className="rounded-full overflow-hidden w-24 h-24 mr-8 mb-8">
          <Image
            src="/images/rhythm_headshot_square.png"
            alt="Rhythm Garg"
            width={64}
            height={64}
            layout="responsive"
          />
        </div>
        <h1 className="text-3xl font-medium self-center">Rhythm Garg</h1>

        <p>Currently</p>
        <p>CS and Math at Stanford</p>

        <p></p>
        <p>Building with Miles</p>

        <p>Previously</p>
        <p>Bridgewater</p>

        <p></p>
        <p>Google</p>

        <p></p>
        <p>Facebook</p>

        <p>Contact</p>
        <p><a href="mailto:rhythmrrg@gmail.com">Email</a></p>

        <p></p>
        <p><a href="https://www.linkedin.com/in/rhythm-garg/">LinkedIn</a></p>
      </div>
    </main>
  )
}
