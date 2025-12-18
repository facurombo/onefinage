const base_api_url = 'http://localhost:8000/api/v1';

//route
export default {
    //auth
    getRegister: (data)=>axios.post(`${base_api_url}/auth/register`,data)

}