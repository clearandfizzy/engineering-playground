import AllProducts from "@/component/product/list/all";
import ProductSearch from "@/component/product/list/search";
import productData from "@/data/all-products.json";

type PageProps = {
	searchParams: Promise<{
		q: string;
	}>;
};

const Page = async({searchParams}: PageProps) => {
	const {q} = await searchParams;

	let products: Array<any> = productData;

	if (q !== undefined && q !== null && q !== "") {
		products = productData.filter(product => {
			return product.name.toLowerCase().includes(q.toLowerCase());
		});
	}

	return (
		<>
			<ProductSearch />
			<AllProducts products={products}/>
		</>	
	);
}

export default Page;