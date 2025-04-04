"use client";

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 p-6">
      <div className="flex flex-col items-center gap-4">
        <CheckCircle className="text-green-500 w-16 h-16 animate-pulse" />
        <p className="text-heading3-bold text-green-600">Pagamento Concluído</p>
        <p className="text-base text-gray-500 text-center">
          Obrigado pela sua compra! Sua ordem foi processada com sucesso.
        </p>
      </div>
      <Link
        href="/orders"
        className="px-6 py-3 bg-green-600 text-white text-base-bold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-200"
      >
        Ver Pedido
      </Link>
      <Link
        href="/"
        className="text-sm text-green-500 hover:underline"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
