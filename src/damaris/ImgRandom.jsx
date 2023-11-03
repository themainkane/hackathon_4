import React, { useState, useEffect } from "react";
import { damarisKey, jakubKey, joeKey } from "../../keys";
import "./imgrandom.css";
import { Link } from "react-router-dom";


export default function ImgRandom() {
  const [image, setImage] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${jakubKey}&count=12`
      );
      const data = await response.json();
      console.log(data);

      // with Array.array we check if data is indeed and array
      const imagesArray = Array.isArray(data) ? data : [data];
      setImage(imagesArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="images-box">
      {image.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.urls.regular} alt={image.id} className="image" />
          <span className="image-likes">{image.likes}</span>
          <div className="user-info">
            <Link to={`/author/${image.user.username}`}><span className="user-name">{image.user.name}</span></Link>
          </div>
        </div>
      ))}
    </div>
  );
}
