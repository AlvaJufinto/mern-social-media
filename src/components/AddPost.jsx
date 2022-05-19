import { useState, useContext } from "react";
import {
  Link
} from "react-router-dom";

import { userApi } from "../api";
import { UserContext } from "../context/UserContext";

import noAvatar from "./../assets/img/noAvatar.png"

import './../styles/components-css/add-post.css';

const Navbar = () => {
  const { userPosts, isUserPostsLoading, userErrorMessage, dispatch } = useContext(UserContext);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  let jwtToken = localStorage.getItem("SM_JWT_Token");

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const body = {
      description: description, 
    }
    
    dispatch({ type: "ADD_POST_START" })
    try {
      let res = await userApi.addPost(jwtToken, body);
      console.log(res);
      dispatch({ type: "ADD_POST_SUCCESS", payload: res.data.data })
    } catch (err) {
      dispatch({ type: "ADD_POST_FAILURE", payload: err.response.data.message })
    }
  }

  return (
      <form className="AddPostWrapper container-border-global" onSubmit={submitHandler}>
        <div className="AddPost__top">
            <img  className="AddPost__img" src={noAvatar} alt="you cunt" />
            <input className="AddPost__input-text input-text-global" value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Tell us what you’re thinking, Thomas!"  />
        </div>
        {img && (
          <div className="AddPost__middle">
            <img className="AddPost__middle__img" src={URL.createObjectURL(img)} alt="AddPost__middle__img" />  
            <i class="AddPost__middle_trash-icon fa-solid fa-trash" onClick={() => setImg(null)}></i>
          </div>
        )}
        <div className="AddPost__bottom">
            <label className="AddPost__bottom_media-container" htmlFor="file">
                <i class="fa-solid fa-image"></i>
                <p>Media</p>
                <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept=".png,.jpeg,.jpg"
                    onChange={(e) => setImg(e.target.files[0])}
                />
            </label>
            <button className="AddPost__button-share button-global">
              {isUserPostsLoading ?
                <i className="fas fa-circle-notch fa-spin Home__middle-side__IconLoading "></i>
                  :
                "Share"
              }
            </button>
        </div>
      </form>
  );
}

export default Navbar;
