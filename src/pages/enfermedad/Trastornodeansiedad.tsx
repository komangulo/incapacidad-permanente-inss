import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrastornoDeAnsiedad = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "Trastorno de Ansiedad",
    grado: "Variable según gravedad",
    descripcion: "Condición de salud mental caracterizada por una preocupación excesiva, miedo intenso o temor que interfiere significativamente con la vida diaria.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es el Trastorno de Ansiedad?",
        contenido: "Los trastornos de ansiedad son un grupo de afecciones mentales que se caracterizan por una preocupación excesiva, miedo o temor que afecta significativamente el funcionamiento diario. A diferencia de la ansiedad normal, que es una respuesta temporal al estrés, los trastornos de ansiedad son persistentes, pueden empeorar con el tiempo y no desaparecen por sí solos sin tratamiento adecuado.",
        impacto: "Afecta aproximadamente al 7-10% de la población mundial, siendo más común en mujeres que en hombres. Suele manifestarse en la adolescencia o edad adulta temprana, aunque puede aparecer a cualquier edad. Hasta el 30% de los adultos experimentarán algún trastorno de ansiedad a lo largo de su vida, siendo la condición de salud mental más común en la mayoría de los países."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores genéticos (mayor riesgo si hay antecedentes familiares)",
          "Desequilibrio en los neurotransmisores cerebrales (serotonina, noradrenalina, GABA)",
          "Estructura y función alteradas en áreas cerebrales que regulan el miedo y las emociones",
          "Experiencias traumáticas o estresantes en la infancia o adultez"
        ],
        factoresRiesgo: [
          "Antecedentes personales o familiares de trastornos de ansiedad o depresión",
          "Exposición a eventos traumáticos o estresantes",
          "Enfermedades crónicas o problemas de salud graves",
          "Uso o abstinencia de sustancias (alcohol, drogas, medicamentos)",
          "Rasgos de personalidad como la timidez o la inhibición conductual"
        ]
      },
      sintomas: {
        titulo: "Síntomas y Manifestaciones",
        categorias: [
          {
            nombre: "Síntomas Emocionales",
            items: [
              "Preocupación excesiva e incontrolable",
              "Sensación de amenaza o peligro inminente",
              "Dificultad para concentrarse o pensar en otra cosa",
              "Irritabilidad o inquietud",
              "Sensación de vacío o despersonalización"
            ]
          },
          {
            nombre: "Síntomas Físicos",
            items: [
              "Taquicardia o palpitaciones",
              "Sudoración excesiva",
              "Temblores o sacudidas",
              "Dificultad para respirar o sensación de ahogo",
              "Dolor o malestar en el pecho",
              "Náuseas o malestar abdominal",
              "Mareos o sensación de desmayo"
            ]
          },
          {
            nombre: "Tipos de Trastornos de Ansiedad",
            items: [
              "Trastorno de ansiedad generalizada (TAG)",
              "Trastorno de pánico (con o sin agorafobia)",
              "Fobias específicas",
              "Trastorno de ansiedad social (fobia social)",
              "Trastorno de ansiedad por separación",
              "Mutismo selectivo",
              "Trastorno de ansiedad inducido por sustancias"
            ]
          },
          {
            nombre: "Impacto en la Vida Diaria",
            items: [
              "Dificultad para cumplir con responsabilidades laborales o académicas",
              "Problemas en las relaciones interpersonales",
              "Aislamiento social",
              "Dificultad para tomar decisiones",
              "Problemas de sueño (insomnio o sueño no reparador)",
              "Fatiga o agotamiento constante"
            ]
          }
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Preocupación excesiva (anticipación aprensiva) que ocurre más días de los que no durante al menos 6 meses",
          "Dificultad para controlar la preocupación",
          "La ansiedad y preocupación se asocian a tres o más síntomas (inquietud, fatiga, dificultad para concentrarse, irritabilidad, tensión muscular, alteraciones del sueño)",
          "La ansiedad, preocupación o síntomas físicos causan malestar clínicamente significativo o deterioro en áreas importantes del funcionamiento",
          "La alteración no se puede atribuir a los efectos fisiológicos de una sustancia u otra afección médica"
        ],
        pruebas: [
          "Evaluación clínica detallada",
          "Historia clínica y psiquiátrica completa",
          "Escalas de evaluación estandarizadas (GAD-7, HAM-A, STAI)",
          "Exploración física y pruebas de laboratorio para descartar causas médicas",
          "Evaluación de comorbilidades psiquiátricas"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        farmacologico: [
          "Inhibidores selectivos de la recaptación de serotonina (ISRS): sertralina, escitalopram, paroxetina",
          "Inhibidores de la recaptación de serotonina y noradrenalina (IRSN): venlafaxina, duloxetina",
          "Benzodiacepinas (uso limitado por riesgo de dependencia): alprazolam, lorazepam",
          "Antidepresivos tricíclicos: imipramina, clomipramina",
          "Agentes ansiolíticos no benzodiacepínicos: buspirona, pregabalina"
        ],
        noFarmacologico: [
          "Terapia cognitivo-conductual (TCC)",
          "Terapia de aceptación y compromiso (ACT)",
          "Técnicas de relajación y respiración",
          "Terapia de exposición (para fobias específicas)",
          "Mindfulness y meditación",
          "Psicoeducación sobre el trastorno"
        ],
        manejo: [
          "Ejercicio físico regular",
          "Higiene del sueño adecuada",
          "Reducción del consumo de cafeína y otras sustancias estimulantes",
          "Técnicas de manejo del estrés",
          "Grupos de apoyo",
          "Establecimiento de rutinas estructuradas"
        ]
      },
      sentencias: [
        {
          texto: "El trastorno de ansiedad generalizada de larga evolución, con síntomas graves que impiden el desarrollo normal de la actividad laboral, puede dar lugar a una incapacidad permanente absoluta, especialmente cuando existen fracasos terapéuticos documentados y comorbilidades asociadas.",
          tipo: "Incapacidad Absoluta",
          referencia: "TSJ Cataluña, Sala Social, 15/03/2023"
        },
        {
          texto: "Los trastornos de ansiedad crónicos que afectan significativamente al rendimiento laboral, con crisis de angustia recurrentes y limitación funcional documentada, pueden ser causa de incapacidad permanente total para la profesión habitual.",
          tipo: "Incapacidad Total",
          referencia: "TSJ Madrid, Sala Social, 22/07/2022"
        },
        {
          texto: "Los trastornos de ansiedad moderados que ocasionan una disminución del rendimiento laboral, con necesidad de adaptaciones en el puesto de trabajo, pueden dar lugar a una incapacidad permanente parcial con una reducción del rendimiento no inferior al 33%.",
          tipo: "Incapacidad Parcial",
          referencia: "TSJ Andalucía, Sala Social, 10/11/2022"
        }
      ]
    },
    incapacidad: {
      titulo: "Incapacidad Permanente",
      grados: [
        { tipo: "Parcial", porcentaje: "33%", descripcion: "Cuando produce una disminución del rendimiento laboral sin impedir las tareas fundamentales" },
        { tipo: "Total", porcentaje: "55-75%", descripcion: "Incapacidad para la profesión habitual, especialmente en trabajos que requieran concentración o manejo del estrés" },
        { tipo: "Absoluta", porcentaje: "100%", descripcion: "Incapacidad para todo tipo de trabajo, en casos graves con comorbilidades y fracaso terapéutico" },
        { tipo: "Gran Invalidez", porcentaje: "100% + complemento", descripcion: "Cuando se requiere asistencia para actos esenciales de la vida" }
      ],
      requisitos: [
        "Informe médico detallado con diagnóstico según criterios DSM-5 o CIE-11",
        "Historia clínica con seguimiento de al menos 1 año de evolución",
        "Informe psicológico o psiquiátrico completo",
        "Documentación de tratamientos realizados y su respuesta",
        "Informe del servicio médico de la empresa o mutua (si procede)",
        "Informe de incapacidad temporal previa relacionada (si existe)",
        "Evaluación del impacto funcional en el trabajo"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "Confederación Salud Mental España", enlace: "https://consaludmental.org" },
        { nombre: "Fundación ANAED (Ayuda, Niños y Adolescentes con Enfermedades Mentales)", enlace: "https://www.anaed.es" },
        { nombre: "Asociación Española de Ansiedad y Estrés (SEAS)", enlace: "https://www.ucm.es/seas" },
        { nombre: "ADAA (Anxiety and Depression Association of America)", enlace: "https://adaa.org" }
      ],
      telefonos: [
        { nombre: "Teléfono de la Esperanza", numero: "717 003 717" },
        { nombre: "Fundación ANAR (Ayuda a Niños y Adolescentes en Riesgo)", numero: "900 20 20 10" },
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
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Criterios diagnósticos (DSM-5):</h3>
                <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.diagnostico.criterios.map((criterio, index) => (
                    <li key={index} className="pl-2">{criterio}</li>
                  ))}
                </ul>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo y apoyo:</h3>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {diseaseData.incapacidad.grados.map((grado, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-lg text-blue-600">{grado.tipo} ({grado.porcentaje})</div>
                    <p className="text-gray-700 text-sm mt-1">{grado.descripcion}</p>
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

export default TrastornoDeAnsiedad;