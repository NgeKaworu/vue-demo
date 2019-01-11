export default function fakeDataGen(name = "root", depth = 5, breadth = 5) {
  return (
    depth > 0 && {
      name: `${depth}-${name}`,
      children:
        depth - 1 > 0 &&
        Array(~~(Math.random() * breadth + 1))
          .fill(null)
          .map((d, i) => fakeDataGen(i, depth - 1, breadth))
    }
  );
}
