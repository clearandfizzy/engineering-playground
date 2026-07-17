import Item from "@/component/product/list/item";

type AllProductsType = {
	products: Array<{
		id: string;
		name: string;
	}>
}

const AllProducts = async({products}: AllProductsType) => {
	return (<section>
		<div className={"py-4"}>
			<p>{products.length} products listed</p>
		</div>
		<div className={"grid grid-cols-3 gap-4"}>
			{products.map((item) => (
				<Item key={item.id} data={item} />
			))}
		</div>
	</section>)
}

export default AllProducts;