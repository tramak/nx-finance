import axios from 'axios';
// import { setupCache } from 'axios-cache-adapter';
// const cache = setupCache({
//     maxAge: 30 * 1000, // 30 секунд
//     exclude: {
//         methods: ['post', 'patch', 'put', 'delete']
//     }
// })

const HTTP = axios.create({
    baseURL: typeof window !== 'undefined' ? '/': 'http://localhost:4200/',
    withCredentials: true,
    // adapter: cache.adapter
});

HTTP.interceptors.request.use(
    (config) => {
        const accessToken = typeof window !== 'undefined' ? localStorage['accessToken'] : null;

        let authHeaders = {};

        const token = accessToken;

        if (token) {
            authHeaders = {
                Authorization: `Bearer ${token}`
            };
        }

        return {
            ...config,
            headers: {
                ...authHeaders,
            }
        };
    },
    (error) => Promise.reject(error)
);

HTTP.interceptors.response.use(
    (response) => response,
    (error) => {
        // const status = error.response ? error.response.status : 408;
        // if (status === 401) {
        //     history.push('/Login');
        // }
        return Promise.reject(error);
    }
);

export default HTTP;
