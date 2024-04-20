interface Props {
  items: number;
}

const Navbar = ({ items }: Props) => {
  return (
    <div>
      <h3>Numbur of items : {items}</h3>
    </div>
  );
};

export default Navbar;
