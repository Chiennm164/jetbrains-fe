import './cardmore.scss'
function TemplateCardMore(props) {

     return (
          <div className="col">
               <div className="card-a">
                    <div className="wrap">
                         <div className='content'>
                              <p>{props.time}</p>
                              <h2>{props.title}</h2>
                              <p>{props.des}</p>
                         </div>
                         <div className='btn-a'>
                              <a href="." >Read more </a>

                         </div>
                    </div>
               </div>

          </div>


     )
}

export default TemplateCardMore
