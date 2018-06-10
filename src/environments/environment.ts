// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA-hPpdXzaR4wfeMaLJfIpGHdwVDEfQOy8',
        authDomain: 'ksk-dcm.firebaseapp.com',
        databaseURL: 'https://ksk-dcm.firebaseio.com',
        projectId: 'ksk-dcm',
        storageBucket: 'ksk-dcm.appspot.com',
        messagingSenderId: '557448964341'
    }
};
