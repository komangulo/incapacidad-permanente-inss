import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lupus = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lupus</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad autoinmune crónica
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es el Lupus?</h3>
                <p className="text-gray-700 mb-3">El Lupus Eritematoso Sistémico (LES) es una enfermedad autoinmune crónica que puede afectar múltiples órganos y sistemas del cuerpo. En esta condición, el sistema inmunológico ataca por error los tejidos sanos, causando inflamación y daño en diversas partes del cuerpo, incluyendo la piel, articulaciones, riñones, cerebro, células sanguíneas, pulmones y corazón.</p>
                <p className="text-gray-700">El Lupus puede causar fatiga extrema, dolor crónico, daño orgánico progresivo y una significativa reducción en la calidad de vida, afectando la capacidad para trabajar y realizar actividades cotidianas, especialmente durante los brotes de la enfermedad.</p>
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
                  <li>Respuesta autoinmune anormal contra los propios tejidos</li>
                  <li>Predisposición genética (asociada con múltiples genes)</li>
                  <li>Factores hormonales (mayor prevalencia en mujeres en edad fértil)</li>
                  <li>Infecciones virales que pueden desencadenar la enfermedad</li>
                  <li>Exposición a la luz solar (fotosensibilidad)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Sexo femenino (90% de los casos)</li>
                  <li>Edad entre 15-45 años</li>
                  <li>Antecedentes familiares de lupus u otras enfermedades autoinmunes</li>
                  <li>Exposición a la luz solar</li>
                  <li>Consumo de ciertos medicamentos (lupus inducido por fármacos)</li>
                  <li>Tabaquismo</li>
                  <li>Estrés físico o emocional</li>
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
                <li>Erupción malar en forma de mariposa en la cara</li>
                <li>Dolor e inflamación articular (artritis)</li>
                <li>Fiebre recurrente sin causa aparente</li>
                <li>Fatiga extrema y debilidad</li>
                <li>Fotosensibilidad (erupciones cutáneas por exposición solar)</li>
                <li>Úlceras bucales o nasales</li>
                <li>Pérdida de cabello</li>
                <li>Dedos de las manos o pies pálidos o morados con el frío o estrés (fenómeno de Raynaud)</li>
                <li>Dolor torácico al respirar profundamente (pleuresía)</li>
                <li>Problemas renales (nefritis lúpica)</li>
                <li>Problemas neurológicos (convulsiones, psicosis)</li>
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
                  <li>Análisis de anticuerpos antinucleares (ANA) - positivo en la mayoría de los casos</li>
                  <li>Anticuerpos anti-ADN de doble cadena (anti-dsDNA) - altamente específicos</li>
                  <li>Anticuerpos anti-Sm - específicos del LES</li>
                  <li>Niveles bajos de complemento (C3, C4, CH50)</li>
                  <li>Biopsia de riñón en casos de nefritis lúpica</li>
                  <li>Cumplimiento de los criterios de clasificación SLICC o ACR/EULAR</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Evaluación de la actividad de la enfermedad (índices como SLEDAI o BILAG)</li>
                  <li>Evaluación de daño orgánico acumulado (índice SLICC/ACR)</li>
                  <li>Análisis de sangre completos (hemograma, función renal, hepática)</li>
                  <li>Análisis de orina para detectar proteinuria o hematuria</li>
                  <li>Estudios de imagen (radiografías, ecografías, TAC o RMN según indicación)</li>
                  <li>Evaluación de comorbilidades y factores de riesgo cardiovascular</li>
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
                  <li><strong>Antiinflamatorios no esteroideos (AINEs):</strong> Para el dolor articular y la inflamación leve</li>
                  <li><strong>Antipalúdicos:</strong> Hidroxicloroquina para síntomas cutáneos y articulares</li>
                  <li><strong>Corticoides:</strong> Para controlar brotes agudos y manifestaciones graves</li>
                  <li><strong>Inmunosupresores:</strong> Metotrexato, azatioprina, micofenolato para casos moderados a graves</li>
                  <li><strong>Biológicos:</strong> Belimumab, rituximab para casos refractarios</li>
                  <li><strong>Anticoagulantes:</strong> En pacientes con síndrome antifosfolípido</li>
                  <li><strong>Trasplante renal:</strong> En casos de insuficiencia renal terminal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Protección solar estricta (ropa protectora, filtros solares de alto factor)</li>
                  <li>Dieta equilibrada, rica en ácidos grasos omega-3</li>
                  <li>Ejercicio regular de bajo impacto para mantener la movilidad articular</li>
                  <li>Evitar el tabaco y limitar el consumo de alcohol</li>
                  <li>Vacunación según recomendación médica (evitando vacunas con virus vivos)</li>
                  <li>Control del estrés y apoyo psicológico</li>
                  <li>Descanso adecuado y manejo de la fatiga</li>
                  <li>Revisiones médicas periódicas para monitorizar la enfermedad y efectos secundarios del tratamiento</li>
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
                  <p className="text-gray-700 italic mb-2">"El Lupus Eritematoso Sistémico en su forma grave, con afectación multiorgánica, brotes frecuentes que requieren tratamiento inmunosupresor continuado y que cursa con fatiga crónica incapacitante, dolor articular persistente, nefropatía lúpica y manifestaciones neuropsiquiátricas, puede suponer una limitación absoluta para el desarrollo de cualquier actividad laboral, especialmente cuando se asocia a complicaciones como insuficiencia renal crónica, hipertensión arterial refractaria o enfermedad cardiovascular que afectan significativamente a la calidad de vida del paciente."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Incapacidad Absoluta
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
                      <div className="font-bold text-lg text-blue-600">Total (55-75%)</div>
                      <p className="text-gray-700 text-sm">Incapacidad para la profesión habitual</p>
                    </div>
                  
                  
                    <div key="1" className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="font-bold text-lg text-blue-600">Absoluta (100%)</div>
                      <p className="text-gray-700 text-sm">Incapacidad para todo trabajo</p>
                    </div>
                  
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Historia clínica detallada con al menos 12-24 meses de evolución</li>
                    <li>Informes de reumatología que documenten la gravedad y evolución</li>
                    <li>Pruebas analíticas seriadas (marcadores inflamatorios, función renal, etc.)</li>
                    <li>Estudios de imagen y pruebas complementarias realizadas</li>
                    <li>Informe sobre la respuesta a los tratamientos y efectos secundarios</li>
                    <li>Valoración del impacto en la capacidad funcional y calidad de vida</li>
                    <li>Informe de incapacidad laboral que detalle las limitaciones específicas</li>
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

export default Lupus;