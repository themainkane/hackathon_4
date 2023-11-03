import { jakubKey, joeKey } from "../../keys";
import { useEffect, useState } from "react";

export default function Author() {
  const [authorInfo, setAuthorInfo] = useState([]);

  const [authorImages, setAuthorImages] = useState([]);
  const author = "charlesdeluvio";
  //   ************ load author info*****************
  const loadAuthorInfo = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${author}?client_id=${jakubKey}`
    );

    const data = await response.json();
    setAuthorInfo(data);
    // console.log(authorInfo);
  };

  useEffect(() => {
    loadAuthorInfo();
    console.log(authorInfo);
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
          {authorInfo.links && (
            <a href={authorInfo.links.html}>{authorInfo.name}</a>
          )}
        </h2>
        {authorInfo.profile_image && (
          <img
            src={authorInfo.profile_image.large}
            alt="authors profile image"
          />
        )}
        <h4 className="author-info__username">
          Username: {authorInfo.username}
        </h4>
        <h4 className="author-info__location">
          Location: {authorInfo.location}
        </h4>
        <div className="author-info__likes">
          <img src="../img/thumbsup.png" alt="" />
          <p>Total Likes: {authorInfo.total_likes}</p>
          <p>Photos Uploaded: {authorInfo.total_photos}</p>
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
