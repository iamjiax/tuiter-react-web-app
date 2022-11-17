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
    const toggleDislikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            disliked: !tuit.disliked,
            dislikes: tuit.disliked ?
                tuit.dislikes - 1 : tuit.dislikes + 1
        }));
    }

    const likedClassName = tuitItem.liked ? "text-danger bi bi-heart-fill" : "bi bi-heart";
    const dislikedClassName = tuitItem.disliked ? "text-black bi bi-hand-thumbs-down-fill" : "bi bi-hand-thumbs-down";
    return (
        <div className="row mt-3 d-flex justify-content-between">
            <div className="col-md-2 col-sm-3">
                <Link to="/tuiter" className="text-decoration-none text-dark">
                    <i className="bi bi-chat me-1"></i>{tuitItem.replies}
                </Link>
            </div>
            <div className="col-md-2 col-sm-3">
                <Link href="/tuiter" className="text-decoration-none text-dark">
                    <i className="bi bi-repeat me-1"></i>{tuitItem.retuits}
                </Link>
            </div>
            <div className="col-md-2 col-sm-3">
                <Link href="/tuiter"
                      className="text-decoration-none text-dark"
                      onClick={() => toggleLikeTuitHandler(tuitItem)}>
                    <i className={`me-1 ${likedClassName}`}></i>{tuitItem.likes}
                </Link>
            </div>
            <div className="col-md-2 col-sm-3">
                <Link href="/tuiter"
                      className="text-decoration-none text-dark"
                      onClick={() => toggleDislikeTuitHandler(tuitItem)}>
                    <i className={`me-1 ${dislikedClassName}`}></i>{tuitItem.dislikes}
                </Link>
            </div>
            <div className="col-md-1 col-sm-1">
                <Link href="/tuiter" className="text-decoration-none text-dark">
                    <i className="bi bi-upload"></i>
                </Link>
            </div>
        </div>
    );
};
export default TuitStats;