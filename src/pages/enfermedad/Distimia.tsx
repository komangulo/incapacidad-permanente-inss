import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Distimia = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "Distimia (Trastorno Depresivo Persistente)",
    grado: "Total/Absoluta",
    descripcion: "Trastorno del estado de ánimo crónico caracterizado por un estado depresivo persistente que dura años, afectando significativamente la calidad de vida y el funcionamiento diario.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es la Distimia?",
        contenido: "La distimia, actualmente conocida como Trastorno Depresivo Persistente (TDP), es una forma crónica de depresión que se caracteriza por un estado de ánimo deprimido la mayor parte del día, durante la mayoría de los días, durante al menos dos años en adultos (un año en niños y adolescentes). A diferencia de la depresión mayor, los síntomas de la distimia son menos intensos pero más duraderos, lo que puede llevar a un deterioro significativo en la calidad de vida.",
        impacto: "Según la OMS, la depresión en todas sus formas afecta a más de 300 millones de personas en todo el mundo. La distimia representa aproximadamente el 3-6% de la población general, siendo más común en mujeres que en hombres. En España, se estima que alrededor de 2 millones de personas podrían padecer este trastorno, aunque muchos casos no están diagnosticados correctamente."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Desequilibrio en neurotransmisores cerebrales (serotonina, noradrenalina, dopamina)",
          "Alteraciones en la estructura y función cerebral",
          "Disfunción del eje hipotálamo-hipofisario-adrenal",
          "Factores genéticos y herencia familiar"
        ],
        factoresRiesgo: [
          "Antecedentes familiares de depresión o trastornos del estado de ánimo",
          "Eventos traumáticos o estresantes (pérdidas, abusos, problemas económicos)",
          "Personalidad con tendencia al pesimismo o baja autoestima",
          "Otras enfermedades crónicas",
          "Consumo de sustancias (alcohol, drogas)",
          "Aislamiento social o falta de red de apoyo"
        ]
      },
      sintomas: {
        titulo: "Síntomas y Manifestaciones",
        categorias: [
          {
            nombre: "Síntomas Emocionales",
            items: [
              "Tristeza, vacío o desesperanza persistente",
              "Irritabilidad o enojo frecuente",
              "Pérdida de interés en actividades cotidianas",
              "Baja autoestima o sentimientos de inutilidad",
              "Dificultad para tomar decisiones o concentrarse"
            ]
          },
          {
            nombre: "Síntomas Físicos",
            items: [
              "Fatiga o falta de energía",
              "Problemas de sueño (insomnio o dormir demasiado)",
              "Cambios en el apetito (aumento o disminución)",
              "Dolores de cabeza, musculares o digestivos sin causa aparente",
              "Disminución de la actividad y el rendimiento"
            ]
          },
          {
            nombre: "Impacto en la Vida Diaria",
            items: [
              "Dificultad para cumplir con responsabilidades laborales o académicas",
              "Aislamiento social",
              "Conflictos en relaciones personales",
              "Disminución de la productividad",
              "Pérdida de oportunidades personales y profesionales"
            ]
          }
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Estado de ánimo deprimido la mayor parte del día, más días que no, durante al menos 2 años",
          "Presencia de dos o más síntomas depresivos (apetito, sueño, energía, autoestima, concentración, desesperanza)",
          "Los síntomas causan malestar clínicamente significativo o deterioro en áreas importantes del funcionamiento",
          "No ha habido un período libre de síntomas de más de 2 meses seguidos durante los 2 años",
          "No cumple criterios para episodio depresivo mayor de forma continuada",
          "No hay antecedentes de episodios maníacos o hipomaníacos"
        ],
        pruebas: [
          "Entrevista clínica estructurada",
          "Escalas de evaluación (BDI, HAM-D, IDS)",
          "Análisis de sangre para descartar causas médicas",
          "Evaluación de posibles trastornos concurrentes",
          "Historial médico y familiar completo"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        farmacologico: [
          "Antidepresivos (ISRS, IRSN, antidepresivos tricíclicos)",
          "Estabilizadores del ánimo en casos resistentes",
          "Ansiolíticos para síntomas de ansiedad asociados",
          "Nuevos antidepresivos con diferentes mecanismos de acción"
        ],
        noFarmacologico: [
          "Terapia cognitivo-conductual (TCC)",
          "Terapia de activación conductual",
          "Terapia interpersonal",
          "Terapia de aceptación y compromiso (ACT)",
          "Psicoeducación para el paciente y familiares"
        ],
        manejo: [
          "Establecimiento de rutinas diarias estructuradas",
          "Ejercicio físico regular",
          "Técnicas de manejo del estrés",
          "Participación en actividades placenteras",
          "Red de apoyo social",
          "Técnicas de higiene del sueño"
        ]
      },
      sentencias: [
        {
          texto: "La distimia crónica con síntomas graves que impiden el desarrollo normal de la actividad laboral puede dar lugar a una incapacidad permanente absoluta, especialmente cuando se asocia a otros trastornos mentales y existe una larga historia de incapacidad laboral.",
          tipo: "Incapacidad Absoluta",
          referencia: "TSJ Cataluña, Sala Social, 15/07/2022"
        },
        {
          texto: "El trastorno distímico con episodios depresivos recurrentes que afectan significativamente al rendimiento laboral puede ser causa de incapacidad permanente total para la profesión habitual, especialmente en trabajos que requieran concentración, toma de decisiones o trato con el público.",
          tipo: "Incapacidad Total",
          referencia: "TSJ Madrid, Sala Social, 22/03/2023"
        },
        {
          texto: "La distimia en grado moderado que afecta a capacidades específicas del puesto de trabajo puede dar lugar a una incapacidad permanente parcial, con una reducción del rendimiento laboral no inferior al 33%.",
          tipo: "Incapacidad Parcial",
          referencia: "TSJ Andalucía, Sala Social, 10/11/2022"
        }
      ]
    },
    incapacidad: {
      titulo: "Incapacidad Permanente",
      grados: [
        { tipo: "Parcial", porcentaje: "33%", descripcion: "Cuando produce una disminución del rendimiento laboral sin impedir las tareas fundamentales" },
        { tipo: "Total", porcentaje: "55-75%", descripcion: "Incapacidad para la profesión habitual, especialmente en trabajos con alta exigencia cognitiva o emocional" },
        { tipo: "Absoluta", porcentaje: "100%", descripcion: "Incapacidad para todo tipo de trabajo, en casos graves y crónicos" },
        { tipo: "Gran Invalidez", porcentaje: "100% + complemento", descripcion: "Cuando se requiere asistencia para actos esenciales de la vida" }
      ],
      requisitos: [
        "Informe médico detallado con diagnóstico de distimia según criterios DSM-5 o CIE-11",
        "Historia clínica con seguimiento de al menos 1 año de evolución",
        "Informe psicológico/psiquiátrico completo",
        "Documentación que acredite los intentos de tratamiento y su respuesta",
        "Informe de la mutua o servicio médico de la empresa (si procede)",
        "Informe de incapacidad temporal previa relacionada (si existe)"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "Confederación Salud Mental España", enlace: "https://consaludmental.org" },
        { nombre: "Asociación Española de Psiquiatría Privada (ASEPP)", enlace: "https://www.asepp.es" },
        { nombre: "FEAFES Salud Mental España", enlace: "https://www.feafes.org" }
      ],
      telefonos: [
        { nombre: "Teléfono de la Esperanza", numero: "717 003 717" },
        { nombre: "Salud Responde (Andalucía)", numero: "955 54 50 60" },
        { nombre: "Teléfono contra el Suicidio", numero: "024" },
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Pruebas y evaluaciones:</h3>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tratamiento psicológico:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {diseaseData.contenido.tratamiento.noFarmacologico.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo y autocuidado:</h3>
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

export default Distimia;