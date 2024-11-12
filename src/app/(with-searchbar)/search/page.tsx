import BookItem from "@/component/book-item";
import BookListSkeleton from "@/component/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import { delay } from "@/utill/delay";
import { Suspense } from "react";

async function SearchResult({ q }: {q: string}) {
	await delay(1500);

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`, {cache: "force-cache"});
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

export default function Search({ searchParams }: {searchParams: {q?: string}}) {
	return (
		<>
			<Suspense key={searchParams.q || ""} fallback={<BookListSkeleton count={3}/>}>
				<SearchResult q={searchParams.q || ""} />
			</Suspense>
		</>
	)
}