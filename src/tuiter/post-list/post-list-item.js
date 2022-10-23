import React from "react";
import {formatText} from "./format-text"

const PostListItem = ({postItem}) => {
    let card;
    if (postItem.article) {
        card = (
            <div className="card mt-2">
                <img alt="" src={`/tuiter/images/${postItem.article.image}`}
                     className="card-img-top border-bottom border-light"/>
                <div className="card-footer bg-black">
                    <div className="card-title">
                        {postItem.article.title}
                    </div>
                    <div className="card-text text-dark">
                        {postItem.article.content}
                    </div>
                    <div className="card-link">
                        <a href={postItem.article.link} className="text-decoration-none text-dark">
                            <i className="bi bi-link-45deg"></i> {postItem.article.linkText}
                        </a>
                    </div>
                </div>
            </div>
        );
    } else if (postItem.image) {
        card = (
            <div className="card mt-2">
                <img alt="" src={`/tuiter/images/${postItem.image}`} className="card-img"/>
            </div>
        );
    }

    return (
        <li className="list-group-item bg-black">
            <div className="row p-1 d-flex justify-content-between">
                <div className="col-1">
                    <img alt="" className="rounded-circle" style={{height: "60px"}}
                         src={`/tuiter/images/${postItem.author.avatar}`}/>
                </div>
                <div className="col-10 ps-md-0">
                    <div className="row d-flex justify-content-between">
                        <div className="col-9">
                            <span className="fw-bolder"> {postItem.author.userName}</span> <i
                            className="bi bi-check-circle-fill"></i>
                            <span className="text-dark"> @{postItem.author.handle} · {postItem.time}</span>
                        </div>
                        <div className="col-1 fw-bolder text-dark">
                            <i className="bi bi-three-dots "></i>
                        </div>
                    </div>
                    <div className="mt-1">
                        {formatText(postItem.content)}
                    </div>
                    {card}
                    <div className="row mt-3 d-flex justify-content-between">
                        <div className="col-3">
                            <a href="javascript:void(0)" className="text-decoration-none text-dark">
                                <i className="bi bi-chat me-2"></i>{postItem.counts.comment}
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="javascript:void(0)" className="text-decoration-none text-dark">
                                <i className="bi bi-repeat me-2"></i>{postItem.counts.retweet}
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="javascript:void(0)" className="text-decoration-none text-dark">
                                <i className="bi bi-heart me-2"></i>{postItem.counts.comment}
                            </a>
                        </div>
                        <div className="col-2">
                            <a href="javascript:void(0)" className="text-decoration-none text-dark">
                                <i className="bi bi-upload"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );

};

export default PostListItem;