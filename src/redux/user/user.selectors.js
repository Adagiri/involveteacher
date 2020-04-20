import { createSelector } from "reselect";


export const user = state => state.user;

 export const update_info_loading = createSelector(
    [user],
    (user) => user.update_info_loading
);

export const update_info_errors = createSelector(
    [user],
    (user) => user.update_info_errors
);


// export const fetching = createSelector(
//     [user],
//     (user) => user.fetching
// );




