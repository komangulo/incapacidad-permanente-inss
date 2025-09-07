import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnfermedadesInflamatoriasIntestinales = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enfermedades Inflamatorias Intestinales e Incapacidad Permanente</h1>
        
        <p className="text-gray-600 mb-8">Publicado el 15 de marzo de 2025 en <span className="text-blue-600">Salud</span></p>
        
        <div className="mb-8">
          <img 
            src="/placeholder.svg" 
            alt="Enfermedades Inflamatorias Intestinales" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-sm text-gray-500">Las enfermedades inflamatorias intestinales pueden afectar significativamente la calidad de vida y la capacidad laboral.</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué son las Enfermedades Inflamatorias Intestinales (EII)?</h2>
          <p>Las Enfermedades Inflamatorias Intestinales son un grupo de trastornos crónicos que causan inflamación en el tracto digestivo. Las dos formas principales son la Enfermedad de Crohn y la Colitis Ulcerosa, que aunque comparten características, presentan diferencias clave en su localización y afectación.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Impacto en la Capacidad Laboral</h2>
          <p>Las EII pueden generar limitaciones significativas que afectan la capacidad para trabajar:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Fatiga crónica y debilidad generalizada</li>
            <li>Dolor abdominal intenso y recurrente</li>
            <li>Necesidad de baños frecuentes y acceso inmediato a instalaciones sanitarias</li>
            <li>Limitaciones físicas por complicaciones como fístulas o abscesos</li>
            <li>Efectos secundarios de la medicación inmunosupresora</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reconocimiento de la Incapacidad Permanente</h2>
          <p>Para el reconocimiento de una incapacidad permanente por EII, se valoran diversos aspectos:</p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2">Criterios de Valoración</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Frecuencia e intensidad de los brotes</li>
            <li>Respuesta al tratamiento médico</li>
            <li>Presencia de complicaciones</li>
            <li>Limitaciones funcionales objetivas</li>
            <li>Repercusión en la capacidad laboral</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Grados de Incapacidad</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg">Incapacidad Permanente Parcial</h4>
            <p className="mb-3">Para casos leves con brotes controlados que ocasionan una disminución del rendimiento laboral superior al 33%.</p>
            
            <h4 className="font-semibold text-lg">Incapacidad Permanente Total</h4>
            <p className="mb-3">Cuando la enfermedad impide realizar las tareas fundamentales de la profesión habitual.</p>
            
            <h4 className="font-semibold text-lg">Incapacidad Permanente Absoluta</h4>
            <p>Para casos graves con afectación severa de la función digestiva y/o complicaciones sistémicas que impiden cualquier actividad laboral.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Documentación Necesaria</h2>
          <p>Para solicitar la incapacidad permanente por EII, es fundamental presentar:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>Informes médicos detallados del especialista en digestivo</li>
            <li>Resultados de pruebas diagnósticas (colonoscopias, análisis, pruebas de imagen)</li>
            <li>Historial clínico que demuestre la evolución de la enfermedad</li>
            <li>Informes de ingresos hospitalarios, si los hubiera</li>
            <li>Informe de vida laboral</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Consejos Prácticos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Antes de la Valoración</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Recopila toda la documentación médica</li>
                <li>Prepara un diario de síntomas</li>
                <li>Documenta cómo afecta la enfermedad a tu vida diaria</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Durante el Proceso</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sé específico sobre tus limitaciones</li>
                <li>Menciona todos los tratamientos probados</li>
                <li>Destaca el impacto en tu trabajo</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold">¿Puedo trabajar si tengo una EII?</h3>
            <p className="text-gray-700">Depende de la gravedad de la enfermedad. Muchas personas con EII pueden trabajar con adaptaciones, mientras que en casos graves puede ser necesario solicitar una incapacidad.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold">¿Qué adaptaciones laborales podrían ayudarme?</h3>
            <p className="text-gray-700">Acceso a baño cercano, horario flexible, posibilidad de pausas según necesidad, teletrabajo, o adaptación del puesto de trabajo.</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-semibold">¿Pueden denegarme la incapacidad si mi enfermedad está en remisión?</h3>
            <p className="text-gray-700">La valoración considera la enfermedad en su conjunto, incluyendo la frecuencia e intensidad de los brotes. Una remisión temporal no descarta el reconocimiento de la incapacidad si los brotes son recurrentes.</p>
          </div>
        </section>

        <section className="bg-yellow-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-3">Recuerda</h2>
          <p>El reconocimiento de la incapacidad permanente por EII depende de cómo la enfermedad afecta tu capacidad laboral, no solo del diagnóstico. Es fundamental contar con una documentación médica exhaustiva y asesoramiento legal especializado para presentar una solicitud bien fundamentada.</p>
        </section>

        <div className="mt-10">
          <Button asChild variant="outline">
            <Link to="/blog">
              ← Volver al blog
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default EnfermedadesInflamatoriasIntestinales;
