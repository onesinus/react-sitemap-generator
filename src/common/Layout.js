import {
    BrowserRouter as Router,
    Link,
    Switch
} from "react-router-dom";
import Routes from './Routes'
  
export default function Layout() {
    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/user/1">User</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Routes />
                    </Switch>
                </div>
            </Router>            
        </>
    )
}