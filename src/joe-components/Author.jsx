import { useParams } from "react-router-dom";
import { jakubKey, joeKey } from "../../keys";
import { useContext, useEffect, useState } from "react";
import context from "../david/context/Context";

export default function Author() {

  // const [authorInfo, setAuthorInfo] = useState([]);
  const [authorImages, setAuthorImages] = useState([]);

  const { authorName } = useParams();
  const { state, dispatch } = useContext(context);

  // state.userDetail (to display user data)

  // const author = "charlesdeluvio";

  //   ************ load author info*****************
  const loadAuthorInfo = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${authorName}?client_id=${jakubKey}`
    );

    const data = await response.json();
    dispatch({
        type:'userDetail/set',
        payload: data
    })
  };

  console.log(authorName)

  useEffect(() => {
    loadAuthorInfo();
    console.log(state.authorInfo);
  }, []);

  //   const profileImages = authorInfo.profile_image;

  //   ***********load Author images

  const loadAuthorImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/charlesdeluvio/photos?client_id=${jakubKey}`
    );
    const data = await response.json();
    setAuthorImages(data);
    // console.log(authorImages);
  };

  useEffect(() => {
    loadAuthorImages();
    console.log(authorImages);
  }, []);

  return (
    <>
      <div className="author-info">
        <h2 className="author-info__name">
          {state.authorInfo.links && (
            <a href={state.authorInfo.links.html}>{state.authorInfo.name}</a>
          )}
        </h2>
        {state.authorInfo.profile_image && (
          <img
            src={state.authorInfo.profile_image.large}
            alt="authors profile image"
          />
        )}
        <h4 className="author-info__username">
          Username: {state.authorInfo.username}
        </h4>
        <h4 className="author-info__location">
          Location: {state.authorInfo.location}
        </h4>
        <div className="author-info__likes">
          <img src="../img/thumbsup.png" alt="" />
          <p>Total Likes: {state.authorInfo.total_likes}</p>
          <p>Photos Uploaded: {state.authorInfo.total_photos}</p>
        </div>
        <div className="author-images">
          <h5>Featured Photo</h5>
          <img src="" alt="" className="author-images__featured" />
          {/* <img src="" alt="" className="author-images__small" />
          <img src="" alt="" className="author-images__small" />
          <img src="" alt="" className="author-images__small" />
          <img src="" alt="" className="author-images__small" />
          <img src="" alt="" className="author-images__small" /> */}
        </div>
      </div>
    </>
  );
}
