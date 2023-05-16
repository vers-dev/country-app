import { Outlet, Link } from "react-router-dom"
import { Switch } from 'antd'

const Root = () => {
 return (
  <>
   <header className="header">
    <div className="container">
     <div className="header-content">
      <Link to='/' className="header-logo">Where is the world?</Link>
      <p className="dflex row">
       <Switch />
      </p>
     </div>
    </div>
   </header>
   <Outlet />
  </>
 )
}

export default Root