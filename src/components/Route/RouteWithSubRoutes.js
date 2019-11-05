import React from "react";
import {router} from "dva";

const {Route, Redirect} = router;

function RouteRender(route) {
    const {path, routes = []} = route;
    if (path === "/") {
        return (
            <Route path="/" exact render={() => (
                <Redirect to={route.to}/>
            )}/>
        )
    } else {
        return (
            <Route path={path} render={props => (
                <route.component {...props} routes={routes}/>
            )}/>
        )
    }
}

function RouteWithSubRoutes(props) {
    const {routes} = props;
    return (
        <>
            {
                routes.map((route, i) => <RouteRender key={i} {...route}/>)
            }
        </>
    )
}

export default RouteWithSubRoutes;