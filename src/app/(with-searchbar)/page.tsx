import BookItem from "@/component/book-item";
import BookListSkeleton from "@/component/skeleton/book-list-skeleton";
import { BookData } from "@/types";
import { Metadata } from "next";
import { Suspense } from "react";

// 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
// 1. auto : 기본값
// 2. force-dynamic : 강제로 Dynamic 페이지로 설정
// 3. force-static : 강제로 Static 페이지로 설정
// 4. error : 강제로 static 페이지로 설정 (설정하면 안되는 페이지 -> 오류 페이지)
// 웬만하면 사용하지않음
// export const dynamic = 'auto';

async function AllBooks(){
	// await delay(1500);
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {cache:"force-cache"});
	if (!response.ok) return <div>오류가 발생했습니다</div>;
	const allBooks: BookData[] = await response.json();

	return (
		<ul>
			{allBooks.map((book) => (<BookItem key={book.id} {...book} />))}
		</ul>
	)
}

async function RecoBooks(){
	// await delay(3000);
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {next: {revalidate: 3}});
	if (!response.ok) return <div>오류가 발생했습니다</div>;
	const recoBooks: BookData[] = await response.json();

	return(
		<ul>
			{recoBooks.map((book) => (<BookItem key={book.id} {...book} />))}
		</ul>
	)
}

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
	title: "한입 북스",
	description: "한입 북스에 등록된 도서를 만나보세요",
	openGraph: {
		title: "한입 북스",
		description: "한입 북스에 등록된 도서를 만나보세요",
		images: ["/thumbnail.png"],
	}
};

export default async function Page() {
	return(
		<>
			<h2 className="mt-5 text-[20px] font-bold">지금 추천하는 도서</h2>
			<Suspense fallback={<BookListSkeleton count={3} />}>
				<RecoBooks />
			</Suspense>
			<h2 className="mt-5 text-[20px] font-bold">등록된 모든 도서</h2>
			<Suspense fallback={<BookListSkeleton count={10} />}>
				<AllBooks />
			</Suspense>
		</>
	)
}