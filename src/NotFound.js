import { Link } from 'react-router-dom'
const NotFound = function () {
    return (
        <div className="not-found">
            <h2>PAGE COULD NOT BE FOUND..Sorry:(</h2>
            <Link to='/'>Back to the homepage...</Link>
        </div>
    )
}
export default NotFound