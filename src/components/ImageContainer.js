import React from "react";

/**
 * Quicker way to have images with fallbacks for smaller payloads on load.
 * @param {*} param0
 */
function ImageContainer({ name, second, alt, cssclass, path }) {
  return (
    <a
      rel="noopener noreferrer"
      href={process.env.PUBLIC_URL + path + name + `.${second}`}
      target="_blank"
    >
      <picture>
        <source
          className={cssclass}
          srcSet={process.env.PUBLIC_URL + path + name + ".webp"}
          type="image/webp"
        />
        <source
          srcSet={process.env.PUBLIC_URL + path + name + `.${second}`}
          type={`image/${second === "jpg" ? "jpeg" : second}`}
          className={cssclass}
        />

        <img
          className={cssclass}
          src={process.env.PUBLIC_URL + path + name + `.${second}`}
          alt={alt}
        />
      </picture>
    </a>
  );
}
export default ImageContainer;
