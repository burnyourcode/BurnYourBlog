import React from "react";
import { Link } from "@reach/router";

let blogs = [
  {
    id: 1,
    title: "Title 1",
  },
  {
    id: 2,
    title: "Title 2",
  },
  {
    id: 3,
    title: "Title 3",
  },
  {
    id: 4,
    title: "Title 4",
  },
];

function BlogList() {
  return (
    <ul>
      {blogs.map((val, index) => {
        return (
          <li>
            <Link to={"/" + val.id}>{val.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BlogList;
