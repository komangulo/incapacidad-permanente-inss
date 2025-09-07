import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnfermedadesMusculoesqueleticasIncapacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enfermedades Musculoesqueléticas e Incapacidad Permanente</h1>
        
        <section className="mb-8">
          <p className="text-lg mb-6">
            El sistema musculoesquelético, formado por huesos, músculos, articulaciones, tendones y ligamentos, es fundamental para el desempeño de cualquier actividad física y laboral. Cuando una enfermedad o lesión afecta de forma persistente este sistema, puede generar limitaciones graves que justifiquen la incapacidad permanente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Principales enfermedades musculoesqueléticas</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">1.1 Lumbalgia crónica y dolor lumbar</h3>
              <p className="mb-4">
                El dolor lumbar crónico es una de las causas más habituales de incapacidad laboral. Puede derivar de:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Hernias discales</li>
                <li>Espondilosis</li>
                <li>Degeneración discal</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Juan, operario de fábrica, sufrió hernia discal y lumbalgia crónica. Aunque podía realizar tareas simples, no podía manipular maquinaria ni levantar cargas, lo que justificó una incapacidad total."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.2 Hernias de disco y protusiones discales</h3>
              <p className="mb-4">
                Las hernias discales producen dolor irradiado, ciática y debilidad muscular.
              </p>
              <p className="mb-4 font-medium">Evaluación para incapacidad:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Se valoran las pruebas de imagen (resonancia magnética, TAC)</li>
                <li>La limitación funcional es más importante que el dolor subjetivo</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.3 Artrosis y artritis reumatoide</h3>
              <p className="mb-4">
                <strong>Artrosis avanzada:</strong> desgaste del cartílago que provoca dolor, rigidez y pérdida de movilidad.
              </p>
              <p className="mb-4">
                <strong>Artritis reumatoide:</strong> enfermedad autoinmune que afecta varias articulaciones.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Isabel, administrativa con artritis reumatoide severa en manos y muñecas, no podía teclear ni manejar documentos con normalidad. Se reconoció incapacidad total debido a la afectación funcional y la progresión de la enfermedad."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.4 Fibromialgia</h3>
              <p className="mb-4">
                La fibromialgia provoca dolor difuso, fatiga extrema y problemas de sueño.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Se evalúa según criterios de dolor generalizado</li>
                <li>Requiere informes médicos detallados</li>
                <li>Se valora la repercusión en la vida diaria</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Evaluación de la incapacidad</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">2.1 Valoración funcional</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Realizada por el Equipo de Valoración de Incapacidades (EVI)</li>
                <li>Se analiza la movilidad de articulaciones, fuerza, resistencia y dolor</li>
                <li>Pruebas médicas objetivas: radiografías, resonancias, electromiografías</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2.2 Grados de incapacidad</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Parcial:</strong> limita el desempeño de la profesión habitual</li>
                <li><strong>Total:</strong> imposibilidad de realizar la profesión habitual, aunque sí otras actividades</li>
                <li><strong>Absoluta:</strong> no puede desempeñar ningún trabajo</li>
                <li><strong>Gran invalidez:</strong> requiere asistencia continua de otra persona</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Impacto en la vida diaria y laboral</h2>
          <p className="mb-4">
            Las enfermedades musculoesqueléticas afectan:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Movilidad y fuerza</strong> para actividades básicas</li>
            <li><strong>Capacidad</strong> para cumplir horarios y tareas repetitivas</li>
            <li><strong>Postura, equilibrio</strong> y resistencia al esfuerzo</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="italic">
              "Carmen, enfermera con lumbalgia crónica, relató que podía cuidar pacientes por períodos cortos, pero no mantener turnos completos de pie ni levantar objetos pesados. Este impacto funcional se valoró decisivo para la incapacidad."
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Consejos prácticos para solicitar la incapacidad</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Documentación completa:</strong> Reúne informes médicos actualizados, pruebas diagnósticas y evolución clínica.</li>
            <li><strong>Detalla limitaciones:</strong> Explica cómo la enfermedad afecta tu capacidad para trabajar y realizar actividades cotidianas.</li>
            <li><strong>Prepara la entrevista médica:</strong> Sé claro sobre tus limitaciones y cómo afectan tu trabajo.</li>
            <li><strong>Asesoramiento legal:</strong> Considera consultar con un abogado especializado en incapacidades.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Preguntas frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Todas las enfermedades musculoesqueléticas dan derecho a incapacidad?</h3>
              <p>No, solo aquellas que limitan significativamente la capacidad laboral de forma permanente.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Se puede trabajar con una incapacidad parcial?</h3>
              <p>Sí, pero con limitaciones en las tareas que puedas realizar.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué hacer si me deniegan la incapacidad?</h3>
              <p>Puedes presentar una reclamación previa y, si es necesario, recurrir ante los juzgados de lo social.</p>
            </div>
          </div>
        </section>

        <section className="pt-6 border-t">
          <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
          <p className="mb-6">
            Las enfermedades musculoesqueléticas pueden limitar significativamente la capacidad laboral. La clave para obtener una incapacidad permanente está en demostrar cómo la enfermedad afecta tu capacidad para trabajar, respaldado por documentación médica detallada y un asesoramiento adecuado.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium italic">
              Reflexión final: "No es solo el dolor lo que importa, sino cómo limita tu capacidad para trabajar y vivir con normalidad."
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

export default EnfermedadesMusculoesqueleticasIncapacidad;
