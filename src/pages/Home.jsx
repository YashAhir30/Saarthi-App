import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Doctor from '../components/Doctor'
import Homoeopathy from '../components/Homeopathy'
import Banner from '../components/Banner'

const home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <Doctor />
      <Homoeopathy/>
    </div>
  )
}

export default home
