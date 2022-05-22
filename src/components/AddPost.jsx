import { useState, useEffect, useContext } from "react";
import {
  Link
} from "react-router-dom";

import { userApi } from "../api";
import { UserContext } from "../context/UserContext";

import noAvatar from "./../assets/img/noAvatar.png"

import './../styles/components-css/add-post.css';

const Navbar = () => {
  const { userAuth, userPosts, isUserPostsLoading, userErrorMessage, dispatch } = useContext(UserContext);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null)
  let jwtToken = localStorage.getItem("SM_JWT_Token");
  
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('gambar', image?.data)
    formData.append('description', description)
    
    dispatch({ type: "ADD_POST_START" })
    try {
      let res = await userApi.addPost(jwtToken, formData);
      console.log(res);
      dispatch({ type: "ADD_POST_SUCCESS", payload: res.data.data });
      setDescription("")
      setImage(null);
    } catch (err) {
      console.log(err.response.data.message)
      dispatch({ type: "ADD_POST_FAILURE", payload: err.response.data.message })
    }
  }

  return (
      <form className="AddPostWrapper container-border-global" onSubmit={submitHandler} enctype="multipart/form-data">
        <div className="AddPost__top">
            <img className="AddPost__img" src={noAvatar} alt="you cunt" />
            <input className="AddPost__input-text input-text-global" value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder={`Tell us what you’re thinking, ${userAuth?.fullname.split(" ")[0]}!`} required/>
        </div>
        {image && (
          <div className="AddPost__middle">
            <img className="AddPost__middle__img" src={image.preview} />  
            <i class="AddPost__middle_trash-icon fa-solid fa-trash" onClick={() => setImage(null)}></i>
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
                    name='  '
                    accept=".png,.jpeg,.jpg"
                    onChange={handleFileChange}
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
