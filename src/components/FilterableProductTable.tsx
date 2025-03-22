import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import { Product } from '../types/products';

interface FilterableProductTableProps {
  products: Product[];
}

function FilterableProductTable({ products }: FilterableProductTableProps) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default FilterableProductTable;
