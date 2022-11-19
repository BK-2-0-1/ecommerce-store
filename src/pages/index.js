import Head from 'next/head';
import Image from 'next/image';

import Nav from '../components/Nav/Nav';

import styles from '../styles/Home.module.css';

import products from '../../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav legacyBehaviour className="test" />
      <title>Ecommerce BK-201 Store</title>

      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>
                  <button
                    className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://bk-201.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/bk-201-logo.png"
              alt="Vercel Logo"
              width={100}
              height={100}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
