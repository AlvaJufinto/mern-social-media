import axios from "axios";
const baseUrl = "http://localhost:5000/api"

export const authApi = {
  signUp: (body) => {
    return axios.post(`${baseUrl}/auth/signup`, body);
  },
  signIn: (body) => {
    return axios.post(`${baseUrl}/auth/login `, body);
  },
};

export const publicRoute = {
  getUser: (body) => {
    
  }
}

export const userApi = {
  me: (token) => {
    return axios.get(`${baseUrl}/user/me`, 
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    });
  },
  feeds: (token) => {
    return axios.get(`${baseUrl}/user/feeds`, 
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    });
  },
  addPost: (token, body) => {
    return axios.post(`${baseUrl}/user/addpost`, 
    body,
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    });
  },
};

