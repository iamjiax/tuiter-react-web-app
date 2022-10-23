import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Routes, Route} from "react-router";
import {Navigate} from 'react-router-dom';

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="home"/>}/>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter