import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EnfermedadesMentalesIncapacidad from "./blog/EnfermedadesMentalesIncapacidad";

const Blog = () => {
  const blogPosts = [
    {
      id: 'enfermedades-mentales',
      title: "Enfermedades Mentales e Incapacidad Permanente",
      excerpt: "Guía completa sobre cómo los trastornos de salud mental pueden afectar la capacidad laboral y los criterios para obtener una incapacidad permanente.",
      date: "10 de Marzo, 2025",
      category: "Salud Mental",
      component: 'EnfermedadesMentalesIncapacidad'
    },
    {
      id: 'enfermedades-cardiacas',
      title: "Enfermedades Cardíacas e Incapacidad Permanente",
      excerpt: "Información sobre cómo las enfermedades cardíacas pueden afectar la capacidad laboral y los requisitos para obtener una incapacidad permanente.",
      date: "2 de Septiembre, 2025",
      category: "Información",
      component: 'EnfermedadesCardiacasIncapacidad'
    },
    {
      id: 'enfermedades-inflamatorias',
      title: "Enfermedades Inflamatorias Intestinales e Incapacidad",
      excerpt: "Guía completa sobre el impacto de las EII en la capacidad laboral y el proceso de solicitud de incapacidad permanente.",
      date: "15 de Marzo, 2025",
      category: "Salud",
      component: 'EnfermedadesInflamatoriasIntestinales'
    },
    {
      id: 'enfermedades-neurologicas',
      title: "Enfermedades Neurológicas e Incapacidad Permanente",
      excerpt: "Conoce cómo las enfermedades neurológicas pueden afectar la capacidad laboral y los criterios para obtener una incapacidad permanente.",
      date: "1 de Septiembre, 2025",
      category: "Información",
      component: 'EnfermedadesNeurologicasIncapacidad'
    },
    {
      id: 'enfermedades-musculoesqueleticas',
      title: "Enfermedades Musculoesqueléticas e Incapacidad Permanente",
      excerpt: "Descubre cómo las afecciones del sistema musculoesquelético pueden afectar tu capacidad laboral y dar lugar a una incapacidad permanente.",
      date: "30 de Agosto, 2025",
      category: "Información",
      component: 'EnfermedadesMusculoesqueleticasIncapacidad'
    },
    {
      id: 'incapacidad-permanente-enfermedades',
      title: "Incapacidad permanente por enfermedades: guía completa 2025",
      excerpt: "Todo lo que necesitas saber sobre cómo las enfermedades pueden dar lugar a una incapacidad permanente.",
      date: "15 de Abril, 2025",
      category: "Guía Completa",
      component: 'IncapacidadPermanenteEnfermedades'
    },
    {
      id: 'lista-enfermedades-incapacidad',
      title: "Lista de enfermedades para incapacidad permanente: ejemplos y claves en 2025",
      excerpt: "Descubre qué enfermedades suelen reconocerse para incapacidad permanente y cómo se valoran.",
      date: "5 de Abril, 2025",
      category: "Información",
      component: 'ListaEnfermedadesIncapacidad'
    },
    {
      id: 'enfermedades-incapacidad-permanente',
      title: "Enfermedades que dan lugar a incapacidad permanente: cómo se valoran en la práctica",
      excerpt: "Análisis detallado de cómo se evalúan las enfermedades en los procesos de incapacidad permanente.",
      date: "28 de Marzo, 2025",
      category: "Análisis",
      component: 'EnfermedadesIncapacidadPermanente'
    },
    {
      id: 'dudas-frecuentes-incapacidad',
      title: "Dudas frecuentes sobre incapacidad permanente: preguntas y respuestas",
      excerpt: "Resolvemos las dudas más comunes sobre el proceso de solicitud de incapacidad permanente.",
      date: "20 de Marzo, 2025",
      category: "Preguntas Frecuentes",
      component: 'DudasFrecuentesIncapacidad'
    },
    {
      id: 'errores-comunes-incapacidad',
      title: "Errores comunes al solicitar la incapacidad permanente por enfermedad",
      excerpt: "Conoce los errores más frecuentes y cómo evitarlos para aumentar tus posibilidades de éxito.",
      date: "10 de Marzo, 2025",
      category: "Consejos Prácticos",
      component: 'ErroresComunesIncapacidad'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog de Incapacidad Permanente</h1>
        <p className="text-xl text-gray-600">Información actualizada y consejos útiles sobre incapacidad laboral</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-primary">{post.category}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <CardTitle className="text-xl hover:text-primary transition-colors duration-200">
                <Link to={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button asChild className="w-full">
                <Link to={`/blog/${post.id}`}>
                  Leer más <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
