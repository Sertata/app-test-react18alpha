import React, { useEffect, useState } from "react";

type Post = {
  title: string;
  body: string;
};

const DataFetch: React.FC<{ num: any }> = ({ num }: any) => {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    if (num) {
      getData(num);
      console.log('fhfhf');
    }
  }, [num]);

  const getData = async (post: any) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {data && (
        <>
          <h2>{data.title ?? "No title"}</h2> <p>{data.body ?? "No text"}</p>
        </>
      )}
    </div>
  );
};

export { DataFetch };
