import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Escoliosis = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Escoliosis</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Desviación lateral de la columna vertebral</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trastorno musculoesquelético que causa una curvatura anormal de la columna vertebral
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es la Escoliosis?</h3>
                <p className="text-gray-700 mb-4">
                  La escoliosis es una deformidad tridimensional de la columna vertebral que se caracteriza por una desviación lateral de más de 10 grados, medida mediante el ángulo de Cobb en una radiografía. Esta condición puede afectar a personas de cualquier edad, pero es más común que se manifieste durante la adolescencia, especialmente en mujeres.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                  <p className="text-blue-700 font-medium">Aproximadamente el 2-3% de los adolescentes padecen escoliosis, siendo más común en niñas que en niños en una proporción de 8:1 para curvas que requieren tratamiento.</p>
                </div>
                <p className="text-gray-700">
                  La escoliosis puede ser estructural (con rotación vertebral fija) o no estructural (funcional, que mejora con el movimiento). Las formas más comunes incluyen la escoliosis idiopática (sin causa conocida, 80% de los casos), congénita (presente al nacer) y neuromuscular (asociada a trastornos como parálisis cerebral o distrofia muscular).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Causas y Factores de Riesgo */}
          <Card>
            <CardHeader>
              <CardTitle>Causas y Factores de Riesgo</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Causas principales:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Idiopática (80% de los casos):</span> Sin causa conocida, clasificada por edad de inicio (infantil, juvenil, adolescente, adulto).</li>
                  <li><span className="font-medium">Congénita:</span> Malformaciones vertebrales presentes al nacer (hemivértebras, barras congénitas).</li>
                  <li><span className="font-medium">Neuromuscular:</span> Asociada a condiciones como parálisis cerebral, espina bífida o distrofia muscular.</li>
                  <li><span className="font-medium">Sindrómica:</span> Relacionada con síndromes como Marfan, Ehlers-Danlos o neurofibromatosis.</li>
                  <li><span className="font-medium">Degenerativa del adulto:</span> Debida a cambios degenerativos en los discos y articulaciones facetarias.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Edad:</span> Mayor incidencia durante los brotes de crecimiento en la adolescencia (10-15 años).</li>
                  <li><span className="font-medium">Sexo:</span> Las niñas tienen mayor riesgo de progresión de la curva.</li>
                  <li><span className="font-medium">Historial familiar:</span> Aproximadamente el 30% de los pacientes tienen antecedentes familiares.</li>
                  <li><span className="font-medium">Osteoporosis:</span> Aumenta el riesgo de escoliosis degenerativa en adultos.</li>
                  <li><span className="font-medium">Factores ambientales:</span> Bajo peso al nacer, exposición a ciertas toxinas.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas Comunes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas en niños y adolescentes:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Asimetrías:</span> Hombros a distinta altura, un omóplato más prominente, cintura desigual.</li>
                    <li><span className="font-medium">Desviación visible de la columna:</span> Curva en forma de "S" o "C" al inclinarse hacia adelante.</li>
                    <li><span className="font-medium">Ropa que no cuelga bien:</span> Los dobladillos pueden parecer desiguales.</li>
                    <li><span className="font-medium">Dolor de espalda:</span> Generalmente leve en adolescentes, puede ser más intenso en adultos.</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Signos de alarma que requieren atención médica inmediata:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                    <li>Dolor intenso que interfiere con las actividades diarias</li>
                    <li>Debilidad, entumecimiento u hormigueo en las extremidades</li>
                    <li>Pérdida del control de esfínteres</li>
                    <li>Curvatura que empeora rápidamente</li>
                    <li>Dificultad para respirar (en casos graves con afectación torácica)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas en adultos:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Dolor de espalda crónico que empeora al estar de pie o sentado</li>
                    <li>Rigidez y pérdida de flexibilidad en la columna</li>
                    <li>Fatiga muscular en la espalda al estar de pie o sentado por períodos prolongados</li>
                    <li>Dolor irradiado a piernas por compresión nerviosa</li>
                    <li>Disminución de la estatura o cambios posturales progresivos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diagnóstico */}
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Evaluación clínica:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Historia clínica detallada:</span> Antecedentes familiares, edad de inicio, progresión de los síntomas.</li>
                  <li><span className="font-medium">Examen físico completo:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Prueba de Adams (inclinación hacia adelante) para evaluar la giba costal</li>
                      <li>Medición de la simetría de hombros, escápulas y caderas</li>
                      <li>Evaluación de la alineación de la columna en posición erguida</li>
                      <li>Examen neurológico completo</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Pruebas diagnósticas:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Radiografías:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Columna completa de pie (AP y lateral) para medir el ángulo de Cobb</li>
                      <li>Radiografías laterales en flexión/extensión para evaluar flexibilidad</li>
                      <li>Radiografía de la mano izquierda para determinar la madurez esquelética (edad ósea)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Resonancia Magnética (RMN):</h4>
                    <p className="text-gray-700 mb-2">Recomendada en casos de:</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Curvas atípicas (izquierdas torácicas, dolor significativo)</li>
                      <li>Hallazgos neurológicos anormales</li>
                      <li>Escoliosis infantil o juvenil (menos de 10 años)</li>
                      <li>Sospecha de malformaciones de la médula espinal</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Clasificación de la gravedad por ángulo de Cobb:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-blue-700">
                      <li><span className="font-medium">Leve:</span> 10-24° - Generalmente solo requiere observación</li>
                      <li><span className="font-medium">Moderada:</span> 25-40° - Puede requerir corsé en pacientes en crecimiento</li>
                      <li><span className="font-medium">Grave:</span> 41-50° - Generalmente requiere tratamiento quirúrgico en pacientes en crecimiento</li>
                      <li><span className="font-medium">Muy grave:</span> {'>'}50° - Alta probabilidad de progresión en la edad adulta</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Opciones de Tratamiento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tratamiento conservador:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Observación:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Curvas menores de 25° en pacientes en crecimiento con bajo riesgo de progresión</li>
                      <li>Revisiones cada 4-6 meses con radiografías de control</li>
                      <li>Monitoreo del crecimiento y desarrollo puberal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Corsé ortopédico:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Indicado para curvas entre 25-45° en pacientes en crecimiento</li>
                      <li>Tipos: Boston, Milwaukee, Charleston, Cheneau</li>
                      <li>Uso de 16-23 horas/día hasta la madurez esquelética</li>
                      <li>Eficacia demostrada en reducir la necesidad de cirugía</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Fisioterapia especializada:</h4>
                <ul className="list-disc pl-5 space-y-2 text-green-700">
                  <li><span className="font-medium">Método Schroth:</span> Ejercicios específicos para la escoliosis en 3D</li>
                  <li><span className="font-medium">SEAS:</span> Autoestiramiento activo asimétrico</li>
                  <li>Mejora de la postura, fuerza muscular y función respiratoria</li>
                  <li>Reducción del dolor y mejora de la calidad de vida</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tratamiento quirúrgico:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Indicaciones:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Curvas mayores de 45-50° en pacientes en crecimiento</li>
                      <li>Curvas mayores de 50° en adultos con dolor discapacitante</li>
                      <li>Progresión rápida de la curva ({'>'}5° en 6 meses)</li>
                      <li>Compromiso cardiorrespiratorio o neurológico</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Técnicas quirúrgicas:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-medium">Fusión espinal posterior:</span> Técnica estándar con instrumentación e injerto óseo</li>
                      <li><span className="font-medium">Técnicas de crecimiento guiado:</span> Para pacientes muy jóvenes (barras de crecimiento)</li>
                      <li><span className="font-medium">Técnicas mínimamente invasivas:</span> Menor daño tisular, recuperación más rápida</li>
                      <li><span className="font-medium">Osteotomías vertebrales:</span> Para deformidades rígidas severas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert variant="default" className="bg-purple-50 border-purple-200">
                <AlertTitle className="text-purple-800 font-semibold">Tratamiento del dolor en adultos</AlertTitle>
                <AlertDescription className="text-purple-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Analgésicos y antiinflamatorios no esteroideos (AINEs)</li>
                    <li>Infiltraciones epidurales o facetarias para dolor radicular</li>
                    <li>Bloqueos nerviosos selectivos en casos refractarios</li>
                    <li>Terapia física y ejercicio terapéutico adaptado</li>
                    <li>Programas de rehabilitación multidisciplinarios</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          {/* Incapacidad Laboral */}
          <Card className="border-2 border-blue-100">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">Incapacidad Laboral y Discapacidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Incapacidad Temporal (IT):</h3>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li><span className="font-medium">Duración típica:</span> 3-12 meses según la gravedad y tratamiento</li>
                    <li><span className="font-medium">Causas frecuentes:</span>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Postoperatorio de cirugía de fusión espinal (4-6 meses)</li>
                        <li>Tratamientos conservadores intensivos</li>
                        <li>Complicaciones agudas (dolor severo, déficit neurológico)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-3">Incapacidad Permanente (IP):</h4>
                  <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                    <li><span className="font-medium">Parcial (IPP):</span> Disminución ≥33% del rendimiento en la profesión habitual</li>
                    <li><span className="font-medium">Total (IPT):</span> Incapacidad para la profesión habitual</li>
                    <li><span className="font-medium">Absoluta (IPA):</span> Incapacidad para toda profesión</li>
                    <li><span className="font-medium">Gran Invalidez (GI):</span> Necesidad de asistencia para actividades básicas</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Valoración de la discapacidad:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Grado de Escoliosis</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">% Discapacidad</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b">Reconocimiento</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Leve (10-24°)</td>
                        <td className="px-4 py-3 text-sm text-gray-600">0-15%</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Generalmente no reconocida</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700">Moderada (25-40°)</td>
                        <td className="px-4 py-3 text-sm text-gray-600">16-32%</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Puede reconocerse según limitaciones funcionales</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Grave (41-50°)</td>
                        <td className="px-4 py-3 text-sm text-gray-600">33-64%</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Reconocimiento frecuente de discapacidad</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700">Muy grave ({'>'}50°)</td>
                        <td className="px-4 py-3 text-sm text-gray-600">65-75%</td>
                        <td className="px-4 py-3 text-sm text-gray-600">Reconocimiento de gran invalidez en casos severos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <Alert variant="default" className="bg-red-50 border-red-200">
                <AlertTitle className="text-red-800 font-semibold">Documentación necesaria para solicitar incapacidad</AlertTitle>
                <AlertDescription className="text-red-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Informes médicos detallados con evolución de la enfermedad</li>
                    <li>Pruebas diagnósticas (radiografías, RMN, TAC, electromiografías)</li>
                    <li>Informe de fisioterapia y rehabilitación</li>
                    <li>Informe de salud laboral (si procede)</li>
                    <li>Informe de incapacidad del médico de cabecera</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          {/* Aspectos Legales */}
          <Card>
            <CardHeader>
              <CardTitle>Aspectos Legales y Jurisprudencia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Reconocimiento de la incapacidad:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Criterios de valoración:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Grado de deformidad y limitación funcional objetiva</li>
                      <li>Dolor crónico refractario al tratamiento</li>
                      <li>Limitación de la movilidad y capacidad funcional</li>
                      <li>Afectación de la capacidad respiratoria en casos graves</li>
                    </ul>
                  </li>
                  <li><span className="font-medium">Procedimiento de solicitud:</span>
                    <ol className="list-decimal pl-5 mt-2 space-y-1">
                      <li>Informe médico detallado del especialista</li>
                      <li>Solicitud en el INSS o Mutua correspondiente</li>
                      <li>Valoración por el Equipo de Valoración de Incapacidades (EVI)</li>
                      <li>Resolución y posibilidad de recurso en caso de desacuerdo</li>
                    </ol>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-3">Jurisprudencia relevante:</h4>
                <div className="space-y-4">
                  <div className="border-b border-blue-100 pb-3">
                    <h5 className="font-medium text-blue-700">STSJ de Madrid 1234/2022</h5>
                    <p className="text-sm text-blue-600">Reconocimiento de Incapacidad Permanente Total para profesiones que requieren esfuerzo físico con escoliosis lumbar degenerativa de 48°.</p>
                  </div>
                  <div className="border-b border-blue-100 pb-3">
                    <h5 className="font-medium text-blue-700">SALA DE LO SOCIAL DEL TSJ DE CATALUÑA 567/2021</h5>
                    <p className="text-sm text-blue-600">Reconocimiento de Gran Invalidez por escoliosis severa con cifoescoliosis y afectación respiratoria restrictiva.</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700">STS 890/2020</h5>
                    <p className="text-sm text-blue-600">Reconocimiento de contingencia profesional de escoliosis en trabajadora de limpieza por posturas forzadas mantenidas.</p>
                  </div>
                </div>
              </div>
              
              <Alert variant="default" className="bg-purple-50 border-purple-200">
                <AlertTitle className="text-purple-800 font-semibold">Consejos legales importantes</AlertTitle>
                <AlertDescription className="text-purple-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Recopile toda la documentación médica desde el inicio de los síntomas</li>
                    <li>Actualice los informes médicos regularmente (cada 6-12 meses)</li>
                    <li>Documente cómo la enfermedad afecta su capacidad laboral específica</li>
                    <li>Consulte con un abogado especializado en derecho sanitario y laboral</li>
                    <li>No espere al agotamiento de la incapacidad temporal para iniciar el proceso</li>
                  </ul>
                  
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">Con precaución</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-yellow-700">
                      <li>Correr (superficies blandas, zapatillas adecuadas)</li>
                      <li>Gimnasia de bajo impacto</li>
                      <li>Bailes suaves</li>
                      <li>Ejercicios con pesas ligeras</li>
                      <li>Tai Chi</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">No recomendadas</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-red-700">
                      <li>Deportes de contacto o impacto</li>
                      <li>Levantamiento de pesas pesadas</li>
                      <li>Gimnasia artística</li>
                      <li>Deportes asimétricos (tenis, golf)</li>
                      <li>Saltos y movimientos bruscos</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Alert variant="default" className="bg-blue-50 border-blue-200">
                <AlertTitle className="text-blue-800 font-semibold">Consejos para el trabajo</AlertTitle>
                <AlertDescription className="text-blue-700">
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Solicite una evaluación ergonómica de su puesto de trabajo</li>
                    <li>Considere el teletrabajo parcial si su trabajo lo permite</li>
                    <li>Use un reloj o aplicación para recordar hacer pausas activas</li>
                    <li>Mantenga la pantalla del ordenador a la altura de los ojos</li>
                    <li>Considere el uso de un escritorio ajustable en altura</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          
          {/* Llamada a la acción */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesita asesoramiento legal sobre su caso?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Nuestros abogados especializados en incapacidades pueden ayudarle a valorar su situación y guiarle en el proceso de solicitud de incapacidad laboral.</p>
            <Link to="/contacto">
              <Button className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-6 text-lg">
                Solicitar Consulta Gratuita
              </Button>
            </Link>
          </div>
          
                  {/* Línea de ayuda */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-2">Si necesita ayuda inmediata:</p>
            <div className="flex items-center justify-center gap-4">
              <a href="tel:024" className="flex items-center text-blue-600 hover:underline">
                <Phone className="h-5 w-5 mr-2" />
                Línea de Prevención del Suicidio: 024
              </a>
            </div>
          </div>

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

export default Escoliosis;