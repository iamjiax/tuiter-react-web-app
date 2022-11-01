import WhoToFollowList from "../who-to-follow-list";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {formatDate, formatMonth} from "../edit-profile/formatDate";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className="border border-1 border-thin">
                    <div className="row mb-2 ms-2">
                        <div className="col-1 d-flex align-items-center fs-5 fw-bold">
                            <Link to="/tuiter" className="text-black"><i className="bi bi-arrow-left"></i></Link>
                        </div>
                        <div className="ms-2 col-10">
                            <div className="row fs-5 fw-bold">{profile.firstName} {profile.lastName}</div>
                            <div className="row text-secondary">{profile.tweetsCount} Tweets</div>
                        </div>

                    </div>
                    <div style={{height: "200px"}} className="overflow-hidden d-flex align-items-center">
                        <img alt=""
                             src={`/images/${profile.bannerPicture}`}
                             className="img-fluid w-100"/>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-3 ms-3" style={{marginTop: "-64px"}}>
                            <img alt="" src={`/images/${profile.profilePicture}`}
                                 className="border rounded-circle border-5 border-white"
                                 height="128px"/>
                        </div>
                        <div className="col-md-3 col-4">
                            <Link to="/tuiter/edit-profile"
                                  className="btn btn-outline-dark btn-block rounded-pill fw-bold">
                                Edit profile</Link>
                        </div>
                    </div>
                    <div className="m-4">
                        <div className="fs-5 fw-bold">{profile.firstName} {profile.lastName}</div>
                        <div className="text-secondary">{profile.handle}</div>
                        <p className="text-black mt-2">{profile.bio}</p>
                        <div className="text-secondary mt-2">
                            <div className="d-inline-block me-3"><i className="bi bi-geo-alt"></i> {profile.location}
                            </div>
                            <div className="d-inline-block me-3"><i
                                className="bi bi-balloon"></i> Born {formatDate(profile.dateOfBirth)}</div>
                            <div className="d-inline-block"><i
                                className="bi bi-calendar3"></i> Joined {formatMonth(profile.dateJoined)}</div>
                        </div>
                        <div className="text-secondary mt-2">
                            <div className="d-inline-block me-3"><span
                                className="fw-bold text-black">{profile.followingCount}</span> Following
                            </div>
                            <div className="d-inline-block"><span
                                className="fw-bold text-black">{profile.followersCount}</span> Followers
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default ProfileComponent;