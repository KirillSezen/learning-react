import { useState } from "react"
import Counter from "./components/counter"
import PostList from "./components/PostList"

function App() {
  const [inputValue, setInputValue] = useState('')
  const [posts, setPosts] = useState([
    {id:1, title:'Java Script', body:'JS description'},
    {id:2, title:'Java Script', body:'JS description'},
    {id:3, title:'Java Script', body:'JS description'},
    {id:4, title:'Java Script', body:'JS description'},
  ])

  return (
    <div className="flex flex-col ">

       <Counter/>

      <h1 className="mx-10 mt-10 text-3xl text-black">Вы ввели: {inputValue}</h1>

       <input className="p-2 m-10 bg-gray-200 w-fit border-teal-500 border-2 rounded-2xl" type="text" value={inputValue} placeholder="Write something: " onChange={event => setInputValue(event.target.value)}/>

       <PostList title='Список постов 1' posts={posts}/>
       <PostList title='Список постов 2' posts={posts}/>

    </div>
    
  )
}

export default App
