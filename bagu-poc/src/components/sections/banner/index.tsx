import { Button } from "@/components/ui/button";
import AnimatedDot from "./AnimatedDot";

function Banner() {
  return (
    <div
      style={{ backgroundColor: "#fcf0f8" }}
      className="h-96 w-full flex flex-col items-center justify-center relative"
    >
      <AnimatedDot
        color="#b454e9"
        size={10}
        initialX={200}
        initialY={0}
        finalX={200}
        finalY={100}
      />
      <AnimatedDot
        color="#be185d"
        size={15}
        initialX={0}
        initialY={-150}
        finalX={0}
        finalY={0}
      />
      <AnimatedDot
        color="#b454e9"
        size={10}
        initialX={-250}
        initialY={0}
        finalX={-200}
        finalY={150}
      />
      <div style={{ zIndex: 10 }}>
        <i>
          <p className="text-md text-center" style={{ color: "#be185d" }}>
            Meu mundo encantado
          </p>
          <p
            className="text-md text-center mt-10"
            style={{ color: "#6b21a8", maxWidth: "500px" }}
          >
            Bem-vindo ao meu reino mágico, onde compartilho momentos especiais e
            encantadores. Entre no meu universo místico cheio de surpresas e
            encantos.
          </p>
        </i>
        <div className="flex gap-5 mt-10">
          <Button
            style={{
              borderRadius: 30,
              padding: "20px 40px",
              background:
                "linear-gradient(90deg,rgba(255, 78, 147, 1) 0%, rgba(197, 87, 199, 1) 64%, rgba(178, 83, 237, 1) 100%)",
            }}
          >
            ✨ Assine Agora
          </Button>
          <Button
            style={{
              borderRadius: 30,
              padding: "20px 30px",
              border: "2px solid #ecd6fa",
              backgroundColor: "white",
              color: "#7e22ce",
            }}
          >
            Ver Prévias
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
