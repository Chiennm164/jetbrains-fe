import './row5.scss'
function Row5(params) {

     const arr = [
          'JavaScript',
          '.NET',
          'Java & JVM',
          'C++',
          'macOS & iOS',
          'Python & Django',
          'PHP',
          'Ruby & Rails',
          'Go',
          'Kotlin',
          'SQL',
          'See all tools',
     ]

     return (
          <div className='group-btn'>
               <div className='row pt-5 pb-lg-5'>
                    <div className='col-8 d-flex flex-wrap'>
                         {arr.map((ar, i) => {
                              return <a key={i} className="sub-a hover-btn" href=".">{ar} </a>
                         })}
                    </div>
               </div>

          </div>
     )

}
export default Row5
