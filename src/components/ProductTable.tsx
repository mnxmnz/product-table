import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

import { Product } from '../types/products';

interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

function ProductTable({ products, filterText, inStockOnly }: ProductTableProps) {
  // 카테고리별로 제품 그룹화
  // products 배열을 카테고리별로 그룹화된 객체로 변환
  const productsByCategory = products.reduce((acc, product) => {
    // 해당 카테고리가 아직 없으면 빈 배열로 초기화
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    // 현재 제품을 해당 카테고리 배열에 추가
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  // 그룹화된 데이터를 바탕으로 컴포넌트 생성
  // 객체를 [카테고리, 제품배열] 쌍의 배열로 변환
  // 각 카테고리마다 헤더 행과 제품 행을 배열로 병합
  const rows = Object.entries(productsByCategory).flatMap(([category, productsInCategory]) => [
    // 각 카테고리마다 ProductCategoryRow 컴포넌트 생성
    <ProductCategoryRow category={category} key={category} />,
    // 해당 카테고리에 속한 모든 제품에 대해 ProductRow 컴포넌트 생성
    ...productsInCategory.map(product => <ProductRow product={product} key={product.name} />),
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
