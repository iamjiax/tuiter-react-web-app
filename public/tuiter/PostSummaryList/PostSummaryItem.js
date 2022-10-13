const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-md-10 col-9">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="fw-bolder">
                        ${post.userName} <i class="fas fa-circle-check"></i>
                        <span class="text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="col-md-2 col-3 d-flex align-items-center justify-content-end">
                    <img class="float-end" style="border-radius: 1em; height:90px;" src="${post.image}" >
                </div>
            </div>
        </li>
`);
}

export default PostSummaryItem;