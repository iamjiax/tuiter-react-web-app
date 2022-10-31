import WhoToFollowList from "../who-to-follow-list";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div className="row">
            <div className="col-12 col-lg-8">
                <h4>Home</h4>
                <WhatsHappening/>
                <TuitsList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default HomeComponent;