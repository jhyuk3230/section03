"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [search, setSearch] = useState("");

	const q = searchParams.get("q");

	useEffect(()=>{
		setSearch(q || "");
	}, [q])

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	}

	const onSubmit = () => {
		if (!search || q === search) return
		router.push(`/search?q=${search}`);
	}

	const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onSubmit();
		}
	}

	return(
		<>
			<div className="flex justify-center gap-[10px]">
				<input className="p-[10px] border border-gray-200 rounded-[5px] flex-1" type="text" value={search} onChange={onChangeSearch} onKeyDown={onKeyDown}/>
				<button className="w-[80px] rounded-[5px] bg-blue-500 text-white" onClick={onSubmit}>검색</button>
			</div>
		</>
	)
}