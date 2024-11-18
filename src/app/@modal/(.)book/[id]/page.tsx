import BookPage from "@/app/book/[id]/page";
import Modal from "@/component/modal";

export default function Page(props: any){
	return (
		<Modal>
			<BookPage {...props}/>
		</Modal>
	)
}