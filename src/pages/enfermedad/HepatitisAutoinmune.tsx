import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const HepatitisAutoinmune = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hepatitis Autoinmune</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad hepática autoinmune
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la Hepatitis Autoinmune?</h3>
                <p className="text-gray-700 mb-3">La Hepatitis Autoinmune es una enfermedad crónica del hígado en la que el sistema inmunitario ataca por error a las células hepáticas, causando inflamación y daño hepático progresivo. Es más común en mujeres que en hombres y puede presentarse a cualquier edad, aunque es más frecuente en adultos jóvenes.</p>
                <p className="text-gray-700">Esta enfermedad puede causar fatiga crónica, ictericia, dolor abdominal y, en casos avanzados, cirrosis hepática e insuficiencia hepática, afectando significativamente la calidad de vida y la capacidad laboral.</p>
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
                  <li>Respuesta autoinmune anormal contra las células del hígado</li>
                  <li>Predisposición genética (asociada con ciertos genes del sistema HLA)</li>
                  <li>Factores desencadenantes como infecciones virales o exposición a ciertos medicamentos</li>
                  <li>Asociación con otras enfermedades autoinmunes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Sexo femenino (70-80% de los casos)</li>
                  <li>Edad entre 15-40 años o mayores de 60 años</li>
                  <li>Antecedentes familiares de enfermedades autoinmunes</li>
                  <li>Infecciones previas (como hepatitis A, B o C, virus de Epstein-Barr)</li>
                  <li>Uso de ciertos medicamentos (minociclina, nitrofurantoína, etc.)</li>
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
                <li>Fatiga intensa y debilidad</li>
                <li>Ictericia (coloración amarillenta de piel y ojos)</li>
                <li>Molestias abdominales en el cuadrante superior derecho</li>
                <li>Pérdida de apetito y de peso</li>
                <li>Náuseas y vómitos</li>
                <li>Dolor articular y muscular</li>
                <li>Picor en la piel (prurito)</li>
                <li>Orina oscura y heces pálidas</li>
                <li>En mujeres, ausencia de períodos menstruales</li>
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
                  <li>Análisis de sangre que muestren elevación de transaminasas (ALT, AST)</li>
                  <li>Presencia de autoanticuerpos (ANA, anti-LKM, anti-SLA/LP)</li>
                  <li>Elevación de inmunoglobulina G (IgG)</li>
                  <li>Biopsia hepática que muestre hepatitis de interfase</li>
                  <li>Exclusión de otras causas de hepatitis (víricas, tóxicas, etc.)</li>
                  <li>Puntuación según criterios diagnósticos internacionales</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Evaluación del grado de inflamación y fibrosis hepática</li>
                  <li>Detección de complicaciones como hipertensión portal o cirrosis</li>
                  <li>Búsqueda de enfermedades autoinmunes asociadas</li>
                  <li>Valoración del estado nutricional</li>
                  <li>Evaluación de comorbilidades</li>
                  <li>Diagnóstico diferencial con otras hepatopatías crónicas</li>
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
                  <li><strong>Corticoides:</strong> Prednisona o prednisolona como tratamiento inicial</li>
                  <li><strong>Inmunosupresores:</strong> Azatioprina, micofenolato o tacrolimus como tratamiento de mantenimiento</li>
                  <li><strong>Terapias biológicas:</strong> Rituximab en casos refractarios</li>
                  <li><strong>Suplementos:</strong> Vitamina D y calcio para prevenir osteoporosis inducida por esteroides</li>
                  <li><strong>Trasplante hepático:</strong> En casos de insuficiencia hepática terminal o cirrosis descompensada</li>
                  <li><strong>Tratamiento de complicaciones:</strong> Como hipertensión portal o encefalopatía hepática</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Dieta equilibrada y adecuada en proteínas</li>
                  <li>Abstinencia total de alcohol</li>
                  <li>Vacunación contra hepatitis A y B si no está inmunizado</li>
                  <li>Ejercicio regular adaptado a la condición física</li>
                  <li>Control del estrés y apoyo psicológico</li>
                  <li>Seguimiento periódico con análisis de función hepática y niveles de inmunoglobulina</li>
                  <li>Monitoreo de efectos secundarios de la medicación</li>
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
              
                <div key="0" className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                  <p className="text-gray-700 italic mb-2">"La Hepatitis Autoinmune en su forma grave, con brotes frecuentes que requieren tratamiento inmunosupresor continuado y que cursa con fatiga crónica incapacitante, puede suponer una limitación total para el desarrollo de la actividad laboral, especialmente cuando se asocia a complicaciones como cirrosis hepática o hipertensión portal que afectan significativamente a la calidad de vida del paciente."</p>
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
                    <li>Historia clínica detallada con al menos 12-24 meses de evolución</li>
                    <li>Informes de hepatología que documenten la gravedad y evolución</li>
                    <li>Pruebas analíticas seriadas (transaminasas, bilirrubina, albúmina, tiempo de protrombina)</li>
                    <li>Estudios de imagen (ecografía, elastografía, TAC o RMN hepática)</li>
                    <li>Resultados de biopsia hepática si se ha realizado</li>
                    <li>Informe sobre la respuesta al tratamiento y efectos secundarios</li>
                    <li>Valoración del impacto en la capacidad funcional y calidad de vida</li>
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

export default HepatitisAutoinmune;