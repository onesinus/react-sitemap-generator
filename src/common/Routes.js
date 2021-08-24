import { Switch, Route } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import Users from '../components/Users'
import CarDetail from '../components/CarDetail'

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/car">
                <CarDetail />
            </Route>
        </Switch>
    )
}