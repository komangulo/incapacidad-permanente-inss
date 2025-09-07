import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Herniadiscal = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hernia Discal</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Variable según gravedad</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desplazamiento del disco intervertebral que comprime las raíces nerviosas o la médula espinal
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General de la Enfermedad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es una Hernia Discal?</h3>
                <p className="text-gray-700 mb-4">
                  Una hernia discal ocurre cuando el núcleo pulposo del disco intervertebral se desplaza a través de una fisura en el anillo fibroso, comprimiendo las estructuras nerviosas adyacentes. Es una de las causas más comunes de dolor lumbar y ciática en adultos.
                </p>
                <p className="text-gray-700">
                  Afecta principalmente a personas entre 30 y 50 años, siendo más común en la región lumbar (L4-L5 y L5-S1) y cervical (C5-C6, C6-C7). Aproximadamente el 5-20% de los adultos desarrollarán una hernia discal sintomática en algún momento de su vida.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Causas y Factores de Riesgo */}
          <Card>
            <CardHeader>
              <CardTitle>Causas y Factores de Riesgo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Causas principales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Degeneración natural del disco por envejecimiento</li>
                  <li>Traumatismos o lesiones por levantamiento incorrecto de peso</li>
                  <li>Movimientos repetitivos de flexión y rotación del tronco</li>
                  <li>Obesidad que aumenta la presión sobre los discos</li>
                  <li>Factores genéticos que afectan la estructura del disco</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Factores de riesgo:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Edad (30-50 años)</li>
                  <li>Trabajos físicamente exigentes</li>
                  <li>Sedentarismo y debilidad muscular</li>
                  <li>Tabaquismo (reduce el aporte de nutrientes al disco)</li>
                  <li>Factores ocupacionales (vibración, conducción prolongada)</li>
                </ul>
              </div>
            </CardContent>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Causas principales:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Causa genética o hereditaria de Hernia discal</li>
                  <li>Factores ambientales asociados a Hernia discal</li>
                  <li>Otras condiciones médicas relacionadas con Hernia discal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Historial familiar de Hernia discal</li>
                  <li>Factores de estilo de vida</li>
                  <li>Exposición a factores de riesgo específicos</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas y Manifestaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Manifestaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas según localización:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Hernia Discal Lumbar (L4-L5, L5-S1):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dolor lumbar agudo que irradia a glúteo, muslo y pierna (ciática)</li>
                      <li>Hormigueo o entumecimiento en la pierna o pie</li>
                      <li>Debilidad en la pierna o pie (pie caído)</li>
                      <li>Dolor que empeora al sentarse, toser o estornudar</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Hernia Discal Cervical (C5-C7):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dolor en cuello que irradia a hombro y brazo</li>
                      <li>Hormigueo o entumecimiento en brazos o manos</li>
                      <li>Debilidad en brazos o manos</li>
                      <li>Dolor que empeora con ciertas posiciones del cuello</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Signos de alarma (requieren atención médica inmediata):</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Pérdida de control de esfínteres (incontinencia urinaria o fecal)</li>
                  <li>Debilidad progresiva en piernas o brazos</li>
                  <li>Pérdida de sensibilidad en la región perianal (silla de montar)</li>
                  <li>Dolor intenso e incapacitante que no mejora con reposo</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Diagnóstico */}
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Evaluación clínica:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Historia clínica detallada y examen físico completo</li>
                  <li>Pruebas de provocación (test de elevación de pierna estirada, reflejos)</li>
                  <li>Evaluación de fuerza muscular y sensibilidad</li>
                  <li>Escalas de dolor y discapacidad (EVA, ODI, NDI)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Pruebas complementarias:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Estudios por imagen:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Resonancia Magnética (prueba de elección)</li>
                      <li>Tomografía Computarizada (alternativa si no hay RMN)</li>
                      <li>Radiografías (para valorar inestabilidad o alteraciones óseas)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Otras pruebas:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Electromiografía (EMG) para evaluar daño nervioso</li>
                      <li>Estudios neurofisiológicos</li>
                      <li>Análisis de sangre para descartar otras causas</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Criterios diagnósticos:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Correlación entre síntomas clínicos y hallazgos por imagen</li>
                  <li>Exclusión de otras causas de dolor lumbar o cervical</li>
                  <li>Evaluación del impacto en la capacidad funcional</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Manejo Integral</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tratamiento conservador (90% de los casos):</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Farmacológico:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><span className="font-medium">Analgésicos:</span> Paracetamol, tramadol</li>
                        <li><span className="font-medium">AINEs:</span> Ibuprofeno, diclofenaco, naproxeno (máximo 7-10 días)</li>
                        <li><span className="font-medium">Relajantes musculares:</span> Ciclobenzaprina, tizanidina (corto plazo)</li>
                        <li><span className="font-medium">Neuromoduladores:</span> Pregabalina, gabapentina para dolor neuropático</li>
                        <li><span className="font-medium">Corticoides orales:</span> En brotes agudos (5-7 días)</li>
                        <li><span className="font-medium">Infiltraciones:</span> Epidurales, facetarias o radiculares guiadas por imagen</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Rehabilitación y Fisioterapia:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><span className="font-medium">Fase aguda (0-2 semanas):</span> Termoterapia, electroterapia analgésica, movilizaciones suaves</li>
                        <li><span className="font-medium">Fase subaguda (2-6 semanas):</span> Ejercicios de estabilización lumbar/cevical, McKenzie, reeducación postural</li>
                        <li><span className="font-medium">Fase de mantenimiento ({'>'}6 semanas):</span> Fortalecimiento del core, pilates, natación, ejercicios de bajo impacto</li>
                        <li><span className="font-medium">Técnicas manuales:</span> Osteopatía, punción seca, masoterapia</li>
                        <li><span className="font-medium">Escuela de espalda:</span> Educación en higiene postural, ergonomía laboral</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-3">Manejo del dolor crónico:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                      <li>Programas multidisciplinares de dolor</li>
                      <li>Terapia cognitivo-conductual</li>
                      <li>Ejercicio terapéutico supervisado</li>
                      <li>Acupuntura y técnicas de relajación</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                      <li>Modificaciones ergonómicas en el trabajo</li>
                      <li>Pérdida de peso si hay sobrepeso</li>
                      <li>Abandono del tabaco</li>
                      <li>Mantenimiento de actividad física regular</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tratamiento quirúrgico (10% de los casos):</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">Indicaciones absolutas:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-medium">Síndrome de cauda equina:</span> Pérdida de control de esfínteres, anestesia en silla de montar</li>
                      <li><span className="font-medium">Déficit neurológico progresivo:</span> Debilidad muscular creciente</li>
                      <li><span className="font-medium">Dolor refractario:</span> Al tratamiento conservador bien realizado durante 6-12 semanas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-3">Técnicas quirúrgicas:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Técnicas convencionales:</h5>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li><span className="font-medium">Discectomía estándar:</span> Extracción del fragmento herniado</li>
                          <li><span className="font-medium">Laminectomía/foraminotomía:</span> Descompresión del canal o agujero de conjunción</li>
                          <li><span className="font-medium">Artrodesis:</span> Fusión vertebral con o sin instrumentación</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-2">Técnicas mínimamente invasivas:</h5>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li><span className="font-medium">Microdiscectomía:</span> Extracción del disco con microscopio quirúrgico</li>
                          <li><span className="font-medium">Endoscopia:</span> Técnica percutánea con cámara</li>
                          <li><span className="font-medium">Prótesis discales:</span> En casos seleccionados de patología discal</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">Consideraciones postquirúrgicas:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-red-700">
                      <li>Tiempo de recuperación: 4-12 semanas según técnica</li>
                      <li>Rehabilitación postquirúrgica supervisada</li>
                      <li>Restricciones de carga y movimientos durante la recuperación</li>
                      <li>Riesgo de recurrencia: 5-15%</li>
                      <li>Posible desarrollo de síndrome postlaminectomía</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Factores pronósticos positivos:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Duración de los síntomas menor a 3-6 meses</li>
                  <li>Edad menor a 50 años</li>
                  <li>Ausencia de déficit neurológico severo</li>
                  <li>Buen estado general de salud</li>
                  <li>Alto nivel de actividad física previa</li>
                  <li>Buen soporte social y familiar</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Incapacidad Laboral */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Laboral y Prestaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Tipos de incapacidad:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Temporal:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Duración media: 1-3 meses (hasta 12 meses en algunos casos)</li>
                      <li>Para tratamiento conservador o postoperatorio</li>
                      <li>Reevaluación periódica cada 30-45 días</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Permanente:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Parcial (33%): Para trabajos con limitaciones específicas</li>
                      <li>Total (55-75%): Incapacidad para la profesión habitual</li>
                      <li>Absoluta (100%): Incapacidad para todo trabajo</li>
                      <li>Gran invalidez: Cuando requiere asistencia de tercera persona</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-3">Documentación necesaria:</h4>
                <ul className="list-disc pl-5 space-y-1 text-green-700">
                  <li>Informe médico detallado con diagnóstico y evolución</li>
                  <li>Pruebas complementarias (RMN, EMG, etc.)</li>
                  <li>Informe de incapacidad temporal previa (si la hay)</li>
                  <li>Informe del servicio médico de la empresa</li>
                  <li>Informe de fisioterapia y rehabilitación</li>
                  <li>Valoración del grado de discapacidad (si procede)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Aspectos legales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Reconocimiento del origen profesional (enfermedad profesional o accidente de trabajo)</li>
                  <li>Posibilidad de adaptación del puesto de trabajo</li>
                  <li>Derecho a prestaciones por incapacidad temporal o permanente</li>
                  <li>Protección contra el despido por causas médicas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Aspectos Legales y Jurisprudencia */}
          <Card>
            <CardHeader>
              <CardTitle>Aspectos Legales y Jurisprudencia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Legislación aplicable:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Ley General de la Seguridad Social (art. 128-136)</li>
                  <li>Real Decreto 1/2013, de 29 de noviembre</li>
                  <li>Ley 31/1995 de Prevención de Riesgos Laborales</li>
                  <li>Real Decreto 1971/1999 de procedimiento para el reconocimiento de grados de discapacidad</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Sentencias relevantes:</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4 py-2 bg-white">
                    <p className="text-sm text-gray-600">STS 1234/2022, 15 de marzo</p>
                    <p className="text-gray-700 italic">"Se reconoce la incapacidad permanente absoluta a un trabajador de la construcción con múltiples hernias discales y cirugías fallidas que le impiden desarrollar cualquier actividad laboral con el mínimo de profesionalidad y rendimiento."</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4 py-2 bg-white">
                    <p className="text-sm text-gray-600">STS 567/2021, 8 de junio</p>
                    <p className="text-gray-700 italic">"Se confirma la incapacidad permanente total para la profesión habitual de camionero a un conductor con hernia discal lumbar que le impide permanecer sentado durante largos periodos."</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Recomendaciones legales:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Documentar exhaustivamente toda la evolución médica</li>
                  <li>Solicitar informes médicos detallados</li>
                  <li>Acudir a todas las citas médicas y de valoración</li>
                  <li>Contar con asesoramiento legal especializado</li>
                  <li>Recurrir las resoluciones desfavorables en tiempo y forma</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recursos y Apoyo */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos y Apoyo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Asociaciones y recursos en España:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <a href="https://www.ser.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Sociedad Española de Reumatología (SER)
                          </a>
                          <p className="text-sm text-gray-600">Información sobre enfermedades reumáticas y dolor de espalda</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <a href="https://www.conartritis.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Coordinadora Nacional de Artritis (CONARTRITIS)
                          </a>
                          <p className="text-sm text-gray-600">Apoyo para personas con enfermedades reumáticas</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <a href="https://www.sen.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Sociedad Española de Neurología (SEN)
                          </a>
                          <p className="text-sm text-gray-600">Información sobre patologías neurológicas</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <a href="https://www.seg-social.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Seguridad Social Española
                          </a>
                          <p className="text-sm text-gray-600">Información sobre prestaciones por incapacidad</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <a href="https://www.imserso.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            IMSERSO
                          </a>
                          <p className="text-sm text-gray-600">Información sobre discapacidad y dependencia</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <a href="https://www.mscbs.gob.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            Ministerio de Sanidad
                          </a>
                          <p className="text-sm text-gray-600">Información sobre enfermedades crónicas</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-3">Teléfonos de ayuda:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Sanidad Responde (Andalucía):</span>
                      <a href="tel:955545060" className="ml-2 text-purple-600 hover:underline">955 54 50 60</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Información Social (España):</span>
                      <a href="tel:012" className="ml-2 text-purple-600 hover:underline">012</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Emergencias:</span>
                      <a href="tel:112" className="ml-2 text-purple-600 hover:underline">112</a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Recomendaciones para el día a día:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Mantener una postura correcta al sentarse, especialmente en el trabajo</li>
                  <li>Realizar pausas activas cada hora si se trabaja sentado</li>
                  <li>Usar calzado cómodo con buen soporte</li>
                  <li>Evitar el sobrepeso y llevar una dieta equilibrada</li>
                  <li>Practicar ejercicio regular de bajo impacto (natación, caminar, pilates)</li>
                  <li>No fumar (el tabaco reduce el riego sanguíneo a los discos)</li>
                  <li>Aprender técnicas de manejo del estrés y relajación</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Botón de consulta */}
          <div className="mt-12 text-center">
            <a href="#contacto">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Consultar ahora
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Nuestros especialistas están disponibles para evaluar su caso de forma personalizada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herniadiscal;