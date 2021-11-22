import Bloglist from './Bloglist'
import useFetch from './useFetch'
const Home = function () {
    const { value: blogs, isPending } = useFetch('/users')
    return (
        <div className="content">
            {isPending && <div style={{
                textAlign: 'center'
            }}>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} />}

        </div>
    )
}
export default Home