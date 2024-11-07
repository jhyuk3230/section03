import BookItem from "@/component/book-item";
import { BookData } from "@/types";

async function AllBooks(){
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
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {next: {revalidate: 3}});
	if (!response.ok) return <div>오류가 발생했습니다</div>;
	const recoBooks: BookData[] = await response.json();

	return(
		<ul>
			{recoBooks.map((book) => (<BookItem key={book.id} {...book} />))}
		</ul>
	)
}

export default async function Page() {
	return(
		<>
			<h2 className="mt-5 text-[20px] font-bold">지금 추천하는 도서</h2>
			<RecoBooks />
			<h2 className="mt-5 text-[20px] font-bold">등록된 모든 도서</h2>
			<AllBooks />
		</>
	)
}