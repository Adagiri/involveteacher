import { createSelector } from "reselect";


const auth = state => state.auth;

 export const loading = createSelector(
    [auth],
    (auth) => auth.loading
);

export const  auth_toggled = createSelector(
    [auth],
    (auth) => auth.auth_toggled
);

export const error_messages = createSelector(
    [auth],
    (auth) => auth.error_messages
);

export const set_modal = createSelector(
    [auth],
    (auth) => auth.set_modal
);

export const user = createSelector(
    [auth],
    (auth) => auth.user
);

export const portalStatus = createSelector(
    [auth],
    (auth) => auth.portal
);



