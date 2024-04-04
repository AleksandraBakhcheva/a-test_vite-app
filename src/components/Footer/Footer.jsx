import "./Footer.scss";
import Media from "../../utils/Media";
import tgIcon from "../../assets/images/telegram-icon.svg";
import vbIcon from "../../assets/images/viber-icon.svg";
import whatsAppIcon from "../../assets/images/whatsApp-icon.svg";

export default function Footer() {
  const { mobileVersion } = Media();

  return (
    <footer>
      <div className="footer">
        <div className="footer__about">
          <h4>О компании</h4>
          <a href="#">Партнёрская программа</a>
          <a href="#">Вакансии</a>
        </div>
        <div className="footer__menu">
          <h4>Меню</h4>
          <div className="footer__menu_columns">
            <div>
              {!mobileVersion ? (
                <a href="#">Расчëт стоимости</a>
              ) : (
                <a href="#">
                  Расчет
                  <br />
                  стоимости
                </a>
              )}
              <a href="#">Услуги</a>
              <a href="#">Виджеты</a>
              <a href="#">Интеграции</a>
              <a href="#">Наши клиенты</a>
            </div>
            <div>
              {!mobileVersion ? (
                <a href="#">Кейсы</a>
              ) : (
                <a href="#">
                  Благодарность
                  <br />
                  клиентов
                </a>
              )}
              {!mobileVersion ? (
                <a href="#">Благодарственные письма</a>
              ) : (
                <a href="#">Кейсы</a>
              )}
              <a href="#">Сертификаты</a>
              <a href="#">Блог на Youtube</a>
              <a href="#">Вопрос / Ответ</a>
            </div>
          </div>
        </div>
        <div className="footer__contacts">
          <h4>Контакты</h4>
          <h5>+7 555 555-55-55</h5>
          <img src={tgIcon} alt="tg-icon" />
          <img src={vbIcon} alt="vb-icon" />
          <img src={whatsAppIcon} alt="whatsApp-icon" />
          <p>Москва, Путевой проезд 3с1, к 902</p>
          <div className="footer__contacts_rights">
            <p>©WELBEX {new Date().getFullYear()}. Все права защищены.</p>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
