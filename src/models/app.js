export default {
    namespace: 'app',
    state: {
        current:'javascript'
    },
    effects: {},
    reducers: {},
    subscriptions: {
        watch({ dispatch, history }) {
            history.listen((path) => {

            });
        }
    },
};