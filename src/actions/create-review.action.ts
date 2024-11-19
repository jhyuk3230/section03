"use server";

import { revalidateTag } from "next/cache";

export async function createReviewAction(_: void, formData:FormData) {
	const bookId= formData.get("bookId")?.toString();
	const author = formData.get('author')?.toString();
	const content = formData.get('content')?.toString();
	
	if (!bookId || !content || !author) {
		return{
			status: false,
			error: "내용입력 필요"
		}
	}
	
	try{
		// await delay(2000);
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, {method:"POST", body: JSON.stringify({bookId, content, author})});
		if (!response.ok) throw new Error(response.statusText);

		// 특정 페이지 재검증 (페이지 전체 캐시삭제)
		// revalidatePath(`/book/${bookId}`);

		// // 특정 경로의 모든 동적 페이지 재검증
		// revalidatePath(`/book/[id]`, "page");

		// // 특정 레이아웃을 갖는 모든 페이지 재검증
		// revalidatePath(`/(with-searchbar)`, "layout");

		// // 모든 데이터 재검증
		// revalidatePath("/", "layout");

		// 태그 기준, 데이터 캐시 재검증 (페이지 내에서 특정 태그 캐시삭제)
		// {cache: "force-cache"} 대신 {next: ['review-${bookId}']} 일경우
		revalidateTag(`review-${bookId}`);

		return {
			status: true,
			error: ""
		}
	}catch(err){
		return {
			status: false,
			error: `리뷰저장 실패 : ${err}`
		}
	}
}