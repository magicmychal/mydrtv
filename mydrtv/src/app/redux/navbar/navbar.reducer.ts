import * as NavbarActions from './navbar.actions';

const initialState = {isHidden: true};

export function navbarReducer(
    state = initialState,
    action: NavbarActions.NavbarActions) {
    switch (action.type) {
        case NavbarActions.NAVBAR_STATE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
