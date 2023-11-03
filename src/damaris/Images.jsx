import React, { useState, useEffect } from "react";
import { damarisKey } from "../../keys";
import "./img.css";

export default function Images() {
  const [image, setImage] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/users/charlesdeluvio/photos?client_id=${damarisKey}`
      );
      const data = await response.json();
      console.log(data);

      // with Array.array we check if data is indeed and array
      if (Array.isArray(data) && data.length > 0) {
        setImage(data.slice(0, 12)); // we are taking only the 12 first img
      }
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
          <div className="user-info">
            <span className="user-name">{image.user.first_name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
