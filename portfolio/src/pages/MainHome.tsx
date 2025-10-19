
import Home from './Home'

import SideNav from '../layout/SideNav'
import Nav from '../layout/Nav'
import Skills from './Skills'
import Projects from './Projects'
import Experiences from './Experiences'

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
    </div>
  )
}

export default MainHome
