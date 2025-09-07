import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const servicios = [
  {
    titulo: "Consulta Inicial Gratuita",
    descripcion: "Evaluación completa de tu caso sin coste",
    incluye: [
      "Análisis de viabilidad",
      "Revisión documentación médica",
      "Orientación sobre el proceso",
      "Estimación de posibilidades"
    ],
    precio: "Gratuita"
  },
  {
    titulo: "Tramitación Completa",
    descripcion: "Gestión integral de tu expediente",
    incluye: [
      "Preparación documentación",
      "Presentación solicitud INSS",
      "Seguimiento del expediente",
      "Representación en tribunales"
    ],
    precio: "Solo si ganamos"
  },
  {
    titulo: "Recursos y Reclamaciones",
    descripcion: "Impugnación de resoluciones desfavorables",
    incluye: [
      "Recurso de reposición",
      "Demanda judicial",
      "Representación procesal",
      "Seguimiento hasta resolución"
    ],
    precio: "Sin costes iniciales"
  }
];

const ventajas = [
  "Más de 10 años de experiencia",
  "Especialistas en Incapacidad Permanente",
  "Éxito en el 85% de los casos",
  "Red de médicos peritos colaboradores",
  "Atención personalizada",
  "Sin costes hasta obtener resultado"
];

const ContactoConsulta = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Obtén tu Pensión de Incapacidad Permanente
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Te ayudamos a conseguir el reconocimiento y la prestación por incapacidad que te corresponde. Consulta inicial gratuita.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {servicios.map((servicio, index) => (
            <Card key={index} className="bg-primary-foreground text-foreground hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="text-center mb-4">
                  <Badge variant="outline" className="text-primary border-primary">
                    {servicio.precio}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 text-center">{servicio.titulo}</CardTitle>
                <CardDescription className="text-center">{servicio.descripcion}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {servicio.incluye.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-success text-lg">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://eu.jotform.com/es/build/252086191762359', '_blank')}
                >
                  Consultar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-primary-foreground text-foreground p-8 rounded-xl shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-sm">{ventaja}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-bold mb-4">Contacta con nosotros</h4>
              <div className="space-y-4">
                <Button variant="outline" size="lg" className="w-full lg:w-auto">
                  Consulta Online
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Disponible 24/7 • Respuesta en menos de 2 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoConsulta;