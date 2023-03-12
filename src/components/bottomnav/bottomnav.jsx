// import component
import { NavLink } from 'react-router-dom';

// Import Component
import BottomNavItem from './navitem';

// import styling
import './styles.css';

const BottomNavigation = () => {
  return (
    <section className="bg-black fixed bottom-0 w-full block lg:hidden grid-box ">
      <nav className="text-white flex justify-between">
        <NavLink
          to="/home"
          className={(isActive) =>
            `flex b-nav-item items-center justify-center ${
              isActive.isActive ? 'b-active-nav relative' : ''
            }`
          }
        >
          <BottomNavItem title="Home" iconName="home" />
        </NavLink>
        <NavLink
          to="/riders"
          className={(isActive) =>
            `flex b-nav-item items-center justify-center ${
              isActive.isActive ? 'b-active-nav relative' : ''
            }`
          }
        >
          <BottomNavItem title="Riders" iconName="riders" />
        </NavLink>
        <NavLink
          to="/family-pools"
          className={(isActive) =>
            `flex b-nav-item items-center justify-center ${
              isActive.isActive ? 'b-active-nav relative' : ''
            }`
          }
        >
          <BottomNavItem title="Pools" iconName="pools" />
        </NavLink>
        <NavLink
          to="/watchlist"
          className={(isActive) =>
            `flex b-nav-item items-center justify-center ${
              isActive.isActive ? 'b-active-nav relative' : ''
            }`
          }
        >
          <BottomNavItem title="Watchlist" iconName="watchlist" />
        </NavLink>
        <NavLink
          to="/more"
          className={(isActive) =>
            `flex b-nav-item items-center justify-center ${
              isActive.isActive ? 'b-active-nav relative' : ''
            }`
          }
        >
          <BottomNavItem title="More" iconName="more" />
        </NavLink>
      </nav>
    </section>
  );
};

export default BottomNavigation;
