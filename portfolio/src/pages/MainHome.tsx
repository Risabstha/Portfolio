
import Home from './Home'

import SideNav from '../layout/SideNav'
import Nav from '../layout/Nav'

const MainHome = () => {
  return (
    <div className='h-[100rem]'>
      <div className='z-0'>

      
      <div className='hidden md:block'>  {/** making sideNav hidden for mobile view */}
        <SideNav/>
      </div>
        <Nav/>
        </div>
      <Home/>
    </div>
  )
}

export default MainHome
