import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ListaEnfermedadesIncapacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Lista de enfermedades para incapacidad permanente: ejemplos y claves en 2025</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué significa incapacidad permanente en relación con las enfermedades?</h2>
          <p className="mb-4">
            Cuando hablamos de incapacidad permanente, no hablamos de un listado cerrado de dolencias. Lo que evalúa la Seguridad Social es si una enfermedad, sola o combinada con otras, te impide desempeñar tu profesión habitual o cualquier trabajo.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "En mi caso, lo que más me sorprendió cuando acompañé a un amigo al INSS fue que el médico apenas mencionó el nombre de la enfermedad: lo que preguntaba era '¿Qué tareas ya no puedes hacer en tu trabajo?'. Eso cambia la perspectiva totalmente."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Enfermedades más comunes que pueden generar incapacidad permanente</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Patologías del sistema nervioso</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Esclerosis múltiple.</li>
                <li>Parkinson.</li>
                <li>Neuropatías periféricas graves.</li>
                <li>Epilepsia con crisis frecuentes.</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Una conocida con esclerosis múltiple me contaba: 'Lo que me dio la incapacidad no fue el diagnóstico, sino que ya no podía estar de pie ni 20 minutos seguidos en la tienda'."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Enfermedades musculoesqueléticas y reumáticas</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Artritis reumatoide.</li>
                <li>Lumbalgias crónicas incapacitantes.</li>
                <li>Fibromialgia en grado severo.</li>
                <li>Escoliosis grave.</li>
              </ul>
              <p className="mb-4">
                Aquí, el tribunal médico suele fijarse en limitaciones de movilidad, no tanto en el dolor subjetivo. Es clave tener pruebas como resonancias o informes de traumatología.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Enfermedades cardiovasculares y respiratorias</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Insuficiencia cardíaca.</li>
                <li>Infarto con secuelas.</li>
                <li>Enfermedad pulmonar obstructiva crónica (EPOC).</li>
                <li>Hipertensión pulmonar.</li>
              </ul>
              <p className="mb-4">
                En este grupo, a menudo se reconocen incapacidades absolutas porque las crisis pueden surgir en cualquier momento, lo que limita incluso trabajos sedentarios.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">4. Trastornos mentales y cognitivos</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Depresión resistente al tratamiento.</li>
                <li>Trastorno de ansiedad grave.</li>
                <li>Trastorno bipolar.</li>
                <li>Esquizofrenia.</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Cuando acompañé a un familiar a la revisión, lo más duro fue que le preguntaban si 'no podía intentar un trabajo más sencillo'. Ahí entendimos que el tribunal diferencia entre total y absoluta según las posibilidades de adaptación."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cómo se decide qué grado de incapacidad corresponde</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Parcial, Total, Absoluta y Gran Invalidez</h3>
          <ul className="space-y-4 mb-6">
            <li><strong>Parcial:</strong> permite seguir trabajando en la misma profesión con un 33% de limitación.</li>
            <li><strong>Total:</strong> impide trabajar en tu profesión, pero permite otra distinta.</li>
            <li><strong>Absoluta:</strong> impide cualquier trabajo.</li>
            <li><strong>Gran invalidez:</strong> requiere ayuda constante de otra persona.</li>
          </ul>

          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Un caso que recuerdo fue el de un camionero con apnea del sueño severa: le dieron la total porque conducir era un riesgo, aunque podía trabajar en un puesto administrativo."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">El papel de la documentación médica</h3>
          <p className="mb-4">
            El error más común que he visto es pensar que basta con el informe del médico de cabecera. En realidad, lo que más peso tiene son:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Informes hospitalarios.</li>
            <li>Dictámenes de especialistas (neurólogos, reumatólogos, psiquiatras).</li>
            <li>Resultados de pruebas objetivas.</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Un abogado me dijo una frase que nunca olvidé: 'El papel no lo aguanta todo, pero sin papeles no hay nada'."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Dificultades habituales durante el proceso</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Subjetividad:</strong> el dolor no siempre se puede medir.</li>
            <li><strong>Revisiones duras:</strong> muchos sienten que tienen que justificar su sufrimiento.</li>
            <li><strong>Plazos largos:</strong> la espera genera ansiedad e incertidumbre.</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Una amiga con depresión mayor me confesaba: 'Lo peor fue que me sentí como si tuviera que convencer a alguien de que no estaba fingiendo'."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">¿Todas las enfermedades mentales pueden dar lugar a incapacidad permanente?</h3>
              <p>No, solo aquellas que, según los informes, suponen una limitación grave y duradera.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">¿Se puede perder la incapacidad si mejoro?</h3>
              <p>Sí, el INSS revisa periódicamente algunos casos.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">¿Qué pasa si me la deniegan?</h3>
              <p>Se puede presentar una reclamación previa y, si es necesario, acudir a vía judicial.</p>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Conclusión: cómo afrontar el proceso con realismo</h2>
          <p className="mb-4">
            La incapacidad permanente no depende tanto del diagnóstico como de la limitación real en el trabajo. Preparar bien la documentación, apoyarse en especialistas y no rendirse en la primera negativa son las claves.
          </p>
          <p className="italic">
            "Yo siempre digo lo que aprendí acompañando a un familiar: 'El proceso es largo y duro, pero no es imposible si demuestras cómo la enfermedad afecta de verdad a tu vida laboral'."
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

export default ListaEnfermedadesIncapacidad;
