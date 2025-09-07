import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EnfermedadesIncapacidadPermanente = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Enfermedades que dan lugar a incapacidad permanente: cómo se valoran en la práctica</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué se entiende por incapacidad permanente?</h2>
          <p className="mb-4">
            La incapacidad permanente es la prestación que concede la Seguridad Social cuando una enfermedad o conjunto de ellas provoca limitaciones graves y duraderas que impiden trabajar con normalidad.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Lo importante es entender que no existe un catálogo oficial cerrado de enfermedades. En mi caso, lo que más me chocó la primera vez que acompañé a alguien al tribunal médico fue escuchar: 'El diagnóstico es secundario, lo que importa es lo que ya no puede hacer en el trabajo'."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Enfermedades con mayor frecuencia reconocidas para incapacidad</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Patologías neurológicas</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Esclerosis múltiple.</li>
                <li>Epilepsia con crisis no controladas.</li>
                <li>Parkinson avanzado.</li>
                <li>Lesiones medulares.</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Un familiar con epilepsia me decía: 'Yo podía hacer muchas cosas, pero no sabía cuándo me daría una crisis… y ese simple hecho fue determinante para que aceptaran mi incapacidad'."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Trastornos musculoesqueléticos</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Lumbalgias crónicas.</li>
                <li>Artrosis avanzada.</li>
                <li>Fibromialgia severa.</li>
                <li>Hernias discales múltiples.</li>
              </ul>
              <p className="mb-4">
                Aquí, lo que más peso tiene no es el diagnóstico, sino la limitación funcional: caminar, cargar peso, mantener posturas prolongadas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Enfermedades psiquiátricas</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Depresión mayor resistente.</li>
                <li>Trastorno bipolar grave.</li>
                <li>Trastornos de ansiedad incapacitantes.</li>
                <li>Esquizofrenia.</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="italic">
                  "Recuerdo la frase de un psicólogo en un informe: 'El paciente no puede mantener una rutina de ocho horas laborales debido a la fatiga emocional y la inestabilidad anímica'. Eso tuvo más valor que cualquier etiqueta diagnóstica."
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Patologías oncológicas y crónicas</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cáncer con secuelas permanentes.</li>
                <li>Enfermedad pulmonar obstructiva crónica (EPOC).</li>
                <li>Insuficiencia renal crónica en diálisis.</li>
                <li>Diabetes complicada (retinopatía, neuropatía).</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cómo evalúa el tribunal médico las enfermedades</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Grados de incapacidad</h3>
          <ul className="space-y-4 mb-6">
            <li><strong>Total:</strong> no puedes ejercer tu profesión habitual.</li>
            <li><strong>Absoluta:</strong> no puedes ejercer ningún trabajo.</li>
            <li><strong>Gran invalidez:</strong> requieres ayuda de otra persona para las tareas básicas.</li>
          </ul>

          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Lo que descubrí en un caso cercano es que muchas veces se mezclan varias enfermedades. Por ejemplo, una persona con artrosis y depresión: ninguna por separado garantizaba la incapacidad, pero la suma fue decisiva."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Documentación que marca la diferencia</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Informes de especialistas actualizados.</li>
            <li>Pruebas diagnósticas objetivas.</li>
            <li>Valoración funcional (qué tareas puedes y no puedes hacer).</li>
            <li>Evolución de bajas médicas.</li>
          </ul>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Un abogado me repetía siempre: 'Más vale un informe claro de un especialista que diez papeles confusos'."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">El impacto real en la vida cotidiana</h2>
          <p className="mb-4">
            Más allá de lo legal, lo duro es la convivencia diaria con la enfermedad:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Quien tiene artritis cuenta que abrir una botella ya es un reto.</li>
            <li>Una persona con depresión describe que levantarse de la cama ya consume toda la energía.</li>
            <li>Un paciente de cáncer relata que el cansancio post-quimio le impide mantener un empleo estable.</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Yo mismo acompañé a alguien con fibromialgia que decía: 'El dolor es invisible, pero me deja fuera de juego'. Esa invisibilidad hace que muchos sientan que tienen que luchar el doble para ser creídos."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">¿Puedo solicitar incapacidad si tengo varias enfermedades leves?</h3>
              <p>Sí, lo que se valora es el efecto combinado.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">¿Qué pasa si el tribunal rechaza mi solicitud?</h3>
              <p>Se puede recurrir con una reclamación previa y, si es necesario, vía judicial.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">¿Me pueden revisar la incapacidad?</h3>
              <p>Sí, en revisiones periódicas, especialmente en casos donde se espera mejoría.</p>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Conclusión: la importancia de demostrar la limitación real</h2>
          <p className="mb-4">
            Lo que define la incapacidad permanente no es el nombre de la enfermedad, sino el grado en que afecta tu vida laboral y cotidiana.
          </p>
          <p className="mb-4">
            La clave es recopilar pruebas médicas claras, reflejar las limitaciones del día a día y no rendirse si al principio no se reconoce.
          </p>
          <p className="italic">
            "Siempre recuerdo lo que me dijo un médico en una revisión: 'Nuestro trabajo no es poner etiquetas, es ver cómo vives realmente con tu enfermedad'. Esa frase resume el espíritu del proceso."
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

export default EnfermedadesIncapacidadPermanente;
