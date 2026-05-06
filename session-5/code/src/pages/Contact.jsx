import React, { useEffect } from "react";

// sequential Mutiple api call
const Contact = () => {
  const fetchData = async () => {
    try {
      const user = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      ).then((res) => res.json);
      const posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      ).then((res) => res.json);
      console.log(user, posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
};

export default Contact;
