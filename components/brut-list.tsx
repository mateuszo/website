import { Dayjs } from "dayjs";
import Square from "./square";

export interface ListItem {
  date?: Dayjs;
  venue?: string;
  title?: string;
  link?: string;
}

export default function BrutList({ items }: { items: ListItem[] }) {
  return (
    <ul className="list-inside my-3">
      {items.map((item, idx) => (
        <li key={idx} className="m-5 flex">
          <div className="flex-shrink-0">
            <Square></Square>
          </div>
          <div>
            {appendDelimiter(item.date?.format("YYYY-MM-DD"))}
            {appendDelimiter(item.venue)}
            <a className="text-blue-700 " href={item.link}>
              {item.title}
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}

function appendDelimiter(text?: string) {
  return text ? `${text} | ` : "";
}
