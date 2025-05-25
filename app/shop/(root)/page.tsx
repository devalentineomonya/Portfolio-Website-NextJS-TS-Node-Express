import PageHeader from "@/components/shared/page-header";
import { client } from "@/sanity/lib/client";
import ShopClient from "@/screens/shop/widgets/shop-client";
import { Product } from "@/types/product";

const PRODUCTS_QUERY = `
*[
  _type == "product"
]{
  slug,
  sizes,
  name,
  price,
  image,
}
`;

export default async function TechShirtsCollection() {
  const products = await client.fetch<Product[]>(PRODUCTS_QUERY);
  console.log(products)

  return (
    <div className="min-h-screen my-16 px-4">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title="Tech Shirts Collection"
          description="Explore our collection of programming and tech-themed shirts. This is an experimental initiative, and your feedback will help validate if we should start this business or not."
        />

        <ShopClient products={products} />
      </div>
    </div>
  );
}
