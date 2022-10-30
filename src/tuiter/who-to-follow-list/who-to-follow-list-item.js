import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row d-flex">
                <div className="col-lg-2">
                    <img alt="" className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
                </div>
                <div className="col-lg-6 text-nowrap">
                    <div className="fw-bold">{who.userName}
                    <i className="bi bi-check-circle-fill ms-1"></i>
                    </div>
                    <div className="text-secondary">@{who.handle}</div>
                </div>
                <div className="col-xxl-3 col-lg-4 ms-auto">
                    <button className="btn btn-primary w-100 mt-2 rounded-pill fw-bold d-flex justify-content-center">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;

