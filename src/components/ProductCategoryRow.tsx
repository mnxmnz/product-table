import { Product } from '../types/products';

interface ProductCategoryRowProps {
  category: Product['category'];
}

function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
export default ProductCategoryRow;
