import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    title: "Plano Fada Iniciante",
    price: "R$ 29,90",
    features: [
      "Acesso a fotos básicas",
      "Atualizações semanais",
      "Conteúdo exclusivo limitado",
    ],
  },
  {
    title: "Plano Fada Encantada",
    price: "R$ 49,90",
    features: [
      "Acesso completo às fotos",
      "Vídeos exclusivos",
      "Atualizações diárias",
      "Chat privado semanal",
    ],
  },
  {
    title: "Plano Fada Iniciante",
    price: "R$ 89,90",
    features: [
      "Acesso total a todo conteúdo",
      "Ensaios fotográficos exclusivos",
      "Vídeos premium",
      "Chat privado ilimitado",
      "Encontros virtuais mensais",
    ],
  },
];

function Subscription() {
  return (
    <section className="mt-10 flex flex-col items-center mb-10">
      <h2
        className="text-center text-xl font-bold text-center w-full"
        style={{ color: "#7e22ce", fontSize: 30 }}
      >
        Planos de Assinatura
      </h2>
      <p
        className="text-md text-center mt-5"
        style={{ color: "#9333ea", maxWidth: "500px" }}
      >
        Escolha o plano perfeito para explorar meu mundo mágico e ter acesso a
        conteúdos exclusivos.
      </p>

      <div className="mt-5 mb-10 flex gap-5 flex-wrap justify-center">
        {plans.map((plan, index) => (
          <Card key={index} className="pt-0 overflow-hidden rounded-sm">
            <div
              style={{ backgroundColor: "#f5e7fb" }}
              className="w-96 py-5 relative flex flex-col items-center"
            >
              <h2
                className="font-bold"
                style={{ color: "#7e22ce", fontSize: 25 }}
              >
                {plan.title}
              </h2>
              <p
                className="font-bold"
                style={{ fontSize: 35, color: "#db2777" }}
              >
                {plan.price}
                <span
                  style={{ color: "#c46ef7", fontSize: 20, fontWeight: 400 }}
                >
                  /mês
                </span>
              </p>
            </div>
            <CardContent>
              {plan.features.map((feature, index) => (
                <p style={{ color: "#6b21a8" }} key={index}>
                  <span style={{ color: "#ec4899" }}>✦</span> {feature}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Subscription;
