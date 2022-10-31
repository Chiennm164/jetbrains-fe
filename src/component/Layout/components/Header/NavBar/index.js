function NavBar() {
     let listNav = [
          'Developer Tools',
          'Team Tools',
          'Learning Tools',
          'Solutions',
          'Support',
          'Store',
     ]

     return (
          listNav.map((item, index) => {
               return <a key={index} className='item-nav' href=".">{item}</a>
          })
     )
}
export default NavBar;
