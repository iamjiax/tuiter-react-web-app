import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuitItem}) => {
    const dispatch = useDispatch();
    const toggleLikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            liked: !tuit.liked,
            likes: tuit.liked ?
                tuit.likes - 1 : tuit.likes + 1
        }));
    }
    const likedClassName = tuitItem.liked ? "text-danger bi bi-heart-fill" : "bi bi-heart";
    return (
        <div className="row mt-3 d-flex justify-content-between">
            <div className="col-md-3 col-sm-3">
                <Link to="/tuiter" className="text-decoration-none text-dark">
                    <i className="bi bi-chat me-2"></i>{tuitItem.replies}
                </Link>
            </div>
            <div className="col-md-3 col-sm-3">
                <Link href="/tuiter" className="text-decoration-none text-dark">
                    <i className="bi bi-repeat me-2"></i>{tuitItem.retuits}
                </Link>
            </div>
            <div className="col-md-3 col-sm-4">
                <Link href="/tuiter"
                      className="text-decoration-none text-dark"
                      onClick={() => toggleLikeTuitHandler(tuitItem)}>
                    <i className={`me-2 ${likedClassName}`}></i>{tuitItem.likes}
                </Link>
            </div>
            <div className="col-md-2 col-sm-1">
                <Link href="/tuiter" className="text-decoration-none text-dark">
                    <i className="bi bi-upload"></i>
                </Link>
            </div>
        </div>
    );
};
export default TuitStats;