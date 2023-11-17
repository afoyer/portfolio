import React from "react";

/**
 * Quicker way to have images with fallbacks for smaller payloads on load.
 * Currently defaults to webp then falls back to specified file type (makes sure jpg is jpeg type too)
 * @param {*} param0
 */
function ImageContainer({
  name,
  fileType,
  alt,
  cssclass,
  path,
}: {
  name: string;
  fileType: string;
  alt: string;
  cssclass: string;
  path: string;
}) {
  return (
    <a
      rel="noopener noreferrer"
      href={process.env.PUBLIC_URL + path + name + `.${fileType}`}
      target="_blank"
    >
      <picture>
        <source
          className={cssclass}
          srcSet={process.env.PUBLIC_URL + path + name + ".webp"}
          type="image/webp"
        />
        <source
          srcSet={process.env.PUBLIC_URL + path + name + `.${fileType}`}
          type={`image/${fileType === "jpg" ? "jpeg" : fileType}`}
          className={cssclass}
        />

        <img
          className={cssclass}
          src={process.env.PUBLIC_URL + path + name + `.${fileType}`}
          alt={alt}
        />
      </picture>
    </a>
  );
}
export default ImageContainer;
