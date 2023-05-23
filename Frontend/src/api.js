   import axios from 'axios';
     
     const apiClient = axios.create({
       baseURL: 'http://localhost:000', // Use your backend server URL here
     });
     
     export default apiClient;
     