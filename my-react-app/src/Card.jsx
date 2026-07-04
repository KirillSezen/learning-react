import profilePic from './assets/card.jpg'

function Card({name, age, topic, showAge}) {
	showAge !== true ? age='': age
	return (
		<div className='my-9 mx-5 bg-amber-200 w-1/5 flex flex-col  items-center text-center rounded-2xl shadow-xl max-w-60 min-w-40 max-h-44'>

			<img src={profilePic}  alt="default profile" className='p-2 w-[60%] h-auto rounded-full'></img>
			
			<h3 className='font-sans font-bold text-2xl'>{name} {age}</h3>

			<p className='font-sans font-medium text'>{topic}</p>

		</div>
	)
}

export default Card