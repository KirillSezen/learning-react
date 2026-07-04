import profilePic from './assets/card.jpg'

function Card() {
	return (
		<div className='my-9 mx-5 bg-amber-200 w-1/5 flex flex-col flex-wrap items-center text-center rounded-2xl shadow-xl max-w-60 min-w-40'>

			<img src={profilePic}  alt="default profile" className='p-2 w-[60%] h-auto rounded-full'></img>

			<h3 className='font-sans font-bold text-2xl'>Kirill Sezen</h3>

			<p className='font-sans font-medium text'>Learning react and searching for a job</p>

		</div>
	)
}

export default Card