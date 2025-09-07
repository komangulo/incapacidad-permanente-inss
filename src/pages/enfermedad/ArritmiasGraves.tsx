import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArritmiasGraves = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Arritmias Graves</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trastornos del ritmo cardíaco incapacitantes
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué son las Arritmias Graves?</h3>
                <p className="text-gray-700 mb-3">Las arritmias cardíacas graves son alteraciones en el ritmo normal del corazón que pueden poner en peligro la vida del paciente. Estas incluyen taquicardias ventriculares, fibrilación ventricular, bradiarritmias severas y síndromes de preexcitación sintomáticos.</p>
                <p className="text-gray-700">El impacto en la vida diaria puede ser significativo, limitando la capacidad para realizar actividades físicas, trabajo estresante o que requiera esfuerzo, y generando ansiedad por la posibilidad de episodios arrítmicos potencialmente mortales.</p>
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
                  <li>Cardiopatía isquémica (infarto previo)</li>
                  <li>Miocardiopatías (dilatada, hipertrófica, arritmogénica)</li>
                  <li>Enfermedades del sistema de conducción cardíaco</li>
                  <li>Alteraciones electrolíticas severas</li>
                  <li>Efectos secundarios de medicamentos</li>
                  <li>Cardiopatías congénitas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Historial de infarto de miocardio</li>
                  <li>Insuficiencia cardíaca</li>
                  <li>Hipertensión arterial no controlada</li>
                  <li>Diabetes mellitus</li>
                  <li>Apnea del sueño</li>
                  <li>Consumo excesivo de alcohol o cafeína</li>
                  <li>Tabaquismo</li>
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
                <li>Palpitaciones rápidas o irregulares</li>
                <li>Mareos o vértigo</li>
                <li>Síncope (pérdida de conocimiento)</li>
                <li>Dolor torácico</li>
                <li>Disnea (dificultad para respirar)</li>
                <li>Fatiga extrema</li>
                <li>En casos graves, paro cardíaco súbito</li>
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
                  <li>Electrocardiograma (ECG) de 12 derivaciones</li>
                  <li>Monitor Holter de 24-48 horas</li>
                  <li>Monitor de eventos cardíacos</li>
                  <li>Estudio electrofisiológico</li>
                  <li>Prueba de esfuerzo</li>
                  <li>Ecocardiograma</li>
                  <li>Resonancia magnética cardíaca en casos seleccionados</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Evaluación:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Historia clínica detallada y exploración física</li>
                  <li>Evaluación del riesgo de muerte súbita</li>
                  <li>Pruebas genéticas en casos de sospecha de canalopatías</li>
                  <li>Evaluación de la función ventricular</li>
                  <li>Valoración de comorbilidades</li>
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
                  <li>Fármacos antiarrítmicos (amiodarona, sotalol, flecainida, etc.)</li>
                  <li>Anticoagulantes si existe riesgo de tromboembolismo</li>
                  <li>Betabloqueantes para control de frecuencia</li>
                  <li>Cardioversión eléctrica en arritmias inestables</li>
                  <li>Ablación por catéter para ciertas taquiarritmias</li>
                  <li>Desfibrilador automático implantable (DAI) en pacientes de alto riesgo</li>
                  <li>Marcapasos en bradiarritmias sintomáticas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Manejo del día a día:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Control estricto de factores de riesgo cardiovascular</li>
                  <li>Evitar desencadenantes como el estrés, cafeína, alcohol y tabaco</li>
                  <li>Ejercicio físico supervisado según tolerancia</li>
                  <li>Dieta cardiosaludable y control de peso</li>
                  <li>Adherencia al tratamiento farmacológico</li>
                  <li>Revisión periódica del dispositivo (marcapasos/DAI) si lo tiene</li>
                  <li>Educación sobre reconocimiento de síntomas de alarma</li>
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
                  <p className="text-gray-700 italic mb-2">"Se reconoce la incapacidad permanente total para la profesión habitual a trabajador con diagnóstico de taquicardia ventricular sostenida recurrente, portador de DAI, que desarrolla su actividad como conductor profesional, al considerar que la aparición de síncopes arrítmicos supone un riesgo inasumible para la seguridad vial y la integridad del propio trabajador."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Incapacidad Permanente Total
                    </span>
                    <span className="text-sm text-gray-500">Sentencia del Juzgado de lo Social Nº 24 de Madrid, 15/2022</span>
                  </div>
                </div>
                <div key="1" className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 mt-4">
                  <p className="text-gray-700 italic mb-2">"Se concede la incapacidad permanente absoluta a paciente con miocardiopatía arritmogénica del ventrículo derecho, portador de DAI, con múltiples descargas apropiadas del dispositivo y función ventricular severamente deprimida, que imposibilitan el desarrollo de cualquier actividad laboral con seguridad."</p>
                  <div className="flex justify-between items-center">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                      Incapacidad Permanente Absoluta
                    </span>
                    <span className="text-sm text-gray-500">Resolución del INSS 3456/2023</span>
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
                      <p className="text-gray-700 text-sm">Arritmias controladas con tratamiento médico, sin limitación funcional significativa</p>
                    </div>
                    
                    <div key="1" className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                      <div className="font-bold text-lg text-blue-700">Total (55-75%)</div>
                      <p className="text-gray-700 text-sm">Arritmias ventriculares graves con riesgo vital, portadores de DAI, que impiden el desarrollo de la profesión habitual</p>
                    </div>
                    
                    <div key="2" className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                      <div className="font-bold text-lg text-red-600">Absoluta (100%)</div>
                      <p className="text-gray-700 text-sm">Arritmias graves refractarias, con función ventricular severamente deprimida o episodios recurrentes de taquicardia ventricular</p>
                    </div>
                  
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Requisitos específicos:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Informe cardiológico detallado con diagnóstico preciso del tipo de arritmia</li>
                    <li>Resultados de estudios electrofisiológicos y pruebas de imagen cardíaca</li>
                    <li>Documentación de ingresos hospitalarios por arritmias graves</li>
                    <li>Informe del dispositivo implantado (DAI/marcapasos) si procede</li>
                    <li>Evaluación de la respuesta al tratamiento</li>
                    <li>Informe de incapacidad laboral del médico especialista</li>
                    <li>Documentación de limitaciones funcionales objetivas</li>
                    <li>Informe del Servicio de Prevención de Riesgos Laborales</li>
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
                    <a href="https://www.fedesp.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Federación Española del Corazón (FEC)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sociedadcorazon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Asociación de Pacientes Cardióacos
                    </a>
                  </li>
                  <li>
                    <a href="https://www.fundaciondelcorazon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Fundación Española del Corazón
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

export default ArritmiasGraves;