const NavSideBarItem = (item, isActive) => {
    let active = isActive? 'active' : '';
    return (`
        <a href=${item.link}
           class="list-group-item list-group-item-action ${active}">
            <i class="${item.icon}"></i>
            <span class="d-xl-inline-block d-none">${item.name}</span>
        </a>
    `);
}

export default NavSideBarItem;