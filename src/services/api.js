import { create } from 'apisauce';

const api = create ({
    baseURL:'http://api-sagi.p3sistemas.com/api'
});

api.addResponseTransform(response => {
    if (!response.ok) throw response;
});

export default api;