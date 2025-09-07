import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrastornoAnsiedadGeneralizada = () => {
  // Datos del Trastorno de Ansiedad Generalizada (TAG)
  const tagData = {
    titulo: "Trastorno de Ansiedad Generalizada (TAG)",
    grado: "Total/Variable",
    descripcion: "Trastorno caracterizado por una preocupación excesiva y persistente sobre diversos aspectos de la vida diaria.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es el Trastorno de Ansiedad Generalizada?",
        contenido: "El TAG es un trastorno de ansiedad crónico que se caracteriza por una preocupación excesiva, desproporcionada y difícil de controlar sobre múltiples eventos o actividades de la vida diaria.",
        impacto: "Afecta aproximadamente al 3-5% de la población adulta, siendo más común en mujeres. Puede aparecer en cualquier momento de la vida, pero su inicio más frecuente es entre la adolescencia y la mediana edad."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores genéticos (mayor prevalencia en familiares de primer grado)",
          "Desequilibrios en neurotransmisores como la serotonina y la noradrenalina",
          "Factores ambientales como estrés crónico o eventos traumáticos",
          "Rasgos de personalidad como el perfeccionismo o la intolerancia a la incertidumbre"
        ],
        factoresRiesgo: [
          "Historia familiar de trastornos de ansiedad",
          "Exposición a situaciones estresantes prolongadas",
          "Enfermedades médicas crónicas",
          "Consumo de sustancias (cafeína, drogas, alcohol)",
          "Sexo femenino"
        ]
      },
      sintomas: {
        titulo: "Síntomas Comunes",
        emocionales: [
          "Preocupación excesiva e incontrolable",
          "Sensación de nerviosismo o agitación",
          "Dificultad para concentrarse",
          "Irritabilidad"
        ],
        fisicos: [
          "Fatiga o cansancio excesivo",
          "Tensión muscular",
          "Problemas de sueño (dificultad para conciliar o mantener el sueño)",
          "Síntomas gastrointestinales",
          "Sudoración excesiva",
          "Palpitaciones o taquicardia"
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Preocupación excesiva la mayoría de los días durante al menos 6 meses",
          "Dificultad para controlar la preocupación",
          "Presencia de tres o más síntomas de ansiedad",
          "Malestar clínicamente significativo",
          "No atribuible a efectos de sustancias u otra condición médica"
        ],
        evaluacion: [
          "Entrevista clínica detallada",
          "Escalas de ansiedad (GAD-7, STAI, HAM-A)",
          "Descartar otras condiciones médicas",
          "Evaluación del impacto en la vida diaria"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        opciones: [
          "Terapia cognitivo-conductual (TCC)",
          "Fármacos ansiolíticos (ISRS, IRSN, benzodiacepinas a corto plazo)",
          "Técnicas de relajación y mindfulness",
          "Terapia de aceptación y compromiso (ACT)"
        ],
        manejo: [
          "Establecer rutinas de sueño regulares",
          "Ejercicio físico regular",
          "Reducción de cafeína y otras sustancias estimulantes",
          "Técnicas de manejo del estrés",
          "Apoyo social y familiar"
        ]
      },
      sentencias: [
        {
          texto: "El TAG grave con crisis de angustia recurrentes y limitación severa para el desarrollo de la actividad laboral justifica el reconocimiento de incapacidad permanente absoluta.",
          tipo: "Incapacidad Absoluta",
          referencia: "STSJ Andalucía, Sala Social, 22/05/2023"
        },
        {
          texto: "El trastorno de ansiedad generalizada con síntomas moderados que limitan significativamente el rendimiento laboral pero permiten tareas de menor exigencia justifica una incapacidad permanente total para la profesión habitual.",
          tipo: "Incapacidad Total",
          referencia: "STSJ Madrid, Sala Social, 14/02/2023"
        },
        {
          texto: "El TAG con síntomas leves que no impiden el desarrollo de la actividad laboral, pero requieren adaptaciones en el puesto de trabajo, puede justificar una incapacidad permanente parcial.",
          tipo: "Incapacidad Parcial",
          referencia: "TSJ Cataluña, Sala Social, 08/11/2022"
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
        "Historia clínica detallada con seguimiento prolongado",
        "Fracaso de los tratamientos convencionales",
        "Informes psicológicos/psiquiátricos detallados",
        "Evaluación del impacto en la capacidad laboral"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "AMADAG (Asociación Madrileña de Agorafobia)", enlace: "https://www.amadag.com" },
        { nombre: "FEAFES Salud Mental España", enlace: "https://consaludmental.org" },
        { nombre: "Asociación Española de Ansiedad y Estrés", enlace: "https://www.ansiedadyestres.org" }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{tagData.titulo}</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad {tagData.grado}</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {tagData.descripcion}
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Descripción General */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Descripción General de la Enfermedad</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{tagData.contenido.descripcion.titulo}</h3>
                <p className="text-gray-700 mb-3">{tagData.contenido.descripcion.contenido}</p>
                <p className="text-gray-700">{tagData.contenido.descripcion.impacto}</p>
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
                  {tagData.contenido.causas.causas.map((causa, index) => (
                    <li key={index}>{causa}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tagData.contenido.causas.factoresRiesgo.map((factor, index) => (
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
                  {tagData.contenido.sintomas.emocionales.map((sintoma, index) => (
                    <li key={index}>{sintoma}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Síntomas físicos:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tagData.contenido.sintomas.fisicos.map((sintoma, index) => (
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
                  {tagData.contenido.diagnostico.criterios.map((criterio, index) => (
                    <li key={index}>{criterio}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tagData.contenido.diagnostico.evaluacion.map((item, index) => (
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
                  {tagData.contenido.tratamiento.opciones.map((opcion, index) => (
                    <li key={index}>{opcion}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tagData.contenido.tratamiento.manejo.map((item, index) => (
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
              {tagData.contenido.sentencias.map((sentencia, index) => (
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
                {tagData.incapacidad.grados.map((grado, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-lg text-blue-600">{grado.tipo} ({grado.porcentaje})</div>
                    <p className="text-gray-700 text-sm">{grado.descripcion}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {tagData.incapacidad.requisitos.map((requisito, index) => (
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
                  {tagData.recursos.asociaciones.map((asociacion, index) => (
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
                  {tagData.recursos.telefonos.map((telefono, index) => (
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

export default TrastornoAnsiedadGeneralizada;
