import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Activity, Pill, Stethoscope, Moon, Droplet, ActivityIcon, HeartPulse, FileText, Scale, Users, BookOpen, Thermometer, MoonStar, Droplets, Brain, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApneaSueno = () => {
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

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Moon className="h-8 w-8 text-indigo-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Apnea del Sueño
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Apnea del Sueño?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La apnea del sueño es un trastorno del sueño potencialmente grave caracterizado por pausas en la respiración durante el sueño. Afecta significativamente la calidad de vida y puede tener graves consecuencias para la salud si no se trata. Existen tres tipos principales: apnea obstructiva del sueño (la más común, causada por la relajación de los músculos de la garganta), apnea central del sueño (cuando el cerebro no envía señales adecuadas a los músculos que controlan la respiración) y síndrome de apnea del sueño compleja (combinación de ambas).
              </AlertDescription>
            </Alert>

            {/* Causas y Factores de Riesgo */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Causas y Factores de Riesgo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Causas por tipo:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Apnea obstructiva:</strong> Obstrucción de las vías respiratorias superiores</li>
                    <li><strong>Apnea central:</strong> Problemas en el sistema nervioso central</li>
                    <li><strong>Compleja:</strong> Combinación de causas obstructivas y centrales</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Factores de riesgo principales:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Obesidad:</strong> IMC {'>'} 30 aumenta significativamente el riesgo</li>
                    <li><strong>Circunferencia del cuello:</strong> {'>'}43 cm en hombres o {'>'}40 cm en mujeres</li>
                    <li><strong>Edad:</strong> Mayor prevalencia después de los 40 años</li>
                    <li><strong>Sexo masculino:</strong> 2-3 veces más común en hombres</li>
                    <li><strong>Antecedentes familiares</strong></li>
                    <li><strong>Consumo de alcohol, sedantes o tranquilizantes</strong></li>
                    <li><strong>Tabaquismo</strong></li>
                    <li><strong>Congestión nasal crónica</strong></li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-indigo-500" />
                    <CardTitle className="text-xl">Síntomas Principales</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Ronquidos fuertes</li>
                    <li>Episodios de interrupción de la respiración durante el sueño (observados por otra persona)</li>
                    <li>Jadeos al respirar durante el sueño</li>
                    <li>Despertar con la boca seca</li>
                    <li>Dolor de cabeza matutino</li>
                    <li>Dificultad para mantenerse dormido (insomnio)</li>
                    <li>Sensación de sueño excesivo durante el día (hipersomnia)</li>
                    <li>Dificultad para prestar atención mientras está despierto</li>
                    <li>Irritabilidad</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-indigo-500" />
                    <CardTitle className="text-xl">Síntomas Nocturnos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Ronquidos fuertes y crónicos</li>
                    <li>Pausas respiratorias observadas por otra persona</li>
                    <li>Jadeos o asfixia durante el sueño</li>
                    <li>Despertares con sensación de ahogo</li>
                    <li>Nicturia (orinar frecuentemente por la noche)</li>
                    <li>Bruxismo (rechinar de dientes)</li>
                    <li>Sudoración nocturna excesiva</li>
                    <li>Insomnio de mantenimiento</li>
                    <li>Reflujo gastroesofágico nocturno</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-indigo-500" />
                    <CardTitle className="text-xl">Síntomas Diurnos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Somnolencia diurna excesiva (Escala de Epworth {'>'}10)</li>
                    <li>Cefalea matutina</li>
                    <li>Dificultad de concentración y memoria</li>
                    <li>Cambios de humor e irritabilidad</li>
                    <li>Disminución de la libido</li>
                    <li>Bajo rendimiento laboral o académico</li>
                    <li>Depresión y ansiedad</li>
                    <li>Sequedad de boca al despertar</li>
                    <li>Dolor torácico nocturno</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-indigo-500" />
                    <CardTitle className="text-xl">Factores de Riesgo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Exceso de peso:</strong> La obesidad aumenta considerablemente el riesgo</li>
                    <li><strong>Circunferencia del cuello:</strong> Los cuellos más gruesos pueden tener vías respiratorias más estrechas</li>
                    <li><strong>Vías respiratorias estrechas:</strong> Amígdalas o adenoides agrandadas</li>
                    <li><strong>Ser hombre:</strong> Los hombres tienen de dos a tres veces más probabilidades</li>
                    <li><strong>Ser mayor:</strong> Es más común en adultos mayores</li>
                    <li><strong>Antecedentes familiares:</strong> Tener familiares con apnea del sueño</li>
                    <li><strong>Consumo de alcohol, sedantes o tranquilizantes</strong></li>
                    <li><strong>Tabaquismo</strong></li>
                    <li><strong>Congestión nasal</strong></li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Diagnóstico */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Diagnóstico</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Pruebas diagnósticas:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Polisomnografía nocturna:</strong> Estándar de oro para el diagnóstico</li>
                    <li><strong>Estudio del sueño en casa:</strong> Para casos seleccionados</li>
                    <li><strong>Escala de somnolencia de Epworth</strong></li>
                    <li><strong>Exploración ORL completa</strong></li>
                    <li><strong>Estudio de posición durante el sueño</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Criterios de gravedad (IAH - Índice de Apnea-Hipopnea):</h3>
                  <ul className="space-y-3">
                    <li className="p-3 bg-green-50 rounded-lg border border-green-100">
                      <span className="font-medium">Leve:</span> 5-14 eventos/hora
                    </li>
                    <li className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                      <span className="font-medium">Moderado:</span> 15-29 eventos/hora
                    </li>
                    <li className="p-3 bg-red-50 rounded-lg border border-red-100">
                      <span className="font-medium">Grave:</span> 30+ eventos/hora
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Tratamiento */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Tratamiento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Tratamiento de primera línea:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>CPAP (Presión Positiva Continua en Vía Aérea):</strong> Dispositivo que suministra aire a presión a través de una mascarilla</li>
                    <li><strong>BiPAP:</strong> Para pacientes que no toleran CPAP o con insuficiencia respiratoria</li>
                    <li><strong>Dispositivos de avance mandibular:</strong> Para casos leves-moderados o que no toleran CPAP</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Tratamiento quirúrgico:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Uvulopalatofaringoplastia (UPFP):</strong> Extracción de tejido de la parte posterior de la garganta</li>
                    <li><strong>Avanse maxilomandibular:</strong> Para anomalías esqueléticas</li>
                    <li><strong>Implantes palatinos:</strong> Para casos seleccionados</li>
                    <li><strong>Traqueotomía:</strong> Último recurso en casos graves</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-lg mb-3">Medidas generales:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Pérdida de peso:</strong> Reducción del 10% del peso puede reducir el IAH en un 26%</li>
                    <li><strong>Posición al dormir:</strong> Evitar decúbito supino</li>
                    <li><strong>Evitar alcohol y sedantes:</strong> Relajan la musculatura faríngea</li>
                    <li><strong>Tratamiento de la congestión nasal:</strong> Mejora la adherencia al CPAP</li>
                    <li><strong>Ejercicio físico regular:</strong> Mejora la calidad del sueño</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Complicaciones */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Complicaciones</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Cardiovasculares:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Hipertensión arterial (presente en el 50% de los casos)</li>
                    <li>Enfermedad coronaria (riesgo 2-3 veces mayor)</li>
                    <li>Arritmias (fibrilación auricular, bradicardia sinusal)</li>
                    <li>Insuficiencia cardíaca (presente en el 30-40% de pacientes con IC)</li>
                    <li>Hipertensión pulmonar</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Otras complicaciones:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Accidentes de tráfico (7 veces más frecuentes)</li>
                    <li>Deterioro cognitivo y demencia</li>
                    <li>Depresión y trastornos de ansiedad</li>
                    <li>Diabetes mellitus tipo 2</li>
                    <li>Complicaciones quirúrgicas (mayor riesgo anestésico)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Grados de Discapacidad */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Grados de Discapacidad</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-lg text-blue-800 mb-2">Incapacidad Temporal (IT):</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Durante el proceso diagnóstico y ajuste del tratamiento</li>
                    <li>Tras cirugía relacionada (2-4 semanas de media)</li>
                    <li>Durante agudizaciones o complicaciones</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <h3 className="font-semibold text-lg text-yellow-800 mb-2">Incapacidad Permanente Parcial (IPP):</h3>
                  <p className="text-gray-700 mb-2">Pérdida de capacidad laboral no inferior al 33% en la profesión habitual cuando:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Control parcial con CPAP pero con limitaciones funcionales</li>
                    <li>Necesidad de restricciones laborales específicas</li>
                    <li>Indemnización económica única</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <h3 className="font-semibold text-lg text-orange-800 mb-2">Incapacidad Permanente Total (IPT):</h3>
                  <p className="text-gray-700 mb-2">Incapacidad para la profesión habitual cuando:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Apnea grave no controlada a pesar de tratamiento óptimo</li>
                    <li>Profesión de alto riesgo (conductores, operadores de maquinaria, trabajos en altura)</li>
                    <li>Limitaciones funcionales que impiden el desarrollo de la actividad laboral</li>
                    <li>Pensión vitalicia del 55% de la base reguladora</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h3 className="font-semibold text-lg text-red-800 mb-2">Incapacidad Permanente Absoluta (IPA):</h3>
                  <p className="text-gray-700 mb-2">Incapacidad para toda profesión cuando:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Apnea grave con complicaciones cardiovasculares o respiratorias incapacitantes</li>
                    <li>Fracaso del tratamiento con CPAP y otras alternativas</li>
                    <li>Comorbilidades graves que agravan el pronóstico</li>
                    <li>Pensión vitalicia del 100% de la base reguladora</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Documentación Necesaria */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Documentación Necesaria</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Informe médico detallado con historia clínica completa</li>
                  <li>Resultados de polisomnografía o estudio del sueño</li>
                  <li>Informe de neumología y/o unidad del sueño</li>
                  <li>Informe de ORL si hay indicación quirúrgica</li>
                  <li>Pruebas complementarias (espirometría, gasometría, ecocardiograma si procede)</li>
                  <li>Informe psicológico si hay afectación cognitiva o del estado de ánimo</li>
                  <li>Informe de medicina del trabajo si existe</li>
                  <li>Informe de cumplimiento y respuesta al tratamiento con CPAP</li>
                </ul>
              </CardContent>
            </Card>

            {/* Sentencias de Ejemplo */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Sentencias de Ejemplo</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50">
                  <p className="text-gray-700 italic mb-2">"Se reconoce la incapacidad permanente absoluta a conductor profesional con diagnóstico de síndrome de apnea-hipopnea del sueño grave (IAH 42), con mala tolerancia al CPAP (menos de 4 horas de uso nocturno) y somnolencia diurna excesiva (Escala de Epworth 18/24), que presenta múltiples episodios de sueño incontrolado al volante, considerando que su condición le impide desarrollar cualquier actividad laboral con las mínimas garantías de seguridad para sí mismo y terceros."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Incapacidad Permanente Absoluta
                    </span>
                    <span className="text-sm text-gray-500">Sentencia del Juzgado de lo Social Nº 3 de Madrid, 145/2023</span>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50">
                  <p className="text-gray-700 italic mb-2">"Se confirma la incapacidad permanente total para la profesión de conductor de autobús a trabajador con diagnóstico de SAHS moderado-grave (IAH 28), que a pesar del tratamiento con CPAP presenta somnolencia diurna residual (Escala de Epworth 14/24) y ha sufrido dos accidentes de tráfico por somnolencia, considerando que su condición le impide seguir ejerciendo su profesión con seguridad."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                      Incapacidad Permanente Total
                    </span>
                    <span className="text-sm text-gray-500">Sentencia del TSJ de Cataluña, 234/2022</span>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <p className="text-gray-700 italic mb-2">"Se reconoce el grado de discapacidad del 45% a paciente con SAHS grave (IAH 36) con buena respuesta al CPAP pero que requiere adaptaciones en su puesto de trabajo, incluyendo la no realización de turnos nocturnos y pausas programadas para descanso, considerando las limitaciones funcionales que presenta a pesar del tratamiento."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Discapacidad del 45%
                    </span>
                    <span className="text-sm text-gray-500">Resolución del Equipo de Valoración de la Dependencia, 567/2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Asociaciones y Recursos */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-indigo-500" />
                  <CardTitle className="text-xl">Asociaciones y Recursos</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Asociaciones de pacientes:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-blue-700">
                    <li>
                      <a href="https://www.separ.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Sociedad Española de Neumología y Cirugía Torácica (SEPAR)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.aen.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Asociación Española de Sueño (ASENARCO)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.fundaciondelcorazon.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Fundación Española del Corazón
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Recursos útiles:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-blue-700">
                    <li>
                      <a href="https://www.mscbs.gob.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Ministerio de Sanidad - Guía de práctica clínica para el SAHS
                      </a>
                    </li>
                    <li>
                      <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Organización Mundial de la Salud - Trastornos del sueño
                      </a>
                    </li>
                    <li>
                      <a href="https://www.insst.es/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Instituto Nacional de Seguridad y Salud en el Trabajo
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/calculadora" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Calcular mi prestación
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores/36537" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Ver normativa</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApneaSueno;
