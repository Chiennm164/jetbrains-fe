import Home from "../pages/Home";
import Academy from "../pages/Academy";
import AllProductsPack from "../pages/AllProductsPack";
import Busines from "../pages/ForresterTei";
import Contact from "../pages/Contact";
import Datalore from "../pages/Datalore";
import Download from "../pages/Download";
import Fleet from "../pages/Fleet";
import ForresterTei from "../pages/ForresterTei";
import RemoveDev from "../pages/RemoveDev";
import Space from "../pages/Space";
import YouTrack from "../pages/YouTrack";

const publicRoute = [
     { path: '/', component: Home },
     { path:'/academy' ,component:Academy},
     { path:'/all-products-pack' ,component:AllProductsPack},
     { path:'/busines' ,component:Busines},
     { path:'/contact' ,component:Contact},
     { path:'/datalore' ,component:Datalore},
     { path:'/download' ,component:Download},
     { path:'/fleet' ,component:Fleet},
     { path:'/forrester-tei' ,component:ForresterTei},
     { path:'/remove-dev' ,component:RemoveDev},
     { path:'/space' ,component:Space},
     { path:'/you-track' ,component:YouTrack},



 ]
const privateRoute = []
export { publicRoute, privateRoute }
