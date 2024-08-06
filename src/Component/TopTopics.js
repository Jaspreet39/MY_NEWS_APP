import React from "react";

function TopTopics({ topic, setTopic }) {
  const topics = [
    "All",
    "Paris Olympics",
    "Prisoner Swaps",
    "2024 Campaign",
    "Middle East Tensions",
    "Tom Daley Sweater",
    "Sonya Massey",
    "Back-to-school-deals",
  ];

  return (
    <div>
      {/* <h1>Live Updates</h1> */}
      <div className="flex items-center justify-between font-semibold text-black text-md py-4 ">
        {topics.map((item) => (
          <p
            style={{ fontWeight: item === topic ? "bold" : "normal" }}
            onClick={() => setTopic(item)}
            className="hover:underline cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TopTopics;
