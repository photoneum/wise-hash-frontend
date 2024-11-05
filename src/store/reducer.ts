import { combineReducers } from 'redux';

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    authenticated: boolean;
    token: string;
    userType: string;
    otp: string;
    userKycStatus: boolean;
    phoneNumber: string;
    homeAddress: string;
    nextOfKin: string;
    officeAdress: string;
    maritalStatus: string;
    natureOfWork: string;
    businessName: string;
    workId: string;
    bvn: string;
    driversLicense: string;
    nin: string;
    selfie: string;
    pickUpLocation: string;
    cardNumber: string;
    cardName: string;
    cardExpiry: string;
    cardCvv: string;
}

interface UserState {
    user: User | null;
}

const initialUserState: UserState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        authenticated: false,
        token: '',
        userType: '',
        userKycStatus: false,
        otp: '',
        phoneNumber: '',
        homeAddress: '',
        nextOfKin: '',
        officeAdress: '',
        maritalStatus: '',
        natureOfWork: '',
        businessName: '',
        workId: '',
        bvn: '',
        driversLicense: '',
        nin: '',
        selfie: '',
        pickUpLocation: '',
        cardNumber: '',
        cardName: '',
        cardExpiry: '',
        cardCvv: '',
    },
};

function userReducer(state = initialUserState, action: any) {
    switch (action.type) {
        case 'SIGNUP':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            };
        case 'AUTHENTICATE':
            return {
                ...state,
                user: {
                    ...state.user,
                    authenticated: true,
                }
            };
        case 'LOGOUT':
            return {
                ...state,
                user: {
                    ...initialUserState.user,
                },
            };
        case 'LOGIN':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                    authenticated: true,
                }
            };
        case 'OTP':
            return {
                ...state,
                user: {
                    ...state.user,
                    otp: action.payload.otp,
                }
            };
        case 'PERSONAL_INFO':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            };
        case 'OCCUPATIONAL_INFO':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            };
        case 'IDENTIFICATION_INFO':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            };
        case 'KYC_STATUS_TRUE':
            return {
                ...state,
                user: {
                    ...state.user,
                    userKycStatus: true,
                }
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                }
            };
        default:
            return state;
    }
}

interface Nav {
    datePicker: boolean;
    dateRange: any;
    pending: string;
}

interface NavState {
    nav: Nav | null;
}

const initialNavState: NavState = {
    nav: {
        datePicker: false,
        dateRange: null,
        pending: 'PENDING',
    },
};

function navReducer(state = initialNavState, action: any) {
    switch (action.type) {
        case 'TOGGLE_DATE_PICKER':
            return {
                ...state,
                nav: {
                    ...state.nav!,
                    datePicker: !state.nav!.datePicker,
                }
            };

        case 'SET_DATE_RANGE':
            return {
                ...state,
                nav: {
                    ...state.nav!,
                    dateRange: action.payload,
                }
            };
        case 'SET_PENDING':
            return {
                ...state,
                nav: {
                    ...state.nav!,
                    pending: "PENDING",
                }
            };
        case 'SET_ACCEPTED':
            return {
                ...state,
                nav: {
                    ...state.nav!,
                    pending: "ACCEPTED",
                }
            };
        default:
            return state;
    }
}

export interface RootState {
    userReducer: UserState;
    navReducer: NavState;
}

const rootReducer = combineReducers({
    userReducer,
    navReducer,
});

export default rootReducer;
