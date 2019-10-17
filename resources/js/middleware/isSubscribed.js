
export default function isSubscribed({next, store}){
    console.log('Hello, I am from isSubscribed Middleware');
    // console.log(store.getters.getAuthToken);
    isSubscribed = false;
    if ( !isSubscribed ) {
        // console.log('Verified By isSubscribed, if no authToken, go to Login Page');
        return next({path: '/registeruser'});
    }

    return next();
}
