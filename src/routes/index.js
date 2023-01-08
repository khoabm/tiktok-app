import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import { HeaderOnly } from '~/Layout'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, defaultLayout: HeaderOnly },
    { path: '/search', component: Search, defaultLayout: null },

];
const privateRoutes = [];
export { publicRoutes, privateRoutes };