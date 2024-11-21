import React, { useEffect } from "react";
import { onGetPosts } from "../../action";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetPosts());
  }, []);

  const postsList = posts.length ? (
    posts.map((post) => {
      return <p key={post.id}>{post.title}</p>;
    })
  ) : (
    <p>Loading...</p>
  );

  return <>{postsList}</>;
};

export default index;
