import Navbar from '@/components/Navbar'
import Image from 'next/image'
import HomeMenu from '@/components/HomeMenu'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeMenu />
      <Menu />
      <Footer />
    </>
  )
}
