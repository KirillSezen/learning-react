
function Header() {
	 return (
    <header className='flex flex-row- bg-amber-200 h-fit justify-between'>
      <h1 className="ml-5 py-5 w-1/4 h-1/2  text-3xl text-left font-semibold text-amber-800">Hello, world!</h1> 
			<nav className=" flex justify-between items-center gap-5 mr-5 w-auto ">
				<a className="text-xl font-bold text-amber-800 hover:text-amber-700 transition-color duration-300 active:text-amber-600" href="#explore">Explore</a>
				<a className="text-xl font-bold text-amber-800 hover:text-amber-700 transition-color duration-300 active:text-amber-600" href="#links">Links</a>
				<a className="text-xl font-bold text-amber-800 hover:text-amber-700 transition-color duration-300 active:text-amber-600" href="#comments">Comments</a>
				<a className="text-xl font-bold text-amber-800 hover:text-amber-700 transition-color duration-300 active:text-amber-600" href="#contact">Contact</a>
			</nav>
    </header>
  )
}

export default Header