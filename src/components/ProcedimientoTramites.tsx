import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pasosTramite = [
  {
    paso: 1,
    titulo: "Solicitud Incapacidad",
    descripcion: "Presentación de la solicitud ante el INSS",
    detalles: [
      "Formulario oficial cumplimentado",
      "Documentación médica completa",
      "Informe de vida laboral",
      "DNI y documentos personales"
    ]
  },
  {
    paso: 2,
    titulo: "Reconocimiento Médico",
    descripcion: "Evaluación por el tribunal médico",
    detalles: [
      "Citación del INSS",
      "Examen médico oficial",
      "Evaluación funcional",
      "Análisis capacidad laboral"
    ]
  },
  {
    paso: 3,
    titulo: "Resolución INSS",
    descripcion: "Decisión sobre el reconocimiento",
    detalles: [
      "Resolución en 135 días",
      "Grado de incapacidad asignado",
      "Pensión o prestación concedida",
      "Fecha de efectos económicos"
    ]
  },
  {
    paso: 4,
    titulo: "Revisión y Seguimiento",
    descripcion: "Control posterior del expediente",
    detalles: [
      "Revisión por mejoría",
      "Revisión por agravación",
      "Seguimiento médico periódico",
      "Posibles modificaciones"
    ]
  }
];

const documentosNecesarios = [
  "Historia clínica completa",
  "Informes médicos especializados",
  "Pruebas diagnósticas (TAC, RMN, analíticas)",
  "Informes de alta hospitalaria",
  "Certificados de tratamientos",
  "Informes de fisioterapia/rehabilitación"
];

const ProcedimientoTramites = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Trámites para la Incapacidad Permanente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce paso a paso el procedimiento para solicitar el reconocimiento de incapacidad permanente ante la Seguridad Social
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {pasosTramite.map((paso, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Badge variant="outline" className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold border-primary text-primary">
                  {paso.paso}
                </Badge>
                <CardTitle className="text-lg mb-2">{paso.titulo}</CardTitle>
                <CardDescription>{paso.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {paso.detalles.map((detalle, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-success text-lg">•</span>
                      <span>{detalle}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {index < pasosTramite.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary text-2xl">
                  →
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Documentación Médica Necesaria</CardTitle>
              <CardDescription>
                Documentos médicos imprescindibles para tu solicitud
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {documentosNecesarios.map((documento, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-sm">{documento}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-xl">¿Necesitas Ayuda Profesional?</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Un abogado especializado en incapacidad permanente puede aumentar significativamente tus posibilidades de éxito
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm">• Preparación completa del expediente</p>
                <p className="text-sm">• Representación ante tribunales</p>
                <p className="text-sm">• Recursos y reclamaciones</p>
                <p className="text-sm">• Seguimiento personalizado</p>
              </div>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={() => window.open('https://eu.jotform.com/es/build/252086191762359', '_blank')}
              >
                Consulta con Abogado Especialista
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcedimientoTramites;