import "./Main.scss";
import Button from "../Button/Button";
import Media from "../../utils/Media";

export default function Main() {
  const { mobileVersion } = Media();

  return (
    <main>
      <div className="main">
        <div className="red-light"></div>
        <div className="red-ball"></div>
        <div className="main__left-side">
          <p className="main__left-side__first-header">
            Зарабатывайте
            <br />
            больше
          </p>
          <p className="main__left-side__second-header">c WELBEX</p>
          <p className="main__left-side__text">
            Развиваем и контролируем
            <br />
            продажи за вас
          </p>
        </div>
        <div className="main__right-side">
          <p className="main__right-side__header">
            Вместе с&nbsp;
            <span>
              бесплатной
              <br />
              консультацией
            </span>
            &nbsp;мы дарим:
          </p>
          <div className="main__right-side__boxes">
            {!mobileVersion ? (
              <div>
                <h5>Виджеты</h5>
                <p>
                  30 готовых
                  <br />
                  решений
                </p>
              </div>
            ) : (
              <h5>Skype аудит</h5>
            )}
            {!mobileVersion ? (
              <div>
                <h5>Dashboard</h5>
                <p>
                  с показателями
                  <br />
                  вашего бизнеса
                </p>
              </div>
            ) : (
              <h5>30 виджетов</h5>
            )}
            {!mobileVersion ? (
              <div>
                <h5>Skype Аудит</h5>
                <p>
                  отдела продаж
                  <br />и CRM системы
                </p>
              </div>
            ) : (
              <h5>Dashboard</h5>
            )}
            {!mobileVersion ? (
              <div>
                <h5>35 дней</h5>
                <p>
                  использования
                  <br />
                  CRM
                </p>
              </div>
            ) : (
              <h5>Месяц аmoCRM</h5>
            )}
          </div>
          <div className="main__right-side__button">
            <Button />
          </div>
        </div>
      </div>
    </main>
  );
}
