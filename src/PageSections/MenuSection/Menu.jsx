import styles from './Menu.module.css';
import dessertMenu from './menus/dessert-menu.pdf';
import drinkMenu from './menus/drink-menu.pdf';
import foodMenu from './menus/food-menu.pdf';
import wineMenu from './menus/wine-menu.pdf';

const Menu = props => {
  return (
    <section name='menu'>
      <h2>Our Menus</h2>
      <h3>
        Expertly created menus with a treasure trove of treats for you to choose
        from
      </h3>
      <div
        className={styles['menu-wrapper']}
        role='presentation'
      >
        <a
          href={foodMenu}
          title='Opens in a seperate tab'
          target='_blank'
          rel='noreferrer'
        >
          <div
            className={`${styles['menu-card']} ${styles['food-card']}`}
            role='presentation'
          >
            <p className={styles['menu-link']}>Food Menu</p>
          </div>
        </a>
        <a
          href={dessertMenu}
          title='Opens in a seperate tab'
          target='_blank'
          rel='noreferrer'
        >
          <div
            className={`${styles['menu-card']} ${styles['dessert-card']}`}
            role='presentation'
          >
            <p className={styles['menu-link']}>Dessert Menu</p>
          </div>
        </a>
        <a
          href={wineMenu}
          title='Opens in a seperate tab'
          target='_blank'
          rel='noreferrer'
        >
          <div
            className={`${styles['menu-card']} ${styles['wine-card']}`}
            role='presentation'
          >
            <p className={styles['menu-link']}>Wine Menu</p>
          </div>
        </a>
        <a
          href={drinkMenu}
          title='Opens in a seperate tab'
          target='_blank'
          rel='noreferrer'
        >
          <div
            className={`${styles['menu-card']} ${styles['drink-card']}`}
            role='presentation'
          >
            <p className={styles['menu-link']}>Drink Menu</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Menu;
