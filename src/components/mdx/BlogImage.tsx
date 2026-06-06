// components/mdx/BlogImage.tsx

export default function BlogImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <img src={src} alt={alt} className="w-3/4 mx-auto rounded-xl shadow-lg" />
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
