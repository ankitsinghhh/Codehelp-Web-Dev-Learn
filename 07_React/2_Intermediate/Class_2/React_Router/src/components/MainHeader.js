import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
    return (
        <div>
            <Outlet/>
            {/* why need outlet -> jab  parent route element k andar suke child route element ko render hone ki permission deni ho -> otherwise , agr nhi likhe outlet toh bs parent element hi render hota h , child element render nhi ho pata hai   */}
    
           
        </div>
      )
}

export default MainHeader