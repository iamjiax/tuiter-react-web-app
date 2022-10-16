const PostListItem = (postItem) => {
    let card = '';
    if (postItem.article) {
        card = `
            <div class="card mt-2">
                <img src="${postItem.article.image}" class="card-img-top border-bottom border-light">
                <div class="card-footer bg-black">
                    <div class="card-title">
                        ${postItem.article.title}
                    </div>
                    <div class="card-text text-dark">
                        ${postItem.article.content}
                    </div>
                    <div class="card-link">
                         <a href="${postItem.article.link}" class="text-decoration-none text-dark">
                            <i class="fas fa-link"></i> ${postItem.article.linkText}
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else if (postItem.image) {
        card = `
            <div class="card mt-2">
                <img src="${postItem.image}" class="card-img">
            </div>
        `;
    }

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
                    ${card}
                    <div class="row mt-3 d-flex justify-content-between">
                        <div class="col-3">
                            <a href="#" class="text-decoration-none text-dark">
                                <i class="fa-regular fa-comment me-2"></i>${postItem.counts.comment}
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="#" class="text-decoration-none text-dark">
                                <i class="fas fa-retweet me-2"></i>${postItem.counts.retweet}
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="#" class="text-decoration-none text-dark">
                                <i class="fa-regular fa-heart me-2"></i>${postItem.counts.comment}
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="#" class="text-decoration-none text-dark">
                                <i class="fas fa-arrow-up-from-bracket"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
`);
}

export default PostListItem;