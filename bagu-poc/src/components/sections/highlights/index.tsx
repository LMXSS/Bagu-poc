import { Card, CardContent } from "@/components/ui/card";
import banner from "@/assets/banner.jpg";
import { Button } from "@/components/ui/button";

const images = [banner, banner, banner];

function HighLights() {
  return (
    <section className="mt-10 flex flex-col items-center mb-10">
      <h2
        className="text-center text-xl font-bold"
        style={{ color: "#7e22ce", fontSize: 30 }}
      >
        Destaques Mágicos
      </h2>
      <p
        className="text-md text-center mt-5"
        style={{ color: "#9333ea", maxWidth: "500px" }}
      >
        Bem-vindo ao meu reino mágico, onde compartilho momentos especiais e
        encantadores. Entre no meu universo místico cheio de surpresas e
        encantos.
      </p>

      <div className="mt-5 mb-10 flex gap-5 flex-wrap justify-center">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden rounded-sm">
            <div className="w-96 relative">
              <img
                style={{ filter: "blur(10px)" }}
                alt="brand-image"
                src={image}
                className="w-full max-h-48"
              />
              <Button
                style={{
                  borderRadius: 30,
                  padding: "20px 40px",
                  background:
                    "linear-gradient(90deg,rgba(255, 78, 147, 1) 0%, rgba(197, 87, 199, 1) 64%, rgba(178, 83, 237, 1) 100%)",
                }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2"
              >
                Assine para Ver
              </Button>
            </div>
            <CardContent>
              <h3 className="text-lg font-bold uppercase mb-5">
                Magia ao Luar
              </h3>
              <p>Momentos especiais sob a luz da lua cheia.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        style={{
          borderRadius: 30,
          padding: "20px 40px",
          background:
            "linear-gradient(90deg,rgba(255, 78, 147, 1) 0%, rgba(197, 87, 199, 1) 64%, rgba(178, 83, 237, 1) 100%)",
        }}
      >
        Ver Main Conteúdo
      </Button>
    </section>
  );
}

export default HighLights;
