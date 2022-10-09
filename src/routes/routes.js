import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Message from '~/pages/Message';
import UserProfile from '~/pages/UserProfile';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home }, 
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: Upload },
    { path: config.routes.search, component: Search},
    { path: config.routes.message, component: Message, layout: Message},
    { path: config.routes.userProfile, component: UserProfile },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };