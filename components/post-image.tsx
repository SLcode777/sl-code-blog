import Image from "next/image";
import React from "react";

interface PostImageProps {
  imageUrl: string;
  altText?: string;
  width: number;
  height: number;
}

const PostImage: React.FC<PostImageProps> = ({
  imageUrl,
  altText,
  width,
  height,
}) => {
  if (!imageUrl) return null;

  return (
    <div className="post-image-container max-w-72">
      <Image
        className="rounded-lg"
        src={imageUrl}
        alt={altText || "image d'article"}
        width={width}
        height={height}
      />
    </div>
  );
};

export default PostImage;
