import { useEffect, useState } from "react"
import { type ITodo } from "../types/types"
import axios from 'axios'
import List from "../components/List"
import TodoItem from "../components/TodoItem"

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

	const fetchTodos = async () => {
    try{
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

	useEffect(() => {
		fetchTodos()
		}, [])

	return (
		<div>
			<List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
		</div>
	)
}

export default TodoPage