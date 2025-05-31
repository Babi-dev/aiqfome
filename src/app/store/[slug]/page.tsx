import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import Link from "next/link";

export default function StorePage() {
  return (
    <>
      <Header />
      <main className='h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-gray-200'>
        <h1>Página da Loja</h1>
        <p>Bem-vindo à página da loja!</p>
        <Link href="/">Voltar para home</Link>
      </main>
      <Footer />
    </>
  );
}