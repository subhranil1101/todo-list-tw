// import React from 'react'

const Navbar = () => {
  return (
      <nav className="flex justify-between items-center bg-slate-800 text-white p-2">
            <div className="logo">
                  <span className="font-bold text-xl mx-5 cursor-pointer">iTodo</span>
            </div>
            <ul className="flex gap-4 mx-10">
                  <li className="cursor-pointer hover:font-bold transition-all mx-1">Home</li>
                  <li className="cursor-pointer hover:font-bold transition-all mx-1">About us</li>
                  <li className="cursor-pointer hover:font-bold transition-all mx-1">Contact</li>
            </ul>
      </nav>
  )
}

export default Navbar
