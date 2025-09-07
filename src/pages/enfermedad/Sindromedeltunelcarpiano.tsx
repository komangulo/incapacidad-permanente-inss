import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SindromeTunelCarpiano = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Síndrome del Túnel Carpiano</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Compresión del nervio mediano en la muñeca</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Atrapamiento del nervio mediano a su paso por el túnel carpiano de la muñeca
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es el Síndrome del Túnel Carpiano?</h3>
                <p className="text-gray-700 mb-4">
                  El síndrome del túnel carpiano es una afección que ocurre cuando el nervio mediano, que va desde el antebrazo hasta la mano, se comprime o aprieta a nivel de la muñeca. El túnel carpiano es un conducto estrecho y rígido formado por los huesos de la muñeca y el ligamento anular del carpo, a través del cual pasan el nervio mediano y los tendones flexores de los dedos.
                </p>
                <p className="text-gray-700">
                  Es una de las neuropatías por atrapamiento más comunes, especialmente en personas cuyas actividades laborales implican movimientos repetitivos de la muñeca, como teclear, usar herramientas vibratorias o realizar tareas manuales de precisión. Afecta con mayor frecuencia a mujeres entre 40 y 60 años.
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
                  <li><span className="font-medium">Hormigueo y entumecimiento:</span> Principalmente en los dedos pulgar, índice, medio y la mitad del anular</li>
                  <li><span className="font-medium">Dolor:</span> En la palma de la mano, muñeca o antebrazo, que puede irradiarse hacia el codo</li>
                  <li><span className="font-medium">Debilidad:</span> Dificultad para agarrar objetos o realizar movimientos finos con la mano afectada</li>
                  <li><span className="font-medium">Sensación de hinchazón:</span> Aunque no sea visible</li>
                  <li><span className="font-medium">Pérdida de masa muscular:</span> En la base del pulgar (en casos avanzados)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Factores agravantes:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Actividades que requieran flexión o extensión repetitiva de la muñeca</li>
                  <li>Uso prolongado del teclado o ratón sin soporte adecuado</li>
                  <li>Exposición a vibraciones (herramientas eléctricas, martillos neumáticos)</li>
                  <li>Dormir con las muñecas flexionadas</li>
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
                    <li><span className="font-medium">Férulas nocturnas:</span> Para mantener la muñeca en posición neutra</li>
                    <li><span className="font-medium">Modificación de actividades:</span> Evitar movimientos repetitivos de la muñeca</li>
                    <li><span className="font-medium">Ejercicios de deslizamiento nervioso:</span> Para movilizar el nervio mediano</li>
                    <li><span className="font-medium">Ergonomía laboral:</span> Ajuste de postura y herramientas de trabajo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento médico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Antiinflamatorios no esteroideos (AINEs):</span> Para reducir la inflamación</li>
                    <li><span className="font-medium">Infiltraciones de corticoesteroides:</span> Para aliviar la inflamación y el dolor</li>
                    <li><span className="font-medium">Terapia física:</span> Ultrasonido, movilizaciones, ejercicios</li>
                    <li><span className="font-medium">Cirugía:</span> Liberación del túnel carpiano en casos graves o sin respuesta al tratamiento conservador</li>
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
                    <li><span className="font-medium">Conservador:</span> 15-30 días (según evolución)</li>
                    <li><span className="font-medium">Postoperatorio:</span> 30-60 días</li>
                    <li><span className="font-medium">Rehabilitación:</span> Hasta 6 meses según evolución</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (5-15%):</span> Secuelas leves sin limitación funcional</li>
                    <li><span className="font-medium">Total (25-35%):</span> Limitación funcional para el trabajo habitual</li>
                    <li><span className="font-medium">Absoluta (50-65%):</span> Casos graves con pérdida de función de la mano</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones para el trabajo:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Pausas activas cada 30-60 minutos</li>
                  <li>Uso de teclados y ratones ergonómicos</li>
                  <li>Mantener la muñeca en posición neutra durante las actividades</li>
                  <li>Ejercicios de estiramiento y fortalecimiento</li>
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
                      <p className="text-sm text-gray-600">Información médica actualizada sobre enfermedades reumáticas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.sea-ergonomia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad de Ergonomía Aplicada (SEA)
                      </a>
                      <p className="text-sm text-gray-600">Recursos sobre ergonomía y salud laboral</p>
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
                      <span className="font-medium">Instituto Nacional de Seguridad e Higiene en el Trabajo:</span>
                      <a href="tel:915363000" className="ml-2 text-green-600 hover:underline">91 536 30 00</a>
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

export default SindromeTunelCarpiano;
