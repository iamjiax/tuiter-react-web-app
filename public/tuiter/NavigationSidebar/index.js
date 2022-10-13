import NavSideBarItem from "./NavSideBarItem.js";
import bars from "./bars.js"

const NavigationSidebar = (active) => {
    return (`
        <div class="list-group">
            ${bars.map(bar => NavSideBarItem(bar, bar.name.toLowerCase() === active)).join('')}
        </div>
        <div class="d-grid mt-2">
            <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;