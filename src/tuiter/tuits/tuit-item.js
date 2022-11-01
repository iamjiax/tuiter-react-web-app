import TuitStats from "./tuit-stats"
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = ({tuitItem}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row p-1 d-flex justify-content-between">
                <div className="col-1">
                    <img alt="" className="rounded-circle" style={{height: "60px"}}
                         src={`/images/${tuitItem.image}`}/>
                </div>
                <div className="col-10 ps-md-0">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-9 col-10">
                            <span className="fw-bolder"> {tuitItem.userName}</span> <i
                            className="bi bi-check-circle-fill text-primary m-1"></i>
                            <span className="text-dark"> {tuitItem.handle} · {tuitItem.time}</span>
                        </div>
                        <div className="col-1 fw-bolder text-dark">
                            <i className="bi bi-x-lg"
                               onClick={() => deleteTuitHandler(tuitItem._id)}></i>
                        </div>
                    </div>
                    <div className="mt-1">
                        {tuitItem.tuit}
                    </div>
                    <TuitStats tuitItem={tuitItem}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;