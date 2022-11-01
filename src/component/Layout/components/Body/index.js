import BlogPost from "./BlogPosts"
import CustomersBlock from "./CustomersBlock"
import DiscoverMore from "./DiscoverMore"
import HeadSection from "./HeadSection"
import './body.scss'
import { Fragment } from "react"
function Body() {

     return (
          <Fragment>
               <div id="head-section" className="pt-5">
                    <HeadSection />
               </div>
               <div id="blog-post">
                    <BlogPost />
               </div>
               <div id="customers-block">
                    <CustomersBlock />
               </div>
               <div id="discover-more">
                    <DiscoverMore />
               </div>
          </Fragment>

     )
}

export default Body
