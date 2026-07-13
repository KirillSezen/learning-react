import React from "react"
import { useNavigate } from 'react-router'

export const PostItem = React.forwardRef(({post, remove, title, body}, ref) => {

	const router = useNavigate()

	return (
		<div ref={ref}>

			<div className="post flex flex-row justify-between p-4 my-1 w-full border-teal-300 border-4 rounded-2xl bg-gray-500">

      	<div className="post-content flex flex-col items-start pl-2">

					<h1 className="text-white font-medium text-2xl">{post.id}. {title}</h1>

					<p className="text-white  text-xs">{body}</p>

        </div>

				<div className="flex flex-col sm:flex-row justify-center gap-5">
					<button onClick={() => router(`/posts/${post.id}`)} className="pr-5 text-xl text-white cursor-pointer">Открыть</button>


        	<button onClick={() => remove(post)} className="pr-5 text-xl text-white cursor-pointer">Удалить</button>
				</div>

      </div>

		</div>
	)
})

export default PostItem