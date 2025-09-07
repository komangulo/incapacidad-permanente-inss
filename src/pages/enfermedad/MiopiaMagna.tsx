import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Eye, EyeOff, Sun, SunDim, Glasses, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const MiopiaMagna = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Miopía Magna</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trastorno de refracción severo con riesgo de complicaciones oculares graves
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la Miopía Magna?</h3>
                <p className="text-gray-700 mb-3">
                  La miopía magna, también conocida como miopía patológica o alta miopía, es una condición 
                  en la que el ojo es más largo de lo normal, lo que provoca que los rayos de luz se enfoquen 
                  delante de la retina en lugar de sobre ella. Se considera miopía magna cuando la graduación 
                  supera las -6 dioptrías o la longitud axial es mayor a 26mm.
                </p>
                <p className="text-gray-700">
                  A diferencia de la miopía común, la miopía magna conlleva un mayor riesgo de complicaciones 
                  oculares graves que pueden llevar a discapacidad visual significativa. Estas complicaciones 
                  incluyen desprendimiento de retina, maculopatía miópica, glaucoma y atrofia coriorretiniana.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Causas y Factores de Riesgo */}
          <Card>
            <CardHeader>
              <CardTitle>Causas y Factores de Riesgo</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Causas principales:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Factores genéticos:</strong> Historia familiar de miopía magna.</li>
                  <li><strong>Alargamiento anormal del globo ocular:</strong> Principal causa de la alta graduación.</li>
                  <li><strong>Factores ambientales:</strong> Como el trabajo prolongado de cerca durante la infancia.</li>
                  <li><strong>Prematuridad:</strong> Nacimiento prematuro y bajo peso al nacer.</li>
                  <li><strong>Enfermedades del tejido conectivo:</strong> Como el síndrome de Marfan o Ehlers-Danlos.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Antecedentes familiares de miopía magna</li>
                  <li>Origen asiático (mayor prevalencia)</li>
                  <li>Niveles educativos altos</li>
                  <li>Trabajo prolongado de cerca</li>
                  <li>Tiempo insuficiente al aire libre durante la infancia</li>
                  <li>Edad (progresa hasta los 20-30 años)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas Comunes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas iniciales:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Dificultad para ver objetos lejanos</li>
                    <li>Entrecerrar los ojos para ver mejor de lejos</li>
                    <li>Dolores de cabeza por fatiga visual</li>
                    <li>Necesidad de acercarse mucho a los objetos para verlos con claridad</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas de complicaciones:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Pérdida brusca de visión (desprendimiento de retina)</li>
                    <li>Distorsión de las líneas rectas (maculopatía)</li>
                    <li>Moscas volantes o destellos de luz</li>
                    <li>Pérdida de visión central o periférica</li>
                  </ul>
                </div>
              </div>
              <Alert className="mt-6 bg-blue-50 border-blue-200">
                <AlertCircle className="h-5 w-5 text-blue-700" />
                <AlertTitle className="text-blue-800">¡Importante!</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Los pacientes con miopía magna deben realizarse exámenes oftalmológicos periódicos 
                  para detectar precozmente posibles complicaciones que podrían afectar gravemente la visión.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Diagnóstico */}
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pruebas diagnósticas:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Agudeza visual:</strong> Para medir la capacidad de ver a diferentes distancias.</li>
                    <li><strong>Refracción:</strong> Para determinar la graduación exacta.</li>
                    <li><strong>Biometría ultrasónica:</strong> Para medir la longitud axial del ojo.</li>
                    <li><strong>Examen de fondo de ojo con pupila dilatada:</strong> Para evaluar la retina periférica.</li>
                    <li><strong>Tomografía de coherencia óptica (OCT):</strong> Para evaluar la mácula.</li>
                    <li><strong>Campo visual:</strong> Para detectar defectos en la visión periférica.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Historia clínica detallada y antecedentes familiares.</li>
                    <li>Evaluación de la agudeza visual corregida.</li>
                    <li>Examen de la retina periférica para detectar desgarros o desprendimientos.</li>
                    <li>Medición de la presión intraocular para descartar glaucoma.</li>
                    <li>Evaluación de la mácula para detectar maculopatía miópica.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Manejo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Opciones de tratamiento:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Gafas o lentes de contacto:</strong> Para corregir el defecto refractivo.</li>
                    <li><strong>Cirugía refractiva:</strong> En algunos casos seleccionados.</li>
                    <li><strong>Inyecciones intravítreas:</strong> Para la neovascularización coroidea.</li>
                    <li><strong>Fotocoagulación láser:</strong> Para prevenir el desprendimiento de retina.</li>
                    <li><strong>Cirugía de retina:</strong> En casos de desprendimiento de retina o agujero macular.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Recomendaciones:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Revisiones oftalmológicas periódicas.</li>
                    <li>Uso de gafas de sol con protección UV.</li>
                    <li>Evitar deportes de contacto o de alto impacto.</li>
                    <li>Controlar factores de riesgo cardiovascular.</li>
                    <li>Acudir urgentemente ante cualquier cambio en la visión.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incapacidad Permanente */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Permanente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Grados aplicables:</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-lg text-blue-600">Total (55-75%)</div>
                    <p className="text-gray-700 text-sm">
                      Cuando la agudeza visual en el mejor ojo con corrección es igual o inferior a 0.1, 
                      o cuando existan complicaciones que impidan el desarrollo de la profesión habitual.
                    </p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">Requisitos:</p>
                    <ul className="list-disc pl-5 mt-1 text-gray-700 text-sm space-y-1">
                      <li>Agudeza visual ≤ 0.1 en el mejor ojo con corrección</li>
                      <li>Complicaciones retinianas que limiten significativamente la visión</li>
                      <li>Informe oftalmológico detallado</li>
                      <li>Imposibilidad de adaptación al puesto de trabajo</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="font-bold text-lg text-blue-600">Absoluta (100%)</div>
                    <p className="text-gray-700 text-sm">
                      Cuando la agudeza visual en el mejor ojo con corrección es igual o inferior a 0.05, 
                      o cuando existan otras limitaciones que impidan cualquier tipo de trabajo.
                    </p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">Requisitos:</p>
                    <ul className="list-disc pl-5 mt-1 text-gray-700 text-sm space-y-1">
                      <li>Agudeza visual ≤ 0.05 en el mejor ojo con corrección</li>
                      <li>Pérdida severa de campo visual</li>
                      <li>Complicaciones graves como maculopatía avanzada</li>
                      <li>Informes médicos detallados</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Documentación necesaria:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Informes oftalmológicos completos</li>
                    <li>Pruebas diagnósticas (OCT, campo visual, retinografías)</li>
                    <li>Historia clínica detallada</li>
                    <li>Informe de baja visión si procede</li>
                    <li>Informe del oftalmólogo especialista</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recursos y Apoyo */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos y Apoyo</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Asociaciones:</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://www.retina.es/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Asociación Retina España
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.fundacionretinaplus.es/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Fundación RetinaPlus+
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.once.es/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      ONCE - Organización Nacional de Ciegos Españoles
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Ayudas técnicas:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Lupas electrónicas</li>
                  <li>Teclados de letras grandes</li>
                  <li>Audiolibros</li>
                  <li>Aplicaciones de lectura de pantalla</li>
                  <li>Dispositivos de asistencia para la movilidad</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MiopiaMagna;
