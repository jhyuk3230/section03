"use client"

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({error,reset}: {error:Error; reset:()=>void}){

	const router = useRouter();

	useEffect(()=>{
		console.error(error.message);
	}, [error]);

	return (
		<div>
			<p>검색중 에러</p>
			<button onClick={() => {
				startTransition(()=>{
					router.refresh();
					reset();
				})
			}}>다시 시도</button>
		</div>
	)
}