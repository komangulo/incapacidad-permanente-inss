import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, HeartPulse, Eye, Brain, Droplets, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnfermedaddeBehçet = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Enfermedad de Behçet</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad inflamatoria crónica que causa inflamación de los vasos sanguíneos
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
                La enfermedad de Behçet es un trastorno inflamatorio crónico poco común que provoca la inflamación de los vasos sanguíneos en todo el cuerpo. Esta enfermedad autoinmune puede afectar a múltiples sistemas y órganos, incluyendo la piel, los ojos, el cerebro, el sistema nervioso, los pulmones, las articulaciones, el sistema digestivo y los vasos sanguíneos.
              </p>
              <p className="text-gray-700">
                La enfermedad es más común en la "Ruta de la Seda", que se extiende desde el este de Asia hasta el Mediterráneo, y suele manifestarse entre los 20 y 40 años. Aunque no tiene cura, los síntomas pueden controlarse con el tratamiento adecuado.
              </p>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas Principales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Activity className="h-5 w-5 text-blue-600 mr-2" />
                    Síntomas comunes:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Úlceras bucales dolorosas recurrentes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Lesiones genitales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Problemas oculares (uveítis)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Lesiones cutáneas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                    Complicaciones graves:
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Inflamación del sistema nervioso central</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Trombosis venosa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Aneurismas arteriales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Problemas gastrointestinales graves</span>
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
                  No existe una prueba específica para diagnosticar la enfermedad de Behçet. El diagnóstico se basa en los criterios clínicos que incluyen:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Úlceras bucales recurrentes (al menos 3 veces en un año)</li>
                  <li>Dos de los siguientes síntomas adicionales:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Úlceras genitales recurrentes</li>
                      <li>Lesiones oculares (uveítis anterior o posterior)</li>
                      <li>Lesiones cutáneas (eritema nudoso, foliculitis, lesiones acneiformes)</li>
                      <li>Prueba de patergia positiva</li>
                    </ul>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 italic">
                  Nota: Se pueden requerir análisis de sangre, pruebas de imagen y biopsias para descartar otras afecciones.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Manejo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Medicamentos:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Corticosteroides para controlar la inflamación</li>
                      <li>Inmunosupresores (azatioprina, ciclosporina)</li>
                      <li>Agentes biológicos (inhibidores del TNF-α)</li>
                      <li>Colchicina para las úlceras bucales y genitales</li>
                      <li>Analgésicos para el dolor</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Enfoques adicionales:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Terapia física para la artritis</li>
                      <li>Apoyo psicológico</li>
                      <li>Modificaciones en el estilo de vida</li>
                      <li>Rehabilitación visual en casos de afectación ocular</li>
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
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Incapacidad Temporal (IT):</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Durante los brotes agudos de la enfermedad</li>
                    <li>Períodos de hospitalización</li>
                    <li>Tratamientos médicos intensivos</li>
                    <li>Hasta 12 meses prorrogables por 6 meses más</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Incapacidad Permanente (IP):</h3>
                  <p className="text-gray-700 mb-2">Se valora cuando la enfermedad causa limitaciones permanentes:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><span className="font-medium">Parcial:</span> Disminución del rendimiento laboral ≥33%</li>
                    <li><span className="font-medium">Total:</span> Imposibilidad para la profesión habitual</li>
                    <li><span className="font-medium">Absoluta:</span> Imposibilidad para todo tipo de trabajo</li>
                    <li><span className="font-medium">Gran Invalidez:</span> Cuando se necesita asistencia para actos básicos</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">Factores que influyen en la incapacidad:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Frecuencia e intensidad de los brotes</li>
                    <li>Órganos afectados (ojos, sistema nervioso, vasos sanguíneos)</li>
                    <li>Respuesta al tratamiento</li>
                    <li>Limitaciones funcionales permanentes</li>
                    <li>Efectos secundarios de la medicación</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recursos y Asociaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos y Asociaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Organizaciones que ofrecen apoyo a pacientes con enfermedad de Behçet:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.behcet.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Asociación Española de la Enfermedad de Behçet (AEEB)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ser.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Sociedad Española de Reumatología (SER)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.behcets.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • American Behçet's Disease Association (ABDA)
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
              Para un diagnóstico y tratamiento adecuados, consulte a un reumatólogo o especialista en enfermedades autoinmunes.
              La valoración de la incapacidad laboral debe ser realizada por los organismos competentes en cada caso particular.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default EnfermedaddeBehçet;