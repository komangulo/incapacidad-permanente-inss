import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnfermedadesCardiacasIncapacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enfermedades Cardíacas e Incapacidad Permanente</h1>
        
        <section className="mb-8">
          <p className="text-lg mb-6">
            El sistema cardiovascular es fundamental para la vida y la capacidad de trabajo. Las enfermedades cardíacas pueden limitar de manera significativa la capacidad física, la resistencia y la tolerancia al esfuerzo, generando situaciones que justifican la incapacidad permanente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Principales enfermedades cardíacas</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">1.1 Insuficiencia cardíaca crónica</h3>
              <p className="mb-4">
                El corazón no bombea sangre de manera suficiente para cubrir las necesidades del cuerpo.
              </p>
              <p className="font-medium mb-2">Síntomas:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Fatiga</li>
                <li>Dificultad respiratoria</li>
                <li>Hinchazón en piernas y tobillos</li>
                <li>Intolerancia al esfuerzo</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Jorge, con insuficiencia cardíaca avanzada, no podía realizar turnos prolongados de trabajo físico. La incapacidad total se concedió basándose en la reducción de capacidad funcional y riesgo de descompensaciones."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.2 Cardiopatía isquémica</h3>
              <p className="mb-4">
                Incluye angina de pecho estable e inestable y secuelas de infarto de miocardio.
              </p>
              <p className="font-medium mb-2">Evaluación para incapacidad:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Pruebas objetivas: electrocardiogramas, ecocardiogramas, pruebas de esfuerzo</li>
                <li>Se valora la capacidad funcional y el riesgo de complicaciones</li>
                <li>Se considera incapacidad cuando existe riesgo de vida o limitación significativa</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.3 Arritmias graves</h3>
              <p className="mb-4">
                Alteraciones del ritmo cardíaco que pueden ser potencialmente graves.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Pedro, conductor de autobús, fue incapaz de continuar trabajando tras episodios recurrentes de arritmia. La incapacidad absoluta fue reconocida por riesgo para su vida y la de terceros."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">1.4 Valvulopatías severas</h3>
              <p className="mb-4">
                Enfermedades que afectan a las válvulas cardíacas, como la estenosis aórtica o la insuficiencia mitral.
              </p>
              <p className="font-medium mb-2">Impacto laboral:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Limitación para trabajos que requieran esfuerzo físico</li>
                <li>Necesidad de seguimiento médico frecuente</li>
                <li>Posible necesidad de cirugía</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Evaluación de la incapacidad</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">2.1 Valoración médica</h3>
              <p className="mb-4">
                Realizada por el Equipo de Valoración de Incapacidades (EVI), incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Evaluación de la capacidad funcional</li>
                <li>Análisis de pruebas médicas (electrocardiograma, ecocardiograma, pruebas de esfuerzo)</li>
                <li>Valoración del riesgo laboral</li>
                <li>Análisis de la profesión habitual</li>
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
            Las enfermedades cardíacas afectan múltiples aspectos de la vida:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Capacidad física:</strong> limitación para esfuerzos, subir escaleras, caminar largas distancias</li>
            <li><strong>Seguridad laboral:</strong> riesgo de desmayos o complicaciones en trabajos de riesgo</li>
            <li><strong>Vida social y familiar:</strong> necesidad de adaptar actividades y rutinas</li>
            <li><strong>Salud mental:</strong> ansiedad, depresión y estrés por la condición crónica</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="italic">
              "María, con una valvulopatía severa, no podía mantener el ritmo de su trabajo como enfermera. La incapacidad total le permitió adaptar su vida a su condición de salud."
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Consejos para solicitar la incapacidad</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Documentación médica completa:</strong> Incluye todos los informes, pruebas diagnósticas y evolución clínica.</li>
            <li><strong>Descripción detallada:</strong> Explica cómo los síntomas afectan tu capacidad para trabajar.</li>
            <li><strong>Pruebas objetivas:</strong> Aporta resultados de electrocardiogramas, ecocardiogramas, pruebas de esfuerzo, etc.</li>
            <li><strong>Historial laboral:</strong> Describe cómo la enfermedad limita tus tareas específicas.</li>
            <li><strong>Asesoramiento legal:</strong> Consulta con un especialista en incapacidades laborales.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Preguntas frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Todas las enfermedades cardíacas dan derecho a incapacidad?</h3>
              <p>No, solo aquellas que limitan significativamente la capacidad laboral de forma permanente o a largo plazo.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué debo hacer si me deniegan la incapacidad?</h3>
              <p>Puedes presentar una reclamación previa y, si es necesario, recurrir ante los juzgados de lo social con asesoramiento legal especializado.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Puedo trabajar con una incapacidad por enfermedad cardíaca?</h3>
              <p>Depende del grado de incapacidad. Una incapacidad parcial permite trabajar con ciertas limitaciones, mientras que la absoluta impide cualquier actividad laboral.</p>
            </div>
          </div>
        </section>

        <section className="pt-6 border-t">
          <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
          <p className="mb-6">
            Las enfermedades cardíacas pueden afectar significativamente la capacidad para trabajar y realizar actividades cotidianas. El reconocimiento de la incapacidad permanente depende de la gravedad de la enfermedad, su impacto en la capacidad laboral y la documentación médica presentada.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium italic">
              Reflexión final: "La salud del corazón es el motor de nuestra vida. Cuando falla, es fundamental reconocer nuestras limitaciones y buscar el apoyo necesario para mantener nuestra calidad de vida."
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

export default EnfermedadesCardiacasIncapacidad;
