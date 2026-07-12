import { useState } from "react"

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''})

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {...post, id: Date.now()}

		create(newPost)
		setPost({title: '', body: ''})
	}
		 
	return(
		<div className="flex flex-col">
			<input className="p-2 m-2 bg-gray-200 w-fit border-teal-500 border-2 rounded-2xl" type="text" placeholder="Title: " value={post.title} onChange={event => setPost({...post, title: event.target.value})}/>
      <input className="p-2 m-2 bg-gray-200 w-fit border-teal-500 border-2 rounded-2xl" type="text" placeholder="Body: " value={post.body} onChange={event => setPost({...post, body: event.target.value})}/>
      <button onClick={addNewPost} className="w-20 ml-15 my-2 rounded-2xl border-2 border-teal-500 ">Add</button>
		</div>
	)
}

export default PostForm