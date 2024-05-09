import React from 'react'

const CommentBox = ({ img, name, tagName, tagLink, desc }) => {
    return (
        <div className="comment-slide" >
            <div className="comment-slide-title mt-3">
                <div className="comment-profile">
                    <div className="comment-img">
                        <img src={img} alt={name} />
                    </div>
                    <div className="comment-profile-name">
                        <p>{name}</p>
                        <a href={tagLink} target="_blank">{tagName}</a>
                    </div>
                </div>
                <div className="comment-instagram">
                    <a href="instagram:">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="comment-slide-decription">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default CommentBox