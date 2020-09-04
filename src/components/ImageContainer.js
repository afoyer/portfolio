import React from "react";

function ImageContainer({ name, second, alt, cssclass, path }) {
  return (
    <picture>
      <source
        className={cssclass}
        srcSet={process.env.PUBLIC_URL + path + name + ".webp"}
        type="image/webp"
      />
      <source
        srcSet={process.env.PUBLIC_URL + path + +name + `.${second}`}
        type={`image/${second}`}
        className={cssclass}
      />

      <img
        className={cssclass}
        src={process.env.PUBLIC_URL + path + +name + `.${second}`}
        alt={alt}
      />
    </picture>
  );
}
export default ImageContainer;
