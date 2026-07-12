

const PostItem = ({post, remove}) => {

	return (
		<div>

			<div className="post flex flex-row justify-between p-4 my-1 w-full border-teal-300 border-4 rounded-2xl bg-gray-500">

      	<div className="post-content flex flex-col items-start pl-2">

					<h1 className="text-white font-medium text-2xl">{post.id}. {post.title}</h1>

					<p className="text-white  text-xs">{post.body}</p>

        </div>

        <button onClick={() => remove(post)} className="pr-5 text-xl text-white cursor-pointer">Удалить</button>

      </div>

		</div>
	)
}

export default PostItem