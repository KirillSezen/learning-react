import { useEffect, useRef, useState } from "react"
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
import useObserver from "../hooks/useObserver"

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef()

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])

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

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1))

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])


  return (
    <div className="flex flex-col ">

      <Counter/>

      <Input/>

      <PostForm create={createPost}/>

      <PostFilter filter={filter} setFilter={setFilter}/>
      
      <select name="limitSelect" className="text-white text-xl bg-gray-400" value={limit} onChange={(event) => setLimit(event.target.value)}>
        <option disabled value=''>кол-во элементов на странице</option>
        <option className="text-white text-xl" value={3} name='3'>3</option>
        <option value={5} name='5'>5</option>
        <option value={10} name='10'>10</option>
      </select>

      {postError ?
      <h1 className="my-10 text-center text-3xl font-medium">Произошла ошибка: {postError}</h1>
      :
      isPostsLoading && <Spinner/> }

      <PostList remove={removePost} title='Список постов 1' posts={sortedAndSearchedPosts}/>

      <div ref={lastElement} className="h-5">
        
      </div>

      <Pagination totalPages={totalPages} changePage={changePage}/>

    </div>
    
  )
}

export default Posts