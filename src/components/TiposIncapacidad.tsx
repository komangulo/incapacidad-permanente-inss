import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tiposIncapacidad = [
  {
    title: "Incapacidad Permanente Parcial",
    description: "Disminución del rendimiento laboral no inferior al 33%",
    porcentaje: "33%",
    caracteristicas: [
      "Mantiene capacidad laboral",
      "Indemnización a tanto alzado",
      "Compatible con trabajo",
      "24 mensualidades de base reguladora"
    ]
  },
  {
    title: "Incapacidad Permanente Total",
    description: "Impide realizar la profesión habitual pero permite otros trabajos",
    porcentaje: "55%",
    caracteristicas: [
      "Pensión del 55% base reguladora",
      "Compatible con otros trabajos",
      "Posible incremento del 20%",
      "A partir de 55 años puede aumentar"
    ]
  },
  {
    title: "Incapacidad Permanente Absoluta",
    description: "Impide realizar cualquier tipo de trabajo",
    porcentaje: "100%",
    caracteristicas: [
      "Pensión del 100% base reguladora",
      "Incompatible con trabajo por cuenta ajena",
      "Actividades marginales permitidas",
      "Revisable por mejoría"
    ]
  },
  {
    title: "Gran Invalidez",
    description: "Requiere asistencia de terceras personas para actos básicos",
    porcentaje: "100% + 45%",
    caracteristicas: [
      "Pensión del 100% más complemento",
      "Complemento del 45% adicional",
      "Para actos esenciales de la vida",
      "Máxima protección del sistema"
    ]
  }
];

const TiposIncapacidad = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Grados de Incapacidad Permanente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conoce los diferentes tipos de incapacidad permanente reconocidos por la Seguridad Social y sus prestaciones correspondientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiposIncapacidad.map((tipo, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <Badge variant="secondary" className="w-fit mx-auto mb-4 text-lg py-2 px-4">
                  {tipo.porcentaje}
                </Badge>
                <CardTitle className="text-xl mb-2">{tipo.title}</CardTitle>
                <CardDescription className="text-sm">
                  {tipo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tipo.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-success text-lg">•</span>
                      <span>{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiposIncapacidad;