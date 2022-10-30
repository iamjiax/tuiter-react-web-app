import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-9 col-9">
                    <div className="text-dark">
                        {post.topic}
                    </div>
                    <div className="fw-bolder">
                        {post.userName} <i className="bi bi-check-circle-fill"></i>
                        <span className="text-dark"> - {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                </div>
                <div className="col-md-3 col-3 d-flex align-items-center justify-content-end">
                    <img alt="" className="float-right" style={{borderRadius: "1em", height: "80px"}}
                         src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;