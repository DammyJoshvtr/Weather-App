import { Outlet } from 'react-router-dom'
import Nav  from '../components/nav'

const MainLayout = () => {
  return (
    <>
      <section>
        <Nav />
      </section>

      <section className='bg-gray-200'>
        <Outlet />
      </section>
    </>
  )
}

export default MainLayout