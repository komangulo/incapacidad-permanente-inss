import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ictus = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Ictus</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Accidente Cerebrovascular (ACV)</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interrupción del flujo sanguíneo al cerebro que puede causar daño cerebral permanente
          </p>
        </div>

        {/* Alerta de emergencia */}
        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-5 w-5" />
          <AlertDescription className="ml-2">
            <span className="font-semibold">¡Atención!</span> El ictus es una emergencia médica. Si observa síntomas, llame inmediatamente al 112 o acuda a urgencias.
          </AlertDescription>
        </Alert>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General del Ictus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es un ictus?</h3>
                <p className="text-gray-700">
                  Un ictus, también conocido como accidente cerebrovascular (ACV), ocurre cuando se interrumpe el suministro de sangre a una parte del cerebro, ya sea por un coágulo (isquémico) o por la rotura de un vaso sanguíneo (hemorrágico). Es la segunda causa de muerte en España y la primera en mujeres.
                </p>
                <p className="text-gray-700 mt-2">
                  Cada año, entre 110.000 y 120.000 personas sufren un ictus en España, lo que equivale a uno cada 6 minutos. El 90% de los casos podrían prevenirse controlando los factores de riesgo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas y Tipos */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Tipos de Ictus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas principales (acrónimo RÁPIDO):</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Rostro caído:</span> Asimetría facial al sonreír</li>
                  <li><span className="font-medium">Alteración del habla:</span> Dificultad para hablar o entender</li>
                  <li><span className="font-medium">Pérdida de fuerza:</span> En brazo o pierna, generalmente de un lado</li>
                  <li><span className="font-medium">Inestabilidad:</span> Pérdida de equilibrio o coordinación</li>
                  <li><span className="font-medium">Dolor de cabeza:</span> Intenso y repentino</li>
                  <li><span className="font-medium">Ojos:</span> Pérdida de visión en uno o ambos ojos</li>
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">Ictus isquémico (85% de los casos):</h4>
                  <ul className="list-disc pl-5 space-y-1 text-red-700">
                    <li>Obstrucción de una arteria cerebral</li>
                    <li>Pérdida repentina de flujo sanguíneo</li>
                    <li>Puede ser trombótico o embólico</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-md border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-2">Ictus hemorrágico (15% de los casos):</h4>
                  <ul className="list-disc pl-5 space-y-1 text-orange-700">
                    <li>Ruptura de un vaso sanguíneo cerebral</li>
                    <li>Sangrado en el cerebro o sus alrededores</li>
                    <li>Mayor tasa de mortalidad que el isquémico</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Factores de Riesgo y Prevención */}
          <Card>
            <CardHeader>
              <CardTitle>Factores de Riesgo y Prevención</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Factores de riesgo modificables:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Hipertensión arterial (principal factor de riesgo)</li>
                    <li>Fibrilación auricular</li>
                    <li>Diabetes mellitus</li>
                    <li>Colesterol alto</li>
                    <li>Tabaco y consumo excesivo de alcohol</li>
                    <li>Obesidad y sedentarismo</li>
                    <li>Enfermedades cardíacas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Medidas preventivas:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Control regular de la presión arterial</li>
                    <li>Dieta mediterránea rica en frutas y verduras</li>
                    <li>Ejercicio físico regular</li>
                    <li>No fumar y moderar el consumo de alcohol</li>
                    <li>Control de la diabetes y el colesterol</li>
                    <li>Manejo del estrés</li>
                    <li>Tratamiento adecuado de las arritmias cardíacas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento y Rehabilitación */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Rehabilitación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento agudo:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Ictus isquémico:</span> Trombólisis intravenosa (rtPA) en las primeras 4.5 horas</li>
                    <li><span className="font-medium">Trombectomía mecánica:</span> Hasta 24 horas en casos seleccionados</li>
                    <li><span className="font-medium">Ictus hemorrágico:</span> Control de la presión arterial, drenaje quirúrgico si es necesario</li>
                    <li><span className="font-medium">Unidades de Ictus:</span> Atención especializada que reduce la mortalidad y secuelas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800 mb-3">Rehabilitación:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Fisioterapia:</span> Para recuperar movilidad y fuerza</li>
                    <li><span className="font-medium">Terapia ocupacional:</span> Para recuperar autonomía en actividades diarias</li>
                    <li><span className="font-medium">Logopedia:</span> Para problemas de habla y deglución</li>
                    <li><span className="font-medium">Neuropsicología:</span> Para déficits cognitivos</li>
                    <li><span className="font-medium">Apoyo emocional:</span> Para afrontar los cambios tras el ictus</li>
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
                    <li>Durante la fase aguda y rehabilitación temprana</li>
                    <li>Duración variable según gravedad (semanas a meses)</li>
                    <li>Evaluación periódica de la evolución</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (35-55%):</span> Secuelas leves que permiten continuar trabajando</li>
                    <li><span className="font-medium">Total (55-75%):</span> Incapacidad para la profesión habitual</li>
                    <li><span className="font-medium">Absoluta (75-100%):</span> Incapacidad para cualquier profesión</li>
                    <li><span className="font-medium">Gran invalidez:</span> Necesidad de asistencia de tercera persona</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones para la reincorporación laboral:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Valoración individualizada de capacidades residuales</li>
                  <li>Adaptación del puesto de trabajo si es necesario</li>
                  <li>Jornada reducida o progresiva en la reincorporación</li>
                  <li>Evitar trabajos con riesgo de caídas o que requieran conducción si hay secuelas</li>
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
                      <a href="https://www.fedespacio.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        FEDACE - Federación Española de Daño Cerebral
                      </a>
                      <p className="text-sm text-gray-600">Apoyo a personas con daño cerebral adquirido y sus familias</p>
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
                      <span className="font-medium">FEDACE Teléfono de Información:</span>
                      <a href="tel:915411011" className="ml-2 text-green-600 hover:underline">91 541 10 11</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">Emergencias:</span>
                      <a href="tel:112" className="ml-2 text-green-600 hover:underline">112</a>
                    </div>
                  </li>
                </ul>
              </div>

              <Alert variant="default" className="bg-purple-50 border-purple-200">
                <AlertDescription className="text-purple-800">
                  <p className="font-medium">Día Mundial del Ictus:</p>
                  <p>Se celebra el 29 de octubre para concienciar sobre la prevención y tratamiento del ictus.</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ictus;
