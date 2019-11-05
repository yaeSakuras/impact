import React from "react";

const Home = React.lazy(() => import('./views/home'));
const JavaScript = React.lazy(() => import('./views/js'));
const Css = React.lazy(() => import('./views/css'));
const Reactor = React.lazy(() => import('./views/reactor'));
const Other = React.lazy(() => import('./views/other'));
const QueryString = React.lazy(() => import('./views/articles/js/queryString'));
const ObjectToStr = React.lazy(() => import('./views/articles/js/objectToStr'));
export default [
    {
        path: '/',
        to: '/home/javascript',
        component: JavaScript,
    },
    {
        path: '/home',
        component: Home,
        routes: [{
            path: '/home/javascript',
            component: JavaScript,
        }, {
            path: '/home/css',
            component: Css,
        }, {
            path: '/home/reactor',
            component: Reactor,
        }, {
            path: '/home/other',
            component: Other,
        }]
    },
    {
        path: '/js/queryString',
        component: QueryString,
    },
    {
        path: '/js/objectToStr',
        component: ObjectToStr,
    }
];