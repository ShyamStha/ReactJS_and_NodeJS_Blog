import { useParams, useHistory } from 'react-router-dom'
import useFetch from './useFetch'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const BlogDetails = function () {
    const { id } = useParams()
    const { value: blog, isPending } = useFetch('/users/' + id)
    const history = useHistory()
    const handleClick = function () {
        fetch('/users/' + blog._id, {
            method: 'DELETE',
        }).then(function () {
            history.push('/')
        })
    }
    return (
        <div className="container">


            <div className="blog-details">
                {isPending && <div style={{
                    textAlign: 'center'
                }}>Loading...</div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by:{blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleClick} className="btn btn-danger">delete</button>
                    </article>
                )}

            </div>
        </div>
    )
}
export default BlogDetails