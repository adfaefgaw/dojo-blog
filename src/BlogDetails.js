import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import LoadingThreeDotsPulse from './loading';
import DecryptedText from "./DecryptedText";


const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <LoadingThreeDotsPulse />}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2><DecryptedText text={blog.title} textColor="#f1356d"/></h2>
                    <p><DecryptedText text={blog.author} /></p>
                    <div><DecryptedText text={blog.body} /></div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails; 