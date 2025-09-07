import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const EspondilitisAnquilosante = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Espondilitis Anquilosante</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Variable según gravedad</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad inflamatoria crónica que afecta principalmente a la columna vertebral y articulaciones sacroilíacas
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es la Espondilitis Anquilosante?</h3>
                <p className="text-gray-700 mb-4">
                  La Espondilitis Anquilosante (EA) es una enfermedad inflamatoria crónica que afecta principalmente a la columna vertebral y las articulaciones sacroilíacas, perteneciente al grupo de las espondiloartritis. Se caracteriza por dolor lumbar inflamatorio, rigidez matutina y progresiva limitación de la movilidad espinal que puede llevar a la anquilosis (fusión) de las vértebras.
                </p>
                <p className="text-gray-700">
                  Afecta aproximadamente al 0.5-1% de la población, con mayor prevalencia en hombres (3:1) y suele comenzar antes de los 40 años. Es una enfermedad sistémica que puede afectar a otras articulaciones, ojos, piel, intestino y corazón. El diagnóstico precoz es fundamental para evitar el daño estructural irreversible.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Causas y Factores de Riesgo */}
          <Card>
            <CardHeader>
              <CardTitle>Causas y Factores de Riesgo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Causas principales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Predisposición genética (marcador HLA-B27 positivo en el 90% de los casos)</li>
                  <li>Respuesta inmune anormal que ataca a las articulaciones</li>
                  <li>Interacción entre factores genéticos y ambientales</li>
                  <li>Alteraciones en la microbiota intestinal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Factores de riesgo:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Antecedentes familiares de espondilitis anquilosante</li>
                  <li>Edad (inicio típico entre 20-40 años)</li>
                  <li>Sexo masculino (3 veces más frecuente que en mujeres)</li>
                  <li>Infecciones gastrointestinales o genitourinarias previas</li>
                  <li>Tabaquismo (empeora el pronóstico)</li>
                </ul>
              </div>
            </CardContent>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Causas principales:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Causa genética o hereditaria de Espondilitis Anquilosante</li>
                  <li>Factores ambientales asociados a Espondilitis Anquilosante</li>
                  <li>Otras condiciones médicas relacionadas con Espondilitis Anquilosante</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Historial familiar de Espondilitis Anquilosante</li>
                  <li>Factores de estilo de vida</li>
                  <li>Exposición a factores de riesgo específicos</li>
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
                <li>Síntoma principal de Espondilitis Anquilosante</li>
                <li>Síntoma secundario relacionado</li>
                <li>Otros síntomas asociados</li>
              </ul>
            </CardContent>
          </Card>

          {/* Síntomas y Manifestaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Manifestaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas principales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Dolor lumbar inflamatorio (mejora con el ejercicio, empeora con el reposo)</li>
                  <li>Rigidez matutina que dura más de 30 minutos</li>
                  <li>Dolor en glúteos alternante (sacroileítis)</li>
                  <li>Limitación progresiva de la movilidad de la columna</li>
                  <li>Dolor torácico por afectación de las articulaciones costovertebrales</li>
                  <li>Fatiga generalizada</li>
                  <li>Pérdida de apetito y peso</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Manifestaciones extraarticulares:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Oculares (25-30% de los casos):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Uveítis anterior aguda (ojo rojo doloroso)</li>
                      <li>Conjuntivitis</li>
                      <li>Queratitis</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Cardiovasculares (10-30%):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Insuficiencia aórtica</li>
                      <li>Bloqueos cardíacos</li>
                      <li>Pericarditis</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Pulmonares:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fibrosis pulmonar apical</li>
                      <li>Limitación de la expansión torácica</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Otras:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Osteoporosis</li>
                      <li>Fracturas vertebrales</li>
                      <li>Amiloidosis (en casos avanzados)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Signos de alarma:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Dolor ocular intenso con fotofobia (posible uveítis aguda)</li>
                  <li>Pérdida de peso inexplicable</li>
                  <li>Déficit neurológico (hormigueos, debilidad en extremidades)</li>
                  <li>Dificultad respiratoria progresiva</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Diagnóstico */}
          <Card>
            <CardHeader>
              <CardTitle>Diagnóstico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Criterios diagnósticos (ASAS 2009):</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Dolor lumbar inflamatorio de más de 3 meses de evolución</li>
                  <li>Edad de inicio menor de 40 años</li>
                  <li>Mejoría con el ejercicio, sin mejoría con el reposo</li>
                  <li>Rigidez matutina de más de 30 minutos</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Pruebas complementarias:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Analítica sanguínea:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Velocidad de sedimentación globular (VSG) y PCR elevadas</li>
                      <li>HLA-B27 positivo (90% de los casos)</li>
                      <li>Hemograma (anemia de enfermedad crónica)</li>
                      <li>Fosfatasa alcalina elevada (en enfermedad avanzada)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Pruebas de imagen:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Radiografía de pelvis (sacroileítis bilateral)</li>
                      <li>Resonancia magnética (detecta inflamación temprana)</li>
                      <li>Ecografía musculoesquelética</li>
                      <li>Gammagrafía ósea (en casos seleccionados)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Diagnóstico diferencial:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Otras espondiloartritis (artritis psoriásica, artritis reactiva)</li>
                  <li>Fibromialgia</li>
                  <li>Estenosis de canal lumbar</li>
                  <li>Artrosis de columna</li>
                  <li>Enfermedad de Forestier (hiperostosis esquelética idiopática difusa)</li>
                </ul>
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
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento farmacológico:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Primera línea:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Antiinflamatorios no esteroideos (AINEs) a dosis plenas</li>
                      <li>Analgésicos para el control del dolor</li>
                      <li>Relajantes musculares (en brotes agudos)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Segunda línea (FAME):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Metotrexato (para artritis periférica)</li>
                      <li>Sulfasalazina (en artritis periférica y síntomas intestinales)</li>
                      <li>Leflunomida (alternativa)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Terapias biológicas (anti-TNFα, anti-IL17):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Adalimumab, Etanercept, Infliximab, Golimumab, Certolizumab</li>
                      <li>Secukinumab, Ixekizumab</li>
                      <li>Indicadas en enfermedad activa a pesar de tratamiento convencional</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Otros tratamientos:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Corticoides en brotes graves (vía oral o infiltraciones)</li>
                      <li>Bifosfonatos (para la osteoporosis asociada)</li>
                      <li>Tratamiento de las complicaciones (uveítis, enfermedad cardiovascular)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento no farmacológico:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Fisioterapia y ejercicio:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ejercicios de movilidad y estiramiento diarios</li>
                      <li>Natación y ejercicios acuáticos</li>
                      <li>Fisioterapia respiratoria</li>
                      <li>Rehabilitación postural</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Medidas generales:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Evitar el tabaco (empeora el pronóstico)</li>
                      <li>Mantener un peso adecuado</li>
                      <li>Uso de soportes lumbares si es necesario</li>
                      <li>Dormir en colchón firme y con almohada baja</li>
                      <li>Mantener una postura correcta al sentarse, pararse y caminar</li>
                      <li>Evitar el tabaco y llevar una dieta equilibrada</li>
                      <li>Aprender técnicas de manejo del dolor y relajación</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Seguimiento y control:</h4>
                <ul className="list-disc pl-5 space-y-1 text-green-700">
                  <li>Revisiones periódicas con reumatólogo</li>
                  <li>Valoración de la actividad de la enfermedad (BASDAI, ASDAS)</li>
                  <li>Densitometría ósea periódica</li>
                  <li>Cribado de comorbilidades (cardiovasculares, osteoporosis)</li>
                  <li>Vacunación actualizada (especialmente frente a neumococo y gripe)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Incapacidad Laboral */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Laboral y Prestaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Grados de incapacidad:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Incapacidad Temporal (IT):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Durante brotes agudos o postoperatorios</li>
                      <li>Duración variable según evolución (semanas a meses)</li>
                      <li>Reevaluación periódica cada 30-45 días</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Incapacidad Permanente:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Parcial (33%): Limitaciones específicas en el trabajo</li>
                      <li>Total (55-75%): Incapacidad para la profesión habitual</li>
                      <li>Absoluta (100%): Incapacidad para todo trabajo</li>
                      <li>Gran Invalidez: Cuando requiere asistencia para actividades básicas</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Documentación necesaria para la valoración:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Informe médico detallado con diagnóstico y evolución</li>
                  <li>Pruebas complementarias (analíticas, radiografías, RMN)</li>
                  <li>Informe de incapacidad temporal previa (si la hay)</li>
                  <li>Informe del servicio médico de la empresa</li>
                  <li>Informe de fisioterapia y rehabilitación</li>
                  <li>Valoración del grado de discapacidad (si procede)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Aspectos legales y laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Reconocimiento del 33% de discapacidad (derecho a beneficios fiscales y laborales)</li>
                  <li>Adaptaciones en el puesto de trabajo (silla ergonómica, flexibilidad horaria)</li>
                  <li>Protección contra el despido por causas médicas</li>
                  <li>Derecho a reincorporación progresiva tras bajas prolongadas</li>
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
                      <a href="https://www.espondilitis.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Coordinadora Española de Asociaciones de Espondiloartritis (CEADE)
                      </a>
                      <p className="text-sm text-gray-600">Asociación de pacientes con espondilitis anquilosante y otras espondiloartritis</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.ser.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Reumatología (SER)
                      </a>
                      <p className="text-sm text-gray-600">Información médica actualizada sobre espondilitis anquilosante</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.conartritis.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Coordinadora Nacional de Artritis (CONARTRITIS)
                      </a>
                      <p className="text-sm text-gray-600">Apoyo y recursos para pacientes con enfermedades reumáticas</p>
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
                      <span className="font-medium">CEADE (España):</span>
                      <a href="tel:913010940" className="ml-2 text-purple-600 hover:underline">91 301 09 40</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Sanidad Responde (Andalucía):</span>
                      <a href="tel:955545060" className="ml-2 text-purple-600 hover:underline">955 54 50 60</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Emergencias:</span>
                      <a href="tel:112" className="ml-2 text-purple-600 hover:underline">112</a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Recomendaciones para el día a día:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Mantener una rutina diaria de ejercicios específicos</li>
                  <li>Evitar estar en la misma posición durante mucho tiempo</li>
                  <li>Usar sillas con respaldo recto y asiento firme</li>
                  <li>Dormir en colchón firme y con almohada baja</li>
                  <li>Mantener una postura correcta al sentarse, pararse y caminar</li>
                  <li>Evitar el tabaco y llevar una dieta equilibrada</li>
                  <li>Aprender técnicas de manejo del dolor y relajación</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Botón de consulta */}
          <div className="mt-12 text-center">
            <a href="#contacto">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Consultar ahora
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Nuestros especialistas están disponibles para evaluar su caso de forma personalizada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspondilitisAnquilosante;