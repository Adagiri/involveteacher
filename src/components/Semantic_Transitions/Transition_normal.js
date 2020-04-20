import React from 'react';
import { Transition } from "semantic-ui-react";

const TransitionNormal = (children) => {
    return (
        <Transition visible={true} animation='scale' duration={500}>
        {children}
      </Transition>

    )
} ;

export default TransitionNormal;