
import Home from './Home'

import NavLayout from '../layout/NavLayout'
import SideNav from '../layout/SideNav'
import Nav from '../layout/Nav'

const MainHome = () => {
  return (
    <div className=''>
        <SideNav/>
        <Nav/>
      <Home/>
    </div>
  )
}

export default MainHome
