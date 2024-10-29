import React, { useEffect, useState } from "react";

const useFetch = ({
  url,
  select = (data) => data,
}: {
  url: string | URL;
  select?: (data: any) => any;
}) => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();

        setData(select(data));
      } catch (error) {
        console.error("Unexpected error on fetching data", error);
      }
    };

    fetchData();
  }, [url, select]);

  return { data };
};

export default useFetch;
