import {useState} from 'react'

function Footer() {

	const [number, setNumber] = useState(0);

	const increase = () => {
		setNumber(number + 1)
	}

	const reset = () => {
		setNumber(0)
	}
	
	const decrease = () => {
		setNumber(number - 1)
	}
	
	
	return (
		<footer className="flex flex-row justify-between bottom-0 bg-amber-200 pl-2 ">
			<p className="text-xl font-medium italic">&copy; {new Date().getFullYear()} Hello, world! website</p>
			
			<div className='bg-amber-400 w-fit h-full '>
				<h1 className='text-4xl text-center'>{number}</h1>
				<button className='text-2xl mx-1 p-1' onClick={increase}>+</button>
				<button className='text-2xl mx-1 p-1' onClick={reset}>reset</button>
				<button className='text-2xl mx-1 p-1' onClick={decrease}>-</button>
			</div>
		</footer>
	)
}

export default Footer