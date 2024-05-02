import { useState } from "react";
import Image from "next/image";

interface ImageWrapperProps {
  alt: string;
  className: string;
  fill?: boolean;
  height?: number;
  sizes?: string;
  srcUrl: string;
  style?: object;
  width?: number;
}

export default function ImageWrapper({
  alt,
  className,
  fill,
  height,
  sizes,
  srcUrl,
  style,
  width,
}: ImageWrapperProps) {
  const [src, setSrc] = useState<string>(srcUrl);

  const handleError = () => {
    setSrc("/unified.png");
  };

  return (
    <Image
      alt={alt}
      className={className}
      onError={handleError}
      src={src}
      {...(fill && { fill })}
      {...(style && { style })}
      {...(sizes && { sizes })}
      {...(height && { height })}
      {...(width && { width })}
    />
  );
}
