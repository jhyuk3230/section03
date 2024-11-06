"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
	const router = useRouter();
	const [search, setSearch] = useState("");

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}

	const onSubmit = () => {
		router.push(`/search?q=${search}`);
	}

	return(
		<>
			<div className="flex justify-center gap-[10px]">
				<input className="p-[10px] border border-gray-200 flex-1" type="text" value={search} onChange={onChangeSearch}/>
				<button className="w-[80px] bg-blue-300" onClick={onSubmit}>검색</button>
			</div>
		</>
	)
}