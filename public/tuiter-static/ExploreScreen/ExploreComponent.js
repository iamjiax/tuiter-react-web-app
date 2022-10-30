import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
            <!-- search field and cog -->
            <div class="col-11">
                <div class="position-relative">
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <span class="position-absolute wd-search-tuiter">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div class="col-1 d-flex align-items-center justify-content-end">
                <i class="fas fa-cog fa-2x text-primary"></i>
            </div>
        </div>
        
        <ul class="nav mt-2 mb-2 nav-tabs">
            <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="#">
                    For You
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    Trending
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    News
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1">
                    Sports
                </a>
            </li>
            <li class="nav-item d-none d-md-inline-block">
                <a class="nav-link" href="#" tabindex="-1">
                    Entertainment
                </a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="position-relative">
            <img src="../images/starship.jpeg" width="100%"/>
            <h2 class="position-absolute bottom-0 left-0 text-white ps-3">SpaceX's Starship</h2>
        </div>
        <!-- posts -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
