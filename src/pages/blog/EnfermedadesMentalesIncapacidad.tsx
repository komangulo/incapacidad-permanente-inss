import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnfermedadesMentalesIncapacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enfermedades Mentales y la Incapacidad Permanente</h1>
        
        <p className="text-gray-600 mb-8">Publicado el 10 de marzo de 2025 en <span className="text-blue-600">Salud Mental</span></p>
        
        <p className="mb-8 text-sm text-gray-500">Las enfermedades mentales pueden afectar significativamente la capacidad laboral y la calidad de vida.</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Enfermedades Mentales e Incapacidad Laboral</h2>
          <p className="mb-4">
            Los trastornos de salud mental pueden ser tan incapacitantes como las enfermedades físicas, afectando profundamente la capacidad de una persona para mantener un empleo estable. A diferencia de otras condiciones, las enfermedades mentales a menudo son invisibles, lo que puede dificultar su reconocimiento pero no disminuye su impacto real en la vida laboral.
          </p>
          <p>
            La valoración de la incapacidad permanente por enfermedad mental se centra en cómo los síntomas afectan la capacidad para desarrollar una actividad laboral de manera continuada, previsible y con el rendimiento adecuado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Principales Trastornos que pueden dar lugar a Incapacidad</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">1. Trastornos del Estado de Ánimo</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Depresión mayor recurrente</li>
                <li>Trastorno bipolar</li>
                <li>Trastorno depresivo persistente (distimia)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">2. Trastornos de Ansiedad</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Trastorno de ansiedad generalizada</li>
                <li>Trastorno de pánico con agorafobia</li>
                <li>Trastorno de estrés postraumático</li>
                <li>Trastorno obsesivo-compulsivo</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">3. Trastornos Psicóticos</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Esquizofrenia</li>
                <li>Trastorno esquizoafectivo</li>
                <li>Trastorno delirante</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">4. Trastornos de Personalidad</h3>
              <p className="text-sm text-gray-600 mt-1">En casos graves que generen una disfunción significativa</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Criterios de Valoración</h2>
          
          <p className="mb-4">Para el reconocimiento de la incapacidad permanente, se valoran aspectos como:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Síntomas y su intensidad</h4>
              <p className="text-sm text-gray-600">Frecuencia e intensidad de los episodios</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Respuesta al tratamiento</h4>
              <p className="text-sm text-gray-600">Efectividad de los tratamientos aplicados</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Limitaciones funcionales</h4>
              <p className="text-sm text-gray-600">Impacto en las capacidades laborales</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Cronificación</h4>
              <p className="text-sm text-gray-600">Duración y evolución del trastorno</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Grados de Incapacidad</h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Incapacidad Permanente Parcial (IPP)</h3>
              <p className="text-sm text-gray-700">Para casos leves que ocasionan una disminución del rendimiento laboral superior al 33%.</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Incapacidad Permanente Total (IPT)</h3>
              <p className="text-sm text-gray-700">Cuando la enfermedad impide realizar las tareas fundamentales de la profesión habitual.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Incapacidad Permanente Absoluta (IPA)</h3>
              <p className="text-sm text-gray-700">Para casos graves que impiden cualquier tipo de actividad laboral.</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg">Gran Invalidez (GI)</h3>
              <p className="text-sm text-gray-700">Cuando se necesita la asistencia de otra persona para los actos más esenciales de la vida diaria.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Documentación Necesaria</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Informes psiquiátricos detallados</li>
            <li>Historial clínico completo</li>
            <li>Resultados de pruebas psicológicas</li>
            <li>Informes de hospitalizaciones, si las hubiera</li>
            <li>Informe de vida laboral</li>
            <li>Informes de bajas laborales previas por la misma causa</li>
          </ul>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2">Consejo importante:</h4>
            <p className="text-sm">Es fundamental que los informes médicos especifiquen claramente cómo los síntomas afectan a las capacidades laborales, no solo el diagnóstico.</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Consejos para el Proceso de Solicitud</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Antes de la Valoración</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Recopila toda la documentación médica</li>
                <li>Prepara un diario de síntomas</li>
                <li>Documenta cómo afecta la enfermedad a tu vida diaria y laboral</li>
                <li>Pide a tu psiquiatra un informe detallado</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-2">Durante la Valoración</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Sé sincero sobre tus síntomas</li>
                <li>No minimices tus limitaciones</li>
                <li>Explica cómo afectan tus síntomas al trabajo</li>
                <li>Lleva a un acompañante si lo necesitas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-semibold">¿Puedo trabajar si tengo reconocida una incapacidad por enfermedad mental?</h3>
              <p className="text-gray-700 text-sm mt-1">Depende del grado de incapacidad. Con una IPP sí se puede trabajar, con una IPT se puede trabajar en otro oficio, y con una IPA no se puede trabajar en ningún caso.</p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-semibold">¿Es más difícil que te concedan la incapacidad por enfermedad mental?</h3>
              <p className="text-gray-700 text-sm mt-1">Puede ser más complejo porque son patologías menos visibles, pero con la documentación adecuada y un buen asesoramiento, se puede conseguir el reconocimiento.</p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-semibold">¿Qué pasa si empeora mi enfermedad después de concederme la incapacidad?</h3>
              <p className="text-gray-700 text-sm mt-1">Puedes solicitar una revisión por agravamiento para que se valore si procede aumentar el grado de incapacidad.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-3">Recuerda</h2>
          <p className="mb-3">La enfermedad mental es tan válida como cualquier otra enfermedad a la hora de solicitar una incapacidad. Lo importante no es solo el diagnóstico, sino cómo afecta a tu capacidad para trabajar.</p>
          <p>Si necesitas ayuda con tu solicitud, no dudes en buscar asesoramiento profesional especializado en incapacidades por enfermedad mental.</p>
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

export default EnfermedadesMentalesIncapacidad;
