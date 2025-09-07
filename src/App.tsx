import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "@/components/MainNav";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DepresionMayor from "./pages/enfermedad/DepresinMayor";
import TrastornoBipolar from "./pages/enfermedad/TrastornoBipolar";
import Esquizofrenia from "./pages/enfermedad/Esquizofrenia";
import Fibromialgia from "./pages/enfermedad/Fibromialgia";
import EsclerosisMultiple from "./pages/enfermedad/EsclerosisMltiple";
import TrastornoObsesivoCompulsivo from "./pages/enfermedad/TrastornoObsesivoCompulsivo";
import TrastornoAnsiedadGeneralizada from "./pages/enfermedad/TrastornoAnsiedadGeneralizada";
import Agorafobia from "./pages/enfermedad/Agorafobia";
import Alcoholismo from "./pages/enfermedad/Alcoholismo";
import Alzheimer from "./pages/enfermedad/Alzheimer";
import Depresion from "./pages/enfermedad/Depresin";
import Distimia from "./pages/enfermedad/Distimia";
import SindromeDeTourette from "./pages/enfermedad/SindromeDeTourette";
import TrastornoDeAnsiedad from "./pages/enfermedad/Trastornodeansiedad";
import TrastornoLimitePersonalidad from "./pages/enfermedad/TrastornoLimitePersonalidad";
import TrastornoAdaptativoMixto from "./pages/enfermedad/TrastornoAdaptativoMixto";
import HerniaDiscal from "./pages/enfermedad/Herniadiscal";
import EspondilitisAnquilosante from "./pages/enfermedad/EspondilitisAnquilosante";
import ArtrosisCervical from "./pages/enfermedad/Artrosiscervical";
import CondromalaciaRotuliana from "./pages/enfermedad/CondromalaciaRotuliana";
import EspondilosisDegenerativa from "./pages/enfermedad/Espondilosisdegenerativa";
import EstenosisForaminal from "./pages/enfermedad/Estenosisforaminal";
import LumbalgiaCronica from "./pages/enfermedad/Lumbalgiacrnica";
import Rizartrosis from "./pages/enfermedad/Rizartrosis";
import SindromeTunelCarpiano from "./pages/enfermedad/Sindromedeltunelcarpiano";
import SindromeSubacromial from "./pages/enfermedad/Sindromesubacromial";
import LesionMedular from "./pages/enfermedad/Lesinmedular";
import FracturaVertebralGrave from "./pages/enfermedad/FracturaVertebralGrave";
import RadiculopatiaLumbar from "./pages/enfermedad/RadiculopatiaLumbar";
import Parkinson from "./pages/enfermedad/Parkinson";
import Epilepsia from "./pages/enfermedad/Epilepsia";
import Demencia from "./pages/enfermedad/Demencia";
import Ictus from "./pages/enfermedad/Ictus";
import Ataxia from "./pages/enfermedad/Ataxia";
import EnfermedaddeHuntington from "./pages/enfermedad/EnfermedaddeHuntington";
import Migraa from "./pages/enfermedad/Migraa";
import Narcolepsia from "./pages/enfermedad/Narcolepsia";
import NeuropatiaCubital from "./pages/enfermedad/NeuropatiaCubital";
import SndromedeEhlersDanlos from "./pages/enfermedad/SndromedeEhlersDanlos";
import SndromedeMenire from "./pages/enfermedad/SndromedeMenire";
import SndromedeRaynaud from "./pages/enfermedad/SndromedeRaynaud";
import SndromedeSjogren from "./pages/enfermedad/SndromedeSjogren";
import SndromedeSudeck from "./pages/enfermedad/SndromedeSdeck";
import SiringomieliayArnoldChiari from "./pages/enfermedad/SiringomieliayArnoldChiari";
import Postpolio from "./pages/enfermedad/Postpolio";
import InsuficienciaCardiacaGrave from "./pages/enfermedad/InsuficienciaCardiacaGrave";
import CardiopatiaIsquemica from "./pages/enfermedad/CardiopatiaIsquemica";
import MiocardiopatiaDilatada from "./pages/enfermedad/MiocardiopatiaDilatada";
import TrasplanteCardiaco from "./pages/enfermedad/TrasplanteCardiaco";
import HipertensionPulmonar from "./pages/enfermedad/HipertensionPulmonar";
import FibrosisQuistica from "./pages/enfermedad/FibrosisQuistica";
import ApneaSueno from "./pages/enfermedad/ApneaSueno";
import DiabetesComplicaciones from "./pages/enfermedad/DiabetesComplicaciones";
import EnfermedadesHepaticas from "./pages/enfermedad/EnfermedadesHepaticas";
import EnfermedaddeCrohnyColitisulcerosa from "./pages/enfermedad/EnfermedaddeCrohnyColitisulcerosa";
import HepatitisAutoinmune from "./pages/enfermedad/HepatitisAutoinmune";
import Lupus from "./pages/enfermedad/Lupus";
import EnfermedadesRenales from "./pages/enfermedad/Enfermedadesrenales";
import Aniridia from "./pages/enfermedad/Aniridia";
import Maculopatia from "./pages/enfermedad/Maculopatia";
import MiopiaMagna from "./pages/enfermedad/MiopiaMagna";
import RetinopatiaDiabetica from "./pages/enfermedad/RetinopatiaDiabetica";
import RetinosisPigmentaria from "./pages/enfermedad/RetinosisPigmentaria";
import SindromeDeGoldmannFavre from "./pages/enfermedad/SindromeDeGoldmannFavre";
import SindromeDeMarfan from './pages/enfermedad/SindromeDeMarfan';
import Stargardt from './pages/enfermedad/Stargardt';
import Cancer from './pages/enfermedad/Cancer';
import EnfermedaddeBehet from './pages/enfermedad/EnfermedaddeBehet';
import DistrofiaDeConosYBastones from './pages/enfermedad/DistrofiaDeConosYBastones';

// Importar componentes del blog
import Blog from "./pages/Blog";
import IncapacidadPermanenteEnfermedades from "./pages/blog/IncapacidadPermanenteEnfermedades";
import ListaEnfermedadesIncapacidad from "./pages/blog/ListaEnfermedadesIncapacidad";
import EnfermedadesIncapacidadPermanente from "./pages/blog/EnfermedadesIncapacidadPermanente";
import DudasFrecuentesIncapacidad from "./pages/blog/DudasFrecuentesIncapacidad";
import ErroresComunesIncapacidad from "./pages/blog/ErroresComunesIncapacidad";
import EnfermedadesMusculoesqueleticasIncapacidad from "./pages/blog/EnfermedadesMusculoesqueleticasIncapacidad";
import EnfermedadesNeurologicasIncapacidad from "./pages/blog/EnfermedadesNeurologicasIncapacidad";
import EnfermedadesCardiacasIncapacidad from "./pages/blog/EnfermedadesCardiacasIncapacidad";
import EnfermedadesMentalesIncapacidad from "./pages/blog/EnfermedadesMentalesIncapacidad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <MainNav />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
          <Route path="/blog/incapacidad-permanente-enfermedades" element={<IncapacidadPermanenteEnfermedades />} />
          <Route path="/blog/lista-enfermedades-incapacidad" element={<ListaEnfermedadesIncapacidad />} />
          <Route path="/blog/enfermedades-incapacidad-permanente" element={<EnfermedadesIncapacidadPermanente />} />
          <Route path="/blog/dudas-frecuentes-incapacidad" element={<DudasFrecuentesIncapacidad />} />
          <Route path="/blog/errores-comunes-incapacidad" element={<ErroresComunesIncapacidad />} />
          <Route path="/blog/enfermedades-musculoesqueleticas" element={<EnfermedadesMusculoesqueleticasIncapacidad />} />
          <Route path="/blog/enfermedades-neurologicas" element={<EnfermedadesNeurologicasIncapacidad />} />
          <Route path="/blog/enfermedades-cardiacas" element={<EnfermedadesCardiacasIncapacidad />} />
          <Route path="/blog/enfermedades-mentales" element={<EnfermedadesMentalesIncapacidad />} />
          <Route path="/enfermedad/depresion-mayor" element={<DepresionMayor />} />
          <Route path="/enfermedad/trastorno-bipolar" element={<TrastornoBipolar />} />
          <Route path="/enfermedad/esquizofrenia" element={<Esquizofrenia />} />
          <Route path="/enfermedad/fibromialgia" element={<Fibromialgia />} />
          <Route path="/enfermedad/esclerosis-multiple" element={<EsclerosisMultiple />} />
          <Route path="/enfermedad/trastorno-obsesivo-compulsivo" element={<TrastornoObsesivoCompulsivo />} />
          <Route path="/enfermedad/trastorno-de-ansiedad-generalizada" element={<TrastornoAnsiedadGeneralizada />} />
          <Route path="/enfermedad/agorafobia" element={<Agorafobia />} />
          <Route path="/enfermedad/alcoholismo" element={<Alcoholismo />} />
          <Route path="/enfermedad/alzheimer" element={<Alzheimer />} />
          <Route path="/enfermedad/depresion" element={<Depresion />} />
          <Route path="/enfermedad/distimia" element={<Distimia />} />
          <Route path="/enfermedad/sindrome-de-tourette" element={<SindromeDeTourette />} />
          <Route path="/enfermedad/trastorno-de-ansiedad" element={<TrastornoDeAnsiedad />} />
          <Route path="/enfermedad/trastorno-limite-de-la-personalidad" element={<TrastornoLimitePersonalidad />} />
          <Route path="/enfermedad/trastorno-limite-de-la-personalidad-(tlp)" element={<TrastornoLimitePersonalidad />} />
          <Route path="/enfermedad/trastorno-adaptativo-mixto" element={<TrastornoAdaptativoMixto />} />
          <Route path="/enfermedad/hernia-discal" element={<HerniaDiscal />} />
          <Route path="/enfermedad/espondilitis-anquilosante" element={<EspondilitisAnquilosante />} />
          <Route path="/enfermedad/artrosis-cervical" element={<ArtrosisCervical />} />
          <Route path="/enfermedad/condromalacia-rotuliana" element={<CondromalaciaRotuliana />} />
          <Route path="/enfermedad/espondilosis-degenerativa" element={<EspondilosisDegenerativa />} />
          <Route path="/enfermedad/estenosis-foraminal" element={<EstenosisForaminal />} />
          <Route path="/enfermedad/lumbalgia-cronica" element={<LumbalgiaCronica />} />
          <Route path="/enfermedad/rizartrosis" element={<Rizartrosis />} />
          <Route path="/enfermedad/sindrome-del-tunel-carpiano" element={<SindromeTunelCarpiano />} />
          <Route path="/enfermedad/sindrome-subacromial" element={<SindromeSubacromial />} />
          <Route path="/enfermedad/lesion-medular" element={<LesionMedular />} />
          <Route path="/enfermedad/fractura-vertebral-grave" element={<FracturaVertebralGrave />} />
          <Route path="/enfermedad/radiculopatia-lumbar" element={<RadiculopatiaLumbar />} />
          <Route path="/enfermedad/parkinson" element={<Parkinson />} />
          <Route path="/enfermedad/epilepsia" element={<Epilepsia />} />
          <Route path="/enfermedad/demencia" element={<Demencia />} />
          <Route path="/enfermedad/ictus" element={<Ictus />} />
          <Route path="/enfermedad/ataxia" element={<Ataxia />} />
          <Route path="/enfermedad/enfermedad-de-huntington" element={<EnfermedaddeHuntington />} />
          <Route path="/enfermedad/migraña" element={<Migraa />} />
          <Route path="/enfermedad/narcolepsia" element={<Narcolepsia />} />
          <Route path="/enfermedad/neuropatia-cubital" element={<NeuropatiaCubital />} />
          <Route path="/enfermedad/sindrome-de-ehlers-danlos" element={<SndromedeEhlersDanlos />} />
          <Route path="/enfermedad/sindrome-de-meniere" element={<SndromedeMenire />} />
          <Route path="/enfermedad/sindrome-de-menière" element={<SndromedeMenire />} />
          <Route path="/enfermedad/sindrome-de-raynaud" element={<SndromedeRaynaud />} />
          {/* Handle both encoded and non-encoded versions of the URL */}
          <Route path="/enfermedad/sindrome-de-sjogren" element={<SndromedeSjogren />} />
          <Route path="/enfermedad/sindrome-de-sjögren" element={<SndromedeSjogren />} />
          <Route path="/enfermedad/sindrome-de-sj%C3%B6gren" element={<SndromedeSjogren />} />
          <Route path="/enfermedad/sindrome-de-sudeck" element={<SndromedeSudeck />} />
          <Route path="/enfermedad/sindrome-de-südeck" element={<SndromedeSudeck />} />
          <Route path="/enfermedad/insuficiencia-cardiaca-grave" element={<InsuficienciaCardiacaGrave />} />
          <Route path="/enfermedad/cardiopatia-isquemica" element={<CardiopatiaIsquemica />} />
          <Route path="/enfermedad/cardiopatía-isquémica" element={<CardiopatiaIsquemica />} />
          <Route path="/enfermedad/miocardiopatia-dilatada" element={<MiocardiopatiaDilatada />} />
          <Route path="/enfermedad/miocardiopatía-dilatada" element={<MiocardiopatiaDilatada />} />
          <Route path="/enfermedad/trasplante-cardiaco" element={<TrasplanteCardiaco />} />
          <Route path="/enfermedad/trasplante-cardíaco" element={<TrasplanteCardiaco />} />
          <Route path="/enfermedad/hipertension-pulmonar" element={<HipertensionPulmonar />} />
          <Route path="/enfermedad/hipertensión-pulmonar" element={<HipertensionPulmonar />} />
          <Route path="/enfermedad/fibrosis-quistica" element={<FibrosisQuistica />} />
          <Route path="/enfermedad/fibrosis-quística" element={<FibrosisQuistica />} />
          <Route path="/enfermedad/apnea-sueno" element={<ApneaSueno />} />
          <Route path="/enfermedad/apnea-sueño" element={<ApneaSueno />} />
          <Route path="/enfermedad/diabetes-complicaciones" element={<DiabetesComplicaciones />} />
          <Route path="/enfermedad/enfermedades-hepaticas" element={<EnfermedadesHepaticas />} />
          <Route path="/enfermedad/enfermedades-hep%C3%A1ticas" element={<EnfermedadesHepaticas />} />
          <Route path="/enfermedad/enfermedad-crohn-colitis-ulcerosa" element={<EnfermedaddeCrohnyColitisulcerosa />} />
          <Route path="/enfermedad/enfermedad-de-crohn-y-colitis-ulcerosa" element={<EnfermedaddeCrohnyColitisulcerosa />} />
          <Route path="/enfermedad/enfermedad-de-crohn" element={<EnfermedaddeCrohnyColitisulcerosa />} />
          <Route path="/enfermedad/colitis-ulcerosa" element={<EnfermedaddeCrohnyColitisulcerosa />} />
          <Route path="/enfermedad/siringomielia-y-arnold-chiari" element={<SiringomieliayArnoldChiari />} />
          <Route path="/enfermedad/postpolio" element={<Postpolio />} />
          <Route path="/enfermedad/hepatitis-autoinmune" element={<HepatitisAutoinmune />} />
          <Route path="/enfermedad/lupus" element={<Lupus />} />
          <Route path="/enfermedad/lupus-eritematoso-sistemico" element={<Lupus />} />
          <Route path="/enfermedad/les" element={<Lupus />} />
          <Route path="/enfermedad/enfermedades-renales" element={<EnfermedadesRenales />} />
          <Route path="/enfermedad/enfermedad-renal" element={<EnfermedadesRenales />} />
          <Route path="/enfermedad/diabetes-con-complicaciones" element={<DiabetesComplicaciones />} />
          <Route path="/enfermedad/aniridia" element={<Aniridia />} />
          <Route path="/enfermedad/maculopatia" element={<Maculopatia />} />
          <Route path="/enfermedad/maculopatía" element={<Maculopatia />} />
          <Route path="/enfermedad/miopia-magna" element={<MiopiaMagna />} />
          <Route path="/enfermedad/miopía-magna" element={<MiopiaMagna />} />
          <Route path="/enfermedad/retinopatia-diabetica" element={<RetinopatiaDiabetica />} />
          <Route path="/enfermedad/retinopatía-diabética" element={<RetinopatiaDiabetica />} />
          <Route path="/enfermedad/retinosis-pigmentaria" element={<RetinosisPigmentaria />} />
          <Route path="/enfermedad/sindrome-de-goldmann-favre" element={<SindromeDeGoldmannFavre />} />
          <Route path="/enfermedad/sindrome-de-marfan" element={<SindromeDeMarfan />} />
          <Route path="/enfermedad/stargardt" element={<Stargardt />} />
          <Route path="/enfermedad/cancer" element={<Cancer />} />
          <Route path="/enfermedad/enfermedad-de-behçet" element={<EnfermedaddeBehet />} />
          <Route path="/enfermedad/enfermedad-de-behcet" element={<EnfermedaddeBehet />} />
          <Route path="/enfermedad/distrofia-de-conos-y-bastones" element={<DistrofiaDeConosYBastones />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
