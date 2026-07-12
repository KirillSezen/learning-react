import PostItem from "./PostItem"


const PostList = ({title, posts, remove}) => {

	return(
		<div>
			<h1 className="text-4xl text-center my-5">{title}</h1>

			<div>
        <ul>
          {posts.map((post) => (
          <li key={post.id}><PostItem remove={remove} post={post}/></li>
        ))}
        </ul>
      </div>
		</div>
	)
}

export default PostList