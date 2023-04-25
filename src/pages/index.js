import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import TransitionEffect from '@/TransitionEffect/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <TransitionEffect />
    <main>
      <h1>vinayak tavatam</h1>
      <HeroSection/>
    </main>
    </>
  )
}
