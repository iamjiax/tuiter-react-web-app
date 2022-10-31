import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits);
    return (
        <ul className="list-group">
            {
                tuitsArray.map(tuitItem =>
                    <TuitItem
                        key={tuitItem._id} tuitItem={tuitItem}/>
                )
            }
        </ul>
    )
};
export default TuitsList;