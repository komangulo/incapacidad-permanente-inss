import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SindromeDeTourette = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "Síndrome de Tourette",
    grado: "Variable según gravedad",
    descripcion: "Trastorno neurológico caracterizado por la presencia de tics motores y vocales involuntarios, recurrentes y cambiantes en el tiempo.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es el Síndrome de Tourette?",
        contenido: "El Síndrome de Tourette es un trastorno neurológico que se manifiesta por la presencia de tics motores y vocales que persisten durante más de un año. Fue descrito por primera vez por el médico francés Georges Gilles de la Tourette en 1885. Los tics son movimientos o sonidos repentinos, rápidos, recurrentes y no rítmicos que varían en tipo, frecuencia y gravedad a lo largo del tiempo.",
        impacto: "Afecta aproximadamente al 1% de la población mundial, siendo más común en hombres que en mujeres (3-4:1). Suele aparecer en la infancia, entre los 5 y 10 años, y aunque los síntomas pueden mejorar en la adolescencia o edad adulta, en algunos casos persisten de por vida. Hasta el 90% de las personas con Tourette tienen al menos una condición psiquiátrica adicional, como TDAH, TOC o trastornos del aprendizaje."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Factores genéticos (se estima una heredabilidad del 77-91%)",
          "Alteraciones en los circuitos cerebrales que conectan los ganglios basales con la corteza cerebral",
          "Desequilibrio en neurotransmisores como la dopamina, serotonina y noradrenalina",
          "Anomalías en el desarrollo del sistema nervioso central"
        ],
        factoresRiesgo: [
          "Antecedentes familiares de Tourette o trastornos por tics",
          "Sexo masculino (3-4 veces más frecuente que en mujeres)",
          "Complicaciones durante el embarazo o parto",
          "Infecciones estreptocócicas (en algunos casos de inicio abrupto)",
          "Bajo peso al nacer o estrés prenatal"
        ]
      },
      sintomas: {
        titulo: "Síntomas y Manifestaciones",
        categorias: [
          {
            nombre: "Tics Motores Simples",
            items: [
              "Parpadeo excesivo",
              "Muecas faciales",
              "Encogimiento de hombros",
              "Movimientos bruscos de cabeza o extremidades",
              "Tensión muscular"
            ]
          },
          {
            nombre: "Tics Motores Complejos",
            items: [
              "Saltos",
              "Toques repetitivos",
              "Olerse las manos",
              "Giros",
              "Gestos obscenos (copropraxia)",
              "Imitación de movimientos (ecopraxia)"
            ]
          },
          {
            nombre: "Tics Vocales",
            items: [
              "Carraspeo",
              "Gruñidos",
              "Tos",
              "Chillidos",
              "Palabras o frases fuera de contexto",
              "Repetición de palabras o frases (ecolalia)",
              "Uso de palabras obscenas (coprolalia, presente en menos del 10% de los casos)"
            ]
          },
          {
            nombre: "Condiciones Asociadas",
            items: [
              "Trastorno por Déficit de Atención e Hiperactividad (TDAH)",
              "Trastorno Obsesivo-Compulsivo (TOC)",
              "Trastornos del aprendizaje",
              "Trastornos del sueño",
              "Ansiedad y depresión",
              "Problemas de conducta"
            ]
          }
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Presencia de múltiples tics motores y al menos un tic vocal (no necesariamente simultáneos)",
          "Los tics ocurren varias veces al día, casi todos los días o intermitentemente durante más de 1 año",
          "Inicio antes de los 18 años",
          "Los síntomas no se deben a efectos fisiológicos de una sustancia u otra condición médica",
          "Variación en la localización anatómica, número, frecuencia, complejidad y gravedad de los tics a lo largo del tiempo"
        ],
        pruebas: [
          "Evaluación clínica detallada",
          "Historia clínica y familiar completa",
          "Escalas de evaluación (YGTSS, YBOCS, ADHD-RS)",
          "Evaluación neuropsicológica",
          "Pruebas complementarias para descartar otras condiciones (EEG, RMN en casos seleccionados)"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        farmacologico: [
          "Antipsicóticos atípicos (risperidona, aripiprazol)",
          "Agonistas alfa-2 adrenérgicos (clonidina, guanfacina)",
          "Inhibidores de la recaptación de serotonina (para síntomas obsesivo-compulsivos)",
          "Estimulantes (para TDAH comórbido, con precaución)",
          "Toxina botulínica (para tics motores localizados)"
        ],
        noFarmacologico: [
          "Terapia cognitivo-conductual (TCC)",
          "Terapia de inversión del hábito (HRT)",
          "Intervención conductual integral para los tics (CBIT)",
          "Psicoeducación para el paciente y familiares",
          "Entrenamiento en relajación y control del estrés"
        ],
        manejo: [
          "Adaptaciones escolares o laborales según necesidades",
          "Estrategias para mejorar la autoestima",
          "Grupos de apoyo",
          "Ejercicio físico regular",
          "Técnicas de manejo del estrés"
        ]
      },
      sentencias: [
        {
          texto: "El Síndrome de Tourette grave que impide el desarrollo normal de la actividad laboral, especialmente cuando se asocia a otros trastornos psiquiátricos, puede dar lugar a una incapacidad permanente absoluta.",
          tipo: "Incapacidad Absoluta",
          referencia: "TSJ Cataluña, Sala Social, 12/09/2022"
        },
        {
          texto: "Los tics crónicos graves que afectan significativamente al rendimiento laboral pueden ser causa de incapacidad permanente total para la profesión habitual, particularmente en trabajos que requieran precisión, atención sostenida o interacción social.",
          tipo: "Incapacidad Total",
          referencia: "TSJ Madrid, Sala Social, 05/04/2023"
        },
        {
          texto: "El Síndrome de Tourette en grado moderado que afecta a capacidades específicas del puesto de trabajo puede dar lugar a una incapacidad permanente parcial, con una reducción del rendimiento laboral no inferior al 33%.",
          tipo: "Incapacidad Parcial",
          referencia: "TSJ Andalucía, Sala Social, 18/11/2022"
        }
      ]
    },
    incapacidad: {
      titulo: "Incapacidad Permanente",
      grados: [
        { tipo: "Parcial", porcentaje: "33%", descripcion: "Cuando produce una disminución del rendimiento laboral sin impedir las tareas fundamentales" },
        { tipo: "Total", porcentaje: "55-75%", descripcion: "Incapacidad para la profesión habitual, especialmente en trabajos que requieran precisión o interacción social" },
        { tipo: "Absoluta", porcentaje: "100%", descripcion: "Incapacidad para todo tipo de trabajo, en casos graves con comorbilidades" },
        { tipo: "Gran Invalidez", porcentaje: "100% + complemento", descripcion: "Cuando se requiere asistencia para actos esenciales de la vida" }
      ],
      requisitos: [
        "Informe médico detallado con diagnóstico de Síndrome de Tourette según criterios DSM-5 o CIE-11",
        "Historia clínica con seguimiento de al menos 1 año de evolución",
        "Informe neuropsicológico completo",
        "Evaluación del impacto funcional en el trabajo",
        "Documentación de tratamientos realizados y su respuesta",
        "Informe del servicio médico de la empresa o mutua (si procede)",
        "Informe de incapacidad temporal previa relacionada (si existe)"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "Asociación Andaluza de Pacientes con Síndrome de Tourette y Trastornos Asociados (ASTTA)", enlace: "https://www.asociaciontourette.es" },
        { nombre: "Federación Española de Asociaciones de Tourette", enlace: "https://www.feaadah.org" },
        { nombre: "Asociación Madrileña de Pacientes con Tics y Síndrome de Tourette", enlace: "https://www.amta-tourette.org" },
        { nombre: "Tourette Association of America (inglés)", enlace: "https://tourette.org" }
      ],
      telefonos: [
        { nombre: "ASTTA (Andalucía)", numero: "954 23 77 90" },
        { nombre: "FEAFES Salud Mental España", numero: "915 07 82 17" },
        { nombre: "Teléfono de la Esperanza", numero: "717 003 717" },
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

export default SindromeDeTourette;