"use client";

import useCart from "@/lib/hooks/useCart";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useAuth, UserButton, useUser } from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";
import { BiMenuAltLeft } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [query, setQuery] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Estado para controlar o modal

  const closeSheet = () => {
    setIsSheetOpen(false); // Fecha o modal
  };
  const { isSignedIn, signOut } = useAuth(); // Pega o estado do usuário e a função para sair

  const handleSignOut = async () => {
    await signOut(); // Faz logout
  };

  function enviarMensagemWhatsApp(mensagem: string) {
    const numero = "5567996721069"; // Número do WhatsApp no formato internacional (DDI + DDD + número)
    const mensagemFormatada = encodeURIComponent(mensagem); // Codifica a mensagem para a URL
    const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;
    window.open(url, "_blank");
  }

  return (
    <>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <header className="flex fixed w-full z-10 bg-zinc-950 items-center justify-between px-3 lg:px-10 h-20 lg:h-28 border-b border-zinc-900">
          <div className="flex items-center lg:gap-4 lg:w-1/2">
            <Link
              href={"/"}
              className="w-full lg:hidden flex items-center justify-center"
            >
              <Image
                src={"/logo-mobile.svg"}
                width={60}
                height={45}
                alt="Logo da Loja"
                priority
              />
            </Link>
            <SheetTrigger>
              <BiMenuAltLeft className="size-10 lg:size-10" />
            </SheetTrigger>
            <nav className="hidden lg:flex items-center gap-4 text-lg font-semibold">
              <Link
                className={`hover:text-bluePrimary ${
                  pathname === "/" && "text-bluePrimary"
                }`}
                href={"/"}
              >
                Home
              </Link>
              <Link
                className={`hover:text-bluePrimary ${
                  pathname === "/collections" && "text-bluePrimary"
                }`}
                href={"/collections"}
              >
                Coleções
              </Link>
              <Link
                href={user ? "/wishlist" : "/sign-in"}
                className={`hover:text-bluePrimary ${
                  pathname === "/wishlist" && "text-bluePrimary"
                }`}
              >
                Favoritos
              </Link>
              <Link
                href={user ? "/orders" : "/sign-in"}
                className={`hover:text-bluePrimary ${
                  pathname === "/orders" && "text-bluePrimary"
                }`}
              >
                Pedidos
              </Link>
              <span
                className="cursor-pointer hover:text-bluePrimary"
                onClick={() => enviarMensagemWhatsApp("Olá, tenho uma dúvida")}
              >
                Dúvidas
              </span>
            </nav>
          </div>
          <Link
            href={"/"}
            className="w-full hidden lg:flex items-center justify-center"
          >
            <Image
              src={"/logo.svg"}
              width={200}
              height={45}
              alt="Logo da Loja"
              priority
            />
          </Link>
          <div className="w-full lg:w-1/2 flex items-center gap-3 lg:gap-5 justify-end">
            <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
              <input
                className="outline-none w-28 lg:max-w-[120px] bg-transparent"
                placeholder="Pesquisar..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                disabled={query === ""}
                onClick={() => router.push(`/search/${query}`)}
              >
                <Search className="cursor-pointer h-4 w-4 hover:text-bluePrimary" />
              </button>
            </div>

            <span>
              {user ? (
                <UserButton afterSignOutUrl="/sign-in" />
              ) : (
                <Link href="/sign-in">
                  <LuUser className="size-6" />
                </Link>
              )}
            </span>
            <span>
              <Link
                href="/cart"
                className="flex items-center gap-3 rounded-lg hover:bg-black hover:text-white relative size-10"
              >
                <ShoppingCart className="size-6 " />
                <span className="text-body-bold absolute top-1 -right-0">
                  ({cart.cartItems.length})
                </span>
              </Link>
            </span>
          </div>
        </header>
        <SheetContent className="bg-zinc-950 border-none" side={"left"}>
          <SheetHeader className="space-y-4">
            <SheetTitle className="text-zinc-50 text-body-semibold">{`Bem vindo(a) ${user?.firstName}!`}</SheetTitle>
            <Separator className="bg-zinc-900" />
            <SheetTitle className="text-zinc-50 text-start">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 text-lg font-semibold pt-5 pl-5">
            <Link onClick={closeSheet} href={"/"}>
              Home
            </Link>
            <Link onClick={closeSheet} href={"/collections"}>
              Coleções
            </Link>
            <Link
              onClick={closeSheet}
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-bluePrimary"
            >
              Favoritos
            </Link>
            <Link
              onClick={closeSheet}
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-bluePrimary"
            >
              Pedidos
            </Link>
            <Separator className="bg-zinc-900" />
            <span
              className="cursor-pointer hover:text-bluePrimary"
              onClick={() => enviarMensagemWhatsApp("Olá, tenho uma dúvida")}
            >
              Dúvidas
            </span>
            <div>
              {isSignedIn ? (
                <Link
                  onClick={handleSignOut}
                  href="/sign-in"
                  className="text-bluePrimary"
                >
                  Sair
                </Link>
              ) : (
                <Link href="/sign-in" className="text-bluePrimary">
                  Entrar
                </Link>
              )}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
