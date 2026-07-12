import { useState } from "react"
import Counter from "./components/counter"
import PostList from "./components/PostList"
import Input from "./components/Input"
import PostForm from "./components/PostForm"

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Java Script', body:'JS description'},
    {id:2, title:'Java Script', body:'JS description'},
    {id:3, title:'Java Script', body:'JS description'},
    {id:4, title:'Java Script', body:'JS description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="flex flex-col ">

      <Counter/>

      <Input/>

      {posts.length
        ? <PostList remove={removePost} title='Список постов 1' posts={posts}/>
        : <h1 className="my-10 text-center text-3xl font -bold">Пока что, посты отсутствуют</h1>
      }

      

      <PostForm create={createPost}/>

    </div>
    
  )
}

export default App
