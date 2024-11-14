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

export default async function Search({ searchParams }: {searchParams: Promise<{q?: string}>}) {
	const params = await searchParams;

	return (
		<>
			<Suspense key={params.q || ""} fallback={<BookListSkeleton count={3}/>}>
				<SearchResult q={params.q || ""} />
			</Suspense>
		</>
	)
}