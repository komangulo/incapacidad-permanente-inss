import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const DistrofiaDeConosYBastones = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Distrofia de Conos y Bastones</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad ocular hereditaria que afecta a las células fotorreceptoras de la retina
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-8">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                La distrofia de conos y bastones es un grupo de enfermedades oculares hereditarias que afectan principalmente a las células fotorreceptoras de la retina (conos y bastones). A diferencia de la retinosis pigmentaria, que afecta primero a los bastones, esta condición afecta primero a los conos o a ambos tipos de células simultáneamente.
              </p>
              <p className="text-gray-700">
                La enfermedad provoca una pérdida progresiva de la visión que puede llevar a la ceguera legal o total. El impacto en la capacidad laboral varía según la progresión de la enfermedad y las adaptaciones necesarias en el entorno de trabajo.
              </p>
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
                  <h3 className="font-semibold mb-3">Síntomas iniciales:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Eye className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Disminución de la agudeza visual</span>
                    </li>
                    <li className="flex items-start">
                      <Eye className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dificultad para ver con luz brillante (fotofobia)</span>
                    </li>
                    <li className="flex items-start">
                      <Eye className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pérdida de la visión del color</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Síntomas avanzados:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pérdida de visión periférica (visión en túnel)</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dificultad para ver de noche</span>
                    </li>
                    <li className="flex items-start">
                      <EyeOff className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ceguera legal o total en casos avanzados</span>
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
                  El diagnóstico de la distrofia de conos y bastones requiere un examen oftalmológico completo que puede incluir:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Examen de agudeza visual</li>
                  <li>Examen de fondo de ojo</li>
                  <li>Campo visual</li>
                  <li>Electrorretinograma (ERG)</li>
                  <li>Tomografía de coherencia óptica (OCT)</li>
                  <li>Pruebas genéticas</li>
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
                  Actualmente no existe cura para la distrofia de conos y bastones, pero existen opciones para manejar los síntomas y ralentizar la progresión:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Tratamientos médicos:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Suplementos vitamínicos (bajo supervisión médica)</li>
                      <li>Gafas de sol con protección UV</li>
                      <li>Filtros de luz azul</li>
                      <li>Terapia génica (en investigación)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ayudas visuales:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Lupas electrónicas</li>
                      <li>Gafas telescópicas</li>
                      <li>Lectores de pantalla</li>
                      <li>Dispositivos de aumento</li>
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
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Incapacidad Permanente Total (IPT):</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Agudeza visual inferior a 0.1 en el mejor ojo con corrección</li>
                    <li>Campo visual inferior a 20 grados</li>
                    <li>Dificultad para realizar trabajos que requieran visión detallada</li>
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

                <p className="text-sm text-gray-500 italic">
                  Nota: La valoración de la incapacidad debe ser realizada por un tribunal médico que evalúe cada caso particular y su impacto en la capacidad laboral.
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
                  Existen diversas organizaciones que ofrecen apoyo a personas con distrofias de retina y sus familias:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="https://retinosis.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Federación de Asociaciones de Retinosis Pigmentaria de España (FARPE)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.retina.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Fundación Retina España
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fightingblindness.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Foundation Fighting Blindness (EE.UU.)
                    </a>
                  </li>
                </ul>
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

export default DistrofiaDeConosYBastones;
