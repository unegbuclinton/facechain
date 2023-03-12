// Import Styling
import './stickyscroll.css';

// Import hooks
import useScrollHide from '../../hooks/design/usescrollhide';

import { useEffect, useState } from 'react';

const StickyScroll = ({ children }) => {
  const [navClassList, setNavClassList] = useState(['stickyscroll-nav']);
  const scroll = useScrollHide();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = ['stickyscroll-nav'];
    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('sticky--hidden');
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return <div className={navClassList.join(' ')}>{children}</div>;
};

export default StickyScroll;
