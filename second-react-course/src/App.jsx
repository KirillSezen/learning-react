import { useMemo, useState } from "react"
import Counter from "./components/counter"
import PostList from "./components/PostList"
import Input from "./components/Input"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"

function App() {
  const [posts, setPosts] = useState([
    {id:1, title:'Alphabet', body:'A description'},
    {id:2, title:'Sheet', body:'B description'},
    {id:3, title:'Notebook', body:'C description'},
    {id:4, title:'Java Script', body:'D description'},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }

    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])

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

      <PostFilter filter={filter} setFilter={setFilter}/>

      <PostList remove={removePost} title='Список постов 1' posts={sortedAndSearchedPosts}/>
        
      <PostForm create={createPost}/>

    </div>
    
  )
}

export default App
