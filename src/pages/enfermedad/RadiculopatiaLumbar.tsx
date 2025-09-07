import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const RadiculopatiaLumbar = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Radiculopatía Lumbar</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Compresión de las raíces nerviosas lumbares</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conocida comúnmente como ciática cuando afecta al nervio ciático
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es la Radiculopatía Lumbar?</h3>
                <p className="text-gray-700 mb-4">
                  La radiculopatía lumbar es una afección que ocurre cuando hay compresión, inflamación o lesión de una o más raíces nerviosas en la columna lumbar. La causa más común es una hernia de disco intervertebral, aunque también puede deberse a estenosis del canal lumbar, espondilolistesis u otras afecciones degenerativas de la columna.
                </p>
                <p className="text-gray-700">
                  Es una de las causas más frecuentes de dolor lumbar que se irradia a las extremidades inferiores, afectando significativamente la calidad de vida y la capacidad laboral de las personas que la padecen.
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
                  <li><span className="font-medium">Dolor irradiado:</span> Desde la región lumbar hacia glúteo, muslo, pierna o pie</li>
                  <li><span className="font-medium">Parestesias:</span> Hormigueo, entumecimiento o sensación de acorchamiento</li>
                  <li><span className="font-medium">Debilidad muscular:</span> En el territorio inervado por el nervio afectado</li>
                  <li><span className="font-medium">Dolor lumbar:</span> Que puede ser menos intenso que el dolor irradiado</li>
                  <li><span className="font-medium">Aumento del dolor:</span> Al toser, estornudar o realizar esfuerzos</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Niveles más afectados:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li><span className="font-medium">L4-L5:</span> Dolor en región lumbar, nalga, cara posterolateral del muslo, pierna y dorso del pie</li>
                  <li><span className="font-medium">L5-S1:</span> Dolor en región lumbar, nalga, cara posterior del muslo, pierna y planta del pie</li>
                  <li><span className="font-medium">L3-L4:</span> Dolor en cara anterior del muslo y rodilla</li>
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
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento conservador:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Reposo relativo:</span> Máximo 2-3 días</li>
                    <li><span className="font-medium">Medicación:</span> AINEs, relajantes musculares, analgésicos</li>
                    <li><span className="font-medium">Fisioterapia:</span> Ejercicios de estabilización lumbar, estiramientos</li>
                    <li><span className="font-medium">Infiltraciones:</span> Epidurales de corticoides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento quirúrgico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Indicaciones:</span> Déficit neurológico progresivo, síndrome de cauda equina, fracaso del tratamiento conservador</li>
                    <li><span className="font-medium">Técnicas:</span> Discectomía, laminectomía, artrodesis vertebral</li>
                    <li><span className="font-medium">Rehabilitación postquirúrgica:</span> 3-6 meses</li>
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
                    <li><span className="font-medium">Aguda (sin cirugía):</span> 15-30 días</li>
                    <li><span className="font-medium">Postoperatorio:</span> 45-90 días</li>
                    <li><span className="font-medium">Rehabilitación:</span> Hasta 12 meses según evolución</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (5-15%):</span> Secuelas leves sin limitación funcional</li>
                    <li><span className="font-medium">Total (25-35%):</span> Limitación para trabajos que requieran esfuerzo físico</li>
                    <li><span className="font-medium">Absoluta (50-65%):</span> Casos graves con pérdida de función o dolor crónico invalidante</li>
                    <li><span className="font-medium">Gran invalidez:</span> Cuando se precisa asistencia para actividades básicas</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Evitar levantar pesos superiores a 5-10 kg</li>
                  <li>Pausas activas cada 1-2 horas en trabajos sedentarios</li>
                  <li>Uso de faja lumbar en actividades de riesgo</li>
                  <li>Adaptación del puesto de trabajo: silla ergonómica, altura de la mesa, etc.</li>
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
                      <p className="text-sm text-gray-600">Información sobre enfermedades reumáticas y dolor lumbar</p>
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

export default RadiculopatiaLumbar;
