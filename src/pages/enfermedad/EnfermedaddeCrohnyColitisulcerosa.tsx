import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnfermedaddeCrohnyColitisulcerosa = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Enfermedad de Crohn y Colitis ulcerosa</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad inflamatoria intestinal crónica
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la Enfermedad de Crohn y Colitis ulcerosa?</h3>
                <p className="text-gray-700 mb-3">La Enfermedad de Crohn y la Colitis Ulcerosa son enfermedades inflamatorias intestinales crónicas que afectan el tracto digestivo. La Enfermedad de Crohn puede afectar cualquier parte del tubo digestivo, desde la boca hasta el ano, mientras que la Colitis Ulcerosa se limita al colon y al recto.</p>
                <p className="text-gray-700">Estas condiciones pueden causar dolor abdominal severo, diarrea crónica, fatiga, pérdida de peso y desnutrición, impactando significativamente la calidad de vida y la capacidad laboral de quienes las padecen.</p>
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
                  <li>Disfunción del sistema inmunológico que ataca el tracto digestivo</li>
                  <li>Factores genéticos (mayor riesgo si hay antecedentes familiares)</li>
                  <li>Factores ambientales como dieta, estrés y tabaquismo</li>
                  <li>Desequilibrio en la microbiota intestinal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Edad (diagnóstico más común entre 15-35 años)</li>
                  <li>Origen étnico (más común en caucásicos y judíos asquenazíes)</li>
                  <li>Vivir en zonas urbanas o países industrializados</li>
                  <li>Uso de ciertos medicamentos como AINEs</li>
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
                <li>Dolor abdominal intenso y cólicos</li>
                <li>Diarrea crónica (a veces con sangre o moco)</li>
                <li>Pérdida de peso y apetito</li>
                <li>Fiebre y fatiga</li>
                <li>Anemia por deficiencia de hierro</li>
                <li>Dolor o secreción anal</li>
                <li>Retraso en el crecimiento (en niños)</li>
                <li>Manifestaciones extraintestinales (articulaciones, piel, ojos, hígado)</li>
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
                  <li>Historia clínica detallada y exploración física</li>
                  <li>Análisis de sangre (marcadores inflamatorios, anemia)</li>
                  <li>Análisis de heces (sangre oculta, calprotectina)</li>
                  <li>Colonoscopia con biopsias</li>
                  <li>Cápsula endoscópica o enteroscopia</li>
                  <li>Estudios de imagen (resonancia, ecografía, TAC)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Evaluación del estado nutricional</li>
                  <li>Valoración de la actividad inflamatoria</li>
                  <li>Detección de complicaciones (estenosis, fístulas, abscesos)</li>
                  <li>Evaluación de comorbilidades</li>
                  <li>Diagnóstico diferencial con otras enfermedades intestinales</li>
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
                  <li><strong>Fármacos antiinflamatorios:</strong> Aminosalicilatos, corticoides</li>
                  <li><strong>Inmunosupresores:</strong> Azatioprina, metotrexato</li>
                  <li><strong>Terapias biológicas:</strong> Anti-TNF, anti-integrinas, anti-IL12/23</li>
                  <li><strong>Antibióticos:</strong> Para infecciones o complicaciones</li>
                  <li><strong>Cirugía:</strong> En casos de complicaciones o falta de respuesta al tratamiento médico</li>
                  <li><strong>Terapias nutricionales:</strong> Soporte nutricional en brotes graves</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Dieta personalizada según tolerancia</li>
                  <li>Control del estrés y apoyo psicológico</li>
                  <li>Ejercicio adaptado a la condición física</li>
                  <li>Abandono del tabaco (especialmente en Enfermedad de Crohn)</li>
                  <li>Vacunación actualizada (especialmente importante con tratamientos inmunosupresores)</li>
                  <li>Seguimiento estrecho por equipo multidisciplinar</li>
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
                  <p className="text-gray-700 italic mb-2">"La Enfermedad de Crohn en su forma grave, con brotes frecuentes que requieren hospitalizaciones repetidas y tratamiento inmunosupresor continuado, puede suponer una limitación absoluta para el desarrollo de cualquier actividad laboral, especialmente cuando cursa con manifestaciones extraintestinales y complicaciones que afectan significativamente a la calidad de vida del paciente."</p>
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
                    <li>Historia clínica detallada con al menos 12 meses de evolución</li>
                    <li>Informes de gastroenterología que documenten la gravedad y evolución</li>
                    <li>Pruebas complementarias recientes (análisis, endoscopias, pruebas de imagen)</li>
                    <li>Documentación de hospitalizaciones y complicaciones</li>
                    <li>Informe sobre la respuesta a los tratamientos instaurados</li>
                    <li>Valoración del impacto en la capacidad funcional</li>
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

export default EnfermedaddeCrohnyColitisulcerosa;