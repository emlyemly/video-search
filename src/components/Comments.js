import React, { useState, useEffect } from 'react'
import { commentsAPI } from '../api/youtube'

const Comments = ({ video }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!video) {
            return;
        }

        console.log(video.id.videoId);
        getComments(video.id.videoId);
    }, [video]);

    const getComments = async (videoId) => {
        const response = await commentsAPI(videoId).get('', {}, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        });

        console.log(response.data.items)
        setComments(response.data.items);
    }

    const getCommentsHtml = () => comments.map(comment => {
        return (
            <div className='ui dividing header' key={comment.id}>
                <div className='comment'>
                    <div className='avatar'>
                        <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}></img>
                    </div>
                    
                    <div className='content'>
                        <a className='author' href='/'>{comment.snippet.topLevelComment.snippet.authorDisplayName}</a>
                        <div className='metadata'>
                            <span className='date'>{comment.snippet.topLevelComment.snippet.updatedAt}</span>
                        </div>
                    </div>

                    <div className='text'>{comment.snippet.topLevelComment.snippet.textOriginal}</div>
                </div>
            </div>
        )
    });

    return (
        <div className='ui comments'>
            {getCommentsHtml()}
        </div>
    )
}

export default Comments
