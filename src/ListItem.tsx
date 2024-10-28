import React, { ReactElement } from "react";

const ListItem = (props: { href: string, content: string, index: number, isOpen: boolean }): ReactElement => {
  return (
    <li
      className={`
      rounded-full bg-white overflow-hidden
      hover:ring-2 hover:ring-orange-500
      transform transition-all duration-300 ease-out
      ${
        props.isOpen
          ? "scale-100 translate-y-0 opacity-100"
          : "scale-0 -translate-y-4 opacity-0"
      }
      md:scale-100 md:translate-y-0 md:opacity-100
    `}
      style={{ transitionDelay: `${props.index * 50}ms` }}
    >
      <a
        href={props.href}
        className="flex items-center justify-center font-bold whitespace-nowrap py-2 px-4 w-full h-full hover:bg-orange-300 transition-colors duration-300"
      >
        {props.content}
      </a>
    </li>
  );
};
export default ListItem;
