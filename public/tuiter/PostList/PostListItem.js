const PostListItem = (postItem) => {
    return (`
<li class="list-group-item bg-black">
    <div class="row p-1 d-flex justify-content-between">
        <div class="col-1">
            <img class="rounded-circle" style="height: 60px" src="${postItem.author.avatar}">
        </div>
        <div class="col-10 ps-md-0">
            <div class="row d-flex justify-content-between">
                <div class="col-9">
                    <span class="fw-bolder"> ${postItem.author.userName}</span> <i class="fas fa-circle-check"></i>
                    <span class="text-dark"> @${postItem.author.handle} · ${postItem.time}</span>
                </div>
                <div class="col-1 fw-bolder text-dark">
                    <i class="fas fa-ellipsis-h "></i>
                </div>
            </div>
            <div class="mt-1">
                ${postItem.content}
            </div>
            <div class="card mt-2">
                <img src="${postItem.article.image}" class="card-img-top">
                <div class="card-body">
             
                </div>
                <div class="card-footer">
                
                </div>
            </div>
        </div>
    </div>
</li>
`);
}

export default PostListItem;