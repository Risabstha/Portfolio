
import Home from './Home'

import SideNav from '../layout/SideNav'
import Nav from '../layout/Nav'
import Skills from './Skills'
import Projects from './Projects'
import Experiences from './Experiences'
import Education from './Education'

const MainHome = () => {
  return (
    <div className=''>
      <div className='hidden md:block'>  {/** making sideNav hidden for mobile view */}
        <SideNav/>
      </div>
        <Nav/>
      <Home/>
      <Skills/>
      <Projects/>
      <Experiences/>
      <Education/>
    </div>
  )
}

export default MainHome
