import {Action} from '@ngrx/store';

export const NAVBAR_STATE = 'NAVBAR_STATE';

export class GetNavbarState implements Action {
    readonly type = NAVBAR_STATE;
    constructor(public payload: {isHidden: boolean}){
    }
}
export type NavbarActions = GetNavbarState;
