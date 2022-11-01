import './for.scss'
function TemplateFor(props) {
     return (
          <div className="col item">
               <div className='d-flex header'>
                    <div className='d-flex wrap'>
                         <div className='icon'>
                              {props.icon}
                         </div>
                         <div className='title'>
                              {props.title}
                         </div>
                    </div>
               </div>
               <div className='body main-des-s'>
                    {props.des[0]}
                    <br />
                    {props.des[1]}
               </div>
          </div>
     )
}

export default TemplateFor
