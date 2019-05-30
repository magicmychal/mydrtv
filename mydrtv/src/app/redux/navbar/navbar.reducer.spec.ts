import {navbarReducer} from './navbar.reducer';
import * as types from 'navbar.actions';
import {NAVBAR_STATE} from "navbar.actions";

const deepFreeze = require('deep-freeze');

fdescribe('navbar reducer', () => {
    const stateBefore = {isHidden: false};

    it('should change the state to true', () => {
        expect(navbarReducer(stateBefore, {type: types.NAVBAR_STATE, payload: {isHidden: true}}))
            .toEqual({isHidden: true});

    });
});
