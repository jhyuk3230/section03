"use client"

import { deleteReviewAction } from "@/actions/delete-review.action";
import { useActionState, useEffect, useRef } from "react";

export default function ReviewItemDeleteBtn({ reviewId, bookId }: {reviewId: number, bookId: number}) {
	const formRef = useRef<HTMLFormElement>(null);
	const [state, formAction, isPending] = useActionState(deleteReviewAction, null)

	// console.log(formRef.current);

	useEffect(()=>{
		if (state && !state.status) alert(state.error);
	}, [state])

	return (
		<form ref={formRef} action={formAction}>
			<input name="reviewId" value={reviewId} hidden readOnly />
			<input name="bookId" value={bookId} hidden readOnly />
			{isPending ? <div>...</div> : <button className="text-[12px] font-bold text-black">삭제하기</button>}
			{/* {isPending ? <div>...</div> : <button className="text-[12px] font-bold text-black" onClick={()=>formRef.current?.requestSubmit()}>삭제하기</button>} */}
		</form>
	)
}