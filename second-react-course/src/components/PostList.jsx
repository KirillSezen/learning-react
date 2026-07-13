import PostItem from "./PostItem"
import { createRef } from "react";
import {  TransitionGroup, CSSTransition } from 'react-transition-group'

const PostList = ({title, posts, remove}) => {

	if(!posts.length) {
		return (
			<h1 className="my-10 text-center text-3xl font -bold">Пока что, посты отсутствуют</h1>
		)
	}

	return(
		<div>
			<h1 className="text-4xl text-center my-5">{title}</h1>

			<TransitionGroup>
          {posts.map((post, index) => {
						const itemRef = createRef()

						return (
							<CSSTransition nodeRef={itemRef} key={post.id} timeout={500} classNames='post'>
							<div ref={itemRef}><PostItem remove={remove} post={post} ref={itemRef} id={index + 1} title={post.title} body={post.body}/></div>
							</CSSTransition>
						)
					})}
			</TransitionGroup>
			
		</div>
	)
}

export default PostList