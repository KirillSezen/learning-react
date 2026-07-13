import { Link } from 'react-router'

const Navbar = () => {
	return (
		<div className='navbar h-12.5 w-full flex items-center justify-end gap-5 px-15 bg-gray-300'>
        <Link className='text-xl font-bold' to='/'>Main Page</Link>
        <Link className='text-xl font-bold' to='/about'>About Us</Link>
				<Link className='text-xl font-bold' to='/error'>Error</Link>
      </div>
	)
}

export default Navbar