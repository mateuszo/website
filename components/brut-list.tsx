import { Talk } from "../pages/talks";
import Square from "./square";

export default function BrutList({ items }: { items: Talk[] }) {
  return (
    <ul className="list-inside my-3">
      {items.map((item) => (
        <li key={item.title} className="m-5 flex">
          <div className="flex-shrink-0">
            <Square></Square>
          </div>
          <div>
            {item.date} | {item.venue} |{" "}
            <a className="text-blue-700 " href={item.link}>
              {item.title}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
