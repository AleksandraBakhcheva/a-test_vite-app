import "./Button.scss";

export default function Button() {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <button type="submit" onClick={handleClick}>
        Получить консультацию
      </button>
    </div>
  );
}
