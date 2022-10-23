import React from "react";
import postItemsArray from "./post-items.json";
import PostListItem from "./post-list-item";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                postItemsArray.map(postItem =>
                    <PostListItem
                        key={postItem._id} postItem={postItem}/>
                )
            }
        </ul>
    )
};
export default PostList;