"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const ImagePicker = useRef();

  const handlePickClick = () => {
    ImagePicker.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.picker}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImagePicker}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
