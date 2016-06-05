export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function signin() {
    return {type: SIGN_IN};
}

export function signout() {
    return {type: SIGN_OUT};
}