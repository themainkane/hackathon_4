import React, { useState, useEffect, useContext } from "react";
import { damarisKey } from "../../keys";
import "./img.css";
import context from "../david/context/Context";

export default function Images() {
  const [image, setImage] = useState([]);

  const { state, dispatch } = useContext(context);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://api.unsplash.com/users/charlesdeluvio/photos?client_id=${damarisKey}`
  //     );
  //     const data = await response.json();
  //     console.log(data);

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="images-box">
      {state.searchData.map((image) => (
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
