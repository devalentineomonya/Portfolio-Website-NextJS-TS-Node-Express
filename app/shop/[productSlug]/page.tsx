import PageHeader from "@/components/shared/page-header";
import { client } from "@/sanity/lib/client";
import ProductClient from "@/screens/shop/widgets/product-client";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = await params;
  const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]`;

  const product = await client.fetch<Product | null>(PRODUCT_QUERY, {
    slug: productSlug,
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="my-16">
      <ProductClient product={product} />
    </div>
  );
}
