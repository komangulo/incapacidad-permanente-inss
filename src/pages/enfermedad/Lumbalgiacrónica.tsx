import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LumbalgiaCronica = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lumbalgia Crónica</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Dolor lumbar persistente de más de 3 meses de evolución</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una de las principales causas de discapacidad laboral en la población adulta
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es la Lumbalgia Crónica?</h3>
                <p className="text-gray-700 mb-4">
                  La lumbalgia crónica se define como un dolor en la región lumbar que persiste durante más de 12 semanas. Es un problema de salud pública importante, siendo una de las principales causas de absentismo laboral y discapacidad en la población en edad productiva.
                </p>
                <p className="text-gray-700">
                  A diferencia de la lumbalgia aguda, que suele ser autolimitada, la forma crónica requiere un enfoque multidisciplinar que aborde tanto los aspectos físicos como psicosociales del dolor.
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
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas principales:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Dolor lumbar persistente:</span> De más de 3 meses de evolución</li>
                  <li><span className="font-medium">Rigidez matutina:</span> Mejora con el movimiento</li>
                  <li><span className="font-medium">Limitación funcional:</span> Dificultad para permanecer de pie o sentado por tiempo prolongado</li>
                  <li><span className="font-medium">Dolor referido:</span> Hacia glúteos o muslos, sin seguir un patrón radicular claro</li>
                  <li><span className="font-medium">Fatiga muscular:</span> Por sobrecarga de la musculatura paravertebral</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Factores de cronicidad:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Factores psicosociales (ansiedad, depresión, estrés laboral)</li>
                  <li>Mala condición física general</li>
                  <li>Obesidad y sedentarismo</li>
                  <li>Trabajos con sobreesfuerzo físico o posturas mantenidas</li>
                  <li>Falta de adaptación del puesto de trabajo</li>
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
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento no farmacológico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Ejercicio terapéutico:</span> Fortalecimiento del core, pilates, natación</li>
                    <li><span className="font-medium">Terapia cognitivo-conductual:</span> Para el manejo del dolor crónico</li>
                    <li><span className="font-medium">Reeducación postural:</span> Escuela de espalda</li>
                    <li><span className="font-medium">Técnicas de relajación:</span> Mindfulness, yoga</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento farmacológico y otros:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Analgésicos:</span> Paracetamol, AINEs (en brotes agudos)</li>
                    <li><span className="font-medium">Miorrelajantes:</span> En contracturas musculares asociadas</li>
                    <li><span className="font-medium">Antidepresivos:</span> Amitriptilina, duloxetina en dosis bajas</li>
                    <li><span className="font-medium">Infiltraciones:</span> Puntos gatillo, facetarias o epidurales</li>
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
                    <li><span className="font-medium">Aguda:</span> 7-15 días (según evolución)</li>
                    <li><span className="font-medium">Rehabilitación:</span> Hasta 6 meses según evolución</li>
                    <li><span className="font-medium">Reconocimiento de contingencia profesional:</span> Valorar en casos de origen laboral</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (5-15%):</span> Secuelas leves sin limitación funcional</li>
                    <li><span className="font-medium">Total (25-35%):</span> Limitación para trabajos con sobreesfuerzo físico</li>
                    <li><span className="font-medium">Absoluta (50-65%):</span> Casos graves con dolor crónico invalidante</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Adaptación del puesto de trabajo (altura de la mesa, silla ergonómica)</li>
                  <li>Rotación de tareas en trabajos estáticos</li>
                  <li>Pausas activas cada 1-2 horas</li>
                  <li>Evitar levantar pesos superiores a 5-10 kg</li>
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
                      <a href="https://www.ser.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Reumatología (SER)
                      </a>
                      <p className="text-sm text-gray-600">Guías clínicas sobre el manejo del dolor lumbar crónico</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.sermef-ejercicio.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Rehabilitación y Medicina Física (SERMEF)
                      </a>
                      <p className="text-sm text-gray-600">Recursos sobre rehabilitación del dolor lumbar</p>
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
                      <span className="font-medium">Sanidad Responde:</span>
                      <a href="tel:901400100" className="ml-2 text-green-600 hover:underline">901 400 100</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">Instituto Nacional de la Seguridad Social (INSS):</span>
                      <a href="tel:901166565" className="ml-2 text-green-600 hover:underline">901 16 65 65</a>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LumbalgiaCronica;
