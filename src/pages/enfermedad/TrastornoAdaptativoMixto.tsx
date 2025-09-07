import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrastornoAdaptativoMixto = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "Trastorno Adaptativo Mixto",
    grado: "Temporal/Variable",
    descripcion: "Reacción emocional o conductual desadaptativa a un factor estresante identificable que causa malestar significativo y deterioro en el funcionamiento social, laboral o académico.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es el Trastorno Adaptativo Mixto?",
        contenido: "El Trastorno Adaptativo Mixto es una condición de salud mental que se caracteriza por una respuesta emocional o conductual desproporcionada a uno o más factores estresantes identificables. A diferencia de otros trastornos mentales, los síntomas aparecen dentro de los tres meses posteriores al inicio del factor estresante y no persisten más de seis meses después de que el factor estresante o sus consecuencias han cesado.",
        impacto: "Afecta aproximadamente al 5-20% de la población general en algún momento de sus vidas. Es uno de los diagnósticos más comunes en la práctica clínica y en las consultas de atención primaria. Aunque suele ser de corta duración, puede tener un impacto significativo en la calidad de vida, las relaciones interpersonales y el rendimiento laboral o académico."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores estresantes identificables (laborales, familiares, económicos, de salud, etc.)",
          "Eventos vitales significativos (pérdidas, cambios importantes, conflictos)",
          "Dificultades de adaptación a cambios en el entorno",
          "Problemas interpersonales crónicos"
        ],
        factoresRiesgo: [
          "Baja capacidad de afrontamiento (coping) al estrés",
          "Falta de apoyo social o familiar",
          "Antecedentes de trastornos mentales previos",
          "Personalidad con rasgos de inestabilidad emocional",
          "Experiencias traumáticas previas no resueltas",
          "Consumo de sustancias"
        ]
      },
      sintomas: {
        titulo: "Síntomas y Manifestaciones",
        categorias: [
          {
            nombre: "Síntomas Emocionales",
            items: [
              "Estado de ánimo deprimido o tristeza persistente",
              "Preocupación excesiva o ansiedad",
              "Sensación de desesperanza",
              "Llanto frecuente",
              "Irritabilidad o sentimientos de ira"
            ]
          },
          {
            nombre: "Síntomas Conductuales",
            items: [
              "Dificultad para concentrarse o tomar decisiones",
              "Problemas para dormir (insomnio o hipersomnia)",
              "Cambios en el apetito (aumento o disminución)",
              "Aislamiento social",
              "Disminución del rendimiento laboral o académico"
            ]
          },
          {
            nombre: "Síntomas Físicos",
            items: [
              "Fatiga o falta de energía",
              "Dolores de cabeza o musculares sin causa médica aparente",
              "Problemas digestivos",
              "Palpitaciones o molestias en el pecho",
              "Tensión muscular"
            ]
          },
          {
            nombre: "Manifestaciones Específicas",
            items: [
              "Dificultad para adaptarse a los cambios",
              "Sentimientos de incapacidad para afrontar situaciones cotidianas",
              "Preocupación excesiva por el factor estresante",
              "Deterioro en las relaciones interpersonales",
              "Disminución del rendimiento laboral o académico"
            ]
          }
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Aparición de síntomas emocionales o conductuales en respuesta a un factor estresante identificable dentro de los 3 meses siguientes al inicio del mismo",
          "Estos síntomas o comportamientos son clínicamente significativos, como lo demuestra una o ambas de las siguientes circunstancias:",
          "1. Malestar intenso desproporcionado a la gravedad o intensidad del factor estresante",
          "2. Deterioro significativo en el funcionamiento social, laboral o en otras áreas importantes",
          "La alteración relacionada con el estrés no cumple los criterios para otro trastorno mental específico",
          "Los síntomas no representan un duelo normal",
          "Los síntomas no persisten más de seis meses después de que el factor estresante o sus consecuencias han cesado"
        ],
        subtipos: [
          "Con estado de ánimo depresivo",
          "Con ansiedad",
          "Con ansiedad mixta y estado de ánimo depresivo",
          "Con alteración de la conducta",
          "Con alteración mixta de las emociones y la conducta"
        ],
        pruebas: [
          "Entrevista clínica detallada",
          "Historia clínica completa",
          "Evaluación del factor estresante identificado",
          "Escalas de evaluación de ansiedad y depresión (HADS, BDI, BAI)",
          "Cuestionarios de evaluación del estrés percibido",
          "Exploración física para descartar causas médicas"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        farmacologico: [
          "Antidepresivos (ISRS o IRSN) en casos moderados-graves",
          "Ansiolíticos (benzodiacepinas) para uso limitado en crisis agudas de ansiedad",
          "Hipnóticos para el insomnio agudo (uso limitado en el tiempo)",
          "Fitoterapia (valeriana, pasiflora, melisa) para síntomas leves"
        ],
        noFarmacologico: [
          "Psicoterapia cognitivo-conductual (TCC)",
          "Terapia de resolución de problemas",
          "Técnicas de manejo del estrés y relajación",
          "Terapia de aceptación y compromiso (ACT)",
          "Psicoeducación sobre el trastorno",
          "Entrenamiento en habilidades sociales y asertividad"
        ],
        manejo: [
          "Identificación y modificación de pensamientos desadaptativos",
          "Desarrollo de estrategias de afrontamiento saludables",
          "Establecimiento de rutinas y hábitos saludables",
          "Fomento de la actividad física regular",
          "Técnicas de manejo del tiempo y organización",
          "Fortalecimiento de la red de apoyo social"
        ]
      },
      pronostico: {
        titulo: "Pronóstico y Evolución",
        informacion: [
          "El pronóstico es generalmente bueno con el tratamiento adecuado",
          "La mayoría de los pacientes mejoran significativamente en 3-6 meses",
          "Factores de buen pronóstico: inicio reciente, buen funcionamiento premórbido, red de apoyo adecuada",
          "Factores de mal pronóstico: estresores crónicos, trastornos de personalidad subyacentes, abuso de sustancias",
          "En algunos casos puede evolucionar a otros trastornos mentales si no se trata adecuadamente"
        ]
      },
      sentencias: [
        {
          texto: "El trastorno adaptativo mixto con ansiedad y estado de ánimo depresivo, cuando cursa con una sintomatología de intensidad moderada-grave que impide el desarrollo de la actividad laboral, puede dar lugar a una incapacidad temporal, cuya duración dependerá de la evolución clínica y la respuesta al tratamiento.",
          tipo: "Incapacidad Temporal",
          referencia: "TSJ Cataluña, Sala Social, 15/03/2023"
        },
        {
          texto: "En casos excepcionales, cuando el trastorno adaptativo persiste más allá de los 12 meses y se demuestra la cronicidad de la sintomatología con grave afectación de la capacidad laboral, podría valorarse una incapacidad permanente, siempre que se descarte la existencia de otros trastornos mentales subyacentes.",
          tipo: "Incapacidad Permanente",
          referencia: "TSJ Madrid, Sala Social, 22/07/2022"
        },
        {
          texto: "El trastorno adaptativo con alteración de la conducta que cursa con absentismo laboral reiterado y dificultades para el cumplimiento de las obligaciones laborales puede ser considerado accidente laboral cuando exista un nexo causal directo con las condiciones del trabajo.",
          tipo: "Accidente Laboral",
          referencia: "TSJ Andalucía, Sala Social, 10/11/2022"
        }
      ]
    },
    incapacidad: {
      titulo: "Incapacidad Laboral",
      tipos: [
        { 
          tipo: "Incapacidad Temporal", 
          duracion: "Hasta 12 meses (prorrogable a 18 en casos excepcionales)",
          descripcion: "Durante la fase aguda del trastorno, cuando los síntomas impiden temporalmente el desarrollo de la actividad laboral."
        },
        { 
          tipo: "Incapacidad Permanente", 
          duracion: "Excepcional, en casos crónicos con mala evolución", 
          descripcion: "Solo en casos muy graves y persistentes, con mala respuesta al tratamiento y que cumplan los requisitos legales."
        },
        { 
          tipo: "Adaptación del puesto de trabajo", 
          duracion: "Variable según necesidades", 
          descripcion: "Modificaciones en el entorno laboral para facilitar la reincorporación y adaptación del trabajador."
        }
      ],
      requisitos: [
        "Informe médico detallado con diagnóstico según criterios DSM-5 o CIE-11",
        "Historia clínica completa",
        "Informe psicológico o psiquiátrico que evalúe el impacto funcional",
        "Documentación de tratamientos realizados y su respuesta",
        "Informe del servicio médico de la empresa o mutua",
        "Evaluación del factor estresante laboral (si aplica)",
        "Pronóstico de evolución"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "Confederación Salud Mental España", enlace: "https://consaludmental.org" },
        { nombre: "Sociedad Española de Psiquiatría (SEP)", enlace: "https://www.sepsiq.org" },
        { nombre: "Asociación Española de Psiquiatría Privada (ASEPP)", enlace: "https://www.asepp.es" },
        { nombre: "Instituto de Salud Mental de la Mujer", enlace: "https://ismujer.es" }
      ],
      telefonos: [
        { nombre: "Teléfono de la Esperanza", numero: "717 003 717" },
        { nombre: "Teléfono contra el Suicidio (ANAR)", numero: "900 20 20 10" },
        { nombre: "Servicio de Información Telefónica de la Cruz Roja", numero: "900 22 22 99" },
        { nombre: "Emergencias", numero: "112" }
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
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Descripción General del Trastorno</h2>
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Síntomas y Manifestaciones</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {diseaseData.contenido.sintomas.categorias.map((categoria, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <h3 className="text-lg font-semibold mb-3 text-blue-700">{categoria.nombre}</h3>
                  <ul className="space-y-2">
                    {categoria.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Diagnóstico */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Diagnóstico</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Criterios diagnósticos (DSM-5):</h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.diagnostico.criterios.map((criterio, index) => (
                    <li key={index} className="pl-2">{criterio}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Subtipos:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {diseaseData.contenido.diagnostico.subtipos.map((subtipo, index) => (
                    <div key={index} className="bg-blue-50 text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                      {subtipo}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación y pruebas:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.diagnostico.pruebas.map((prueba, index) => (
                    <li key={index}>{prueba}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Tratamiento */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Tratamiento y Manejo</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tratamiento farmacológico:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.tratamiento.farmacologico.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tratamiento no farmacológico:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.tratamiento.noFarmacologico.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo y estrategias:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.tratamiento.manejo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Pronóstico */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Pronóstico y Evolución</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {diseaseData.contenido.pronostico.informacion.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Sentencias */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Aspectos Legales</h2>
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

          {/* Incapacidad Laboral */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Incapacidad Laboral</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Tipos de incapacidad:</h3>
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                {diseaseData.incapacidad.tipos.map((tipo, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-lg text-blue-600">{tipo.tipo}</div>
                    <div className="text-sm text-gray-500 mb-2">Duración: {tipo.duracion}</div>
                    <p className="text-gray-700 text-sm">{tipo.descripcion}</p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Documentación necesaria para la valoración:</h3>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Asociaciones y recursos:</h3>
                <ul className="space-y-2">
                  {diseaseData.recursos.asociaciones.map((asociacion, index) => (
                    <li key={index}>
                      <a 
                        href={asociacion.enlace} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <span className="mr-2">•</span> {asociacion.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Teléfonos de ayuda:</h3>
                <ul className="space-y-3">
                  {diseaseData.recursos.telefonos.map((telefono, index) => (
                    <li key={index} className="flex items-center">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mr-3">
                        {index + 1}
                      </span>
                      <div>
                        <div className="font-medium">{telefono.nombre}</div>
                        <a href={`tel:${telefono.numero.replace(/\s/g, '')}`} className="text-blue-600 hover:underline">
                          {telefono.numero}
                        </a>
                      </div>
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

export default TrastornoAdaptativoMixto;