import React from "react";
import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, author, total_view, rating } =
    news;

  return (
    <div className="card shadow-md rounded-2xl max-w-xl mx-auto">
      <div className="flex items-center rounded-t-2xl justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xl text-gray-500">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold text-lg mb-2 text-gray-600 text-center">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-96 mx-auto h-52 object-cover rounded-2xl mb-3"
        />
        <p className="text-sm text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="flex justify-between items-center px-4 py-4 border-t border-base-300">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={
                i < rating?.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}
          <span className="text-black ml-2">{rating?.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
