import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    axios
      .get(url)
      .then((res) => {
        setPost(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postList = post.length ? (
    <p>
      {post.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
          </React.Fragment>
        );
      })}
    </p>
  ) : (
    <p>No Post Yet</p>
  );

  return <>{postList}</>;
};

export default Post;
