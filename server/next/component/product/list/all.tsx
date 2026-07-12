import data from "@/data/all-products.json";
import Item from "@/component/product/list/item";

export default function AllProducts() {
	return (<section>
		<h1 className={"text-2xl"}>Product List Page</h1>
		<div className={"py-4"}>
			<p>{data.length} products listed</p>
		</div>
		<div className={"grid grid-cols-3 gap-4"}>
			{data.map((item) => (
				<Item key={item.id} data={item} />
			))}
		</div>
	</section>)
}