import Row1 from './row1'
import Row2 from './row2'
import Row3 from './row3'
import Row4 from './row4'
import Row5 from './row5'
import './headsection.scss'

function HeadSection() {

     return (
          <div className="container pb-5">
               <Row1 />
               <Row2 />
               <Row3 />
               <Row4 />
               <Row5 />
          </div>
     )
}
export default HeadSection
