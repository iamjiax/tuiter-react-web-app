import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list";
import {Link} from "react-router-dom";

const ExploreComponent = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className="row">
                    <div className="col-11 position-relative">
                        <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5"/>
                        <span className="position-absolute wd-search-tuiter">
                        <i className="bi bi-search"></i>
                    </span>
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-end">
                        <i className="bi bi-gear-fill fs-5 text-primary"></i>
                    </div>
                </div>

                <ul className="nav mt-2 mb-2 nav-tabs">
                    <li className="nav-item">
                        <Link to="/tuiter/explore" className="nav-link active">For You</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tuiter/explore" className="nav-link">Trending</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tuiter/explore" className="nav-link">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tuiter/explore" className="nav-link">Sports</Link>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <Link to="/tuiter/explore" className="nav-link">Entertainment</Link>
                    </li>
                </ul>

                <div className="position-relative">
                    <img alt="" src="/images/starship.jpg" className="w-100"/>
                    <h2 className="position-absolute bottom-0 left-0 text-white ps-3">
                        SpaceX Starship</h2>
                </div>
                <PostSummaryList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4">
                <WhoToFollowList/>
            </div>
        </div>

    );
};
export default ExploreComponent;