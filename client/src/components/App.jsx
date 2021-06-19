import React, { lazy, Suspense, useState, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CartItemsContext from './contexts/CartItemsContext';
import Navbar from './navbar/Navbar';
import ProductOverview from './product-overview/ProductOverview';
import Spinner from './product-overview/spinner/LoadingSpinner';

const ProductQuestions = lazy(() => import('./product-questions/ProductQuestions'));
const ProductReviews = lazy(() => import('./reviews/reviewsIndex'));

function App () {
  const [overviewLoaded, setOverviewLoaded] = useState(false);
  const [items, setItems] = useState(0);
  const productId = 25178;

  function loadNextComponents(val) {
    setOverviewLoaded(val);
  }

  function getCartItems(val) {
    setItems(val);
  }

  return (
    <Router>
      <Navbar items={items} />
      <CartItemsContext.Provider value={{ items, setItems }}>
        <ProductOverview loadNextComponents={loadNextComponents} productId={productId} />
      </CartItemsContext.Provider>
      <Suspense fallback={<Spinner />}>
        {overviewLoaded
        && (
          <>
            <ProductReviews productId={productId} />
            <ProductQuestions productId={productId} />
          </>
        )}
      </Suspense>
    </Router>
  );
}

export default App;


