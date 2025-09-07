import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Agorafobia = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "Agorafobia",
    grado: "Variable",
    descripcion: "Trastorno de ansiedad caracterizado por el miedo intenso a espacios abiertos o situaciones donde escapar podría ser difícil.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es la Agorafobia?",
        contenido: "La agorafobia es un trastorno de ansiedad en el que se experimenta miedo y ansiedad intensos ante situaciones como usar el transporte público, estar en espacios abiertos o cerrados, hacer cola o estar en medio de una multitud, o estar fuera de casa solo. Las personas con agorafobia a menudo evitan estas situaciones por miedo a no poder escapar o a no recibir ayuda si se produce un ataque de pánico.",
        impacto: "Afecta aproximadamente al 1-2% de la población general, siendo más común en mujeres que en hombres. Suele comenzar en la adolescencia tardía o la adultez temprana, aunque puede aparecer a cualquier edad."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores genéticos (mayor incidencia en familiares de primer grado)",
          "Desequilibrios en los neurotransmisores cerebrales (especialmente serotonina y noradrenalina)",
          "Experiencias traumáticas o eventos estresantes",
          "Ataques de pánico previos"
        ],
        factoresRiesgo: [
          "Historia familiar de agorafobia o trastornos de ansiedad",
          "Tener otro trastorno de ansiedad o fobia",
          "Tendencia al nerviosismo o sensibilidad a la ansiedad",
          "Eventos de vida estresantes (pérdida de un ser querido, ataque, abuso)",
          "Abuso de sustancias"
        ]
      },
      sintomas: {
        titulo: "Síntomas Comunes",
        emocionales: [
          "Miedo a estar solo en situaciones donde escapar podría ser difícil",
          "Temor a perder el control en lugares públicos",
          "Miedo a tener un ataque de pánico en lugares públicos",
          "Sentimientos de impotencia",
          "Dependencia de otros"
        ],
        fisicos: [
          "Taquicardia o palpitaciones",
          "Sudoración excesiva",
          "Temblores o sacudidas",
          "Dificultad para respirar",
          "Mareos o desmayos",
          "Náuseas o malestar abdominal",
          "Dolor en el pecho"
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Miedo o ansiedad intensa en dos o más de estas situaciones: transporte público, espacios abiertos, espacios cerrados, hacer cola o estar en medio de una multitud, o estar fuera de casa solo",
          "Miedo o evitación de estas situaciones debido a la idea de que podría ser difícil escapar o recibir ayuda",
          "Las situaciones agorafóbicas casi siempre provocan miedo o ansiedad",
          "Las situaciones se evitan activamente, requieren la compañía de alguien o se soportan con miedo o ansiedad intensos",
          "La ansiedad es desproporcionada al peligro real"
        ],
        evaluacion: [
          "Entrevista clínica detallada",
          "Cuestionarios estandarizados (como la Escala de Gravedad de la Agorafobia)",
          "Descartar causas médicas (problemas cardíacos, tiroideos, etc.)",
          "Evaluación de otros trastornos de ansiedad o del estado de ánimo"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        opciones: [
          "Terapia cognitivo-conductual (TCC): La más efectiva, especialmente la exposición gradual a las situaciones temidas",
          "Terapia de exposición: Enfrentamiento progresivo a las situaciones temidas",
          "Fármacos: Antidepresivos ISRS, IRSN o benzodiacepinas (a corto plazo)",
          "Terapia de grupo: Para compartir experiencias y estrategias de afrontamiento",
          "Técnicas de relajación y respiración"
        ],
        manejo: [
          "Exposición gradual a las situaciones temidas",
          "Técnicas de relajación y respiración",
          "Establecimiento de rutinas diarias estructuradas",
          "Participación en grupos de apoyo",
          "Evitar el consumo de cafeína y otras sustancias estimulantes"
        ]
      },
      sentencias: [
        {
          texto: "La agorafobia grave que impide a la trabajadora el uso de transporte público y la movilidad fuera de su domicilio, con crisis de ansiedad recurrentes, justifica el reconocimiento de incapacidad permanente absoluta.",
          tipo: "Incapacidad Absoluta",
          referencia: "TSJ Madrid, Sala Social, 12/04/2023"
        },
        {
          texto: "La agorafobia con crisis de angustia en espacios abiertos que limita significativamente la movilidad y el desarrollo de la actividad laboral justifica una incapacidad permanente total para la profesión habitual.",
          tipo: "Incapacidad Total",
          referencia: "TSJ Cataluña, Sala Social, 08/09/2022"
        },
        {
          texto: "La agorafobia con síntomas leves que permiten el desarrollo de la actividad laboral con ciertas adaptaciones justifica una incapacidad permanente parcial.",
          tipo: "Incapacidad Parcial",
          referencia: "TSJ Andalucía, Sala Social, 15/06/2023"
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
        "Fracaso de los tratamientos convencionales",
        "Limitación grave de la movilidad y autonomía personal",
        "Informes psicológicos/psiquiátricos que acrediten la gravedad"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "AMADAG (Asociación Madrileña de Agorafobia)", enlace: "https://www.amadag.com" },
        { nombre: "FEAFES Salud Mental España", enlace: "https://consaludmental.org" },
        { nombre: "Asociación Ayuda TOC Madrid", enlace: "https://www.ayudatoc.com" }
      ],
      telefonos: [
        { nombre: "Teléfono de la Esperanza", numero: "914 590 050" },
        { nombre: "Línea de Prevención del Suicidio", numero: "024" },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Síntomas Comunes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Síntomas emocionales:</h3>
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Tratamiento y Manejo</h2>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
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

export default Agorafobia;