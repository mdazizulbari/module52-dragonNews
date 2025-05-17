import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((response) =>
  response.json()
);

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-semibold">All Categories ( {categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={
              "btn btn-ghost hover:bg-base-200 border-0 font-semibold text-accent"
            }
            to={`/category/${category.id}`}
          >
            {" "}
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
