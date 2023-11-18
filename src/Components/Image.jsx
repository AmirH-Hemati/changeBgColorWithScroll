function Image({ imageUrl }) {
  return (
    <>
      <img className="h-[250px] w-[700px] shrink-0 object-cover" src={imageUrl} />
    </>
  );
}

export default Image;
