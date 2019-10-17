
export default function auth({next, store}){
    console.log('Hello, I am from auth Middleware');
    console.log(store.getters.getAuthToken ? store.getters.getAuthToken : 'Token is not Available');

    if (!store.getters.getAuthToken) {
        // console.log('Verified By auth, if no authToken, go to Login Page');
        return next({path: '/login'});
    }

    return next();
}
