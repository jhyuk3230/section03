import SearchBar from "@/component/searchbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return(
		<>
			<h1 className="mb-5">ONEBITE BOOKS</h1>
			<SearchBar />
			{children}
		</>
	)
}