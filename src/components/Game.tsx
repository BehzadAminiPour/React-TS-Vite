interface Props {
  game: string;
}

const Game = ({ game }: Props) => {
  return (
    <div className="m-2">
      <h3>Gamer name : {game}</h3>
      <button className="btn btn-info btn-sm">Change Name</button>
    </div>
  );
};

export default Game;
