'use client';

import { useSearchParams } from "next/navigation";

const ProductSearch = () => {
    const searchParams = useSearchParams();

    return (<>
    <div className={"w-full grid justify-end"}>
        <div className={"flex"}>
            <form action={"/product/list"} method={"get"} className={"flex"}>
            <input type="hidden" name="page" value={searchParams.get('page') ?? 1} />
            <input type="hidden" name="page" value={searchParams.get('sort') ?? 'id'} />
            <input 
                className={"block rounded-2xl rounded-r-none border-gray-800 border border-r-0 p-3 font-sans"}
                type="text" 
                name="q"
                defaultValue={searchParams.get('q') ?? ''}
                placeholder="Search..."/>
            <button type="submit" 
                    className={"p-2 bg-gray-800 text-white hover:cursor-pointer rounded-2xl rounded-l-none border-l-0"}>Search</button>
            </form>
        </div>
    </div>
    </>);
}

export default ProductSearch;