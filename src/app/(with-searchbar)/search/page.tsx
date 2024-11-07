import BookItem from "@/component/book-item";
import { BookData } from "@/types";
import React from "react";


export default async function Search({ searchParams }: {searchParams: Promise<{q: string}>}) {
	const params = await searchParams;

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${params.q}`, {cache: "force-cache"});
	if (!response.ok) return <div>에러</div>
	const books: BookData[] = await response.json();
	
	return (
		<>
			<div className="mt-5">
				{books.map((book) => (
					<BookItem key={book.id} {...book} />
				))}
			</div>
		</>
	)
}