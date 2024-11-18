import Link from "next/link";
import "./globals.css"
import { BookData } from "@/types";
import { ReactNode } from "react";

async function Footer(){
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {cache: "force-cache"});

	if (!response.ok) return <footer>@winterlood</footer>

	const books: BookData[] = await response.json();
	const bookCount = books.length;

	return (
		<footer className="mt-[15px]">
			@winterlood
			<span className="my-2 block">총 도서 개수: {bookCount}</span>
		</footer>
	)
}

export default function RootLayout({
  children,
	modal
}: Readonly<{
  children: React.ReactNode;
	modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[768px] mx-auto">
				<header className="mb-5">
					<Link href={"/"}>ONEBITE BOOKS</Link>
				</header>
				<main>
        	{children}
				</main>
				<Footer />
				{modal}
				<div id="modal-root"></div>
      </body>
    </html>
  );
}
