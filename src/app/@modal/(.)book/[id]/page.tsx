import BookPage from "@/app/book/[id]/page";
import Modal from "@/component/modal";
import { InterceptProps } from "@/types";

export default async function Page({ params }: InterceptProps) {
  const resolvedParams = await params;

  return (
    <Modal>
      <BookPage params={resolvedParams} />
    </Modal>
  );
}