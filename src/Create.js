import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Create = function () {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Santosh')
    const history = useHistory()
    const handleSubmit = function (e) {
        e.preventDefault()
        const blog = { title, body, author }
        fetch('/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(function () {
            history.push('/')
        })

    }
    return (
        <div className="container">
            <div className='create'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <label htmlFor="blogtitle">Blog Title:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control"
                            id="blogtitle"
                            aria-describedby="emailHelp"
                            placeholder="Enter your blog title"
                        />
                    </div>
                    <label htmlFor="blogbody">Blog body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="form-control"
                        id="blogbody"
                        placeholder="Enter the body here"
                        style={{

                            height: '200px'

                        }}
                    ></textarea>
                    <label htmlFor='blogauthor'>Blog Author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="form-control"
                        id="blogauthor"
                        placeholder="Choose author"

                    >
                        <option value="Santosh">Santosh</option>
                        <option value="Ram">Ram</option>
                        <option value="Hari">Hari</option>
                        <option value="Sita">Sita</option>
                        <option value="Ramesh">Ramesh</option>
                        <option value="Priya">Priya</option>

                    </select>
                    <button className="btn btn-success" style={{
                        marginTop: '20px'
                    }}>Add Blog</button>
                </form>
            </div>
        </div>
    )
}
export default Create

