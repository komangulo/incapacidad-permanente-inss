import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Alcoholismo = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "Alcoholismo",
    grado: "Variable",
    descripcion: "Trastorno crónico caracterizado por la dependencia física y psicológica del alcohol, con consecuencias graves para la salud y la vida social.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es el Alcoholismo?",
        contenido: "El alcoholismo es una enfermedad crónica y progresiva que se caracteriza por el consumo compulsivo de alcohol, pérdida de control sobre la ingesta, dependencia física y síndrome de abstinencia al interrumpir el consumo. Afecta al cerebro y al comportamiento, dificultando la capacidad de controlar el consumo de alcohol a pesar de las consecuencias negativas.",
        impacto: "Según la OMS, el consumo nocivo de alcohol causa aproximadamente 3 millones de muertes al año en todo el mundo, lo que representa el 5,3% de todas las defunciones. En España, se estima que entre un 4-5% de la población adulta tiene dependencia del alcohol."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores genéticos (mayor riesgo con antecedentes familiares)",
          "Alteraciones en la química cerebral (dopamina, serotonina, GABA)",
          "Factores psicológicos (estrés, ansiedad, depresión, baja autoestima)",
          "Factores sociales y ambientales (presión social, disponibilidad de alcohol)"
        ],
        factoresRiesgo: [
          "Consumo temprano de alcohol (antes de los 15 años)",
          "Historia familiar de alcoholismo",
          "Trastornos de salud mental concurrentes",
          "Exposición a entornos con alto consumo de alcohol",
          "Trauma infantil o abuso"
        ]
      },
      sintomas: {
        titulo: "Síntomas y Signos",
        emocionales: [
          "Necesidad de beber para funcionar con normalidad",
          "Ansiedad o irritabilidad cuando no se puede beber",
          "Pérdida de interés en actividades que no implican beber",
          "Continuar bebiendo a pesar de los problemas que causa",
          "Sentimientos de culpa o vergüenza por el consumo"
        ],
        fisicos: [
          "Temblor en las manos",
          "Náuseas y vómitos matutinos",
          "Sudoración excesiva",
          "Insomnio o pesadillas",
          "Tolerancia aumentada al alcohol",
          "Síntomas de abstinencia al no beber"
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Consumo de alcohol en mayores cantidades o por un período más largo de lo previsto",
          "Deseo persistente o esfuerzos infructuosos por controlar el consumo",
          "Gran cantidad de tiempo dedicado a actividades para obtener alcohol, consumirlo o recuperarse de sus efectos",
          "Antojo o fuerte deseo de consumir alcohol",
          "Consumo recurrente que lleva al incumplimiento de obligaciones"
        ],
        evaluacion: [
          "Entrevista clínica detallada",
          "Cuestionarios estandarizados (AUDIT, CAGE, MAST)",
          "Exploración física y pruebas de laboratorio",
          "Evaluación de trastornos psiquiátricos comórbidos"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Recuperación",
        opciones: [
          "Desintoxicación médica supervisada",
          "Terapia cognitivo-conductual",
          "Grupos de apoyo (Alcohólicos Anónimos, Al-Anon)",
          "Fármacos (disulfiram, naltrexona, acamprosato)",
          "Terapia familiar y de pareja",
          "Programas de rehabilitación residencial"
        ],
        manejo: [
          "Abstinencia total del alcohol",
          "Desarrollo de habilidades de afrontamiento",
          "Establecimiento de una red de apoyo social",
          "Manejo del estrés y las emociones",
          "Participación en grupos de autoayuda"
        ]
      },
      sentencias: [
        {
          texto: "El alcoholismo crónico con grave deterioro de las funciones cognitivas y físicas que impide el desarrollo de cualquier actividad laboral justifica el reconocimiento de incapacidad permanente absoluta.",
          tipo: "Incapacidad Absoluta",
          referencia: "TSJ Madrid, Sala Social, 15/06/2023"
        },
        {
          texto: "El trastorno por consumo de alcohol con síndrome de abstinencia recurrente y daño orgánico justifica una incapacidad permanente total para la profesión habitual.",
          tipo: "Incapacidad Total",
          referencia: "TSJ Cataluña, Sala Social, 22/03/2023"
        },
        {
          texto: "El alcoholismo en fase inicial con buen pronóstico de recuperación y sin daño orgánico severo puede dar lugar a una incapacidad temporal con seguimiento médico.",
          tipo: "Incapacidad Temporal",
          referencia: "TSJ Andalucía, Sala Social, 10/01/2023"
        }
      ]
    },
    incapacidad: {
      titulo: "Incapacidad Permanente",
      grados: [
        { tipo: "Parcial", porcentaje: "33%", descripcion: "Para trabajos con limitaciones específicas" },
        { tipo: "Total", porcentaje: "55-75%", descripcion: "Incapacidad para la profesión habitual" },
        { tipo: "Absoluta", porcentaje: "100%", descripcion: "Incapacidad para todo trabajo" }
      ],
      requisitos: [
        "Historia clínica detallada con seguimiento psiquiátrico",
        "Informes médicos que acrediten la cronicidad y gravedad",
        "Pruebas complementarias que demuestren el daño orgánico",
        "Fracaso de los tratamientos de desintoxicación"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "FAD (Fundación de Ayuda contra la Drogadicción)", enlace: "https://www.fad.es" },
        { nombre: "Socidrogalcohol", enlace: "https://www.socidrogalcohol.org" },
        { nombre: "Alcohólicos Anónimos España", enlace: "https://www.aa-es.org" }
      ],
      telefonos: [
        { nombre: "Teléfono de la Esperanza", numero: "914 590 050" },
        { nombre: "Línea de Ayuda sobre Drogas", numero: "900 16 15 15" },
        { nombre: "Salud Responde", numero: "955 54 50 60" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{diseaseData.titulo}</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad {diseaseData.grado}</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {diseaseData.descripcion}
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-8">
          {/* Descripción General */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Descripción General de la Enfermedad</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{diseaseData.contenido.descripcion.titulo}</h3>
                <p className="text-gray-700 mb-3">{diseaseData.contenido.descripcion.contenido}</p>
                <p className="text-gray-700">{diseaseData.contenido.descripcion.impacto}</p>
              </div>
            </div>
          </section>

          {/* Causas y Factores de Riesgo */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Causas y Factores de Riesgo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Causas principales:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.causas.causas.map((causa, index) => (
                    <li key={index}>{causa}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.causas.factoresRiesgo.map((factor, index) => (
                    <li key={index}>{factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Síntomas */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Síntomas y Signos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Síntomas emocionales y conductuales:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.sintomas.emocionales.map((sintoma, index) => (
                    <li key={index}>{sintoma}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Síntomas físicos:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.sintomas.fisicos.map((sintoma, index) => (
                    <li key={index}>{sintoma}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Diagnóstico */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Diagnóstico</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Criterios diagnósticos:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.diagnostico.criterios.map((criterio, index) => (
                    <li key={index}>{criterio}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.diagnostico.evaluacion.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Tratamiento */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Tratamiento y Recuperación</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Opciones de tratamiento:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.tratamiento.opciones.map((opcion, index) => (
                    <li key={index}>{opcion}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo de la recuperación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.tratamiento.manejo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Sentencias */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sentencias de Ejemplo</h2>
            <div className="space-y-6">
              {diseaseData.contenido.sentencias.map((sentencia, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <p className="text-gray-700 italic mb-2">"{sentencia.texto}"</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {sentencia.tipo}
                    </span>
                    <span className="text-sm text-gray-500">{sentencia.referencia}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Incapacidad Permanente */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Incapacidad Permanente</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Grados aplicables:</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {diseaseData.incapacidad.grados.map((grado, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-lg text-blue-600">{grado.tipo} ({grado.porcentaje})</div>
                    <p className="text-gray-700 text-sm">{grado.descripcion}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.incapacidad.requisitos.map((requisito, index) => (
                    <li key={index}>{requisito}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Recursos y Apoyo */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Recursos y Apoyo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Asociaciones:</h3>
                <ul className="space-y-2">
                  {diseaseData.recursos.asociaciones.map((asociacion, index) => (
                    <li key={index}>
                      <a 
                        href={asociacion.enlace} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <span className="mr-1">•</span> {asociacion.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Teléfonos de ayuda:</h3>
                <ul className="space-y-2">
                  {diseaseData.recursos.telefonos.map((telefono, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">•</span>
                      <span className="font-medium">{telefono.nombre}:</span>
                      <a href={`tel:${telefono.numero.replace(/\s/g, '')}`} className="ml-2 text-blue-600 hover:underline">
                        {telefono.numero}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Botón de consulta */}
          <div className="text-center py-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Consultar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alcoholismo;