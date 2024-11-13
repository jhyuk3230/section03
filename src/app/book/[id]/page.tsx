import { BookData } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { createReviewAction } from "@/actions/create-review.action";

// 다이나믹페이지일경우 404로 이동
// export const dynamicParams = false;

// 강제로 스태틱페이지로 변경
// ※id지정 안한페이지로 이동시 해당 페이지는 다이나믹페이지
export async function generateStaticParams(){
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {cache: "force-cache"});

	if (!response.ok) return []

	const books: BookData[] = await response.json();

	return books.map((book) => ({id: book.id.toString(),}))
}

async function BookDetail({bookId}:{bookId: string}) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`);
	if (!response.ok) {
		if (response.status === 404) notFound();
		return <div>에러</div>
	}
	const book: BookData = await response.json();

	return (
		<div className="flex flex-col gap-[10px]">
			<div className="h-[600px] flex justify-center items-center bg-no-repeat bg-cover relative before:content-[''] before:w-full before:h-full before:bg-[rgba(0,0,0,.5)] before:absolute before:left-0 before:top-0" style={{backgroundImage: `url('${book.coverImgUrl}')`}}>
				<div className="w-[400px] relative [&_img]:!h-auto">
					<Image src={book.coverImgUrl} alt={book.title} fill className="!relative" priority />
				</div>
			</div>
			<h3 className="text-[20px] font-bold text-black">{book.title}</h3>
			<p className="text-[18px] font-medium text-black">{book.subTitle}</p>
			<div className="text-[12px] font-normal text-gray-500">{book.author} | {book.publisher}</div>
			<div className="p-4 bg-gray-100 text-[16px] font-normal text-black whitespace-pre-line">{book.description}</div>
		</div>
	)
}

function ReviewEditor({bookId}: {bookId: string}){
	return (
		<div>
			<form className="flex flex-col gap-1" action={createReviewAction}>
				<input name="bookId" value={bookId} hidden readOnly />
				<input className="w-[100px] p-1 border border-gray-400" name="author" type="text" placeholder="유저"  required/>
				<textarea className="w-full p-1 border border-gray-400" name="content" placeholder="내용"  required/>
				<div className="text-right">
					<button className="p-3 rounded-[5px] bg-blue-500 text-white" type="submit">등록</button>
				</div>
			</form>
		</div>
	);
}

export default async function Book({params}: {params: {id: string}}) {
	const paramsId = await params.id;
	return (
		<div className="flex flex-col gap-[50px]">
			<BookDetail bookId={paramsId} />
			<ReviewEditor bookId={paramsId} />
		</div>
	)
}

// export default async function Book(detailParams: { params: {id: string}}) {
// 	const params = await detailParams.params;
// 	return (
// 		<div className="flex flex-col gap-[50px]">
// 			<BookDetail bookId={params.id} />
// 			<ReviewEditor />
// 		</div>
// 	)
// }