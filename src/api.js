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
    
  },
  getPost: (body) => {
    return axios.get(`${baseUrl}/public/post/${body}`);
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
  addPost: (token, formData) => {
    return axios.post(`${baseUrl}/user/addpost`,
    formData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
        "Content-Type": "multipart/form-data",
      }
    });
  },
  deletePost: (token, id) => {
    return axios.delete(`${baseUrl}/user/deletepost/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    });
  },
};

