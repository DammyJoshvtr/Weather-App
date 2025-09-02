import React from 'react'
import { LayoutDashboard, MapPin, Settings } from 'lucide-react'

const Nav = () => {
  return (
    <nav className="flex justify-center items-center p-4 ">
      <section className="flex flex-row justify-center items-center rounded-md gap-6 p-2 bg-gradient-to-r from-[#536574] from-20% via-[#2b2d33] via-70% to-[#536574] to-90% w-2xl">
        <div className="rounded-md  flex justify-center items-center px-4 text-[#c9c9c9]">
          Weather App
        </div>

        <div className="h-8 w-8 flex justify-center items-center rounded-md hover:bg-black hover:text-white">
          <LayoutDashboard color='#c9c9c9' />
        </div>

        <div className="h-8 w-8 flex justify-center items-center rounded-md hover:bg-black hover:text-white">
          <MapPin color='#c9c9c9' />
        </div>

        <div className="h-8 w-8 flex justify-center items-center rounded-md hover:bg-black hover:text-white">
          <Settings color='#c9c9c9' />
        </div>
      </section>
    </nav>
  )
}

export default Nav
