import React from "react";
import PostSummaryList from "../post-summary-list";
import PostList from "../post-list";

const HomeComponent = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-7">
                <PostList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-5">
                <PostSummaryList/>
            </div>
        </div>
    );
}
export default HomeComponent;