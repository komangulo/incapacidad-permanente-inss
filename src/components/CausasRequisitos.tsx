import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const causas = [
  {
    tipo: "Enfermedad Común",
    descripcion: "Patologías no relacionadas con el trabajo",
    requisitos: [
      "15 años cotizados si es menor de 31 años",
      "1/4 de vida laboral cotizada desde los 20 años",
      "1/5 de los últimos 10 años antes del hecho causante"
    ],
    ejemplos: ["Depresión", "Fibromialgia", "Artritis", "Cáncer"]
  },
  {
    tipo: "Accidente No Laboral",
    descripcion: "Lesiones por accidentes fuera del ámbito laboral",
    requisitos: [
      "No se exigen períodos mínimos de cotización",
      "Estar afiliado y en alta en la Seguridad Social",
      "Relación causal entre accidente y lesiones"
    ],
    ejemplos: ["Accidente tráfico", "Accidente doméstico", "Accidente deportivo"]
  },
  {
    tipo: "Enfermedad Profesional",
    descripcion: "Patologías causadas por el trabajo realizado",
    requisitos: [
      "Enfermedad incluida en el cuadro oficial",
      "Exposición al riesgo en el trabajo",
      "Relación causal trabajo-enfermedad"
    ],
    ejemplos: ["Silicosis", "Asbestosis", "Dermatitis", "Pérdida auditiva"]
  },
  {
    tipo: "Accidente de Trabajo",
    descripcion: "Lesiones durante el trabajo o in itinere",
    requisitos: [
      "No se exigen períodos de cotización",
      "Estar en alta laboral",
      "Nexo causal con la actividad laboral"
    ],
    ejemplos: ["Caída en obra", "Corte con maquinaria", "Accidente in itinere"]
  }
];

const CausasRequisitos = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Causas y Requisitos para la Incapacidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Las diferentes causas que pueden dar lugar a una incapacidad permanente y los requisitos específicos para cada una
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {causas.map((causa, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-primary border-primary">
                    {causa.tipo}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{causa.tipo}</CardTitle>
                <CardDescription>{causa.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Requisitos:</h4>
                  <ul className="space-y-2">
                    {causa.requisitos.map((requisito, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-success text-lg">•</span>
                        <span>{requisito}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Ejemplos comunes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {causa.ejemplos.map((ejemplo, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {ejemplo}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-card p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Conceptos Importantes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-primary mb-2">Agotamiento Posibilidades Terapéuticas</h4>
              <p className="text-sm text-muted-foreground">
                Las lesiones o patologías son permanentes y no mejoran con tratamiento médico
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-primary mb-2">Secuelas Permanentes</h4>
              <p className="text-sm text-muted-foreground">
                Limitaciones funcionales que persisten tras el proceso de curación
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-primary mb-2">Grado de Discapacidad</h4>
              <p className="text-sm text-muted-foreground">
                Valoración independiente que puede complementar la incapacidad permanente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausasRequisitos;