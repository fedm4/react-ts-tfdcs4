import * as React from 'react';
import './style.scss';

export default function App() {

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setProducts(data));
      console.log('Prints');
      return () => {};
  }, []);

  return (
    <main>
      <header>
        <h1 className="main-title">Products</h1>
        <button className="button" type="button">Order by Top Rated</button>
        <button className="button" type="button">Order by Highest Price</button>
        <button className="button" type="button">Refresh Products</button>
      </header>
      {
        products.map(product => (
            <section className="card">
              <header className="card-header">
                <h2 className="card-title">{product.title}</h2>
              </header>
              <figure className="card-body">
                <div className="product-image-wrapper">
                  <img className="product-image" src={product.image} />
                </div>
                <figcaption>
                  ${product.price}
                </figcaption>
              </figure>
            </section>
          )
        )
      }
    </main>
  );
}
