import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleLikeTuit} from "../reducers/tuits-reducer";

const TuitStats = ({tuitItem}) => {
    const dispatch = useDispatch();
    const toggleLikeTuitHandler = (id) => {
        dispatch(toggleLikeTuit(id));
    }
    const likedClassName = tuitItem.liked? "text-danger bi bi-heart-fill" : "bi bi-heart";
    return (
        <div className="row mt-3 d-flex justify-content-between">
            <div className="col-md-3 col-sm-3">
                <Link to="/tuiter/home" className="text-decoration-none text-dark">
                    <i className="bi bi-chat me-2"></i>{tuitItem.replies}
                </Link>
            </div>
            <div className="col-md-3 col-sm-3">
                <Link href="/tuiter/home" className="text-decoration-none text-dark">
                    <i className="bi bi-repeat me-2"></i>{tuitItem.retuits}
                </Link>
            </div>
            <div className="col-md-3 col-sm-4">
                <Link href="/tuiter/home"
                      className="text-decoration-none text-dark"
                      onClick={() => toggleLikeTuitHandler(tuitItem._id)}>
                    <i className={`me-2 ${likedClassName}`}></i>{tuitItem.likes}
                </Link>
            </div>
            <div className="col-md-2 col-sm-1">
                <Link href="/tuiter/home" className="text-decoration-none text-dark">
                    <i className="bi bi-upload"></i>
                </Link>
            </div>
        </div>
    );
};
export default TuitStats;