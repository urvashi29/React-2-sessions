import React, { useEffect, useState } from "react";

// simuntaneously Multiple API call
const About = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [posts, users, products] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
          res.json(),
        ),
        fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
          res.json(),
        ),
        fetch("https://dummyjson.com/products").then((res) => res.json()),
      ]);
      setData({ posts, users, products });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) <p>No data yet!</p>;

  return <div>Dashboard Chart Data</div>;
};

export default About;
