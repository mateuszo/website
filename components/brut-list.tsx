import Square from "./square";

interface ListProps {
  items: string[];
}

export default function BrutList({ items }: ListProps) {
  return (
    <ul className="list-inside my-3">
      {items.map((item) => (
        <li key={item} className="m-5 flex">
          <div className="flex-shrink-0">
            <Square></Square>
          </div>
          <div>{item}</div>
        </li>
      ))}
    </ul>
  );
}
