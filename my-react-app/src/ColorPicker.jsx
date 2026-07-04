import { useState } from "react"

export default function ColorPicker() {

	const [color, setColor] = useState('#ffb900')

	function handlePickColor(event) {
		setColor(event.target.value)
	}

	return (
		<div className="flex flex-col items-center h-90 mt-3 w-auto">

			<h2 className="text-4xl font-bold">Pick a color</h2>

			<div style={{backgroundColor: color}} className='w-1/3 h-[70%] flex justify-center items-center rounded-2xl shadow-xl'>
				<p className="text-2xl font-bold">Your color: {color}</p>
			</div>

			<input className="mt-2 w-1/10 " onChange={handlePickColor} value={color} type="color"/>

		</div>
	)
}
