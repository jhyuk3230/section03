"use client"

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export default function Modal({children}: {children:ReactNode}) {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const router = useRouter();

	useEffect(()=>{
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
			dialogRef.current?.scrollTo({top: 0});
		}
	}, []);

	return (
    // createPortal(<div>{children}</div>, document.querySelector("#modal-root") as HTMLElement)
    createPortal(
      <dialog
        className="w-[90%] max-w-[700px] mt-5 border-none rounded-[5px] backdrop:bg-black/70"
        onClose={() => router.back()}
        onClick={(e) => {
          if (e.target === e.currentTarget) router.back();
        }}
        ref={dialogRef}
      >
        <div className="p-5">{children}</div>
      </dialog>,
      document.querySelector("#modal-root") as HTMLElement
    )
  );
}