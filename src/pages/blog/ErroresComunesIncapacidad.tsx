import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErroresComunesIncapacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Errores comunes al solicitar la incapacidad permanente</h1>
        
        <section className="mb-8">
          <p className="text-lg mb-6">
            Conoce los errores más frecuentes al solicitar la incapacidad permanente y cómo evitarlos para aumentar tus posibilidades de éxito.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Documentación médica desactualizada</h2>
          <p className="mb-4">
            Usar informes médicos antiguos es uno de los errores más comunes. La Seguridad Social prioriza la situación clínica actual.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Solución:</p>
            <p>Presenta informes recientes (últimos 6-12 meses) que detallen evolución, limitaciones y tratamientos actuales.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Centrarse solo en el diagnóstico</h2>
          <p className="mb-4">
            Muchos solicitantes creen que el diagnóstico por sí solo es suficiente para obtener la incapacidad.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Solución:</p>
            <p>Enfócate en demostrar cómo la enfermedad limita tu capacidad laboral. Proporciona ejemplos concretos de tareas que ya no puedes realizar.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. No detallar las limitaciones diarias</h2>
          <p className="mb-4">
            Es común mencionar solo la enfermedad sin explicar su impacto real en la vida cotidiana.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Solución:</p>
            <p>Incluye en tus informes ejemplos específicos como dificultad para estar de pie, necesidad de descansos frecuentes o problemas de concentración.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. No preparar la entrevista médica</h2>
          <p className="mb-4">
            Muchos acuden a la evaluación sin preparación previa, lo que puede afectar negativamente el resultado.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Solución:</p>
            <p>Prepara notas con puntos clave sobre tus limitaciones. Sé honesto pero no minimices tus síntomas.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. No asesorarse legalmente</h2>
          <p className="mb-4">
            Esperar a recibir una denegación antes de buscar asesoramiento profesional es un error común.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Solución:</p>
            <p>Consulta con un abogado especializado desde el principio para preparar mejor tu caso.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. No incluir informes de salud mental</h2>
          <p className="mb-4">
            Muchos solicitantes con enfermedades físicas no mencionan los problemas psicológicos asociados.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Solución:</p>
            <p>Incluye informes psicológicos o psiquiátricos que muestren el impacto emocional de tu enfermedad.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. No detallar la historia laboral</h2>
          <p className="mb-4">
            No explicar claramente las tareas específicas de tu trabajo puede dificultar la evaluación de tus limitaciones.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="font-semibold">Solución:</p>
            <p>Prepara una descripción detallada de tus funciones laborales para que el tribunal pueda valorar mejor tu caso.</p>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
          <p className="mb-4">
            Evitar estos errores puede marcar la diferencia en tu solicitud de incapacidad permanente. Recuerda que cada detalle cuenta y que la preparación es clave para el éxito.
          </p>
          <p className="italic">
            "Solicitar la incapacidad permanente es un proceso que requiere paciencia, documentación y, en muchos casos, asesoramiento profesional. No subestimes la importancia de una buena preparación."
          </p>
        </section>
      </article>

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link to="/blog">Volver al blog</Link>
        </Button>
      </div>
    </div>
  );
};

export default ErroresComunesIncapacidad;
