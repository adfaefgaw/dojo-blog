import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import LoadingThreeDotsPulse from './loading';
import LetterGlitch from './background';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <LoadingThreeDotsPulse />}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/>}
        </div>
      );
}
 
export default Home;