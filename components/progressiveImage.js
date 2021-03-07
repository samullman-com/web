import ProgressiveImage from "react-progressive-graceful-image";

function MyImage({ src, alt, darken }) {
  return (
    <ProgressiveImage
      srcSetData={{
        srcSet: `${src} 320w, ${src} 700w, ${src} 1000px`,
        sizes: "(max-width: 1000px) 100vw, 1000px",
      }}
      src={src}
      placeholder={alt}
    >
      {(src, loading, srcSetData) => {
        return (
          <img
            sizes={srcSetData.sizes}
            srcSet={srcSetData.srcSet}
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              filter: `brightness(${ darken || "100%" })`,
              opacity: loading ? 0.6 : 1,
              transition: "0.15s ease",
            }}
          />
        );
      }}
    </ProgressiveImage>
  );
}

export default MyImage;
