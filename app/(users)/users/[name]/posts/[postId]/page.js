'use client'

import React,{use} from "react";

const Post =(props) => {
  const value = use(props.params);
  const cleanName = value.name && decodeURIComponent(value.name);
  console.log("Values", value);
  return (
    <div>
      <h1 className="text-2xl font-bold">Post ID: {value.postId}</h1>
      <p className="text-lg">User Name: {cleanName}</p>
    </div>
  );
};

export default Post;
