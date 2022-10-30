import PostListItem from "./PostListItem.js";
import postItems from "./postItems.js"

const PostList = () => {
    return (`
        <ul class="list-group">
            ${postItems.map(postItem => PostListItem(postItem)).join('')}
        </ul>
    `);
}

export default PostList;