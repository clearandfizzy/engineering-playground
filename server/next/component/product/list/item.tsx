import Link from "next/link";

type PropsType = {
	data: {
		name?: string;
		description?: string;
	}
}

type ItemType = ({data}: PropsType) => any;

const Item: ItemType = ({data}) => {
	return (
		<div className={"hover:cursor-pointer"}>
			<Link href={"#"} className="flex-1 space-y-2 font-sans">
				<img src="/images/product-placeholder.svg" alt="Placeholder product image"/>
				<h3 className={"font-extrabold"}>{data.name}</h3>
				<p className={"text-xs"}>{data.description}</p>
			</Link>
		</div>
	);
}

export default Item;