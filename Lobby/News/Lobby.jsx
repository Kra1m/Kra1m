import React, { useState, useEffect } from 'react';
import style from './Lobby.module.css'
import Bloglist from './BlogList';


function Lobby(){
   const [blogs, setBlogs] = useState(null);

   /*
   const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
   }*/

   useEffect(() =>{
      fetch('http://localhost:4000/blogs')
      .then(res => {
         return res.json();
      })
      .then(data => {
         setBlogs(data)
      });
   }, []);

   return(
      <div className={style.blogs}>
         {blogs  && <Bloglist blogs={blogs} title="News"/>}
     </div>
    )
}

export default Lobby