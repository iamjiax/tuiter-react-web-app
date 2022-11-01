import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import WhoToFollowList from "../who-to-follow-list";
import {saveProfile} from "../reducers/profile-reducer";
import {useState} from "react";

const EditProfileComponent = () => {
    const initialProfile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const saveProfileHandler = () => {
        console.log("saveProfile");
        dispatch(saveProfile(curProfile));
    };
    const [curProfile, setCurProfile] = useState(initialProfile);

    return (
        <div className="row">
            <div className="col-12 col-lg-8">
                <div className="border border-1 border-thin">
                    <div className="row m-2">
                        <div className="col-1 d-flex align-items-center fs-5 fw-bold">
                            <Link to="/tuiter/profile" className="text-black"><i className="bi bi-x"></i></Link>
                        </div>
                        <div className="ms-2 col-md-3 col-4 d-flex align-items-center fs-5 fw-bold">
                            Edit profile
                        </div>
                        <div className="col-2 ms-auto">
                            <Link to="/tuiter/profile"
                                  className="btn btn-dark rounded-pill fw-bold float-end"
                                  onClick={saveProfileHandler}>
                                Save
                            </Link>
                        </div>
                    </div>

                    <div style={{height: "200px"}} className="overflow-hidden d-flex align-items-center">
                        <img alt=""
                             src={`/images/${curProfile.bannerPicture}`}
                             className="img-fluid w-100"/>
                    </div>

                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-3 ms-3" style={{marginTop: "-64px"}}>
                            <img alt="" src={`/images/${curProfile.profilePicture}`}
                                 className="border rounded-circle border-5 border-white"
                                 height="128px"/>
                        </div>
                    </div>

                    <form className="m-4">
                        <div className="form-group form-control mb-4">
                            <label htmlFor="firstName" className="text-secondary fs-6 mb-1">FirstName</label>
                            <br/>
                            <input id="firstName"
                                   type="text"
                                   onChange={(e) => setCurProfile({...curProfile, firstName: e.target.value})}
                                   value={curProfile.firstName}
                                   className="border-0 p-0 form-control-plaintext fs-5"
                            />
                        </div>
                        <div className="form-group form-control mb-4">
                            <label htmlFor="lastName" className="text-secondary fs-6 mb-1">LastName</label>
                            <br/>
                            <input id="lastName"
                                   type="text"
                                   onChange={(e) => setCurProfile({...curProfile, lastName: e.target.value})}
                                   value={curProfile.lastName}
                                   className="border-0 p-0 form-control-plaintext fs-5"
                            />
                        </div>
                        <div className="form-group form-control mb-4">
                            <label htmlFor="bio" className="text-secondary fs-6 mb-1">Bio</label>
                            <br/>
                            <textarea id="bio"
                                      type="textarea"
                                      onChange={(e) => setCurProfile({...curProfile, bio: e.target.value})}
                                      value={curProfile.bio}
                                      className="border-0 p-0 form-control-plaintext fs-5">
                            </textarea>
                        </div>
                        <div className="form-group form-control mb-4">
                            <label htmlFor="location" className="text-secondary fs-6 mb-1">Location</label>
                            <br/>
                            <input id="location"
                                   type="text"
                                   onChange={(e) => setCurProfile({...curProfile, location: e.target.value})}
                                   value={curProfile.location}
                                   className="border-0 p-0 form-control-plaintext fs-5"
                            />
                        </div>
                        <div className="form-group form-control mb-4">
                            <label htmlFor="website" className="text-secondary fs-6 mb-1">Website</label>
                            <br/>
                            <input id="website"
                                   type="text"
                                   onChange={(e) => setCurProfile({...curProfile, website: e.target.value})}
                                   value={curProfile.website}
                                   className="border-0 p-0 form-control-plaintext fs-5"
                            />
                        </div>
                        <div className="form-group mb-5">
                            <div className="text-secondary fs-6 mb-1">Birth date</div>
                            <input type="date"
                                   className="form-control fs-5"
                                   value={curProfile.dateOfBirth}
                                   onChange={(e) => setCurProfile({...curProfile, dateOfBirth: e.target.value})}
                            />
                        </div>
                        <div className="row mb-5 fs-5">
                            <div className="col-auto">Switch to professional</div>
                            <div className="col-1 ms-auto me-2"><i className="bi bi-arrow-right"></i></div>
                        </div>

                    </form>
                </div>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default EditProfileComponent;