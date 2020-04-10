import React from 'react';
import { Loader, Dimmer } from "semantic-ui-react";

const Spinner = () => (
    <Dimmer active style={{background: "teal", position: "absolute", width: "100vw", height: "100vh"}}>
    <Loader size="huge" >
    </Loader>
    </Dimmer>
);

export default Spinner;