import React, { useRef, useState, type FC } from 'react'

const EventsExample: FC = () => {
	const [value, setValue] = useState('')

	const inputRef = useRef<HTMLInputElement>(null)

	return (
		<div>
			<input type='text' value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} placeholder='управляемый'/>

			<input type='text' ref={inputRef} placeholder='не управляемый'/>

			<button onClick={(event: React.MouseEvent<HTMLButtonElement>) => console.log(inputRef.current?.value)}>Log</button>
		</div>
	)
}

export default EventsExample