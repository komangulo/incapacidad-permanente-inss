import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetinosisPigmentaria = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Retinosis Pigmentaria</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad genética degenerativa que afecta la retina y causa pérdida progresiva de la visión
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-8">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General de la Enfermedad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-gray-700 mb-4">
                  La retinosis pigmentaria es un grupo de trastornos genéticos que afectan la capacidad de la retina para responder a la luz. Esta enfermedad causa una degeneración progresiva de las células fotorreceptoras de la retina (conos y bastones), lo que lleva a una pérdida gradual de la visión.
                </p>
                <p className="text-gray-700">
                  La retinosis pigmentaria es una de las formas más comunes de distrofia hereditaria de la retina, con una incidencia de aproximadamente 1 de cada 4,000 personas en todo el mundo. La progresión y la gravedad de la enfermedad pueden variar significativamente entre los afectados.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Síntomas iniciales:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dificultad para ver de noche (nictalopía)</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pérdida de visión periférica (visión en túnel)</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dificultad para adaptarse a la oscuridad</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Disminución de la agudeza visual</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Síntomas avanzados:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pérdida de visión central en etapas posteriores</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dificultad para percibir colores</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fotofobia (sensibilidad a la luz)</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ceguera legal en casos avanzados</span>
                    </li>
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
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  El diagnóstico de la retinosis pigmentaria requiere un examen oftalmológico completo que puede incluir las siguientes pruebas:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Examen de fondo de ojo con dilatación pupilar</li>
                  <li>Electrorretinograma (ERG) para medir la respuesta eléctrica de la retina</li>
                  <li>Campo visual para evaluar la visión periférica</li>
                  <li>Tomografía de coherencia óptica (OCT) para evaluar las capas de la retina</li>
                  <li>Angiografía con fluoresceína para evaluar la circulación retiniana</li>
                  <li>Pruebas genéticas para identificar mutaciones específicas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Manejo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Actualmente no existe una cura para la retinosis pigmentaria, pero existen tratamientos que pueden ayudar a ralentizar su progresión y manejar los síntomas:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Tratamientos médicos:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Suplementos de vitamina A palmitato (bajo supervisión médica)</li>
                      <li>Ácidos grasos omega-3</li>
                      <li>Implantes de cápsula de células madre (en investigación)</li>
                      <li>Terapia génica (en desarrollo)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ayudas visuales:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Gafas especiales para baja visión</li>
                      <li>Lupas electrónicas</li>
                      <li>Dispositivos de aumento</li>
                      <li>Sistemas de lectura con voz</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incapacidad Laboral */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Laboral</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  La retinosis pigmentaria puede dar lugar a diferentes grados de incapacidad laboral dependiendo de su gravedad:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Incapacidad Permanente Total (IPT):</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Agudeza visual inferior a 0.1 en el mejor ojo con corrección</li>
                      <li>Campo visual inferior a 20 grados</li>
                      <li>Incapacidad para realizar trabajos que requieran visión</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Incapacidad Permanente Absoluta (IPA):</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Agudeza visual inferior a 0.05 en el mejor ojo con corrección</li>
                      <li>Campo visual inferior a 10 grados</li>
                      <li>Pérdida total de la visión en casos avanzados</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Nota: La valoración de la incapacidad debe ser realizada por un tribunal médico que evalúe cada caso particular.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recursos y Apoyo */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos y Apoyo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Existen diversas organizaciones y recursos disponibles para personas con retinosis pigmentaria y sus familias:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Asociaciones en España:</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="https://retinosis.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-start">
                          <span className="mr-1">•</span>
                          <span>Federación de Asociaciones de Retinosis Pigmentaria de España (FARPE)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://retinosis.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-start">
                          <span className="mr-1">•</span>
                          <span>Fundación Retina España</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.accionvision.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-start">
                          <span className="mr-1">•</span>
                          <span>Asociación Acción Visión España</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Recursos internacionales:</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="https://www.fightingblindness.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-start">
                          <span className="mr-1">•</span>
                          <span>Foundation Fighting Blindness (EE.UU.)</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.retinaint.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-start">
                          <span className="mr-1">•</span>
                          <span>Retina International</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.rpfightingblindness.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-start">
                          <span className="mr-1">•</span>
                          <span>RP Fighting Blindness (Reino Unido)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Aviso Legal */}
          <Alert variant="destructive" className="mt-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Aviso Importante</AlertTitle>
            <AlertDescription className="text-sm">
              Esta información tiene fines informativos y no sustituye el asesoramiento médico profesional. 
              Para un diagnóstico y tratamiento adecuados, consulte a un oftalmólogo especializado en enfermedades retinianas.
              La valoración de la incapacidad laboral debe ser realizada por los organismos competentes en cada caso particular.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default RetinosisPigmentaria;
