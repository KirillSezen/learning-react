import { Link } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../context'

const Navbar = () => {
	const {setIsAuth} = useContext(AuthContext)
	
	const signOut = () => {
		setIsAuth(false)
		localStorage.clear()
	}

	return (
		<div className='navbar h-12.5 w-full flex items-center justify-end gap-5 px-15 bg-gray-300'>
        <Link className='text-xl font-bold' to='/'>Main Page</Link>
        <Link className='text-xl font-bold' to='/about'>About Us</Link>
				<Link className='text-xl font-bold' to='/error'>Error</Link>
				<Link onClick={signOut}  className='text-xl font-bold text-gray-600' to='/login'>Sign Out</Link>
      </div>
	)
}

export default Navbar