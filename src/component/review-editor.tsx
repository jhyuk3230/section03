"use client";

import { createReviewAction } from "@/actions/create-review.action";
import { useActionState, useEffect } from "react";

export default function ReviewEditor({bookId}: {bookId: string}){

	const [state, formAction, isPending] = useActionState(createReviewAction, null);

	useEffect(()=>{
		if (state && !state.status) {
			alert(state.error)
		}
	}, [state])

	return (
		<div>
			<form className="flex flex-col gap-1" action={formAction}>
				<input name="bookId" value={bookId} hidden readOnly />
				<input className="w-[100px] p-1 border border-gray-400" name="author" type="text" placeholder="유저" disabled={isPending} required/>
				<textarea className="w-full h-[80px] p-1 border border-gray-400 resize-none" name="content" placeholder="내용" disabled={isPending} required/>
				<div className="text-right">
					<button className="w-full p-3 rounded-[5px] bg-sky-500 text-white hover:bg-sky-600" type="submit" disabled={isPending}>{isPending ? "등록중" : "등록"}</button>
				</div>
			</form>
		</div>
	);
}