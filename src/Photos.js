import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);

    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          console.log(photo.src.landscape);

          return (
            <div className="photo-collage">
              <a
                href={photo.src.landscape}
                target="blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  key={index}
                  alt="api-image"
                  width={175}
                  className="photos"
                ></img>
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
