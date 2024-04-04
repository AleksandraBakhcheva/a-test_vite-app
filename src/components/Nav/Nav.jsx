import "./Nav.scss";
import Media from "../../utils/Media";

export default function Nav() {
  const { mobileVersion } = Media();

  return (
    <nav>
      <a href="#">Услуги</a>
      <a href="#">Виджеты</a>
      <a href="#">Интеграции</a>
      <a href="#">Кейсы</a>
      {!mobileVersion && <a href="#">Сертификаты</a>}
    </nav>
  );
}
