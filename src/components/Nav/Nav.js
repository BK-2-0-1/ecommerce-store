import { useEffect, useState } from 'react';
import Link from 'next/link';

import { FaShoppingCart } from 'react-icons/fa';

import styles from './Nav.module.css';

const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });

  return (
    <div>
      <nav className={styles.nav}>
        <p className={styles.title}>
          <Link href="/">Ecommerce</Link>
        </p>
        <p className={styles.description}>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: 'none' }}
          >
            <FaShoppingCart color="#0070f3" />
            <strong className="sr-only">Cart</strong>
            <span className="snipcart-total-price">
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(total)}
            </span>
          </a>
        </p>
      </nav>
    </div>
  );
};

export default Nav;
