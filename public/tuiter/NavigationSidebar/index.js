const NavigationSidebar = () => {
    return (`
    <div class="list-group">
        <a href="#"
           class="list-group-item list-group-item-action">
            <i class="fas fa-t"></i>
        </a>
        <a href="../home.html"
           class="list-group-item list-group-item-action">
            <i class="fas fa-home"></i>
            <span class="d-xl-inline-block d-none">Home</span>
        </a>
        <a href="../explore/index.html"
           class="list-group-item list-group-item-action active">
            <i class="fas fa-hashtag"></i>
            <span class="d-xl-inline-block d-none">Explore</span>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
            <i class="fas fa-bell"></i>
            <span class="d-xl-inline-block d-none">Notifications</span>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
            <i class="fas fa-envelope"></i>
            <span class="d-xl-inline-block d-none">Messages</span>
        </a>
        <a href="../bookmarks/index.html"
           class="list-group-item list-group-item-action">
            <i class="fas fa-bookmark"></i>
            <span class="d-xl-inline-block d-none">Bookmarks</span>
        </a>
        <a href="../bookmarks/index.html"
           class="list-group-item list-group-item-action">
            <i class="fas fa-list"></i>
            <span class="d-xl-inline-block d-none">Lists</span>
        </a>
        <a href="../bookmarks/index.html"
           class="list-group-item list-group-item-action">
            <i class="fas fa-user"></i>
            <span class="d-xl-inline-block d-none">Profile</span>
        </a>
        <a href="../bookmarks/index.html"
           class="list-group-item list-group-item-action">
            <i class="fas fa-ellipsis-h text-black bg-white rounded-circle"></i>
            <span class="d-xl-inline-block d-none">More</span>
        </a>
    </div>
    <div class="d-grid mt-2">
        <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
    </div>
 `);
}
export default NavigationSidebar;