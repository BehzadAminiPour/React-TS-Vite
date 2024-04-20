interface Props {
  game: string;
  onGame: () => void;
}

const Game = ({ game, onGame }: Props) => {
  return (
    <div className="m-2">
      <h3>Gamer name : {game}</h3>
      <button onClick={onGame} className="btn btn-info btn-sm">
        Change Name
      </button>
    </div>
  );
};

export default Game;
