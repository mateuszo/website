export default function Icon({ type }: { type: string }) {
  return (
    <img
      src={`/icons/${type}.svg`}
      alt={`${type} icon`}
      width="25"
      height="25"
      className="inline-block"
    ></img>
  );
}
