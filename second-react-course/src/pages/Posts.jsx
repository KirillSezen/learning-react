import { useEffect, useState } from "react"
import Counter from "../components/Counter"
import PostList from "../components/PostList"
import Input from "../components/Input"
import PostForm from "../components/PostForm"
import PostFilter from "../components/PostFilter"
import { usePosts } from "../hooks/usePosts"
import PostService from "../API/PostService"
import Spinner from "../UI/Spinner"
import { useFetching } from "../hooks/useFetching"
import { getPagesCount } from "../utils/pages"
import Pagination from "../UI/Pagination"

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)

    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(() => {
    fetchPosts()
  }, [page])


  return (
    <div className="flex flex-col ">

      <Counter/>

      <Input/>

      <PostForm create={createPost}/>

      <PostFilter filter={filter} setFilter={setFilter}/>
      
      {postError ?
      <h1 className="my-10 text-center text-3xl font-medium">Произошла ошибка: {postError}</h1>
      :
      isPostsLoading ?
      <Spinner/>
      :
      <PostList remove={removePost} title='Список постов 1' posts={sortedAndSearchedPosts}/>
      }

      <Pagination totalPages={totalPages} changePage={changePage}/>

    </div>
    
  )
}

export default Posts