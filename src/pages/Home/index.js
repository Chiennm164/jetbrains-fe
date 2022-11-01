import Header from "../../component/Layout/components/Header";
import Body from "../../component/Layout/components/Body";
import './home.scss'
function Home() {
     return (
          <div>
               <header id="page__header">
                    <Header />
               </header>
               <div id="page__content">
                    <Body/>
               </div>
          </div>
     )
}
export default Home;
