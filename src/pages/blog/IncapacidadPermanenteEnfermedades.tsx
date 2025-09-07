import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IncapacidadPermanenteEnfermedades = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Incapacidad permanente por enfermedades: guía completa 2025</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué es la incapacidad permanente y cómo se relaciona con las enfermedades?</h2>
          <p className="mb-4">
            La incapacidad permanente es una prestación reconocida por la Seguridad Social cuando una persona no puede seguir trabajando debido a una enfermedad o lesión que limita su capacidad laboral.
          </p>
          <p className="mb-4">
            Lo curioso es que no existe un listado cerrado de enfermedades: lo que realmente importa es el grado de limitación que produce la dolencia.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
            <p className="italic">
              "Recuerdo que, cuando acompañé a un familiar a la cita con el tribunal médico, la pregunta clave fue: '¿Esa enfermedad le impide hacer su trabajo habitual?'. Esa frase resume el enfoque."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Enfermedades que con más frecuencia generan incapacidad permanente</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Patologías físicas</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Cardíacas: insuficiencia cardíaca, cardiopatía isquémica.</li>
            <li>Respiratorias: EPOC, asma grave, fibrosis pulmonar.</li>
            <li>Oncológicas: cáncer en fase avanzada o con secuelas incapacitantes.</li>
            <li>Reumatológicas: artritis reumatoide, artrosis degenerativa, fibromialgia.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Enfermedades mentales y cognitivas</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Depresión mayor recurrente.</li>
            <li>Trastorno bipolar.</li>
            <li>Esquizofrenia.</li>
            <li>Demencias tempranas.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Otras dolencias crónicas o degenerativas</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Diabetes con complicaciones severas.</li>
            <li>Esclerosis múltiple.</li>
            <li>Parkinson.</li>
            <li>Enfermedades raras de origen genético.</li>
          </ul>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
            <p className="italic">
              Lo que más sorprende a muchos es que no hace falta estar en fase terminal para tener derecho a la prestación: basta con demostrar que la enfermedad te impide trabajar de forma estable.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cómo valora el tribunal médico las enfermedades para la incapacidad</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Grados de incapacidad</h3>
          <ul className="space-y-4 mb-6">
            <li><strong>Parcial:</strong> reducción del 33% en la capacidad laboral.</li>
            <li><strong>Total:</strong> imposibilidad de ejercer la profesión habitual, pero sí otro trabajo.</li>
            <li><strong>Absoluta:</strong> imposibilidad para cualquier empleo.</li>
            <li><strong>Gran invalidez:</strong> requiere ayuda de terceros.</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "En mi experiencia, la confusión más común es entre total y absoluta. Recuerdo que me decía un conocido: 'Pensaba que con mi dolencia no me darían nada porque aún podía conducir…'. El tribunal le reconoció incapacidad total, porque su profesión era de riesgo físico."
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Documentación y pruebas médicas necesarias</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Informes hospitalarios actualizados.</li>
            <li>Pruebas diagnósticas (resonancias, análisis, biopsias).</li>
            <li>Informes de especialistas.</li>
            <li>Historial de bajas médicas.</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <p className="italic">
              Un detalle práctico: conviene que los informes sean recientes y claros. En el caso de mi primo, un informe de hace tres años casi hace que le denieguen la prestación.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experiencias reales y dificultades comunes en el proceso</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">El impacto emocional y burocrático</h3>
          <p className="mb-4">
            Solicitar la incapacidad puede ser tan duro emocionalmente como convivir con la enfermedad. Muchos sienten que tienen que "demostrar" su sufrimiento ante el tribunal.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="italic">
              "Yo mismo vi cómo una amiga con fibromialgia salía llorando de la revisión médica: 'Parece que no me creían'. Al final le concedieron la total, pero el desgaste emocional fue enorme."
            </p>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Consejos prácticos para preparar la solicitud</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Reunir informes médicos de distintos especialistas, no solo del médico de cabecera.</li>
            <li>Preparar un resumen personal explicando limitaciones diarias (caminar, dormir, concentrarse).</li>
            <li>Asesorarse con un abogado especializado si hay dudas.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes sobre enfermedades e incapacidad permanente</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">¿Existe una lista oficial cerrada?</h3>
              <p>No, solo ejemplos orientativos. Lo que cuenta es el impacto de la enfermedad en la capacidad laboral.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">¿Se puede pedir incapacidad por varias enfermedades juntas?</h3>
              <p>Sí, de hecho muchas veces se concede por la suma de patologías que, en conjunto, incapacitan.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold">¿Cuánto tarda en resolverse?</h3>
              <p>Entre 4 y 12 meses de media, según provincia y carga del INSS.</p>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Conclusión: claves para afrontar la incapacidad permanente por enfermedad</h2>
          <p className="mb-4">
            La incapacidad permanente no se concede por el nombre de la enfermedad, sino por el grado de limitación que provoca.
          </p>
          <p className="mb-4">
            El mejor consejo es preparar la documentación con rigor, acompañarla de ejemplos concretos de limitaciones y no rendirse si la primera respuesta es negativa.
          </p>
          <p className="italic">
            "Recuerdo la frase de un abogado que me ayudó: 'Aquí no se trata de convencer, sino de demostrar'."
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

export default IncapacidadPermanenteEnfermedades;
