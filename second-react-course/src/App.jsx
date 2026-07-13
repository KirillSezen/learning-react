import { useEffect, useState } from "react"
import Counter from "./components/counter"
import PostList from "./components/PostList"
import Input from "./components/Input"
import PostForm from "./components/PostForm"
import PostFilter from "./components/PostFilter"
import { usePosts } from "./hooks/usePosts"
import PostService from "./API/PostService"
import Spinner from "./UI/Spinner"
import { useFetching } from "./hooks/useFetchung"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <div className="flex flex-col ">

      <Counter/>

      <Input/>

      <PostFilter filter={filter} setFilter={setFilter}/>
      
      {postError ?
      <h1 className="my-10 text-center text-3xl font-medium">Произошла ошибка: {postError}</h1>
      :
      isPostsLoading ?
      <Spinner/>
      :
      <PostList remove={removePost} title='Список постов 1' posts={sortedAndSearchedPosts}/>
      }
              
      <PostForm create={createPost}/>

    </div>
    
  )
}

export default App