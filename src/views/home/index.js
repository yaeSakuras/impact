import React from 'react';
import RouteWithSubRoutes from "@/components/Route/RouteWithSubRoutes";
import Container from "@/layout/Container";

function Home(props) {
    return (
        <Container>
            <RouteWithSubRoutes {...props}/>
        </Container>
    )
}

export default Home;