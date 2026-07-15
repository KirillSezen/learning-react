import type { FC } from 'react'
import type { ITodo } from '../types/types'

interface TodoItemProps {
	todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	return (
		<div>
			<div style={{background: 'white', marginTop: '15px', color: 'black', borderRadius: '10px'}}>
					<div>
						Todo: {todo.id}. {todo.title} -- Completed: {todo.completed ? 'true' : 'false'}
					</div>
				</div>
		</div>
	)
}

export default TodoItem