import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Espondilosisdegenerativa = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Espondilosis Degenerativa</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Enfermedad Degenerativa de la Columna Vertebral</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Progresivo deterioro de los discos intervertebrales y articulaciones de la columna
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es la Espondilosis Degenerativa?</h3>
                <p className="text-gray-700 mb-4">
                  La espondilosis degenerativa es un trastorno crónico de la columna vertebral caracterizado por el desgaste progresivo de los discos intervertebrales y las articulaciones facetarias. Esta condición es una de las causas más comunes de dolor de espalda crónico en adultos mayores y se considera parte del proceso normal de envejecimiento de la columna vertebral.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                  <p className="text-blue-700 font-medium">Aproximadamente el 85% de las personas mayores de 60 años muestran signos de espondilosis en las radiografías, aunque no todas experimentan síntomas significativos.</p>
                </div>
                <p className="text-gray-700">
                  La degeneración progresiva puede provocar la formación de osteofitos (espolones óseos), estrechamiento del canal vertebral (estenosis) y reducción del espacio discal, lo que puede comprimir las raíces nerviosas o la médula espinal, causando dolor y limitación funcional.
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
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Envejecimiento:</span> Degeneración natural de los discos intervertebrales que pierden hidratación y elasticidad con la edad.</li>
                  <li><span className="font-medium">Desgaste mecánico:</span> Sobrecarga repetitiva de las articulaciones vertebrales a lo largo de los años.</li>
                  <li><span className="font-medium">Enfermedad discal degenerativa:</span> Pérdida de la integridad estructural de los discos intervertebrales.</li>
                  <li><span className="font-medium">Artrosis facetaria:</span> Degeneración de las pequeñas articulaciones posteriores de la columna.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Edad avanzada:</span> Mayor prevalencia a partir de los 40 años.</li>
                  <li><span className="font-medium">Obesidad:</span> Aumenta la carga sobre la columna vertebral.</li>
                  <li><span className="font-medium">Trabajos físicamente exigentes:</span> Levantamiento de peso repetitivo o vibración constante.</li>
                  <li><span className="font-medium">Sedentarismo:</span> Debilita los músculos de soporte de la columna.</li>
                  <li><span className="font-medium">Traumatismos previos:</span> Lesiones vertebrales pueden acelerar el proceso degenerativo.</li>
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
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas principales:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Dolor lumbar crónico:</span> Empeora con el movimiento y mejora con el reposo</li>
                    <li><span className="font-medium">Rigidez matutina:</span> Dificultad para levantarse por la mañana que mejora con el movimiento</li>
                    <li><span className="font-medium">Limitación de la movilidad:</span> Dificultad para agacharse, girar o mantener posturas prolongadas</li>
                    <li><span className="font-medium">Dolor irradiado:</span> Hacia glúteos o muslos (ciática) por compresión nerviosa</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Síntomas de alarma que requieren atención médica inmediata:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                    <li>Pérdida de control de esfínteres</li>
                    <li>Debilidad progresiva en piernas o brazos</li>
                    <li>Pérdida de sensibilidad en la región perianal</li>
                    <li>Dolor nocturno que no mejora con el reposo</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Síntomas según la localización:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Columna cervical:</span> Dolor de cuello, dolor de cabeza, mareos, hormigueo en brazos</li>
                    <li><span className="font-medium">Columna lumbar:</span> Dolor lumbar, ciática, debilidad en piernas</li>
                    <li><span className="font-medium">Columna dorsal:</span> Dolor interescapular, rigidez torácica</li>
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
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Evaluación clínica:</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li><span className="font-medium">Historia clínica detallada:</span> Inicio, evolución, factores agravantes y atenuantes del dolor.</li>
                  <li><span className="font-medium">Exploración física completa:</span>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                      <li>Inspección de la postura y alineación vertebral</li>
                      <li>Palpación de puntos dolorosos y contracturas musculares</li>
                      <li>Evaluación de la movilidad activa y pasiva de la columna</li>
                      <li>Pruebas neurológicas (reflejos, fuerza muscular, sensibilidad)</li>
                      <li>Test de elevación de la pierna recta (Lasegue) para valorar irritación radicular</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Pruebas diagnósticas:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Estudios de imagen:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><span className="font-medium">Radiografías simples:</span> Para evaluar alineación, osteofitos y espacio discal</li>
                      <li><span className="font-medium">Resonancia Magnética (RMN):</span> Evalúa tejidos blandos, médula ósea y compresión nerviosa</li>
                      <li><span className="font-medium">Tomografía Computarizada (TAC):</span> Mejor visualización ósea y estenosis del canal</li>
                      <li><span className="font-medium">Electromiografía (EMG):</span> Para evaluar daño en nervios periféricos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Criterios diagnósticos según la Sociedad Española de Reumatología:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-blue-700">
                      <li>Dolor lumbar crónico de más de 3 meses de evolución</li>
                      <li>Signos de degeneración en pruebas de imagen</li>
                      <li>Exclusión de otras causas de dolor lumbar</li>
                      <li>Correlación clínico-radiológica</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Opciones de Tratamiento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tratamiento conservador:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Medicación:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Analgésicos (paracetamol, tramadol)</li>
                      <li>Antiinflamatorios no esteroideos (AINEs)</li>
                      <li>Relajantes musculares</li>
                      <li>Antidepresivos tricíclicos para dolor neuropático</li>
                      <li>Infiltraciones epidurales o facetarias</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Fisioterapia y Rehabilitación:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Ejercicios de fortalecimiento del core</li>
                      <li>Estiramientos de la musculatura lumbar y pélvica</li>
                      <li>Hidroterapia y ejercicios en piscina</li>
                      <li>Terapia manual y masoterapia</li>
                      <li>Escuela de espalda</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Recomendaciones para el manejo del dolor:</h4>
                <ul className="list-disc pl-5 space-y-1 text-green-700">
                  <li>Mantener una postura adecuada durante las actividades diarias</li>
                  <li>Evitar permanecer en la misma posición durante mucho tiempo</li>
                  <li>Realizar pausas activas cada 45-60 minutos</li>
                  <li>Usar calzado adecuado con buen soporte</li>
                  <li>Mantener un peso saludable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tratamiento quirúrgico:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Indicaciones:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Déficit neurológico progresivo</li>
                      <li>Inestabilidad vertebral significativa</li>
                      <li>Estenosis del canal vertebral grave con claudicación neurógena</li>
                      <li>Fracaso del tratamiento conservador después de 3-6 meses</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Técnicas quirúrgicas:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><span className="font-medium">Descompresión:</span> Laminectomía o foraminotomía para aliviar la presión sobre nervios</li>
                      <li><span className="font-medium">Fusión espinal:</span> Artrodesis para estabilizar segmentos vertebrales</li>
                      <li><span className="font-medium">Prótesis discales:</span> En casos seleccionados de enfermedad discal degenerativa</li>
                      <li><span className="font-medium">Técnicas mínimamente invasivas:</span> Para reducir el daño tisular y acelerar la recuperación</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sentencias */}
          <Card>
            <CardHeader>
              <CardTitle>Sentencias de Ejemplo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
                <div key="0" className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <p className="text-gray-700 italic mb-2">"Ejemplo de sentencia relacionada con Espondilosis degenerativa y su impacto en la capacidad laboral."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Incapacidad Total
                    </span>
                    <span className="text-sm text-gray-500">Ejemplo de referencia jurídica</span>
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
                    <li key="0">Historia clínica detallada de Espondilosis degenerativa</li>
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

export default Espondilosisdegenerativa;