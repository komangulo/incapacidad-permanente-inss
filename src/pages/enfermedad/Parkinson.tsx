import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Parkinson = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Enfermedad de Parkinson</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Trastorno neurodegenerativo crónico</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Afecta al sistema nervioso y a las partes del cuerpo controladas por los nervios
          </p>
        </div>

        {/* Alerta importante */}
        <Alert variant="default" className="mb-8 bg-blue-50 border-blue-200">
          <AlertTriangle className="h-5 w-5 text-blue-600" />
          <AlertDescription className="ml-2 text-blue-800">
            <span className="font-semibold">Importante:</span> El diagnóstico temprano y el tratamiento adecuado pueden mejorar significativamente la calidad de vida de las personas con Parkinson.
          </AlertDescription>
        </Alert>

        {/* Contenido principal */}
        <div className="space-y-12">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General de la Enfermedad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es el Parkinson?</h3>
                <p className="text-gray-700">
                  La enfermedad de Parkinson es un trastorno neurodegenerativo que afecta principalmente a las neuronas productoras de dopamina en un área específica del cerebro llamada sustancia negra. Es la segunda enfermedad neurodegenerativa más común después del Alzheimer.
                </p>
                <p className="text-gray-700 mt-2">
                  Suele aparecer en personas mayores de 60 años, aunque existe una forma de inicio temprano que puede manifestarse antes de los 50 años. Afecta aproximadamente al 1-2% de la población mayor de 65 años.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Manifestaciones Clínicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas motores principales:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Temblor en reposo:</span> Generalmente comienza en una mano o dedos</li>
                  <li><span className="font-medium">Bradicinesia:</span> Lentitud en los movimientos voluntarios</li>
                  <li><span className="font-medium">Rigidez muscular:</span> Resistencia al movimiento pasivo de las extremidades</li>
                  <li><span className="font-medium">Inestabilidad postural:</span> Dificultad para mantener el equilibrio</li>
                  <li><span className="font-medium">Alteración de la marcha:</span> Pasos cortos y arrastrados</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Síntomas no motores:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Trastornos del sueño (insomnio, trastorno de conducta del sueño REM)</li>
                  <li>Depresión y ansiedad</li>
                  <li>Trastornos cognitivos y demencia</li>
                  <li>Trastornos del sistema nervioso autónomo (estreñimiento, hipotensión ortostática)</li>
                  <li>Trastornos del olfato</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Manejo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento farmacológico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Levodopa:</span> Efectivo para los síntomas motores</li>
                    <li><span className="font-medium">Agonistas dopaminérgicos:</span> Pramipexol, ropinirol, rotigotina</li>
                    <li><span className="font-medium">Inhibidores de la MAO-B:</span> Selegilina, rasagilina</li>
                    <li><span className="font-medium">Anticolinérgicos:</span> Para el temblor</li>
                    <li><span className="font-medium">Amantadina:</span> Útil para las discinesias</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento no farmacológico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Fisioterapia:</span> Ejercicios de equilibrio y marcha</li>
                    <li><span className="font-medium">Logopedia:</span> Para los trastornos del habla y deglución</li>
                    <li><span className="font-medium">Terapia ocupacional:</span> Adaptación del entorno</li>
                    <li><span className="font-medium">Estimulación cerebral profunda:</span> En casos seleccionados</li>
                    <li><span className="font-medium">Apoyo psicológico:</span> Para el paciente y cuidadores</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incapacidad Laboral */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Laboral y Prestaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Temporal (IT):</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Durante fases de ajuste del tratamiento</li>
                    <li>En caso de complicaciones agudas</li>
                    <li>Procesos quirúrgicos (estimulación cerebral profunda)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (35-55%):</span> En fases iniciales con limitación moderada</li>
                    <li><span className="font-medium">Total (55-75%):</span> Cuando la enfermedad limita significativamente la capacidad laboral</li>
                    <li><span className="font-medium">Absoluta (75-100%):</span> En fases avanzadas con gran dependencia</li>
                    <li><span className="font-medium">Gran invalidez:</span> Cuando se precisa asistencia de tercera persona</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Adaptación del puesto de trabajo a las limitaciones</li>
                  <li>Horarios flexibles según la fluctuación de síntomas</li>
                  <li>Evitar trabajos que requieran precisión motora fina</li>
                  <li>Pausas frecuentes según necesidad</li>
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
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.esparkinson.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Federación Española de Parkinson (FEP)
                      </a>
                      <p className="text-sm text-gray-600">Información y recursos para pacientes y familiares</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.sen.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Neurología (SEN)
                      </a>
                      <p className="text-sm text-gray-600">Guías clínicas y recursos para profesionales</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md">
                <h4 className="font-semibold text-green-800 mb-3">Teléfonos de ayuda:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">FEP Teléfono de Información:</span>
                      <a href="tel:915401186" className="ml-2 text-green-600 hover:underline">91 540 11 86</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">Sanidad Responde:</span>
                      <a href="tel:901400100" className="ml-2 text-green-600 hover:underline">901 400 100</a>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas Principales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas motores:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Temblor en reposo:</span> Generalmente comienza en una mano o dedos</li>
                    <li><span className="font-medium">Bradicinesia:</span> Lentitud en los movimientos</li>
                    <li><span className="font-medium">Rigidez muscular:</span> Rigidez en las extremidades y el tronco</li>
                    <li><span className="font-medium">Inestabilidad postural:</span> Dificultad para mantener el equilibrio</li>
                    <li><span className="font-medium">Expresión facial reducida:</span> Conocida como "cara de máscara"</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas no motores:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Trastornos del sueño (insomnio, trastorno de conducta del sueño REM)</li>
                    <li>Pérdida del olfato (anosmia)</li>
                    <li>Estreñimiento</li>
                    <li>Cambios en la voz (habla más suave o monótona)</li>
                    <li>Problemas urinarios</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Síntomas cognitivos y emocionales (pueden aparecer en fases avanzadas):</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Problemas de memoria y concentración</li>
                  <li>Dificultad para planificar y organizar tareas</li>
                  <li>Depresión y ansiedad</li>
                  <li>Alucinaciones y delirios (especialmente en fases avanzadas)</li>
                  <li>Demencia (en aproximadamente el 50% de los casos después de 10 años)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Causas y Factores de Riesgo */}
          <Card>
            <CardHeader>
              <CardTitle>Causas y Factores de Riesgo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Causas:</h4>
                <p className="text-gray-700 mb-4">
                  La causa exacta del Parkinson sigue siendo desconocida, pero se cree que es el resultado de una combinación de factores genéticos y ambientales. La enfermedad se caracteriza por la pérdida de neuronas productoras de dopamina en la sustancia negra del cerebro, lo que provoca los problemas de movimiento característicos.
                </p>
                
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Factores de riesgo:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Edad:</span> El riesgo aumenta con la edad, especialmente después de los 60 años</li>
                  <li><span className="font-medium">Genética:</span> Tener un familiar cercano con Parkinson aumenta el riesgo</li>
                  <li><span className="font-medium">Sexo:</span> Los hombres son más propensos a desarrollar la enfermedad que las mujeres</li>
                  <li><span className="font-medium">Exposición a toxinas:</span> Como pesticidas y herbicidas</li>
                  <li><span className="font-medium">Lesiones en la cabeza:</span> Traumatismos craneoencefálicos previos</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Manejo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento farmacológico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Levodopa:</span> El medicamento más efectivo para los síntomas motores</li>
                    <li><span className="font-medium">Agonistas de la dopamina:</span> Como pramipexol y ropinirol</li>
                    <li><span className="font-medium">Inhibidores de la MAO-B:</span> Como selegilina y rasagilina</li>
                    <li><span className="font-medium">Anticolinérgicos:</span> Para controlar el temblor</li>
                    <li><span className="font-medium">Amantadina:</span> Para las discinesias inducidas por levodopa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento no farmacológico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Fisioterapia:</span> Para mejorar la movilidad y el equilibrio</li>
                    <li><span className="font-medium">Terapia ocupacional:</span> Para mantener la independencia en las actividades diarias</li>
                    <li><span className="font-medium">Logopedia:</span> Para los problemas del habla y la deglución</li>
                    <li><span className="font-medium">Ejercicio regular:</span> Como tai chi, yoga o natación</li>
                    <li><span className="font-medium">Estimulación cerebral profunda:</span> En casos seleccionados</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-semibold text-blue-800 mb-2">Consejos para el manejo diario:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Establecer una rutina diaria consistente</li>
                  <li>Tomar los medicamentos exactamente como lo indique el médico</li>
                  <li>Mantener una dieta equilibrada y beber suficiente agua</li>
                  <li>Hacer ejercicio regularmente según las capacidades individuales</li>
                  <li>Dormir lo suficiente y mantener buenos hábitos de sueño</li>
                  <li>Buscar apoyo emocional cuando sea necesario</li>
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Temporal (IT):</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Durante el diagnóstico y ajuste inicial del tratamiento</li>
                    <li>En períodos de empeoramiento de los síntomas</li>
                    <li>Para procedimientos quirúrgicos o ajustes de medicación</li>
                    <li>Durante la rehabilitación después de caídas o complicaciones</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (35-55%):</span> Cuando existe una disminución del rendimiento laboral</li>
                    <li><span className="font-medium">Total (55-75%):</span> Cuando se pierde la capacidad para la profesión habitual</li>
                    <li><span className="font-medium">Absoluta (75-100%):</span> Cuando se pierde la capacidad para cualquier profesión</li>
                    <li><span className="font-medium">Gran invalidez:</span> Cuando se necesita asistencia de tercera persona</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-green-700">
                  <li>Adaptar el puesto de trabajo a las limitaciones físicas</li>
                  <li>Flexibilidad horaria para adaptarse a las fluctuaciones de los síntomas</li>
                  <li>Pausas frecuentes para descansar y tomar la medicación</li>
                  <li>Evitar trabajos que requieran movimientos rápidos o precisos</li>
                  <li>Considerar el teletrabajo cuando sea posible</li>
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
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.esparkinson.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Federación Española de Parkinson (FEP)
                      </a>
                      <p className="text-sm text-gray-600">Información, recursos y grupos de apoyo para pacientes y familiares</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.sen.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Neurología (SEN)
                      </a>
                      <p className="text-sm text-gray-600">Guías clínicas y recursos para profesionales</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-3">Teléfonos de ayuda:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">FEP Teléfono de Información:</span>
                      <a href="tel:915401186" className="ml-2 text-purple-600 hover:underline">91 540 11 86</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Sanidad Responde:</span>
                      <a href="tel:901400100" className="ml-2 text-purple-600 hover:underline">901 400 100</a>
                    </div>
                  </li>
                </ul>
              </div>

              <Alert variant="default" className="bg-blue-50 border-blue-200">
                <AlertDescription className="text-blue-800">
                  <p className="font-medium">Día Mundial del Parkinson:</p>
                  <p>Se celebra el 11 de abril para concienciar sobre esta enfermedad y apoyar la investigación.</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Parkinson;
