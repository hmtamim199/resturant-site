import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menu from '../../../assets/menu/dessert-bg.jpeg'



const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>

      </Helmet>
      <Cover img={menu} title="our menu"></Cover>

    </div>
  );
};

export default Menu;