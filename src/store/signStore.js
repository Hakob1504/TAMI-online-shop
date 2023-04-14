import { makeAutoObservable } from "mobx"

export default class SignStore {
    constructor(RootStore) {
        this.RootStore = RootStore
        makeAutoObservable(this)
    }
    registerFields = [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            value: undefined,
            valid: false,
            pattern: /^.{2,}$/,
            err: 'Name shoult be at least 2 letters'
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            value: undefined,
            valid: false,
            pattern: /^.+@.+$/,
            err: 'Please enter a valid email address.'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            value: undefined,
            valid: false,
            pattern: /(?=.*[0-9])(?=.*[a-z])(?=.{8,})/,
            err: 'Password should have at least 8 symbols.'
        },
        {
            name: 'confirm password',
            type: 'password',
            label: 'Confirm',
            value: undefined,
            valid: false,
            pattern: /(?=.*[0-9])(?=.*[a-z])(?=.{8,})/,
            err: 'Please confirm your password.'
        },
    ]
    signInFields = [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            value: '',
            valid: false,
            pattern: /^.+@.+$/,
            err: 'Please enter valid email address.'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            value: '',
            valid: false,
            pattern: /(?=.*[0-9])(?=.*[a-z])(?=.{8,})/,
            err: 'password should have at least 8 symbols'
        },
    ]
}