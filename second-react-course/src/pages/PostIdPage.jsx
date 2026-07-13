import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PostService from "../API/PostService"
import { useFetching } from '../hooks/useFetching'
import Spinner from '../UI/Spinner'

const PostIdPage = () => {

	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching( async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})
	const [fetchPostCommentsById, isCommentsLoading, commentsError] = useFetching( async (id) => {
		const response = await PostService.getCommentsById(id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchPostCommentsById(params.id)
	}, [])

	return (
		<div>
			<h1 className='text-3xl text-center my-5 font-medium'>Страница поста № {params.id}</h1>


			{
				error ?
					<h1 className='text-2xl text-center text-red-400 m-5'>{error}</h1>
				:
					isLoading ?
						<Spinner/>
					:
						<div className='ml-2 text-xl font-medium'>
							{post.id}. {post.title}
						</div>
			}

			<h1 className='ml-2 text-xl my-2'>Комментарии:</h1>

			{
				commentsError ?
					<h1 className='text-2xl text-center text-red-400 m-5'>{error}</h1>
				:
					isCommentsLoading ?
						<Spinner/>
					:
						<div>
							<ul>
								{comments.map((comment) => {
									return(
										<li className='bg-teal-200 p-2 my-2 mx-3 rounded-2xl border-2 border-gray-400' key={comment.id}>{comment.id}. {comment.email} - {comment.body}</li>
									)
								})}
							</ul>
						</div>
			}
			
		</div>
	)
}

export default PostIdPage