import React from 'react'
import { useParams } from 'react-router-dom';

function Post() {

    let { id } = useParams();

    return (
        <div className="postPage">
            {id}
        </div>
    )
}

export default Post