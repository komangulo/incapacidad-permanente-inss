import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnfermedaddeHuntington = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Enfermedad de Huntington</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Trastorno neurodegenerativo hereditario</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad genética que causa la desintegración progresiva de las células nerviosas del cerebro
          </p>
        </div>

        {/* Alerta importante */}
        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-5 w-5" />
          <AlertDescription className="ml-2">
            <span className="font-semibold">Importante:</span> La enfermedad de Huntington es una condición genética. Si tiene antecedentes familiares, se recomienda asesoramiento genético.
          </AlertDescription>
        </Alert>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la Enfermedad de Huntington?</h3>
                <p className="text-gray-700">
                  La enfermedad de Huntington es un trastorno hereditario que causa la degeneración progresiva de las células nerviosas en el cerebro. Es causada por una mutación genética en el cromosoma 4 que produce una forma anormal de la proteína huntingtina. Afecta aproximadamente a 4-10 personas por cada 100.000 en poblaciones de origen europeo.
                </p>
                <p className="text-gray-700 mt-2">
                  Suele manifestarse entre los 30 y 50 años, aunque existen formas de inicio temprano (juvenil) y tardío. Es una enfermedad autosómica dominante, lo que significa que cada hijo de una persona afectada tiene un 50% de probabilidades de heredar el gen mutado.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas y Progresión */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Progresión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas motores:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Movimientos involuntarios (corea)</li>
                    <li>Rigidez muscular</li>
                    <li>Movimientos oculares anormales</li>
                    <li>Dificultad para caminar y mantener el equilibrio</li>
                    <li>Dificultad para tragar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas cognitivos:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Dificultad para organizar y priorizar tareas</li>
                    <li>Falta de flexibilidad mental</li>
                    <li>Dificultad para aprender nueva información</li>
                    <li>Lentitud en el procesamiento de pensamientos</li>
                    <li>Problemas de memoria a corto plazo</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Síntomas psiquiátricos (comunes):</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Depresión (el más común)</li>
                  <li>Ansiedad</li>
                  <li>Irritabilidad y cambios de humor</li>
                  <li>Apatía</li>
                  <li>Comportamiento obsesivo-compulsivo</li>
                  <li>Psicosis (en etapas avanzadas)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Diagnóstico y Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico y Tratamiento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Diagnóstico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Prueba genética:</span> Análisis de ADN para detectar la mutación</li>
                    <li><span className="font-medium">Evaluación neurológica:</span> Examen físico y pruebas cognitivas</li>
                    <li><span className="font-medium">Pruebas de imagen:</span> Resonancia magnética o TAC cerebral</li>
                    <li><span className="font-medium">Evaluación psiquiátrica:</span> Para detectar síntomas psicológicos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento:</h4>
                  <p className="text-gray-700 mb-3">No existe cura, pero los tratamientos pueden ayudar a controlar los síntomas:</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Medicamentos:</span> Para los movimientos involuntarios, depresión y psicosis</li>
                    <li><span className="font-medium">Terapia del habla:</span> Para problemas de comunicación y deglución</li>
                    <li><span className="font-medium">Fisioterapia:</span> Para mejorar la fuerza y el equilibrio</li>
                    <li><span className="font-medium">Terapia ocupacional:</span> Para mantener la independencia</li>
                    <li><span className="font-medium">Apoyo psicológico:</span> Para el paciente y la familia</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-semibold text-blue-800 mb-2">Investigación actual:</h4>
                <p className="text-blue-700">
                  Se están investigando terapias génicas, tratamientos para reducir la producción de la proteína huntingtina anormal y medicamentos para retrasar la progresión de la enfermedad. Los ensayos clínicos están en curso para evaluar nuevas opciones de tratamiento.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Incapacidad Laboral */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Laboral y Prestaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Impacto laboral:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Dificultad para mantener la concentración</li>
                    <li>Problemas para realizar tareas complejas</li>
                    <li>Dificultades de movilidad que afectan el desempeño</li>
                    <li>Necesidad de adaptaciones en el entorno laboral</li>
                    <li>Progresiva incapacidad para trabajar de forma independiente</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Prestaciones disponibles:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Incapacidad Temporal (IT):</span> Durante fases de diagnóstico y ajuste de tratamiento</li>
                    <li><span className="font-medium">Incapacidad Permanente:</span> Total o absoluta según progresión</li>
                    <li><span className="font-medium">Grado de Discapacidad:</span> A partir del 33% según valoración</li>
                    <li><span className="font-medium">Dependencia:</span> En fases avanzadas de la enfermedad</li>
                    <li><span className="font-medium">Prestación por hijo a cargo con discapacidad:</span> Para familias con menores afectados</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-green-700">
                  <li>Adaptaciones en el puesto de trabajo según las limitaciones</li>
                  <li>Jornada laboral reducida o flexible</li>
                  <li>Tareas que no requieran movimientos precisos o rápidos</li>
                  <li>Entorno laboral estructurado y predecible</li>
                  <li>Apoyo de un compañero o asistente si es necesario</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Recursos y Apoyo */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos y Apoyo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Asociaciones y recursos en España:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.e-huntington.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Asociación Corea de Huntington Española (ACHE)
                      </a>
                      <p className="text-sm text-gray-600">Apoyo a pacientes y familias, información y recursos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.huntington-assoc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Huntington's Disease Society of America (HDSA)
                      </a>
                      <p className="text-sm text-gray-600">Recursos en español e inglés</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-3">Teléfonos de ayuda:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">ACHE Teléfono de Información:</span>
                      <a href="tel:915404408" className="ml-2 text-purple-600 hover:underline">91 540 44 08</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Información sobre enfermedades raras:</span>
                      <a href="tel:915334008" className="ml-2 text-purple-600 hover:underline">91 533 40 08</a>
                    </div>
                  </li>
                </ul>
              </div>

              <Alert variant="default" className="bg-blue-50 border-blue-200">
                <AlertDescription className="text-blue-800">
                  <p className="font-medium">Día Mundial de la Enfermedad de Huntington:</p>
                  <p>Se celebra el 11 de mayo para concienciar sobre esta condición y apoyar la investigación.</p>
                </AlertDescription>
              </Alert>

              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Asesoramiento genético:</h4>
                <p className="text-yellow-700">
                  Si tiene antecedentes familiares de la enfermedad de Huntington, se recomienda acudir a una consulta de asesoramiento genético antes de tomar decisiones sobre pruebas genéticas o planificación familiar.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnfermedaddeHuntington;
