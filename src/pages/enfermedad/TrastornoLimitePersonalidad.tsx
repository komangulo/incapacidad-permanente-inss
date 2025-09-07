import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrastornoLimitePersonalidad = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "Trastorno Límite de la Personalidad (TLP)",
    grado: "Variable según gravedad",
    descripcion: "Trastorno mental grave caracterizado por un patrón de inestabilidad en las relaciones interpersonales, autoimagen, afectos y marcada impulsividad.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es el Trastorno Límite de la Personalidad?",
        contenido: "El Trastorno Límite de la Personalidad (TLP) es una afección mental grave que afecta la forma en que una persona piensa y siente sobre sí misma y los demás, lo que causa problemas para desenvolverse en la vida cotidiana. Incluye problemas de autoimagen, dificultad para manejar las emociones y el comportamiento, y un patrón de relaciones inestables.",
        impacto: "Afecta aproximadamente al 1-2% de la población general, siendo más común en mujeres que en hombres (3:1). Suele diagnosticarse al final de la adolescencia o inicio de la edad adulta. Hasta el 10% de las personas con TLP mueren por suicidio, y alrededor del 70% realiza al menos un intento de suicidio a lo largo de su vida. El TLP tiene una alta comorbilidad con otros trastornos como depresión, trastornos de ansiedad, trastornos alimentarios y abuso de sustancias."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores genéticos (hasta 60% de heredabilidad)",
          "Alteraciones en la estructura y función cerebral, especialmente en áreas que regulan las emociones y el control de impulsos",
          "Desequilibrio en neurotransmisores como la serotonina, dopamina y noradrenalina",
          "Experiencias traumáticas en la infancia (abuso físico/sexual, negligencia, separación de los cuidadores)"
        ],
        factoresRiesgo: [
          "Antecedentes familiares de TLP u otros trastornos mentales",
          "Abandono o miedo al abandono en la infancia o adolescencia",
          "Comunicación disfuncional en la familia durante la infancia",
          "Abuso físico, sexual o emocional en la infancia",
          "Exposición a conflictos familiares intensos o inestabilidad"
        ]
      },
      sintomas: {
        titulo: "Síntomas y Manifestaciones",
        categorias: [
          {
            nombre: "Síntomas Emocionales",
            items: [
              "Cambios drásticos en la autoimagen y la identidad",
              "Sentimientos crónicos de vacío",
              "Ira inapropiada o intensa",
              "Inestabilidad afectiva debida a una notable reactividad del estado de ánimo",
              "Sentimientos de inutilidad o culpa excesivos"
            ]
          },
          {
            nombre: "Relaciones Interpersonales",
            items: [
              "Esfuerzos frenéticos para evitar un abandono real o imaginado",
              "Patrón de relaciones inestables e intensas",
              "Ideación paranoide transitoria relacionada con el estrés",
              "Tendencia a idealizar o devaluar a los demás",
              "Dificultad para confiar en los demás"
            ]
          },
          {
            nombre: "Comportamientos Impulsivos",
            items: [
              "Gastos excesivos",
              "Conducción temeraria",
              "Abuso de sustancias",
              "Atracones de comida",
              "Conductas sexuales de riesgo",
              "Autolesiones no suicidas"
            ]
          },
          {
            nombre: "Otras Manifestaciones",
            items: [
              "Comportamiento suicida recurrente o amenazas de suicidio",
              "Inestabilidad en metas, valores y planes profesionales",
              "Dificultad para controlar la ira",
              "Síntomas disociativos en situaciones de estrés",
              "Inestabilidad laboral frecuente"
            ]
          }
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Un patrón general de inestabilidad en las relaciones interpersonales, la autoimagen y la afectividad, y una notable impulsividad",
          "Cinco (o más) de los siguientes criterios:",
          "1. Esfuerzos frenéticos para evitar un abandono real o imaginado",
          "2. Patrón de relaciones interpersonales inestables e intensas",
          "3. Alteración de la identidad: autoimagen o sentido de sí mismo acusada y persistentemente inestable",
          "4. Impulsividad en al menos dos áreas que son potencialmente dañinas",
          "5. Comportamiento, actitud o amenazas recurrentes de suicidio, o comportamiento de automutilación",
          "6. Inestabilidad afectiva debida a una notable reactividad del estado de ánimo",
          "7. Sentimientos crónicos de vacío",
          "8. Ira inapropiada e intensa o dificultad para controlar la ira",
          "9. Ideación paranoide transitoria relacionada con el estrés o síntomas disociativos graves"
        ],
        pruebas: [
          "Evaluación clínica exhaustiva por un profesional de salud mental",
          "Historia clínica y psiquiátrica detallada",
          "Entrevistas estructuradas (SCID-II, DIB-R)",
          "Cuestionarios estandarizados (PDQ-4, MCMI, PAI-BOR)",
          "Evaluación del riesgo de suicidio",
          "Exploración física y pruebas de laboratorio para descartar otras condiciones"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        farmacologico: [
          "Antidepresivos (ISRS, IRSN) para síntomas depresivos y de inestabilidad afectiva",
          "Estabilizadores del ánimo (litio, valproato, lamotrigina) para la labilidad emocional",
          "Antipsicóticos atípicos (olanzapina, quetiapina, aripiprazol) para síntomas cognitivos y de desregulación emocional",
          "Ansiolíticos (uso limitado por riesgo de dependencia)",
          "Medicación para trastornos comórbidos (TDAH, trastornos alimentarios, etc.)"
        ],
        noFarmacologico: [
          "Terapia dialéctico-conductual (TDC) - tratamiento de elección",
          "Terapia centrada en esquemas",
          "Terapia basada en la mentalización (MBT)",
          "Terapia de grupo y habilidades sociales",
          "Psicoeducación para pacientes y familiares",
          "Terapia familiar sistémica"
        ],
        manejo: [
          "Establecimiento de una rutina diaria estructurada",
          "Desarrollo de habilidades de regulación emocional",
          "Entrenamiento en habilidades interpersonales",
          "Prevención de recaídas y gestión de crisis",
          "Grupos de apoyo para pacientes y familiares",
          "Estrategias de reducción de daños en conductas de riesgo"
        ]
      },
      sentencias: [
        {
          texto: "El Trastorno Límite de la Personalidad en su grado grave, con síntomas persistentes que impiden el desarrollo normal de la actividad laboral y que no han respondido a los tratamientos aplicados, puede dar lugar a una incapacidad permanente absoluta.",
          tipo: "Incapacidad Absoluta",
          referencia: "TSJ Cataluña, Sala Social, 12/05/2023"
        },
        {
          texto: "Los pacientes con TLP que presentan inestabilidad emocional extrema, intentos de suicidio recurrentes y grave deterioro de las relaciones interpersonales que impiden el mantenimiento de un puesto de trabajo, pueden ser declarados en situación de incapacidad permanente total para su profesión habitual.",
          tipo: "Incapacidad Total",
          referencia: "TSJ Madrid, Sala Social, 18/09/2022"
        },
        {
          texto: "En casos de TLP moderado con síntomas que ocasionan una disminución significativa del rendimiento laboral pero sin impedir completamente el desarrollo de la actividad profesional, puede reconocerse una incapacidad permanente parcial con una reducción del rendimiento no inferior al 33%.",
          tipo: "Incapacidad Parcial",
          referencia: "TSJ Andalucía, Sala Social, 05/11/2022"
        }
      ]
    },
    incapacidad: {
      titulo: "Incapacidad Permanente",
      grados: [
        { tipo: "Parcial", porcentaje: "33%", descripcion: "Cuando produce una disminución del rendimiento laboral sin impedir las tareas fundamentales" },
        { tipo: "Total", porcentaje: "55-75%", descripcion: "Incapacidad para la profesión habitual, especialmente en trabajos que requieran relaciones interpersonales estables o manejo del estrés" },
        { tipo: "Absoluta", porcentaje: "100%", descripcion: "Incapacidad para todo tipo de trabajo, en casos graves con intentos de suicidio recurrentes y fracaso terapéutico" },
        { tipo: "Gran Invalidez", porcentaje: "100% + complemento", descripcion: "Cuando se requiere asistencia para actos esenciales de la vida" }
      ],
      requisitos: [
        "Informe médico detallado con diagnóstico según criterios DSM-5 o CIE-11",
        "Historia clínica con seguimiento de al menos 2 años de evolución",
        "Informe psicológico o psiquiátrico completo",
        "Documentación de tratamientos realizados y su respuesta",
        "Informe del servicio médico de la empresa o mutua (si procede)",
        "Informes de hospitalizaciones psiquiátricas (si las hay)",
        "Evaluación del impacto funcional en el trabajo"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "Asociación Nacional para el Trastorno Límite de Personalidad (AMAI-TLP)", enlace: "https://www.amatlp.com" },
        { nombre: "Confederación Salud Mental España", enlace: "https://consaludmental.org" },
        { nombre: "Fundación para la Investigación en Psicoterapia y Personalidad (FUNDIPP)", enlace: "https://www.fundipp.org" },
        { nombre: "National Education Alliance for Borderline Personality Disorder (inglés)", enlace: "https://www.borderlinepersonalitydisorder.org" }
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

export default TrastornoLimitePersonalidad;