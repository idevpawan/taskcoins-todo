import React, { useState } from "react";

type THeaderTab = {
  handleUpdateTab: (e: number) => void;
};

const tabListing = [
  {
    id: 1,
    title: "Todo List",
  },
];

const HeaderTab = (props: THeaderTab) => {
  const [item, setItem] = useState(1);
  return (
    <div>
      <ul className="flex gap-10 mt-2 justify-center mb-4">
        {tabListing.map((_list) => {
          return (
            <li
              className={`text-sm cursor-pointer tracking-wider ${
                _list.id === item ? "text-light" : "text-gray-500"
              }`}
              key={_list.id}
              onClick={() => {
                setItem(_list.id);
                props.handleUpdateTab(_list.id);
              }}
            >
              {_list.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderTab;
