import { useState } from "react"

const Input = () => {
	const [inputValue, setInputValue] = useState('')
	

	return(
		<div>
			<h1 className="mx-10 mt-10 text-3xl text-black">Вы ввели: {inputValue}</h1>

      <input className="p-2 m-10 bg-gray-200 w-fit border-teal-500 border-2 rounded-2xl" type="text" value={inputValue} placeholder="Write something: " onChange={event => setInputValue(event.target.value)}/>
		</div>
	)
}

export default Input