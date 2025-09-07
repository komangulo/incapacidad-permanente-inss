import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Eye, EyeOff, Sun, SunDim, Glasses, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maculopatia = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Maculopatía</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad degenerativa de la mácula que afecta la visión central
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la Maculopatía?</h3>
                <p className="text-gray-700 mb-3">
                  La maculopatía es un término general que se refiere a cualquier afección que dañe la mácula, 
                  la parte central de la retina responsable de la visión fina y detallada. Este daño afecta 
                  directamente la capacidad para realizar actividades que requieren visión central nítida como 
                  leer, conducir, reconocer rostros y ver detalles finos.
                </p>
                <p className="text-gray-700">
                  La degeneración macular relacionada con la edad (DMRE) es la forma más común de maculopatía, 
                  pero existen otros tipos como la maculopatía miópica, la membrana epirretiniana y el agujero 
                  macular. La enfermedad puede progresar lentamente o desarrollarse rápidamente, dependiendo del tipo.
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
                  <li><strong>Envejecimiento:</strong> Principal factor de riesgo para la DMRE.</li>
                  <li><strong>Factores genéticos:</strong> Historia familiar de la enfermedad.</li>
                  <li><strong>Miopía magna:</strong> Mayor riesgo de maculopatía miópica.</li>
                  <li><strong>Enfermedades sistémicas:</strong> Como diabetes o hipertensión.</li>
                  <li><strong>Traumatismos oculares:</strong> Que afecten la mácula.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Mayores de 50 años</li>
                  <li>Antecedentes familiares de la enfermedad</li>
                  <li>Tabaquismo</li>
                  <li>Obesidad</li>
                  <li>Exposición excesiva a la luz solar</li>
                  <li>Dieta pobre en antioxidantes</li>
                  <li>Hipertensión arterial</li>
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
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas tempranos:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Dificultad para adaptarse a la poca luz</li>
                    <li>Necesidad de más luz para leer</li>
                    <li>Los colores parecen menos brillantes</li>
                    <li>Visión borrosa al leer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas avanzados:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Zona borrosa u oscura en el centro de la visión</li>
                    <li>Líneas rectas que parecen onduladas</li>
                    <li>Dificultad para reconocer rostros</li>
                    <li>Pérdida de la visión central</li>
                  </ul>
                </div>
              </div>
              <Alert className="mt-6 bg-blue-50 border-blue-200">
                <AlertCircle className="h-5 w-5 text-blue-700" />
                <AlertTitle className="text-blue-800">¡Importante!</AlertTitle>
                <AlertDescription className="text-blue-700">
                  La detección temprana es crucial para retrasar la progresión de la enfermedad. 
                  Realiza exámenes oculares periódicos, especialmente si tienes factores de riesgo.
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
                    <li><strong>Examen oftalmológico completo:</strong> Incluyendo agudeza visual, refracción y examen con lámpara de hendidura.</li>
                    <li><strong>Gonioscopia:</strong> Para evaluar el ángulo de la cámara anterior y riesgo de glaucoma.</li>
                    <li><strong>Tonometría:</strong> Para medir la presión intraocular.</li>
                    <li><strong>Examen de fondo de ojo:</strong> Para evaluar la mácula, el nervio óptico y la retina periférica.</li>
                    <li><strong>Paquimetría:</strong> Para medir el grosor corneal.</li>
                    <li><strong>Topografía corneal:</strong> Para evaluar la superficie corneal.</li>
                    <li><strong>Tomografía de coherencia óptica (OCT):</strong> Para evaluar la mácula y el nervio óptico.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Historia clínica detallada:</strong> Incluyendo antecedentes familiares y evolución de los síntomas.</li>
                    <li><strong>Pruebas genéticas:</strong> Secuenciación del gen PAX6 para confirmación diagnóstica.</li>
                    <li><strong>Ecografía renal:</strong> Para descartar tumor de Wilms en el síndrome WAGR.</li>
                    <li><strong>Evaluación neurológica:</strong> En casos de sospecha de síndrome de Gillespie.</li>
                    <li><strong>Diagnóstico diferencial:</strong> Incluye trauma ocular, cirugía previa, aniridia adquirida, coloboma de iris, y otras anomalías del desarrollo ocular.</li>
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
                    <li><strong>Inyecciones intravítreas:</strong> Fármacos anti-VEGF para la forma húmeda.</li>
                    <li><strong>Terapia fotodinámica:</strong> Para casos específicos de DMRE húmeda.</li>
                    <li><strong>Suplementos nutricionales:</strong> Según la fórmula AREDS2 para la forma seca.</li>
                    <li><strong>Lentes de aumento y ayudas visuales:</strong> Para baja visión.</li>
                    <li><strong>Cirugía:</strong> En casos de agujero macular o membrana epirretiniana.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Recomendaciones:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Dejar de fumar si es fumador.</li>
                    <li>Usar gafas de sol con protección UV.</li>
                    <li>Mantener una dieta rica en antioxidantes (verduras de hoja verde, pescado, frutas).</li>
                    <li>Controlar la presión arterial y otros problemas de salud.</li>
                    <li>Realizar ejercicio regularmente.</li>
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
                      o cuando el campo visual está muy reducido, impidiendo el desarrollo de la profesión habitual.
                    </p>
                    <p className="text-gray-700 text-sm mt-2 font-medium">Requisitos:</p>
                    <ul className="list-disc pl-5 mt-1 text-gray-700 text-sm space-y-1">
                      <li>Agudeza visual ≤ 0.1 en el mejor ojo con corrección</li>
                      <li>Campo visual ≤ 20 grados</li>
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
                      <li>Campo visual ≤ 10 grados</li>
                      <li>Pérdida total de la visión central</li>
                      <li>Informes médicos detallados</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Documentación necesaria:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Informes oftalmológicos completos</li>
                    <li>Pruebas diagnósticas (OCT, angiografía, campo visual)</li>
                    <li>Historia clínica detallada</li>
                    <li>Informe de baja visión</li>
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

export default Maculopatia;
