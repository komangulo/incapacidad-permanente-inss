import HeroSection from "@/components/HeroSection";
import TiposIncapacidad from "@/components/TiposIncapacidad";
import CausasRequisitos from "@/components/CausasRequisitos";
import ProcedimientoTramites from "@/components/ProcedimientoTramites";
import EnfermedadesIncapacitantes from "@/components/EnfermedadesIncapacitantes";
import CalculadoraPrestacion from "@/components/CalculadoraPrestacion";
import ContactoConsulta from "@/components/ContactoConsulta";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TiposIncapacidad />
      <CausasRequisitos />
      <ProcedimientoTramites />
      <EnfermedadesIncapacitantes />
      <CalculadoraPrestacion />
      <ContactoConsulta />
    </div>
  );
};

export default Index;
