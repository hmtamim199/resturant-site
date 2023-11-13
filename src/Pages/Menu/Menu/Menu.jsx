import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menu from '../../../assets/menu/dessert-bg.jpeg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>

      </Helmet>
      <Cover img={menu} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menu} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menu} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;