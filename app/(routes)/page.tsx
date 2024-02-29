import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("150f498e-4605-4ce5-a887-dced2d589c98");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
