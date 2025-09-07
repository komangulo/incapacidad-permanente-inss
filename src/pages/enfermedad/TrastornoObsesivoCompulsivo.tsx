import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrastornoObsesivoCompulsivo = () => {
  // Datos del Trastorno Obsesivo Compulsivo (TOC)
  const tocData = {
    titulo: "Trastorno Obsesivo Compulsivo (TOC)",
    grado: "Total",
    descripcion: "Trastorno de ansiedad caracterizado por pensamientos obsesivos y comportamientos compulsivos recurrentes.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es el Trastorno Obsesivo Compulsivo?",
        contenido: "El TOC es un trastorno mental crónico caracterizado por la presencia de obsesiones (pensamientos, impulsos o imágenes recurrentes y persistentes) y/o compulsiones (comportamientos o actos mentales repetitivos) que causan malestar clínico significativo.",
        impacto: "Afecta aproximadamente al 1-2% de la población y puede manifestarse en cualquier etapa de la vida, aunque es más común que comience en la adolescencia o adultez temprana."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores genéticos (mayor prevalencia en familiares de primer grado)",
          "Alteraciones en los circuitos cerebrales que regulan la ansiedad",
          "Desequilibrios en neurotransmisores como la serotonina",
          "Factores ambientales como estrés o traumas"
        ],
        factoresRiesgo: [
          "Historia familiar de TOC",
          "Eventos traumáticos o estresantes",
          "Otras condiciones de salud mental (depresión, ansiedad)",
          "Infecciones por estreptococos (en algunos casos pediátricos)"
        ]
      },
      sintomas: {
        titulo: "Síntomas Comunes",
        obsesiones: [
          "Miedo a la contaminación o a los gérmenes",
          "Pensamientos no deseados sobre dañar a otros",
          "Necesidad de orden o simetría excesiva",
          "Dudas persistentes y necesidad de seguridad"
        ],
        compulsiones: [
          "Lavado o limpieza excesiva",
          "Comprobación repetitiva",
          "Conteo o repetición de palabras en silencio",
          "Ordenar cosas de manera particular"
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Presencia de obsesiones, compulsiones o ambas",
          "Las obsesiones/compulsiones consumen más de 1 hora al día",
          "Malestar clínicamente significativo",
          "No se debe a efectos de sustancias u otra condición médica"
        ],
        evaluacion: [
          "Entrevista clínica detallada",
          "Escalas de evaluación (Y-BOCS, OCI-R)",
          "Descartar otras condiciones médicas",
          "Evaluación del funcionamiento diario"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        opciones: [
          "Terapia cognitivo-conductual (TCC) con Exposición y Prevención de Respuesta (EPR)",
          "Medicamentos (ISRS, antidepresivos tricíclicos)",
          "Terapia de grupo y apoyo familiar",
          "En casos graves, terapia electroconvulsiva o estimulación cerebral"
        ],
        manejo: [
          "Establecer rutinas estructuradas",
          "Técnicas de manejo del estrés",
          "Evitar el consumo de alcohol y drogas",
          "Participación en grupos de apoyo"
        ]
      },
      sentencias: [
        {
          texto: "El TOC grave con rituales incapacitantes que consumen más de 4 horas diarias e impiden el desarrollo de cualquier actividad laboral justifica el reconocimiento de incapacidad permanente absoluta.",
          tipo: "Incapacidad Absoluta",
          referencia: "STSJ Cataluña, Sala Social, 12/09/2022"
        },
        {
          texto: "El trastorno obsesivo-compulsivo con síntomas moderados que limitan significativamente el rendimiento laboral pero permiten tareas de menor exigencia justifica una incapacidad permanente total para la profesión habitual.",
          tipo: "Incapacidad Total",
          referencia: "STSJ Madrid, Sala Social, 05/03/2023"
        },
        {
          texto: "El TOC resistente al tratamiento con múltiples hospitalizaciones y grave deterioro del funcionamiento social y laboral justifica el reconocimiento de gran invalidez.",
          tipo: "Gran Invalidez",
          referencia: "TSJ País Vasco, Sala Social, 18/11/2022"
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
        "Historia clínica detallada",
        "Resistencia al tratamiento",
        "Impacto en la capacidad laboral",
        "Evaluación psiquiátrica especializada"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "Fundación TOC", enlace: "https://fundaciontoc.org" },
        { nombre: "FEAFES Salud Mental España", enlace: "https://consaludmental.org" },
        { nombre: "Asociación TOC Granada", enlace: "https://www.toc-granada.com" }
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
        {/* Botón de volver */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{tocData.titulo}</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad {tocData.grado}</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {tocData.descripcion}
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Descripción General */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Descripción General de la Enfermedad</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{tocData.contenido.descripcion.titulo}</h3>
                <p className="text-gray-700 mb-3">{tocData.contenido.descripcion.contenido}</p>
                <p className="text-gray-700">{tocData.contenido.descripcion.impacto}</p>
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
                  {tocData.contenido.causas.causas.map((causa, index) => (
                    <li key={index}>{causa}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tocData.contenido.causas.factoresRiesgo.map((factor, index) => (
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Obsesiones comunes:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tocData.contenido.sintomas.obsesiones.map((sintoma, index) => (
                    <li key={index}>{sintoma}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Compulsiones comunes:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tocData.contenido.sintomas.compulsiones.map((sintoma, index) => (
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
                  {tocData.contenido.diagnostico.criterios.map((criterio, index) => (
                    <li key={index}>{criterio}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tocData.contenido.diagnostico.evaluacion.map((item, index) => (
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
                  {tocData.contenido.tratamiento.opciones.map((opcion, index) => (
                    <li key={index}>{opcion}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tocData.contenido.tratamiento.manejo.map((item, index) => (
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
              {tocData.contenido.sentencias.map((sentencia, index) => (
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
                {tocData.incapacidad.grados.map((grado, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-lg text-blue-600">{grado.tipo} ({grado.porcentaje})</div>
                    <p className="text-gray-700 text-sm">{grado.descripcion}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tocData.incapacidad.requisitos.map((requisito, index) => (
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
                  {tocData.recursos.asociaciones.map((asociacion, index) => (
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
                  {tocData.recursos.telefonos.map((telefono, index) => (
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

export default TrastornoObsesivoCompulsivo;
