import React from "react";
import { useSelector } from "react-redux";

const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPost = posts.map(post => (
        <article className="post-excerpt" key={post.id} >
            <h2>{post.title}</h2>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            
        </article>
    ))

    return (
        <section className="posts-list">
           <h2>Posts</h2>
           {renderedPost}
        </section>
    )
}
export default PostsList;