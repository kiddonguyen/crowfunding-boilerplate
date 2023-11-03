import { defaultImage } from "constants/global";

const CampAuthor = ({ image = defaultImage, author = 'Mahfulzul Nabil' }) => {
  return (
    <div className="flex items-center mb-2 gap-x-3">
      <img
        src={image}
        alt={author}
        title={author}
        className="h-8 w-8 object-cover rounded-full"
      />
      <p className="text-xs text-text3">
        By <span className="text-text2 font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default CampAuthor;
