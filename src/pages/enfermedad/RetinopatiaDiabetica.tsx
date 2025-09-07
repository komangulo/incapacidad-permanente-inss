import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetinopatiaDiabetica = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Retinopatía Diabética</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complicación ocular de la diabetes que afecta los vasos sanguíneos de la retina
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la Retinopatía Diabética?</h3>
                <p className="text-gray-700 mb-3">
                  La retinopatía diabética es una complicación de la diabetes que afecta los ojos. 
                  Es causada por el daño a los vasos sanguíneos del tejido sensible a la luz que se 
                  encuentra en la parte posterior del ojo (retina).
                </p>
                <p className="text-gray-700">
                  En sus primeras etapas, la retinopatía diabética puede no presentar síntomas o solo 
                  problemas visuales leves. Sin embargo, puede terminar causando ceguera si no se trata.
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Causas:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Niveles altos de azúcar en sangre durante períodos prolongados</li>
                  <li>Daño progresivo en los pequeños vasos sanguíneos de la retina</li>
                  <li>Obstrucción de los vasos sanguíneos que suministran oxígeno a la retina</li>
                  <li>Formación de nuevos vasos sanguíneos anormales (neovascularización)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Duración de la diabetes (más de 10 años)</li>
                  <li>Control deficiente del azúcar en sangre</li>
                  <li>Presión arterial alta</li>
                  <li>Niveles altos de colesterol</li>
                  <li>Embarazo</li>
                  <li>Tabaquismo</li>
                  <li>Origen étnico (hispano, afroamericano, nativo americano)</li>
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
                    <li>Visión borrosa</li>
                    <li>Dificultad para ver de noche</li>
                    <li>Ver manchas oscuras o cadenas flotantes</li>
                    <li>Dificultad para percibir colores</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas avanzados:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Manchas oscuras o vacíos en la visión</li>
                    <li>Pérdida repentina de la visión</li>
                    <li>Visión distorsionada</li>
                    <li>Dolor ocular (en casos de glaucoma neovascular)</li>
                  </ul>
                </div>
              </div>
              <Alert className="mt-6 bg-blue-50 border-blue-200">
                <AlertCircle className="h-5 w-5 text-blue-700" />
                <AlertTitle className="text-blue-800">¡Importante!</AlertTitle>
                <AlertDescription className="text-blue-700">
                  En las primeras etapas, la retinopatía diabética puede no presentar síntomas. 
                  Las personas con diabetes deben realizarse exámenes oculares anuales 
                  incluso si no presentan problemas de visión.
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
                    <li><strong>Examen de agudeza visual:</strong> Para medir la capacidad de ver a diferentes distancias.</li>
                    <li><strong>Examen con lámpara de hendidura:</strong> Para examinar las estructuras internas del ojo.</li>
                    <li><strong>Oftalmoscopia:</strong> Para examinar la retina y el nervio óptico.</li>
                    <li><strong>Angiografía con fluoresceína:</strong> Para detectar fugas de los vasos sanguíneos.</li>
                    <li><strong>Tomografía de coherencia óptica (OCT):</strong> Para obtener imágenes detalladas de la retina.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Clasificación:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Retinopatía diabética no proliferativa (RDNP):</strong> Etapa temprana con microaneurismas.</li>
                    <li><strong>Retinopatía diabética proliferativa (RDP):</strong> Etapa avanzada con crecimiento de nuevos vasos sanguíneos anormales.</li>
                    <li><strong>Edema macular diabético (EMD):</strong> Acumulación de líquido en la mácula que puede ocurrir en cualquier etapa.</li>
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
                    <li><strong>Control estricto de la diabetes:</strong> Mantener niveles óptimos de azúcar en sangre.</li>
                    <li><strong>Inyecciones intravítreas:</strong> Fármacos anti-VEGF para reducir la hinchazón y el crecimiento de vasos anormales.</li>
                    <li><strong>Fotocoagulación con láser:</strong> Para sellar o reducir los vasos sanguíneos con fugas.</li>
                    <li><strong>Vitrectomía:</strong> Cirugía para extraer la sangre del centro del ojo en casos avanzados.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Recomendaciones:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Control estricto de los niveles de azúcar en sangre</li>
                    <li>Mantener la presión arterial y el colesterol bajo control</li>
                    <li>Dejar de fumar</li>
                    <li>Realizar ejercicio regularmente</li>
                    <li>Mantener un peso saludable</li>
                    <li>Asistir a todas las citas de seguimiento con el oftalmólogo</li>
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
                      <li>Informe oftalmológico detallado que demuestre la afectación retiniana</li>
                      <li>Historial de diabetes mal controlada</li>
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
                      <li>Ceguera legal o casi total</li>
                      <li>Complicaciones graves como desprendimiento de retina traccional</li>
                      <li>Informes médicos detallados que justifiquen la incapacidad absoluta</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Documentación necesaria:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Informes oftalmológicos completos con evolución de la enfermedad</li>
                    <li>Pruebas diagnósticas (OCT, angiografía, campo visual, fotografías de fondo de ojo)</li>
                    <li>Historia clínica detallada de la diabetes y sus complicaciones</li>
                    <li>Informe de baja visión si procede</li>
                    <li>Informe del oftalmólogo especialista en retina</li>
                    <li>Informe del endocrinólogo sobre el control metabólico</li>
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
                      href="https://www.sediabetes.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Sociedad Española de Diabetes (SED)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.fundaciondiabetes.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Fundación para la Diabetes
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
                  <li>Audiolibros</li>
                  <li>Dispositivos de asistencia para la movilidad</li>
                  <li>Aplicaciones de lectura de pantalla</li>
                  <li>Teclados de letras grandes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RetinopatiaDiabetica;
