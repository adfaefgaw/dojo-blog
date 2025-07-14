import FuzzyText from './FuzzyText';
import DecryptedText from './DecryptedText';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const BlogList = ({blogs, title}) => {


    return (
        <div className="blog-list">
            <h2><FuzzyText children={title} /></h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2><DecryptedText text={blog.title} textColor="#f1356d"/></h2>
                        <p><DecryptedText text={blog.author} /></p>
                    </Link>                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;