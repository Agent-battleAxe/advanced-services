import React from 'react'
import { Header,FirstAbout,SecondAbout,OurTeam, Service, Contact} from '../components'
const Home = () => {
  return (
    <>
        <div>
            <Header />
        </div>
        <div>
            <FirstAbout />
            <SecondAbout />
        </div>
        <div>
            <OurTeam />
        </div>
        <div>
          <Service />
        </div>
        <div>
          <Contact />
        </div>
        
    </>
  )
}

export default Home