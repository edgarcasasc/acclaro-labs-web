// src/app/page.tsx
import Hero from "../components/Hero"; 
import SocialProof from "../components/SocialProof"; 
import ProblemSection from "../components/ProblemSection"; 
import SolutionSection from "../components/SolutionSection";
import DigitalUniverse from "../components/DigitalUniverse";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import TeamSection from "@/components/TeamSection"; 
import CallToActionSection from "@/components/CallToActionSection"; // <-- 1. IMPORTAR

export default function Home() {
return (
<>
{/* --- CAPA 1: FONDO --- */}
<DigitalUniverse />

{/* --- CAPA 2: CONTENIDO --- */}
<main className="relative z-1">
<Hero />
<SocialProof />
<ProblemSection />
<SolutionSection />
<LeadMagnetSection /> 
<TeamSection />
<CallToActionSection /> {/* <-- 2. AÑADIR LA SECCIÓN FINAL */}
</main>
</>
);
}
