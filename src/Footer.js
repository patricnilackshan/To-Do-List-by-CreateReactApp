export default function Footer({ length }) {
  return (
    <footer>
      {length}
      {length === 1 ? " Item" : " Items"}
    </footer>
  );
}
