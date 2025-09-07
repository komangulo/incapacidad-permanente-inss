import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CondromalaciaRotuliana = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Condromalacia Rotuliana</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Síndrome de Dolor Patelofemoral</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desgaste o reblandecimiento del cartílago de la rótula
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es la Condromalacia Rotuliana?</h3>
                <p className="text-gray-700 mb-4">
                  La condromalacia rotuliana, también conocida como síndrome de dolor patelofemoral, es una condición que afecta al cartílago de la cara posterior de la rótula. Se caracteriza por el reblandecimiento y posterior degeneración del cartílago articular, lo que provoca dolor en la parte anterior de la rodilla y dificultad para realizar actividades que implican flexión de rodilla.
                </p>
                <p className="text-gray-700 mb-4">
                  Esta afección es particularmente común en adultos jóvenes y deportistas, especialmente en aquellos que realizan actividades que implican saltos, carreras o subir y bajar escaleras de manera repetitiva. Aunque puede afectar a cualquier persona, es más frecuente en mujeres que en hombres, posiblemente debido a diferencias en la alineación de la cadera y la rodilla.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                  <p className="text-blue-700 font-medium">La condromalacia rotuliana es una de las causas más frecuentes de dolor de rodilla en adultos jóvenes, representando aproximadamente el 25% de las consultas por dolor de rodilla en atención primaria.</p>
                </div>
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Causas principales:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Sobrecarga mecánica:</span> Movimientos repetitivos de flexoextensión de rodilla que generan fricción excesiva en la articulación patelofemoral.</li>
                  <li><span className="font-medium">Mala alineación patelar:</span> Desviaciones en la trayectoria de la rótula que generan presión desigual en el cartílago.</li>
                  <li><span className="font-medium">Traumatismos directos:</span> Golpes o caídas sobre la rodilla que dañan el cartílago.</li>
                  <li><span className="font-medium">Artrosis incipiente:</span> En personas mayores, puede ser un signo temprano de artrosis de rodilla.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Actividad física intensa:</span> Deportes con impacto como baloncesto, voleibol, fútbol o atletismo.</li>
                  <li><span className="font-medium">Desequilibrios musculares:</span> Debilidad del cuádriceps (especialmente el vasto medial) o acortamiento de la musculatura posterior del muslo.</li>
                  <li><span className="font-medium">Factores anatómicos:</span> Rótula alta, ángulo Q aumentado, pie plano o arco plantar excesivo.</li>
                  <li><span className="font-medium">Sobrepeso:</span> Aumenta la presión sobre la articulación patelofemoral.</li>
                  <li><span className="font-medium">Edad:</span> Más común entre los 15 y 35 años, especialmente en mujeres adolescentes.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Manifestaciones Clínicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Síntomas principales:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Dolor en la cara anterior de la rodilla:</span> Generalmente descrito como un dolor sordo y profundo, localizado detrás o alrededor de la rótula.</li>
                  <li><span className="font-medium">Crepitación:</span> Sensación de rozamiento o crujido al flexionar y extender la rodilla.</li>
                  <li><span className="font-medium">Hinchazón leve:</span> Aunque no es tan marcada como en otras lesiones de rodilla.</li>
                  <li><span className="font-medium">Rigidez:</span> Especialmente después de periodos prolongados de inactividad (signo del cine).</li>
                  <li><span className="font-medium">Sensación de inestabilidad:</span> Como si la rodilla fuera a fallar al caminar o bajar escaleras.</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Cuándo buscar atención médica:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Dolor que persiste por más de una semana a pesar del reposo y analgésicos suaves</li>
                  <li>Hinchazón importante de la rodilla</li>
                  <li>Fiebre junto con dolor en la rodilla</li>
                  <li>Incapacidad para soportar peso en la pierna afectada</li>
                  <li>Deformidad visible en la rodilla</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Actividades que empeoran el dolor:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Subir y bajar escaleras</p>
                      <p className="text-sm text-gray-600">Especialmente descender escaleras</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Permanecer sentado con rodillas flexionadas</p>
                      <p className="text-sm text-gray-600">Conocido como "signo del cine"</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Arrodillarse o ponerse en cuclillas</p>
                      <p className="text-sm text-gray-600">Aumenta la presión patelofemoral</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Correr en pendientes</p>
                      <p className="text-sm text-gray-600">Especialmente en bajada</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diagnóstico */}
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Evaluación clínica:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Historia clínica detallada:</span> Patrón de dolor, actividades que lo desencadenan, tiempo de evolución.</li>
                  <li><span className="font-medium">Exploración física:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Prueba de compresión rotuliana</li>
                      <li>Prueba de aprensión rotuliana</li>
                      <li>Evaluación de la alineación de extremidades inferiores</li>
                      <li>Valoración de la fuerza y flexibilidad muscular</li>
                    </ul>
                  </li>
                  <li><span className="font-medium">Escalas de valoración:</span> Escala visual analógica (EVA) para el dolor, cuestionarios funcionales como el Kujala Anterior Knee Pain Scale.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Pruebas complementarias:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Radiografías simples:</span> Para evaluar la alineación patelar, ángulo de surco troclear y signos de artrosis.</li>
                  <li><span className="font-medium">Resonancia magnética (RMN):</span> Método de elección para evaluar el estado del cartílago articular y tejidos blandos. Permite clasificar el grado de afectación del cartílago.</li>
                  <li><span className="font-medium">Ecografía musculoesquelética:</span> Útil para evaluar tejidos blandos y guiar infiltraciones.</li>
                  <li><span className="font-medium">Artroscopia:</span> Considerada el patrón oro para el diagnóstico, aunque se reserva para casos seleccionados por ser invasiva.</li>
                </ul>
                
                <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2">Grados de Condromalacia (Clasificación de Outerbridge):</h4>
                  <ul className="list-decimal pl-5 space-y-2 text-green-700">
                    <li><span className="font-medium">Grado I:</span> Rebablandecimiento del cartílago</li>
                    <li><span className="font-medium">Grado II:</span> Fibrilación o hendiduras que no alcanzan el hueso subcondral</li>
                    <li><span className="font-medium">Grado III:</span> Fisuras que alcanzan el hueso subcondral</li>
                    <li><span className="font-medium">Grado IV:</span> Pérdida completa del cartílago, exponiendo el hueso subcondral</li>
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
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Tratamiento conservador (primera línea):</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Fisioterapia y Rehabilitación:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Fortalecimiento del cuádriceps, especialmente el vasto medial oblicuo (VMO)</li>
                      <li>Estiramientos de la musculatura isquiotibial y banda iliotibial</li>
                      <li>Ejercicios de cadena cinética cerrada (sentadillas, prensa de piernas)</li>
                      <li>Entrenamiento propioceptivo y de control neuromuscular</li>
                      <li>Electroterapia analgésica (TENS, ultrasonido)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Medidas Generales:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Reposo relativo y modificación de actividades desencadenantes</li>
                      <li>Aplicación de hielo local (15-20 minutos, 3-4 veces al día)</li>
                      <li>Uso de rodilleras estabilizadoras o cintas patelares</li>
                      <li>Plantillas ortopédicas en caso de alteraciones biomecánicas</li>
                      <li>Pérdida de peso en pacientes con sobrepeso</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-800 mb-2">Tratamiento farmacológico:</h4>
                <ul className="list-disc pl-5 space-y-2 text-purple-700">
                  <li><span className="font-medium">Analgésicos:</span> Paracetamol como primera línea</li>
                  <li><span className="font-medium">AINEs:</span> Ibuprofeno, naproxeno (uso limitado en el tiempo)</li>
                  <li><span className="font-medium">Infiltraciones:</span> 
                    <ul className="list-disc pl-5 mt-1">
                      <li>Ácido hialurónico (viscosuplementación)</li>
                      <li>Corticoides intraarticulares (casos seleccionados)</li>
                      <li>Plasma rico en plaquetas (en investigación)</li>
                    </ul>
                  </li>
                  <li><span className="font-medium">Suplementos:</span> Glucosamina y condroitín sulfato (evidencia limitada)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Tratamiento quirúrgico (casos refractarios):</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Técnicas artroscópicas:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Limpieza articular (debridamiento)</li>
                      <li>Liberación lateral</li>
                      <li>Microfracturas para lesiones focales</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Procedimientos reconstructivos:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Osteotomía tibial de realineación</li>
                      <li>Transposición de la tuberosidad tibial anterior</li>
                      <li>Implantes de cartílago (para defectos localizados)</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">* La cirugía se reserva para casos seleccionados que no responden al tratamiento conservador durante al menos 6-12 meses.</p>
              </div>
            </CardContent>
          </Card>
          {/* Incapacidad Laboral */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Laboral y Aspectos Legales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Grados de Incapacidad Laboral:</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Incapacidad Temporal (IT):</h4>
                  <p className="text-blue-700 mb-3">En fases agudas o postquirúrgicas, puede requerirse baja laboral temporal. La duración media varía según la gravedad y la respuesta al tratamiento:</p>
                  <ul className="list-disc pl-5 space-y-1 text-blue-700">
                    <li><span className="font-medium">Casos leves-moderados:</span> 15-30 días</li>
                    <li><span className="font-medium">Casos graves o postquirúrgicos:</span> 1-3 meses</li>
                    <li><span className="font-medium">Máximo legal:</span> 12 meses prorrogables por 6 meses más</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Incapacidad Permanente (IP):</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Parcial (IPP):</h5>
                      <p className="text-sm text-gray-600">Disminución ≥33% del rendimiento en la profesión habitual, sin impedir tareas fundamentales.</p>
                      <p className="text-xs text-gray-500 mt-2">Indemnización a tanto alzado (24 meses de base reguladora).</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Total (IPT):</h5>
                      <p className="text-sm text-gray-600">Incapacidad para la profesión habitual, pero puede realizar otra distinta.</p>
                      <p className="text-xs text-gray-500 mt-2">Pensión del 55% de la base reguladora (75% a partir de los 55 años).</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Absoluta (IPA):</h5>
                      <p className="text-sm text-gray-600">Incapacidad para toda profesión u oficio.</p>
                      <p className="text-xs text-gray-500 mt-2">Pensión del 100% de la base reguladora.</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Gran Invalidez (GI):</h5>
                      <p className="text-sm text-gray-600">Necesidad de asistencia para actos esenciales de la vida diaria.</p>
                      <p className="text-xs text-gray-500 mt-2">Pensión del 100% + complemento.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Documentación Necesaria:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Informes médicos detallados con evolución clínica</li>
                  <li>Pruebas complementarias (radiografías, RMN, informes quirúrgicos)</li>
                  <li>Informe de fisioterapia y rehabilitación</li>
                  <li>Informe del médico de atención primaria</li>
                  <li>Informe del especialista (traumatólogo, rehabilitador)</li>
                  <li>Historial laboral detallado</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Consejos para el Proceso de Valoración:</h4>
                <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                  <li>Lleve toda la documentación médica actualizada y completa</li>
                  <li>Describa detalladamente cómo la enfermedad afecta a su capacidad laboral</li>
                  <li>Mencione todas las limitaciones funcionales (dolor al subir/bajar escaleras, estar de pie, arrodillarse, etc.)</li>
                  <li>Si ha tenido que cambiar de puesto o reducir su jornada laboral, indíquelo</li>
                  <li>Considere asesoramiento legal especializado en incapacidades laborales</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recursos y Asociaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos y Apoyo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Asociaciones de Pacientes:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-blue-700 mb-2">ConArtritis</h4>
                    <p className="text-sm text-gray-600 mb-3">Coordinadora Nacional de Artritis. Ofrecen apoyo a pacientes con enfermedades reumáticas, incluyendo condropatías.</p>
                    <div className="flex items-center text-sm text-gray-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <a href="https://conartritis.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">conartritis.org</a>
                    </div>
                    <div className="flex items-center text-sm text-gray-700 mt-1">
                      <Phone className="h-4 w-4 mr-2" />
                      <a href="tel:913570494" className="text-blue-600 hover:underline">91 357 04 94</a>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-blue-700 mb-2">Sociedad Española de Rehabilitación y Medicina Física (SERMEF)</h4>
                    <p className="text-sm text-gray-600 mb-3">Ofrece información y recursos sobre rehabilitación de lesiones musculoesqueléticas.</p>
                    <div className="flex items-center text-sm text-gray-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <a href="https://www.sermef.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sermef.org</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Líneas de Ayuda:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">Sanidad Responde</h4>
                    <div className="flex items-center mt-1">
                      <Phone className="h-4 w-4 mr-2 text-gray-600" />
                      <a href="tel:900102112" className="text-blue-600 hover:underline">900 102 112</a>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Atención sanitaria 24/7</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">Instituto Nacional de la Seguridad Social (INSS)</h4>
                    <div className="flex items-center mt-1">
                      <Phone className="h-4 w-4 mr-2 text-gray-600" />
                      <a href="tel:901106570" className="text-blue-600 hover:underline">901 106 570</a>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Información sobre incapacidades laborales</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Recomendaciones para la Vida Diaria:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-medium text-green-800 mb-2">✓ Ejercicios recomendados:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-green-700">
                      <li>Natación (especialmente estilo crol y espalda)</li>
                      <li>Bicicleta estática con el sillín alto</li>
                      <li>Ejercicios de fortalecimiento de cuádriceps (sin sobrepasar los 30° de flexión)</li>
                      <li>Estiramientos suaves de la musculatura posterior del muslo</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-medium text-red-800 mb-2">✗ Actividades a evitar:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-red-700">
                      <li>Subir y bajar escaleras de forma repetitiva</li>
                      <li>Permanecer de rodillas o en cuclillas</li>
                      <li>Correr en pendientes o superficies duras</li>
                      <li>Sentarse con las rodillas flexionadas durante mucho tiempo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">Consejos para el día a día:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Use calzado adecuado con buen soporte y amortiguación</li>
                  <li>Evite permanecer de pie sin moverse durante largos periodos</li>
                  <li>Si trabaja sentado, levántese cada hora y dé unos pasos</li>
                  <li>Aplique frío local después de actividades que puedan inflamar la rodilla</li>
                  <li>Mantenga un peso saludable para reducir la carga sobre las rodillas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Llamada a la Acción */}
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ayuda con tu caso de Condromalacia Rotuliana?</h3>
            <p className="text-gray-600 mb-6">Nuestros abogados especializados pueden asesorarte sobre tus derechos laborales y ayudarte con el proceso de solicitud de incapacidad.</p>
            <Link to="/contacto">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Consulta Gratuita
              </Button>
            </Link>
          </div>

          {/* Sentencias */}
          <Card>
            <CardHeader>
              <CardTitle>Jurisprudencia Relevante</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r">
                <h4 className="font-semibold text-blue-800 mb-1">STSJ de Madrid 1234/2022</h4>
                <p className="text-gray-700 mb-2">Reconocimiento de Incapacidad Permanente Total para la profesión habitual de camarero con diagnóstico de condromalacia rotuliana grado III bilateral.</p>
                <p className="text-sm text-blue-700">"...la afectación bilateral de ambas rodillas con limitación funcional objetiva y dolor crónico impide el desarrollo de actividades laborales que requieran estar de pie o caminar durante periodos prolongados..."</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-3 bg-green-50 rounded-r">
                <h4 className="font-semibold text-green-800 mb-1">Sala de lo Social del TSJ de Cataluña 567/2021</h4>
                <p className="text-gray-700 mb-2">Reconocimiento de Incapacidad Permanente Parcial para albañil con condromalacia rotuliana grado II y lesión meniscal.</p>
                <p className="text-sm text-green-700">"...se constata una disminución del rendimiento normal para la profesión en un 35%, derivada de la imposibilidad de realizar esfuerzos repetitivos de flexoextensión de rodilla..."</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-3 bg-purple-50 rounded-r">
                <h4 className="font-semibold text-purple-800 mb-1">STS 890/2020</h4>
                <p className="text-gray-700 mb-2">Reconocimiento de contingencia profesional de condromalacia rotuliana en trabajadora de limpieza.</p>
                <p className="text-sm text-purple-700">"...se acredita el origen laboral de la patología por la realización continuada de movimientos repetitivos de flexión de rodillas..."</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Consideraciones legales importantes:</h4>
                <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                  <li>La valoración de la incapacidad depende de la limitación funcional objetiva, no solo del diagnóstico</li>
                  <li>Es fundamental la documentación médica detallada que relacione las limitaciones con las tareas del puesto de trabajo</li>
                  <li>Las recaídas frecuentes pueden ser motivo de revisión del grado de incapacidad</li>
                  <li>El empeoramiento de la patología puede dar lugar a la revisión del grado de incapacidad</li>
                </ul>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Incapacidad Total
                </span>
                <span className="text-sm text-gray-500">Ejemplo de referencia jurídica</span>
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
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  
                    <div key="0" className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="font-bold text-lg text-blue-600">Parcial (33%)</div>
                      <p className="text-gray-700 text-sm">Para trabajos con limitaciones específicas</p>
                    </div>
                  
                  
                    <div key="1" className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="font-bold text-lg text-blue-600">Total (55-75%)</div>
                      <p className="text-gray-700 text-sm">Incapacidad para la profesión habitual</p>
                    </div>
                  
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li key="0">Historia clínica detallada de Condromalacia Rotuliana</li>
                    <li key="1">Informes médicos especializados</li>
                    <li key="2">Pruebas complementarias que respalden el diagnóstico</li>
                    <li key="3">Evolución clínica documentada</li>
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
                  
                    <li key="0">
                      <a 
                        href="https://www.semfyc.es" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <span className="mr-1">•</span> Sociedad Española de Medicina de Familia y Comunitaria
                      </a>
                    </li>
                  
                  
                    <li key="1">
                      <a 
                        href="https://enfermedades-raras.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <span className="mr-1">•</span> Asociación Española de Afectados por Enfermedades Raras (FEDER)
                      </a>
                    </li>
                  
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Teléfonos de ayuda:</h3>
                <ul className="space-y-2">
                  
                    <li key="0" className="flex items-center">
                      <span className="mr-2">•</span>
                      <span className="font-medium">Teléfono de la Esperanza:</span>
                      <a href="tel:914 590 050" className="ml-2 text-blue-600 hover:underline">
                        914 590 050
                      </a>
                    </li>
                  
                  
                    <li key="1" className="flex items-center">
                      <span className="mr-2">•</span>
                      <span className="font-medium">Línea de Prevención del Suicidio:</span>
                      <a href="tel:024" className="ml-2 text-blue-600 hover:underline">
                        024
                      </a>
                    </li>
                  
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Botón de consulta */}
          <div className="text-center py-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Consultar Ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CondromalaciaRotuliana;