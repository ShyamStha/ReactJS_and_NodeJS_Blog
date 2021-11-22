import { Link } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Bloglist = function ({ blogs }) {
    return (
        <div className="bloglists">
            {blogs.map((blog) => (
                <div className="blog-lookup" key={blog._id}>
                    <div className="card bg-light mb-3" style={{
                        width: '800px'
                    }}>
                        <div className="card-header">Blog</div>
                        <div className="card-body">
                            <Link to={`/users/${blog._id}`} className="bloglink">
                                <h3 className='card-title' style={{
                                    fontSize: '80px'
                                }}>{blog.title}</h3>
                                <p className='card-text'>Written by:{blog.author}</p>
                            </Link>
                        </div>
                    </div>


                </div>
            ))}
        </div>
    )
}
export default Bloglist