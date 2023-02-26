const UserMenu = [
    {
        link: 'user.dashboard.index',
        icon: (<i className="bx bxs-home"></i>),
        text: 'Discover',

    },
    {
        link: 'user.dashboard.favourites',
        icon: (<i className="bx bxs-heart"></i>),
        text: 'Your Favourite',

    },
    {
        link: null,
        icon: (<i className="bx bxs-download"></i>),
        text: 'Downloads',

    },
    {
        link: "user.dashboard.chats",
        icon: (<i className="bx bxs-chat"></i>),
        text: 'Messages (102)',

    },
];

const UserOthers = [
    {
        link: "user.dashboard.subscription.index",
        icon: (<i className="bx bxs-wallet"></i>),
        text: 'Payments',

    },
    {
        link: null,
        icon: (<i className="bx bxs-bar-chart-square"></i>),
        text: 'Analytics',

    },
    {
        link: null,
        icon: (<i className="bx bxs-user"></i>),
        text: 'Your Profile',

    },
    {
        link: "logout",
        icon: (<i className="bx bx-log-out"></i>),
        text: 'Logout',
        method: 'post'
    },
];

const Admin = [
    {
        link: "admin.dashboard.movie.index",
        icon: (<i className='bx bxs-cog'></i>),
        text: 'Admin Panel',

    },
];

export { UserMenu, UserOthers, Admin };