export default function Square() {
  const size = 25;
  return (
    <svg
      width={size}
      height={size}
      className="inline-block mr-3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height={size} />
    </svg>
  );
}
