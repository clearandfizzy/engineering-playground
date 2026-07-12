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
			<Link href={"#"}>
				<img src="/images/product-placeholder.svg" alt="Placeholder product image"/>
				<h3 className={"font-extrabold"}>{data.name}</h3>
				<p className={"text-sm"}>{data.description}</p>
			</Link>
		</div>
	);
}

export default Item;