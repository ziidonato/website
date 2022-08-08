import type { NextPage } from 'next'
import { useScroll } from 'framer-motion'
import Intro from "components/views/Intro";
import AboutMe from 'components/views/AboutMe';

const Home: NextPage = () => {
  const scrollY = useScroll();

  return (
    <>
      <Intro />
      <AboutMe />
    </>
  )
}

export default Home
