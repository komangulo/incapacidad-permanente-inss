import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demencia = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Demencia</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Síndrome de deterioro cognitivo crónico</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Afecta la memoria, el pensamiento, la orientación y la capacidad de realizar actividades cotidianas
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la demencia?</h3>
                <p className="text-gray-700">
                  La demencia es un síndrome que implica el deterioro de la memoria, el intelecto, el comportamiento y la capacidad para realizar actividades de la vida diaria. Afecta principalmente a las personas mayores, aunque no es una consecuencia inevitable del envejecimiento.
                </p>
                <p className="text-gray-700 mt-2">
                  Según la OMS, hay alrededor de 50 millones de personas con demencia en el mundo, y cada año se registran cerca de 10 millones de nuevos casos. La enfermedad de Alzheimer es la forma más común de demencia, representando entre un 60% y 70% de los casos.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas y Tipos */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Tipos de Demencia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas principales:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Pérdida de memoria:</span> Olvido de eventos recientes</li>
                  <li><span className="font-medium">Dificultades de comunicación:</span> Problemas para encontrar palabras</li>
                  <li><span className="font-medium">Desorientación:</span> Confusión de tiempo y lugar</li>
                  <li><span className="font-medium">Cambios de personalidad:</span> Irritabilidad, ansiedad o depresión</li>
                  <li><span className="font-medium">Dificultad en tareas cotidianas:</span> Cocinar, limpiar, manejar finanzas</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Tipos principales de demencia:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li><span className="font-medium">Enfermedad de Alzheimer:</span> La forma más común (60-70% de los casos)</li>
                  <li><span className="font-medium">Demencia vascular:</span> Por problemas de circulación sanguínea en el cerebro</li>
                  <li><span className="font-medium">Demencia con cuerpos de Lewy:</span> Con alucinaciones visuales</li>
                  <li><span className="font-medium">Demencia frontotemporal:</span> Afecta principalmente a personas más jóvenes</li>
                  <li><span className="font-medium">Demencia mixta:</span> Combinación de Alzheimer y demencia vascular</li>
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
                    <li><span className="font-medium">Inhibidores de la colinesterasa:</span> Donepezilo, rivastigmina, galantamina</li>
                    <li><span className="font-medium">Memantina:</span> Para síntomas moderados a graves</li>
                    <li><span className="font-medium">Medicamentos para síntomas conductuales:</span> Antidepresivos, antipsicóticos</li>
                    <li><span className="font-medium">Tratamiento de condiciones subyacentes:</span> Control de presión arterial, diabetes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Enfoques no farmacológicos:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Terapia cognitiva:</span> Ejercicios de memoria y orientación</li>
                    <li><span className="font-medium">Terapia ocupacional:</span> Adaptación del entorno doméstico</li>
                    <li><span className="font-medium">Actividad física:</span> Ejercicio regular adaptado</li>
                    <li><span className="font-medium">Estimulación social:</span> Participación en actividades grupales</li>
                    <li><span className="font-medium">Apoyo a cuidadores:</span> Formación y grupos de apoyo</li>
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
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Proceso de valoración:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Evaluación por equipo multidisciplinar</li>
                    <li>Pruebas neuropsicológicas</li>
                    <li>Informes médicos y de capacidad funcional</li>
                    <li>Valoración del grado de dependencia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Prestaciones disponibles:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Incapacidad Permanente Total:</span> Para la profesión habitual</li>
                    <li><span className="font-medium">Incapacidad Permanente Absoluta:</span> Para cualquier profesión</li>
                    <li><span className="font-medium">Gran Invalidez:</span> Cuando se necesita asistencia de tercera persona</li>
                    <li><span className="font-medium">Grado de Dependencia:</span> Para acceso a servicios sociales</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones para la familia:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Planificación legal y financiera temprana</li>
                  <li>Adaptación del hogar para mayor seguridad</li>
                  <li>Establecimiento de rutinas diarias</li>
                  <li>Búsqueda de apoyo y respiro para cuidadores</li>
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
                      <a href="https://www.ceafa.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Confederación Española de Alzheimer (CEAFA)
                      </a>
                      <p className="text-sm text-gray-600">Apoyo a personas con demencia y sus familias</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.sen.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Neurología (SEN)
                      </a>
                      <p className="text-sm text-gray-600">Información médica y guías clínicas</p>
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
                      <span className="font-medium">CEAFA Teléfono de Ayuda:</span>
                      <a href="tel:902504945" className="ml-2 text-green-600 hover:underline">902 504 945</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">Asistencia Social:</span>
                      <a href="tel:012" className="ml-2 text-green-600 hover:underline">012</a> (dependiendo de la comunidad autónoma)
                    </div>
                  </li>
                </ul>
              </div>

              <Alert variant="default" className="bg-purple-50 border-purple-200">
                <AlertDescription className="text-purple-800">
                  <p className="font-medium">Día Mundial del Alzheimer:</p>
                  <p>Se celebra el 21 de septiembre para concienciar sobre la enfermedad de Alzheimer y otras demencias.</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demencia;
