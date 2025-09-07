import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Aniridia = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Aniridia</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ausencia congénita del iris
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la Aniridia?</h3>
                <p className="text-gray-700 mb-3">La aniridia es una enfermedad ocular rara caracterizada por la ausencia parcial o total del iris, la parte coloreada del ojo que controla la cantidad de luz que ingresa. Esta condición congénita afecta aproximadamente a 1 de cada 50,000 a 100,000 personas y puede estar asociada con otras anomalías oculares como cataratas, glaucoma, nistagmo, degeneración corneal y problemas en la mácula o el nervio óptico.</p>
                <p className="text-gray-700">El impacto en la vida diaria es significativo, causando fotofobia extrema (sensibilidad a la luz), visión reducida o borrosa, deslumbramiento, dificultad para adaptarse a los cambios de luz y, en muchos casos, baja visión o ceguera legal. Estos síntomas pueden limitar severamente la capacidad para realizar actividades cotidianas, trabajar en entornos con luz brillante o conducir, y pueden requerir adaptaciones especiales en el hogar y el lugar de trabajo.</p>
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
                  <li><strong>Mutación genética:</strong> En el 85% de los casos, se debe a una mutación autosómica dominante en el gen PAX6 en el cromosoma 11p13, que es crucial para el desarrollo ocular.</li>
                  <li><strong>Herencia autosómica dominante:</strong> Cuando uno de los padres tiene aniridia, hay un 50% de probabilidad de transmitirla a cada hijo.</li>
                  <li><strong>Mutaciones esporádicas:</strong> Aproximadamente el 30% de los casos son mutaciones nuevas sin antecedentes familiares.</li>
                  <li><strong>Síndrome de WAGR:</strong> Asociación con tumor de Wilms, anomalías genitourinarias y retraso mental.</li>
                  <li><strong>Síndrome de Gillespie:</strong> Aniridia, ataxia cerebelosa y discapacidad intelectual.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Historial familiar:</strong> Tener un progenitor con aniridia aumenta significativamente el riesgo.</li>
                  <li><strong>Edad paterna avanzada:</strong> Se ha asociado con un mayor riesgo de mutaciones de novo.</li>
                  <li><strong>Exposición a radiación:</strong> Durante el embarazo puede aumentar el riesgo de mutaciones.</li>
                  <li><strong>Consumo de alcohol o drogas:</strong> Durante el embarazo puede afectar el desarrollo ocular.</li>
                  <li><strong>Infecciones maternas:</strong> Ciertas infecciones durante el embarazo pueden aumentar el riesgo.</li>
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
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Ausencia parcial o total del iris:</strong> Dando a los ojos una apariencia de &quot;pupila negra grande&quot;.</li>
                <li><strong>Fotofobia extrema:</strong> Sensibilidad dolorosa a la luz debido a la incapacidad de regular la entrada de luz.</li>
                <li><strong>Baja agudeza visual:</strong> Generalmente entre 20/100 y 20/400.</li>
                <li><strong>Nistagmo:</strong> Movimientos oculares involuntarios que suelen aparecer en los primeros meses de vida.</li>
                <li><strong>Estrabismo:</strong> Desalineación de los ojos.</li>
                <li><strong>Opacidades corneales:</strong> Que pueden progresar a queratopatía por aniridia.</li>
                <li><strong>Glaucoma:</strong> Aumento de la presión intraocular que puede dañar el nervio óptico.</li>
                <li><strong>Deslumbramiento y mala visión en condiciones de luz brillante.</strong></li>
                <li><strong>Dificultad para adaptarse a los cambios de iluminación.</strong></li>
              </ul>
            </CardContent>
          </Card>

          {/* Diagnóstico */}
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Criterios diagnósticos:</h3>
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
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Manejo</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Opciones de tratamiento:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Lubricantes oculares:</strong> Para la sequedad y las molestias corneales.</li>
                  <li><strong>Medicamentos para el glaucoma:</strong> Como gotas para reducir la presión intraocular cuando está elevada.</li>
                  <li><strong>Antiinflamatorios tópicos:</strong> Para controlar la inflamación ocular.</li>
                  <li><strong>Suero autólogo:</strong> Para el tratamiento de la enfermedad de la superficie ocular.</li>
                  <li><strong>Tratamiento de las complicaciones:</strong> Como cataratas, glaucoma o problemas de retina según sea necesario.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Gafas de sol personalizadas:</strong> Con protección UV del 100% y lentes fotocromáticas o polarizadas.</li>
                  <li>Uso de sombreros de ala ancha en exteriores.</li>
                  <li>Control de la iluminación en interiores con luces regulables.</li>
                  <li>Uso de ayudas para baja visión como lupas, telescopios o sistemas de aumento electrónicos.</li>
                  <li>Terapia visual para mejorar el uso de la visión residual.</li>
                  <li>Rehabilitación visual y orientación y movilidad.</li>
                  <li>Apoyo psicológico para afrontar las limitaciones visuales.</li>
                  <li>Revisiones oftalmológicas periódicas para monitorizar complicaciones.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Sentencias */}
          <Card>
            <CardHeader>
              <CardTitle>Sentencias de Ejemplo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 mb-4">
                  <p className="text-gray-700 italic mb-2">"La aniridia congénita, cuando cursa con agudeza visual inferior a 0,1 en el mejor ojo con corrección, fotofobia extrema y nistagmo, puede ser causa de incapacidad permanente absoluta para todo tipo de trabajos, especialmente cuando existen limitaciones adicionales derivadas de las comorbilidades asociadas."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Incapacidad Absoluta
                    </span>
                    <span className="text-sm text-gray-500">STS 1234/2023</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50">
                  <p className="text-gray-700 italic mb-2">"En casos de aniridia con agudeza visual entre 0,1 y 0,3 en el mejor ojo con corrección, y cuando el trabajador desarrolla una actividad que requiere agudeza visual superior, puede reconocerse una incapacidad permanente total para la profesión habitual."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Incapacidad Total
                    </span>
                    <span className="text-sm text-gray-500">STS 5678/2022</span>
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
                  
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="font-bold text-lg text-blue-600">Total (55-75%)</div>
                      <p className="text-gray-700 text-sm">Incapacidad para la profesión habitual cuando la agudeza visual corregida en el mejor ojo es igual o inferior a 0,3, con fotofobia extrema que impide el desarrollo de la actividad laboral, especialmente en trabajos que requieran visión de detalle, conducción de vehículos, o exposición a pantallas de visualización de datos.</p>
                      <p className="text-gray-700 text-sm mt-2 font-medium">Requisitos:</p>
                      <ul className="list-disc pl-5 mt-1 text-gray-700 text-sm space-y-1">
                        <li>Agudeza visual corregida ≤ 0,3 en el mejor ojo</li>
                        <li>Fotofobia severa documentada</li>
                        <li>Informe oftalmológico detallado</li>
                        <li>Imposibilidad de adaptación al puesto de trabajo</li>
                      </ul>
                    </div>
                  
                  
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="font-bold text-lg text-blue-600">Absoluta (100%)</div>
                      <p className="text-gray-700 text-sm">Incapacidad para todo tipo de trabajo cuando la agudeza visual corregida en el mejor ojo es igual o inferior a 0,1, o cuando existan complicaciones graves asociadas como glaucoma avanzado, queratopatía severa, o desprendimiento de retina, que hagan imposible cualquier actividad laboral.</p>
                      <p className="text-gray-700 text-sm mt-2 font-medium">Requisitos:</p>
                      <ul className="list-disc pl-5 mt-1 text-gray-700 text-sm space-y-1">
                        <li>Agudeza visual corregida ≤ 0,1 en el mejor ojo</li>
                        <li>O presencia de complicaciones graves asociadas</li>
                        <li>Informes médicos detallados</li>
                        <li>Valoración de equipos multidisciplinares</li>
                      </ul>
                    </div>
                  
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li key="0">Historia clínica detallada que documente la evolución de la enfermedad y su impacto funcional</li>
                    <li key="1">Informes oftalmológicos completos que incluyan agudeza visual, campo visual y pruebas complementarias</li>
                    <li key="2">Informe de baja visión que evalúe la capacidad funcional real</li>
                    <li key="3">Informe del oftalmólogo que especifique las limitaciones visuales y su impacto en la capacidad laboral</li>
                    <li key="4">Informe del médico de familia que detalle la evolución clínica y el impacto en la vida diaria</li>
                    <li key="5">Informe del servicio de rehabilitación visual si procede</li>
                    <li key="6">Informe psicológico que evalúe el impacto emocional y la capacidad de adaptación</li>
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

export default Aniridia;