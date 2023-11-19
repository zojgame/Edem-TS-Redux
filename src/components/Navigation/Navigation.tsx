import styles from "./styles.module.scss";

const NavigationComponent = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.column}>
        <div>О проекте</div>
        <div>Блог</div>
        <div>Безопасность</div>
      </div>
      <div className={styles.column}>
        <div>Способы оплаты</div>
        <div>Обратная связь</div>
        <div>Вопросы и ответы</div>
      </div>
      <div className={styles.column}>
        <div>Автовокзалы России</div>
        <div>Автобусные направления</div>
        <div>Расписание автобусов</div>
      </div>
      <div className={styles.column}>
        <div>Популярные маршруты</div>
        <div>СМИ и рекламодатели</div>
      </div>
    </nav>
  );
};

export { NavigationComponent };
