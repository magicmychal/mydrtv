import {Action} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const LOG_IN = 'LOG_IN';
export const PRINT_STORE = 'PRINT_STORE';

export class SaveUserInfo implements Action {
    // what does it do tho?
    readonly type = SAVE_USER_INFO;

    constructor(public payload: UserModel) {
    }
}

export class LogIn implements Action {
    readonly type = LOG_IN;

    constructor(public payload: { Email: string; Gender: string; History: any[]; Name: string; Password: string }) {
    }
}

export class PrintStore implements Action{
    readonly type = PRINT_STORE;
}

export type UserActions = SaveUserInfo | LogIn | PrintStore;
