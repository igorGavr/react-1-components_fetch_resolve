import React, {useEffect, useState} from 'react';
import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState(null)
    useEffect(async () => {
        const value = await commentsService.getAllComments()
        setComments(value)
    }, [])
    return (
        <div>
            {
                comments && comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};