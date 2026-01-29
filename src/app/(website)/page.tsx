import React from 'react'
import HomeHero from './_components/HomeHero'
import HomeHeroTwo from './_components/HomeHeroTwo'
import HomeHeroThree from './_components/HomeHeroThree'
import HomeHeroFour from './_components/HomeHeroFour'

function page() {
  return (
    <div>
        <HomeHero />
        <HomeHeroTwo />
        <HomeHeroThree />
        <HomeHeroFour />
    </div>
  )
}

export default page