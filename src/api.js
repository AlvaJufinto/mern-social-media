import axios from "axios";
const baseUrl = "http://localhost:5000/api"


export const publicRoute = {
  getUser: (body) => {
    return axios.get(`${baseUrl}/public/user/${body}`)
  },
  getPost: (body) => {
    return axios.get(`${baseUrl}/public/post/${body}`);
  },
  getPostLikes: (body) => {
    return axios.get(`${baseUrl}/public/post/likes/${body}`)
  }
}

export const authApi = {
  signUp: (body) => {
    return axios.post(`${baseUrl}/auth/signup`, body);
  },
  signIn: (body) => {
    return axios.post(`${baseUrl}/auth/login `, body);
  },
};

export const interactApi = {
  likePost: (token, postId) => {
    return axios.put(`${baseUrl}/interact/like/${postId}`,
    {},
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    });
  },
  unlikePost: (token, postId) => {
    return axios.put(`${baseUrl}/interact/unlike/${postId}`,
    {},
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    });
  },
  commentPost: (token, id, body) => {
    return axios.put(`${baseUrl}/interact/comment/${id}`,
    body,
    {
      headers: {
        'Authorization': `Bearer ${token}`,  
      }
    });
  },
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

