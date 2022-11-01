import TemplateFor from '../../../../template/For/index'

function Row2() {
     const arr = [{
          icon:
               <svg viewBox="0 0 24 24" >
                    <path d="M12.308 7.096L16.904 2.5 21.5 7.096l-4.596 4.596-4.596-4.596zM10.5 5H4v6.5h6.5V5zM4 13.5h6.5V20H4v-6.5zm8.5 0H19V20h-6.5v-6.5z"></path>
               </svg>,
          title: 'For developers',
          des: ['The complete ', 'developer toolkit']
     },
     {
          icon:
               <svg viewBox="0 0 24 24" >
                    <path d="M16.4 6a2 2 0 100-4 2 2 0 000 4zM12 18h9v-6.484a3 3 0 00-3-3h-3a3 3 0 00-3 3H6a3 3 0 00-3 3V21h9v-3zM10 7a2 2 0 11-4 0 2 2 0 014 0z"></path>
               </svg>,
          title: 'For teams',
          des: ['A wide range of tools and', ' integrations for any team']
     },
     {
          icon:
               <svg viewBox="0 0 24 24" >
                    <path d="M13.999 5a2 2 0 11-4 0 2 2 0 014 0zm4.348 3h2.656l.033 9.967h-2.988A6.624 6.624 0 0012.02 22a6.913 6.913 0 00-6.25-4H3.036V8H5.77a6.912 6.912 0 016.25 4 7.025 7.025 0 016.327-4z"></path>
               </svg>,
          title: 'For learning',
          des: ['Solutions and opportunities', ' for teachers and students']
     },
     {
          icon:
               <svg viewBox="0 0 24 24" ><path d="M4 4v16h16l-8-8 8-8H4z"></path>
               </svg>,
          title: 'Kotlin',
          des: ['A modern multiplatform ', 'programming language']
     }
     ]
return(
     <div className="row pb-4">
     {
          arr.map((ar, index) => {
               return <TemplateFor key={index} length={index} icon={ar.icon} title={ar.title} des={ar.des} />
          })
     }
</div>
)
}

export default Row2
