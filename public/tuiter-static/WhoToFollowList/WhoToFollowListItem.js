const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row d-flex">
                <div class="col-lg-2">
                    <img src="../images/${who.avatarIcon}" class="rounded-circle" height="50px"/>
                </div>
                <div class="col-lg-6 text-nowrap">
                    <div class="fw-bolder">
                        ${who.userName} <i class="fas fa-circle-check"></i>
                    </div>
                    <div class="text-secondary">
                        @${who.handle}
                    </div>
                </div>
                <div class="col-xxl-3 col-lg-4 ms-auto">
                    <button class="btn btn-primary w-100 mt-2 rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;