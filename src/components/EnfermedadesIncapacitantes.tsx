import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const enfermedadesPorCategoria = {
  mental: {
    titulo: "Enfermedades Mentales",
    descripcion: "Trastornos psíquicos que pueden dar lugar a incapacidad",
    enfermedades: [
      { nombre: "Depresión Mayor", grado: "Total/Absoluta", descripcion: "Episodios recurrentes graves" },
      { nombre: "Trastorno Bipolar", grado: "Total/Absoluta", descripcion: "Fases maníacas y depresivas" },
      { nombre: "Esquizofrenia", grado: "Absoluta", descripcion: "Síntomas psicóticos persistentes" },
      { nombre: "Trastorno Obsesivo Compulsivo", grado: "Total", descripcion: "Compulsiones incapacitantes" },
      { nombre: "Trastorno de Ansiedad Generalizada", grado: "Total", descripcion: "Ansiedad severa y persistente" },
      { nombre: "Agorafobia", grado: "Total", descripcion: "Miedo a espacios abiertos o situaciones de difícil escape" },
      { nombre: "Alcoholismo", grado: "Total/Absoluta", descripcion: "Dependencia severa del alcohol" },
      { nombre: "Alzheimer", grado: "Absoluta", descripcion: "Demencia degenerativa progresiva" },
      { nombre: "Depresión", grado: "Total", descripcion: "Trastorno del estado de ánimo persistente" },
      { nombre: "Distimia", grado: "Total", descripcion: "Trastorno depresivo persistente" },
      { nombre: "Síndrome de Tourette", grado: "Total", descripcion: "Trastorno neurológico con tics motores y vocales" },
      { nombre: "Trastorno de ansiedad", grado: "Total", descripcion: "Ansiedad persistente y excesiva" },
      { nombre: "Trastorno Límite de la Personalidad (TLP)", grado: "Total/Absoluta", descripcion: "Inestabilidad emocional y relaciones interpersonales" },
      { nombre: "Trastorno Adaptativo Mixto", grado: "Total", descripcion: "Respuesta desadaptativa a estresores identificables" }
    ]
  },
  musculoesqueletica: {
    titulo: "Enfermedades Musculoesqueléticas",
    descripcion: "Patologías del sistema locomotor",
    enfermedades: [
      { nombre: "Fibromialgia", grado: "Total/Absoluta", descripcion: "Dolor crónico generalizado" },
      { nombre: "Artritis Reumatoide", grado: "Total/Absoluta", descripcion: "Inflamación articular crónica" },
      { nombre: "Hernia discal", grado: "Total", descripcion: "Desplazamiento del disco intervertebral" },
      { nombre: "Espondilitis Anquilosante", grado: "Total", descripcion: "Rigidez columna vertebral" },
      { nombre: "Artrosis cervical", grado: "Total", descripcion: "Degeneración de las vértebras cervicales" },
      { nombre: "Condromalacia Rotuliana", grado: "Total", descripcion: "Reblandecimiento del cartílago rotuliano" },
      { nombre: "Escoliosis", grado: "Total", descripcion: "Desviación lateral de la columna vertebral" },
      { nombre: "Espondilosis degenerativa", grado: "Total", descripcion: "Degeneración de los discos y vértebras" },
      { nombre: "Estenosis foraminal", grado: "Total", descripcion: "Estrechamiento de los canales nerviosos" },
      { nombre: "Lumbalgia crónica", grado: "Total", descripcion: "Dolor lumbar persistente" },
      { nombre: "Rizartrosis", grado: "Total", descripcion: "Artrosis en la articulación de la base del pulgar" },
      { nombre: "Síndrome del túnel carpiano", grado: "Total", descripcion: "Compresión del nervio mediano en la muñeca" },
      { nombre: "Síndrome subacromial", grado: "Total", descripcion: "Dolor en el hombro por pinzamiento" },
      { nombre: "Lesión medular", grado: "Absoluta", descripcion: "Daño en la médula espinal con secuelas" },
      { nombre: "Fractura Vertebral Grave", grado: "Absoluta", descripcion: "Lesión medular asociada" },
      { nombre: "Radiculopatía Lumbar", grado: "Total", descripcion: "Compresión de las raíces nerviosas lumbares" }
    ]
  },
  neurologica: {
    titulo: "Enfermedades Neurológicas",
    descripcion: "Trastornos del sistema nervioso",
    enfermedades: [
      { nombre: "Esclerosis Múltiple", grado: "Total/Absoluta", descripcion: "Deterioro neurológico progresivo" },
      { nombre: "Parkinson", grado: "Total/Absoluta", descripcion: "Trastorno del movimiento" },
      { nombre: "Epilepsia", grado: "Total/Absoluta", descripcion: "Trastorno de actividad eléctrica cerebral" },
      { nombre: "Demencia", grado: "Absoluta", descripcion: "Deterioro cognitivo severo" },
      { nombre: "Ictus", grado: "Total/Absoluta", descripcion: "Accidente cerebrovascular con secuelas" },
      { nombre: "Ataxia", grado: "Total/Absoluta", descripcion: "Falta de coordinación muscular" },
      { nombre: "Enfermedad de Huntington", grado: "Absoluta", descripcion: "Trastorno neurodegenerativo hereditario" },
      { nombre: "Migraña", grado: "Total", descripcion: "Cefaleas intensas y recurrentes" },
      { nombre: "Narcolepsia", grado: "Total", descripcion: "Somnolencia diurna excesiva" },
      { nombre: "Neuropatía cubital", grado: "Total", descripcion: "Daño en el nervio cubital" },
      { nombre: "Síndrome de Ehlers-Danlos", grado: "Total/Absoluta", descripcion: "Trastorno del tejido conectivo" },
      { nombre: "Síndrome de Ménière", grado: "Total", descripcion: "Trastorno del oído interno" },
      { nombre: "Síndrome de Raynaud", grado: "Total", descripcion: "Trastorno vascular periférico" },
      { nombre: "Síndrome de Sjögren", grado: "Total", descripcion: "Enfermedad autoinmune sistémica" },
      { nombre: "Síndrome de Südeck", grado: "Total", descripcion: "Distrofia simpático-refleja" },
      { nombre: "Siringomielia y Arnold Chiari", grado: "Absoluta", descripcion: "Trastornos de la médula espinal y fosa posterior" },
      { nombre: "Postpolio", grado: "Total", descripcion: "Síndrome post-polio, secuelas tardías de la poliomielitis" }
    ]
  },
  cardiaca: {
    titulo: "Enfermedades Cardíacas y Vasculares",
    descripcion: "Patologías del sistema cardiovascular",
    enfermedades: [
      { nombre: "Insuficiencia Cardíaca Grave", grado: "Absoluta", descripcion: "Grado funcional IV" },
      { nombre: "Cardiopatía Isquémica", grado: "Total", descripcion: "Limitación capacidad física" },
      { nombre: "Miocardiopatía Dilatada", grado: "Total/Absoluta", descripcion: "Función ventricular reducida" },
      { nombre: "Trasplante Cardíaco", grado: "Absoluta", descripcion: "Situación post-trasplante" },
      { nombre: "Hipertensión Pulmonar", grado: "Total/Absoluta", descripcion: "Presión elevada en arterias pulmonares" },
      { nombre: "Arritmias Graves", grado: "Total", descripcion: "Trastornos del ritmo cardíaco incapacitantes" },
      { nombre: "EPOC", grado: "Total/Absoluta", descripcion: "Enfermedad pulmonar obstructiva crónica" },
      { nombre: "Fibrosis Quística", grado: "Absoluta", descripcion: "Enfermedad genética multisistémica" },
      { nombre: "Apnea del Sueño", grado: "Total", descripcion: "Interrupciones repetidas de la respiración" },
      { nombre: "Diabetes con complicaciones", grado: "Total", descripcion: "Complicaciones vasculares o neurológicas" },
      { nombre: "Enfermedades hepáticas", grado: "Total/Absoluta", descripcion: "Trastornos hepáticos crónicos" },
      { nombre: "Enfermedades renales", grado: "Total/Absoluta", descripcion: "Insuficiencia renal crónica" },
      { nombre: "Enfermedad de Crohn y Colitis ulcerosa", grado: "Total/Absoluta", descripcion: "Enfermedad inflamatoria intestinal crónica" },
      { nombre: "Hepatitis Autoinmune", grado: "Total", descripcion: "Enfermedad hepática autoinmune" },
      { nombre: "Lupus", grado: "Total/Absoluta", descripcion: "Enfermedad autoinmune crónica" },
      { nombre: "Aniridia", grado: "Absoluta", descripcion: "Ausencia congénita del iris" },
      { nombre: "Maculopatía", grado: "Absoluta", descripcion: "Enfermedad de la mácula" },
      { nombre: "Miopía Magna", grado: "Total", descripcion: "Miopía patológica con alteraciones retinianas" },
      { nombre: "Retinopatía diabética", grado: "Absoluta", descripcion: "Complicación de la diabetes en la retina" },
      { nombre: "Retinosis pigmentaria", grado: "Absoluta", descripcion: "Degeneración progresiva de la retina" },
      { nombre: "Síndrome de Goldmann-Favré", grado: "Absoluta", descripcion: "Distrofia vítreorretiniana" },
      { nombre: "Síndrome de Marfan", grado: "Total", descripcion: "Trastorno del tejido conectivo" },
      { nombre: "Stargardt", grado: "Absoluta", descripcion: "Distrofia macular juvenil" },
      { nombre: "Cáncer", grado: "Variable", descripcion: "Enfermedad oncológica, grado según tipo y estadio" },
      { nombre: "Enfermedad de Behçet", grado: "Total", descripcion: "Vasculitis sistémica" },
      { nombre: "Distrofia de conos y bastones", grado: "Absoluta", descripcion: "Degeneración retiniana hereditaria" }
    ]
  }
};

const EnfermedadesIncapacitantes = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Tabla de Enfermedades Incapacitantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Principales patologías que pueden dar lugar al reconocimiento de incapacidad permanente según su gravedad y limitaciones
          </p>
        </div>
        
        <Tabs defaultValue="mental" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="mental">Mentales</TabsTrigger>
            <TabsTrigger value="musculoesqueletica">Musculoesqueléticas</TabsTrigger>
            <TabsTrigger value="neurologica">Neurológicas</TabsTrigger>
            <TabsTrigger value="cardiaca">Cardíacas</TabsTrigger>
          </TabsList>
          
          {Object.entries(enfermedadesPorCategoria).map(([key, categoria]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{categoria.titulo}</CardTitle>
                  <CardDescription className="text-lg">{categoria.descripcion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.enfermedades.map((enfermedad, index) => (
                      <Link 
                        key={index} 
                        to={`/enfermedad/${enfermedad.nombre.toLowerCase().replace(/\s+/g, '-').replace(/[áéíóú]/g, (match) => ({á:'a',é:'e',í:'i',ó:'o',ú:'u'}[match] || match))}`}
                        className="block"
                      >
                        <Card className="border border-border hover:border-primary/50 transition-colors cursor-pointer h-full">
                          <CardHeader className="pb-4">
                            <div className="flex justify-between items-start mb-2">
                              <CardTitle className="text-lg">{enfermedad.nombre}</CardTitle>
                              <Badge 
                                variant={enfermedad.grado.includes('Absoluta') ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {enfermedad.grado}
                              </Badge>
                            </div>
                            <CardDescription className="text-sm">
                              {enfermedad.descripcion}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 bg-card p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Factores Importantes a Considerar</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-primary mb-2">Perito Médico</h4>
              <p className="text-sm text-muted-foreground">
                La valoración del tribunal médico es determinante para el grado de incapacidad
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-primary mb-2">Profesión Habitual</h4>
              <p className="text-sm text-muted-foreground">
                El trabajo realizado influye en la evaluación de las limitaciones
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-primary mb-2">Edad y Formación</h4>
              <p className="text-sm text-muted-foreground">
                Factores que se consideran para la adaptabilidad laboral
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnfermedadesIncapacitantes;