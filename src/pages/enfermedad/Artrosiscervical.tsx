import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Artrosiscervical = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Artrosis Cervical</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Variable según gravedad</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad degenerativa que afecta a las articulaciones y discos del cuello, causando dolor y limitación del movimiento
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es la Artrosis Cervical?</h3>
                <p className="text-gray-700 mb-4">
                  La artrosis cervical, también conocida como espondilosis cervical, es una afección degenerativa que afecta a las articulaciones y discos intervertebrales del cuello. Es una de las causas más comunes de dolor cervical crónico en adultos mayores, aunque puede aparecer a partir de los 30 años. Se caracteriza por el desgaste progresivo del cartílago articular, formación de osteofitos (crecimientos óseos anormales) y degeneración de los discos intervertebrales.
                </p>
                <p className="text-gray-700">
                  Afecta aproximadamente al 85% de las personas mayores de 60 años, aunque no todos presentan síntomas. En algunos casos, puede provocar compresión de raíces nerviosas o médula espinal, lo que se conoce como mielopatía cervical espondilótica o radiculopatía cervical, respectivamente. El diagnóstico temprano y el tratamiento adecuado son fundamentales para prevenir complicaciones y mantener la calidad de vida del paciente.
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
                  <li>Degeneración natural del cartílago articular por envejecimiento</li>
                  <li>Deshidratación y pérdida de altura de los discos intervertebrales</li>
                  <li>Formación de osteofitos (espolones óseos) en las vértebras</li>
                  <li>Engrosamiento de los ligamentos cervicales</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Factores de riesgo:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Edad avanzada (más común a partir de los 50 años)</li>
                  <li>Factores genéticos y antecedentes familiares</li>
                  <li>Obesidad y sobrepeso</li>
                  <li>Mala postura crónica (especialmente por uso prolongado de dispositivos móviles)</li>
                  <li>Actividades laborales que implican movimientos repetitivos del cuello</li>
                  <li>Traumatismos cervicales previos (latigazo cervical)</li>
                  <li>Tabaco (empeora la degeneración del disco intervertebral)</li>
                </ul>
              </div>
            </CardContent>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Causas principales:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Causa genética o hereditaria de Artrosis cervical</li>
                  <li>Factores ambientales asociados a Artrosis cervical</li>
                  <li>Otras condiciones médicas relacionadas con Artrosis cervical</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Factores de riesgo:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Historial familiar de Artrosis cervical</li>
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
                <li>Síntoma principal de Artrosis cervical</li>
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
                  <li>Dolor cervical que puede irradiar a hombros y brazos</li>
                  <li>Rigidez en el cuello, especialmente por las mañanas o tras periodos de inactividad</li>
                  <li>Limitación de la movilidad del cuello (dificultad para girar o inclinar la cabeza)</li>
                  <li>Dolores de cabeza que se originan en la nuca</li>
                  <li>Chasquidos o crujidos al mover el cuello</li>
                  <li>Contracturas musculares en la zona cervical y de los hombros</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas de complicaciones:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Radiculopatía cervical (compresión nerviosa):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dolor que se irradia al brazo o mano</li>
                      <li>Hormigueo o entumecimiento en brazos o dedos</li>
                      <li>Debilidad muscular en brazos o manos</li>
                      <li>Pérdida de reflejos en brazos</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Mielopatía cervical (compresión medular):</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Dificultad para caminar (marcha inestable)</li>
                      <li>Pérdida de destreza en las manos</li>
                      <li>Debilidad en piernas o brazos</li>
                      <li>Pérdida del control de esfínteres (en casos graves)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Signos de alarma (requieren atención médica inmediata):</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Debilidad repentina en brazos o piernas</li>
                  <li>Pérdida de control de esfínteres</li>
                  <li>Dolor intenso que no mejora con analgésicos comunes</li>
                  <li>Dolor después de un traumatismo importante (caída, accidente)</li>
                  <li>Pérdida de peso inexplicable junto con dolor cervical</li>
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
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Evaluación clínica:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Historia clínica detallada (síntomas, duración, factores agravantes)</li>
                  <li>Exploración física de la columna cervical y extremidades superiores</li>
                  <li>Pruebas de movilidad cervical (flexión, extensión, rotación, inclinación lateral)</li>
                  <li>Evaluación neurológica (fuerza muscular, reflejos, sensibilidad)</li>
                  <li>Pruebas específicas (maniobra de Spurling, prueba de compresión cervical)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Pruebas complementarias:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Pruebas de imagen:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Radiografías</strong>: Muestra estrechamiento del espacio intervertebral, osteofitos y alteraciones óseas</li>
                      <li><strong>Resonancia Magnética (RMN)</strong>: Evalúa tejidos blandos, médula espinal y raíces nerviosas</li>
                      <li><strong>Tomografía Computarizada (TC)</strong>: Muestra mejor los cambios óseos y la estenosis del canal</li>
                      <li><strong>Electromiografía (EMG)</strong>: Evalúa la función nerviosa en casos de radiculopatía</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Otras pruebas:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Análisis de sangre</strong>: Para descartar otras causas de dolor cervical (artritis reumatoide, infecciones)</li>
                      <li><strong>Mielografía</strong>: En casos seleccionados para evaluar compresión medular o radicular</li>
                      <li><strong>Gammagrafía ósea</strong>: Para descartar procesos tumorales o infecciosos</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Diagnóstico diferencial:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Hernia discal cervical</li>
                  <li>Artritis reumatoide</li>
                  <li>Espondilitis anquilosante</li>
                  <li>Fibromialgia</li>
                  <li>Infecciones vertebrales</li>
                  <li>Tumores vertebrales o metastásicos</li>
                  <li>Dolor referido de hombro o mandíbula</li>
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
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento conservador (no quirúrgico):</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Medicamentos:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Analgésicos</strong>: Paracetamol para el dolor leve-moderado</li>
                      <li><strong>AINEs</strong>: Ibuprofeno, naproxeno para reducir inflamación y dolor</li>
                      <li><strong>Relajantes musculares</strong>: En casos de contracturas musculares intensas</li>
                      <li><strong>Antidepresivos tricíclicos</strong>: Para el dolor neuropático en dosis bajas</li>
                      <li><strong>Antiepilépticos</strong>: Gabapentina o pregabalina para dolor neuropático</li>
                      <li><strong>Infiltraciones</strong>: Corticoesteroides epidurales o facetarias en casos seleccionados</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Fisioterapia y rehabilitación:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Ejercicios de fortalecimiento y estiramiento cervical</li>
                      <li>Terapia manual y masoterapia</li>
                      <li>Electroterapia (TENS, ultrasonido)</li>
                      <li>Termoterapia y crioterapia</li>
                      <li>Reeducación postural global (RPG)</li>
                      <li>Hidroterapia</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento quirúrgico (en casos graves):</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Indicaciones:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Mielopatía cervical progresiva</li>
                      <li>Radiculopatía con déficit neurológico progresivo</li>
                      <li>Dolor intratable que no responde a tratamiento conservador</li>
                      <li>Inestabilidad cervical significativa</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Técnicas quirúrgicas:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Discectomía cervical anterior con fusión (ACDF)</strong></li>
                      <li><strong>Artroplastia de disco cervical</strong></li>
                      <li><strong>Laminectomía o laminoplastia</strong> en casos de estenosis del canal</li>
                      <li><strong>Fusión cervical posterior</strong> en casos de inestabilidad</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Recomendaciones generales y estilo de vida:</h4>
                <ul className="list-disc pl-5 space-y-1 text-green-700">
                  <li>Mantener una buena postura durante el día (especialmente al usar dispositivos electrónicos)</li>
                  <li>Usar almohada ortopédica para dormir</li>
                  <li>Evitar movimientos bruscos del cuello</li>
                  <li>Realizar pausas activas durante el trabajo</li>
                  <li>Mantener un peso saludable</li>
                  <li>Dejar de fumar (el tabaco acelera la degeneración discal)</li>
                  <li>Practicar ejercicio físico regular de bajo impacto (natación, caminar, yoga)</li>
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
                      <li>Durante crisis agudas o postoperatorio</li>
                      <li>Duración variable según evolución (semanas a meses)</li>
                      <li>Reevaluación periódica cada 30-45 días</li>
                      <li>Rehabilitación y readaptación laboral si es necesario</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Incapacidad Permanente:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li><strong>Parcial (33%)</strong>: Limitaciones específicas en el trabajo habitual</li>
                      <li><strong>Total (55-75%)</strong>: Incapacidad para la profesión habitual</li>
                      <li><strong>Absoluta (100%)</strong>: Incapacidad para todo trabajo (casos muy graves con afectación neurológica severa)</li>
                      <li><strong>Gran Invalidez</strong>: Cuando requiere asistencia para actividades básicas</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Documentación necesaria para la valoración:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Informe médico detallado con diagnóstico y evolución</li>
                  <li>Pruebas complementarias (radiografías, RMN, EMG)</li>
                  <li>Informe de incapacidad temporal previa (si la hay)</li>
                  <li>Informe del servicio médico de la empresa</li>
                  <li>Informe de fisioterapia y rehabilitación</li>
                  <li>Valoración del grado de discapacidad (si procede)</li>
                  <li>Informe de salud laboral (si la enfermedad está relacionada con el trabajo)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Aspectos legales y laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Reconocimiento del 33% de discapacidad (derecho a beneficios fiscales y laborales)</li>
                  <li>Adaptaciones en el puesto de trabajo (silla ergonómica, pantalla a la altura de los ojos, teclado y ratón ergonómicos)</li>
                  <li>Cambio de puesto de trabajo si el actual agrava la patología</li>
                  <li>Protección contra el despido por causas médicas</li>
                  <li>Derecho a reincorporación progresiva tras bajas prolongadas</li>
                  <li>Posibilidad de jubilación anticipada en casos graves (a partir del 55% de incapacidad permanente total)</li>
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
                      <a href="https://inforeuma.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Reumatología (SER)
                      </a>
                      <p className="text-sm text-gray-600">Información médica actualizada sobre enfermedades reumáticas</p>
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
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.ceafa.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        CEAF - Asociación de Pacientes de Artrosis
                      </a>
                      <p className="text-sm text-gray-600">Información y apoyo para pacientes con artrosis</p>
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
                      <span className="font-medium">Sanidad Responde (Andalucía):</span>
                      <a href="tel:955545060" className="ml-2 text-purple-600 hover:underline">955 54 50 60</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Salud Responde (Andalucía):</span>
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
                  <li>Mantener una buena postura al sentarse, especialmente al trabajar frente al ordenador</li>
                  <li>Realizar pausas cada 30-60 minutos para estirar el cuello y hombros</li>
                  <li>Usar dispositivos electrónicos a la altura de los ojos para evitar inclinar la cabeza</li>
                  <li>Dormir con una almohada ortopédica que mantenga la alineación cervical</li>
                  <li>Evitar cargar peso excesivo sobre los hombros</li>
                  <li>Practicar ejercicios de fortalecimiento y estiramiento cervical regularmente</li>
                  <li>Aplicar calor local para aliviar la rigidez y frío para el dolor agudo</li>
                  <li>Mantener un peso saludable para reducir la carga sobre la columna</li>
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

export default Artrosiscervical;