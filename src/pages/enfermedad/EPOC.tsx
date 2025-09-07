import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EPOC = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">EPOC</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad pulmonar obstructiva crónica
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la EPOC?</h3>
                <p className="text-gray-700 mb-3">La Enfermedad Pulmonar Obstructiva Crónica (EPOC) es una enfermedad pulmonar inflamatoria crónica que causa la obstrucción del flujo de aire desde los pulmones. Incluye dos afecciones principales: el enfisema (daño a los alvéolos pulmonares) y la bronquitis crónica (inflamación de los bronquios).</p>
                <p className="text-gray-700">El impacto en la vida diaria puede ser significativo, causando dificultad para respirar, limitación de la actividad física, exacerbaciones frecuentes y una disminución progresiva de la función pulmonar que afecta la capacidad laboral y la calidad de vida.</p>
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
                  <li>Tabaquismo (principal causa, responsable del 80-90% de los casos)</li>
                  <li>Exposición prolongada a humos tóxicos (quemar leña, humo de cocina, contaminación laboral)</li>
                  <li>Contaminación ambiental crónica</li>
                  <li>Infecciones respiratorias recurrentes en la infancia</li>
                  <li>Déficit de alfa-1 antitripsina (causa genética poco frecuente)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Fumadores activos o exfumadores</li>
                  <li>Exposición laboral a polvos, productos químicos o vapores</li>
                  <li>Contaminación del aire en interiores (quema de combustibles sólidos)</li>
                  <li>Edad avanzada (mayor riesgo después de los 40 años)</li>
                  <li>Asma no controlada</li>
                  <li>Bajo peso al nacer o infecciones respiratorias en la infancia</li>
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
                <li>Disnea (dificultad para respirar) que empeora con la actividad física</li>
                <li>Tos crónica, a veces productiva con esputo</li>
                <li>Sibilancias (silbidos al respirar)</li>
                <li>Opresión en el pecho</li>
                <li>Infecciones respiratorias frecuentes</li>
                <li>Fatiga y falta de energía</li>
                <li>Pérdida de peso involuntaria (en fases avanzadas)</li>
                <li>Hinchazón en tobillos, pies o piernas (en casos de cor pulmonale)</li>
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
                  <li>Espirometría con prueba broncodilatadora (FEV1/FVC {'<'} 0.70 pos-broncodilatador)</li>
                  <li>Radiografía de tórax para descartar otras patologías</li>
                  <li>Gasometría arterial en casos moderados-graves</li>
                  <li>TC de tórax en casos seleccionados</li>
                  <li>Prueba de marcha de 6 minutos para evaluar tolerancia al ejercicio</li>
                  <li>Índice BODE para evaluar pronóstico</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Historia clínica detallada (antecedentes de tabaquismo, exposición laboral)</li>
                  <li>Evaluación de síntomas y su impacto en la calidad de vida (cuestionarios CAT, mMRC)</li>
                  <li>Clasificación de la gravedad según GOLD (Estadios I-IV)</li>
                  <li>Evaluación de comorbilidades (enfermedad cardiovascular, osteoporosis, depresión)</li>
                  <li>Diagnóstico diferencial con asma, insuficiencia cardíaca, bronquiectasias, etc.</li>
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
                  <li>Broncodilatadores de acción prolongada (LABA/LAMA)</li>
                  <li>Corticoides inhalados en casos seleccionados</li>
                  <li>Oxigenoterapia crónica domiciliaria (si hipoxemia)</li>
                  <li>Rehabilitación pulmonar</li>
                  <li>Vacunación antigripal y antineumocócica</li>
                  <li>Tratamiento de las agudizaciones con antibióticos y corticoides sistémicos</li>
                  <li>Trasplante pulmonar en casos muy seleccionados</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Abandono absoluto del tabaco (imprescindible)</li>
                  <li>Ejercicio físico regular adaptado a la capacidad pulmonar</li>
                  <li>Dieta equilibrada y mantenimiento de peso adecuado</li>
                  <li>Evitar la exposición a contaminantes ambientales y laborales</li>
                  <li>Uso correcto de la medicación inhalada</li>
                  <li>Reconocimiento precoz de las agudizaciones</li>
                  <li>Control de comorbilidades asociadas</li>
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
                  <p className="text-gray-700 italic mb-2">"Se reconoce la incapacidad permanente absoluta a trabajador con diagnóstico de EPOC GOLD IV, con FEV1 {'<'} 30%, dependiente de oxigenoterapia continua, con agudizaciones frecuentes que requieren hospitalización, y que ha agotado todas las posibilidades terapéuticas, considerando que su limitación al esfuerzo le impide desarrollar cualquier actividad laboral con el mínimo de rendimiento, eficacia y profesionalidad."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Incapacidad Permanente Absoluta
                    </span>
                    <span className="text-sm text-gray-500">Sentencia del Juzgado de lo Social Nº 5 de Barcelona, 234/2022</span>
                  </div>
                </div>
                <div key="1" className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 mt-4">
                  <p className="text-gray-700 italic mb-2">"Se concede la incapacidad permanente total para la profesión habitual de albañil a trabajador con EPOC GOLD III, con FEV1 35%, disnea de esfuerzo grado 3-4 mMRC, que requiere oxigenoterapia nocturna y presenta limitación al esfuerzo que le impide desarrollar trabajos que requieran esfuerzo físico o exposición a ambientes con polvo o humos, propios de su categoría profesional."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Incapacidad Permanente Total
                    </span>
                    <span className="text-sm text-gray-500">Resolución del INSS 7890/2023</span>
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
                      <p className="text-gray-700 text-sm">EPOC leve (GOLD I) con limitación leve de la actividad</p>
                    </div>
                    
                    <div key="1" className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                      <div className="font-bold text-lg text-blue-700">Total (55-75%)</div>
                      <p className="text-gray-700 text-sm">EPOC moderada-grave (GOLD II-III) que impide trabajos con esfuerzo físico o exposición a contaminantes</p>
                    </div>
                    
                    <div key="2" className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                      <div className="font-bold text-lg text-red-600">Absoluta (100%)</div>
                      <p className="text-gray-700 text-sm">EPOC muy grave (GOLD IV) con insuficiencia respiratoria crónica, dependencia de oxígeno o cor pulmonale</p>
                    </div>
                  
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Informe neumológico detallado con clasificación GOLD</li>
                    <li>Resultados de espirometrías seriadas que muestren la evolución</li>
                    <li>Gasometrías arteriales que demuestren insuficiencia respiratoria si existe</li>
                    <li>Informes de ingresos hospitalarios por agudizaciones</li>
                    <li>Prueba de esfuerzo cardiorrespiratoria si se ha realizado</li>
                    <li>Informe de rehabilitación respiratoria si la ha realizado</li>
                    <li>Documentación de tratamientos realizados y respuesta a los mismos</li>
                    <li>Informe del Servicio de Prevención de Riesgos Laborales si procede</li>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Asociaciones de Pacientes:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.separ.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Sociedad Española de Neumología y Cirugía Torácica (SEPAR)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.neumomadrid.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Asociación de Pacientes con EPOC
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fenaer.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Federación Española de Asociaciones de Pacientes Alérgicos y con Enfermedades Respiratorias (FENAER)
                    </a>
                  </li>
                  
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

export default EPOC;