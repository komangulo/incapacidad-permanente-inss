import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Epilepsia = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Epilepsia</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Trastorno neurológico crónico</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Caracterizado por la predisposición a presentar crisis epilépticas recurrentes
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la epilepsia?</h3>
                <p className="text-gray-700">
                  La epilepsia es un trastorno del sistema nervioso central en el que la actividad cerebral se altera, lo que provoca convulsiones o períodos de comportamiento y sensaciones inusuales, y en ocasiones, pérdida del conocimiento. Es uno de los trastornos neurológicos más comunes en el mundo.
                </p>
                <p className="text-gray-700 mt-2">
                  Afecta a personas de todas las edades, razas y clases sociales. Según la OMS, aproximadamente 50 millones de personas en todo el mundo padecen epilepsia, lo que la convierte en una de las enfermedades neurológicas más comunes a nivel mundial.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Tipos de Crisis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Tipos principales de crisis epilépticas:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Crisis focales (parciales):</span> Afectan solo una parte del cerebro</li>
                  <li><span className="font-medium">Crisis generalizadas:</span> Afectan a todo el cerebro</li>
                  <li><span className="font-medium">Crisis de ausencia:</span> Breves episodios de mirada fija</li>
                  <li><span className="font-medium">Crisis tónico-clónicas:</span> Convulsiones con pérdida de conciencia</li>
                  <li><span className="font-medium">Crisis atónicas:</span> Pérdida repentina del tono muscular</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Señales de alarma:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Convulsiones que duran más de 5 minutos</li>
                  <li>Dificultad para respirar o despertar después de una convulsión</li>
                  <li>Una segunda convulsión que ocurre inmediatamente después</li>
                  <li>Fiebre alta</li>
                  <li>Lesiones durante la convulsión</li>
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
                    <li><span className="font-medium">Antiepilépticos:</span> Ácido valproico, levetiracetam, lamotrigina</li>
                    <li><span className="font-medium">Benzodiacepinas:</span> Para crisis agudas (diazepam, lorazepam)</li>
                    <li><span className="font-medium">Nuevos fármacos:</span> Perampanel, eslicarbazepina, brivaracetam</li>
                    <li><span className="font-medium">Tratamiento individualizado:</span> Según tipo de epilepsia y perfil del paciente</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento no farmacológico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Dieta cetogénica:</span> En casos de epilepsia refractaria</li>
                    <li><span className="font-medium">Estimulación del nervio vago:</span> Dispositivo implantable</li>
                    <li><span className="font-medium">Cirugía:</span> En casos seleccionados de epilepsia focal</li>
                    <li><span className="font-medium">Terapias complementarias:</span> Manejo del estrés, sueño regular</li>
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
                    <li>Durante el diagnóstico y ajuste del tratamiento</li>
                    <li>En caso de crisis frecuentes o de difícil control</li>
                    <li>Procesos quirúrgicos o de ajuste de dispositivos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (35-55%):</span> Crisis controladas con limitación moderada</li>
                    <li><span className="font-medium">Total (55-75%):</span> Crisis frecuentes a pesar del tratamiento</li>
                    <li><span className="font-medium">Absoluta (75-100%):</span> Epilepsia refractaria con gran afectación</li>
                    <li><span className="font-medium">Gran invalidez:</span> Cuando se precisa asistencia constante</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Evitar trabajos en alturas o con maquinaria peligrosa</li>
                  <li>Horarios regulares para mantener rutinas de sueño</li>
                  <li>Pausas según necesidad para descanso y medicación</li>
                  <li>Ambiente laboral con compañeros informados sobre primeros auxilios</li>
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
                      <a href="https://www.epilepsia.san.gva.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Federación Española de Epilepsia (FEDE)
                      </a>
                      <p className="text-sm text-gray-600">Información y apoyo para pacientes y familiares</p>
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
                      <span className="font-medium">FEDE Teléfono de Información:</span>
                      <a href="tel:915400909" className="ml-2 text-green-600 hover:underline">91 540 09 09</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">Emergencias Sanitarias:</span>
                      <a href="tel:112" className="ml-2 text-green-600 hover:underline">112</a>
                    </div>
                  </li>
                </ul>
              </div>

              <Alert variant="default" className="bg-purple-50 border-purple-200">
                <AlertDescription className="text-purple-800">
                  <p className="font-medium">Día Internacional de la Epilepsia:</p>
                  <p>Se celebra el segundo lunes de febrero para concienciar sobre esta condición y reducir su estigma social.</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Epilepsia;
