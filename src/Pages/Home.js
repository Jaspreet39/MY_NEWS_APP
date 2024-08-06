import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Component/Header";
import Banner from "../Component/Banner";
import Feed from "../Component/Feed";
import TopTopics from "../Component/TopTopics";

function Home() {
  let [string, setString] = useState([]);
  const [topic, setTopic] = useState("");

  const getData = async () => {
    try {
      await axios
        .get(`http://localhost:5000//api/getDefalutNews`)
        .then((res) => {
          setString(res.data);
        });
    } catch (error) {
      setString(error.message);
    }
  };

  console.log(topic);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" h-fit">
      <Header />
      <div className="lg:max-w-[80%] md:max-w-[50%] w-full mx-auto">
        <TopTopics topic={topic} setTopic={setTopic} />
        <Feed searchForTopic={topic} />
      </div>
    </div>
  );
}

export default Home;
