const ImageCard = (props) => {
  const { imageurl, title } = props;
  return (
    <div className="border-2 m-2 p-2 inline-block">
      <img src={imageurl} alt={title} className="w-64 h-48 object-cover" />
      <h3 className="text-center mt-2">{title}</h3>
    </div>
  );
};
export default ImageCard;
