import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnfermedadesNeurologicasIncapacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enfermedades Neurológicas e Incapacidad Permanente</h1>
        
        <section className="mb-8">
          <p className="text-lg mb-6">
            El sistema nervioso controla todas las funciones del cuerpo: movimiento, coordinación, equilibrio, cognición y percepción. Cuando se producen enfermedades neurológicas que afectan estas capacidades de manera persistente, el desempeño laboral puede verse gravemente limitado, justificando la incapacidad permanente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Principales enfermedades neurológicas</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">1.1 Esclerosis múltiple (EM)</h3>
              <p className="mb-4">
                La esclerosis múltiple es una enfermedad autoinmune que afecta al cerebro y médula espinal.
              </p>
              <p className="font-medium mb-2">Síntomas:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Debilidad muscular</li>
                <li>Fatiga</li>
                <li>Problemas de coordinación</li>
                <li>Visión borrosa</li>
                <li>Trastornos cognitivos</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Elena, ingeniera, presentaba fatiga intensa y pérdida de coordinación manual. Aunque podía asistir al trabajo en algunos días, no mantenía la constancia necesaria para sus funciones. La incapacidad total fue reconocida basándose en la afectación funcional."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.2 Enfermedad de Parkinson</h3>
              <p className="mb-4">
                El Parkinson afecta el control motor y la función cognitiva.
              </p>
              <p className="font-medium mb-2">Síntomas principales:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Temblor en reposo</li>
                <li>Rigidez muscular</li>
                <li>Bradicinesia (lentitud de movimientos)</li>
                <li>Problemas de equilibrio y marcha</li>
              </ul>
              <p className="mb-4">
                La evaluación para incapacidad considera la limitación para manipular objetos, caminar largas distancias o mantener posturas prolongadas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.3 Epilepsia resistente</h3>
              <p className="mb-4">
                La epilepsia se caracteriza por convulsiones recurrentes que pueden afectar significativamente la capacidad laboral.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Ana, operaria de planta química, sufrió convulsiones frecuentes que ponían en riesgo su seguridad y la de otros. La incapacidad total fue reconocida considerando la imposibilidad de garantizar un desempeño seguro."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.4 Esclerosis lateral amiotrófica (ELA)</h3>
              <p className="mb-4">
                Enfermedad degenerativa progresiva de las neuronas motoras que afecta gravemente la movilidad y funciones vitales.
              </p>
              <p className="font-medium mb-2">Evaluación para incapacidad:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Incapacidad absoluta desde fases iniciales para profesiones que requieran esfuerzo físico</li>
                <li>Gran invalidez en etapas avanzadas, requiriendo asistencia continua</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Evaluación de la incapacidad</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">2.1 Valoración funcional</h3>
              <p className="mb-4">
                Realizada por el Equipo de Valoración de Incapacidades (EVI), incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Análisis de informes neurológicos</li>
                <li>Pruebas de imagen (RMN, TAC, electromiografía)</li>
                <li>Evaluación de capacidad funcional</li>
                <li>Valoración de movilidad, fuerza y coordinación</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2.2 Grados de incapacidad</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Parcial:</strong> limita la profesión habitual</li>
                <li><strong>Total:</strong> imposibilidad de desempeñar la profesión habitual, pero apto para otras actividades</li>
                <li><strong>Absoluta:</strong> no puede desempeñar ningún trabajo</li>
                <li><strong>Gran invalidez:</strong> requiere asistencia constante de terceros</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Impacto en la vida diaria y laboral</h2>
          <p className="mb-4">
            Las enfermedades neurológicas afectan múltiples aspectos de la vida:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Movilidad y fuerza:</strong> dificultad para moverse o realizar tareas físicas</li>
            <li><strong>Coordinación y equilibrio:</strong> riesgo de caídas, dificultad para tareas precisas</li>
            <li><strong>Cognición:</strong> problemas de memoria, concentración y toma de decisiones</li>
            <li><strong>Seguridad:</strong> riesgo en trabajos que requieran atención constante</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="italic">
              "Carmen, con esclerosis múltiple, relató que podía asistir a reuniones, pero no mantener tareas físicas o cognitivas de manera sostenida. La incapacidad total se reconoció debido a la limitación funcional global."
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Consejos para solicitar la incapacidad</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Documentación completa:</strong> Reúne informes neurológicos actualizados, pruebas de imagen y evolución clínica.</li>
            <li><strong>Descripción detallada:</strong> Explica cómo los síntomas afectan tu capacidad para trabajar.</li>
            <li><strong>Pruebas objetivas:</strong> Incluye resultados de RMN, electromiografías y evaluaciones cognitivas.</li>
            <li><strong>Historial laboral:</strong> Describe cómo la enfermedad limita tus tareas específicas.</li>
            <li><strong>Asesoramiento legal:</strong> Considera consultar con un especialista en incapacidades.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Preguntas frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Todas las enfermedades neurológicas dan derecho a incapacidad?</h3>
              <p>No, solo aquellas que limitan significativamente la capacidad laboral de forma permanente.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Se puede trabajar con una incapacidad por enfermedad neurológica?</h3>
              <p>Depende del grado de incapacidad. Una incapacidad parcial permite trabajar con ciertas limitaciones, mientras que la absoluta impide cualquier actividad laboral.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué hago si me deniegan la incapacidad?</h3>
              <p>Puedes presentar una reclamación previa y, si es necesario, recurrir ante los juzgados de lo social con asesoramiento legal especializado.</p>
            </div>
          </div>
        </section>

        <section className="pt-6 border-t">
          <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
          <p className="mb-6">
            Las enfermedades neurológicas pueden afectar gravemente la capacidad para trabajar y realizar actividades cotidianas. La clave para obtener una incapacidad permanente está en demostrar cómo la enfermedad limita tus capacidades funcionales, respaldado por documentación médica detallada y un asesoramiento adecuado.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium italic">
              Reflexión final: "No se trata solo del diagnóstico, sino de cómo la enfermedad afecta tu capacidad para trabajar y vivir de manera independiente."
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Button asChild variant="outline">
            <Link to="/blog">← Volver al blog</Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default EnfermedadesNeurologicasIncapacidad;
