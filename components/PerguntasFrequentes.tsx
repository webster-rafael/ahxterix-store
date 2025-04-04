import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PerguntasFrequentes = () => {
  return (
    <section className="w-full max-w-xs lg:max-w-7xl mx-auto py-20">
      <h1 className="py-6 text-center lg:text-heading1-bold text-body-bold">
        Perguntas Frequentes
      </h1>
      <Accordion type="single" collapsible className="w-full text-small-medium lg:text-body-medium">
        <AccordionItem className="border-zinc-800" value="item-1">
          <AccordionTrigger>
            Quais são os métodos de pagamento aceitos?
          </AccordionTrigger>
          <AccordionContent className="text-zinc-400">
            Aceitamos cartões de crédito, débito, Pix e boletos bancários. Todas
            as transações são realizadas de forma segura.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-zinc-800" value="item-2">
          <AccordionTrigger>
            Como funciona a política de devolução?
          </AccordionTrigger>
          <AccordionContent className="text-zinc-400">
            Você pode trocar ou devolver um produto em até 30 dias após a
            entrega, desde que ele esteja sem uso e com a etiqueta original.
            Entre em contato com nosso suporte para mais informações.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-zinc-800" value="item-3">
          <AccordionTrigger>Qual é o prazo de entrega?</AccordionTrigger>
          <AccordionContent className="text-zinc-400">
            O prazo de entrega varia de acordo com a sua localização e o método
            de envio escolhido. Após inserir seu CEP no carrinho, você poderá
            ver o prazo estimado.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-zinc-800" value="item-4">
          <AccordionTrigger>Como escolho o tamanho ideal?</AccordionTrigger>
          <AccordionContent className="text-zinc-400">
            Em cada página de produto, disponibilizamos uma tabela de medidas
            para ajudar você a escolher o tamanho ideal. Caso tenha dúvidas,
            entre em contato com nosso suporte.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="border-zinc-800" value="item-5">
          <AccordionTrigger>Os produtos têm garantia?</AccordionTrigger>
          <AccordionContent className="text-zinc-400">
            Sim, nossos produtos possuem garantia contra defeitos de fabricação
            por até 90 dias. Caso encontre algum problema, entre em contato
            conosco.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default PerguntasFrequentes;
