import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './data/products';

function App() {
  return (
    <>
      <h1>Product Table</h1>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
