import React from "react";

const UserName = async (props) => {
  const { name } = await props.params;
  const cleanName = name && decodeURIComponent(name);
  console.log("User Name:", name);
  return <div>userName:{cleanName}</div>;
};

export default UserName;
