import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Post} from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postsService.getAllPosts()
            .then(value => value.slice(0, 10))
            .then(value => setPosts(value))
    }, [])
    return (
        <div>
            {
                posts && posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export {Posts};