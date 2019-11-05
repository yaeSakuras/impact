import React,{Suspense} from 'react';
import {router} from 'dva';
import RouteLoading from "@/components/Route/RouteLoading";
import RouteWithSubRoutes from "@/components/Route/RouteWithSubRoutes";
import routerConfig from "@/routerConfig";

const {Router, Switch} = router;

export default ({history}) => {
    return (
        <Router history={history}>
            <Suspense fallback={<RouteLoading />}>
            <Switch>
                <RouteWithSubRoutes routes={routerConfig}/>
            </Switch>
            </Suspense>
        </Router>
    )
}