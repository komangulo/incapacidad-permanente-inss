import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SindromeSubacromial = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Síndrome Subacromial</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Dolor de hombro por pinzamiento</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conjunto de patologías que afectan al espacio subacromial del hombro
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es el Síndrome Subacromial?</h3>
                <p className="text-gray-700 mb-4">
                  El síndrome subacromial es una de las causas más comunes de dolor de hombro en adultos. Se produce por la compresión de las estructuras que pasan por el espacio subacromial (tendones del manguito rotador, bursa subacromial y tendón de la porción larga del bíceps) entre la cabeza del húmero y el arco coracoacromial.
                </p>
                <p className="text-gray-700">
                  Es una patología frecuente en personas que realizan trabajos por encima de la cabeza, deportes de lanzamiento o movimientos repetitivos del hombro. La incidencia aumenta con la edad, siendo más común a partir de los 40-50 años.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Manifestaciones Clínicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas principales:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Dolor en la cara lateral del hombro:</span> Que puede irradiar hacia el brazo</li>
                  <li><span className="font-medium">Dolor nocturno:</span> Especialmente al dormir sobre el lado afectado</li>
                  <li><span className="font-medium">Arco doloroso:</span> Dolor entre 60-120° de abducción</li>
                  <li><span className="font-medium">Debilidad:</span> Dificultad para levantar el brazo o cargar peso</li>
                  <li><span className="font-medium">Limitación funcional:</span> Dificultad para actividades por encima de la cabeza</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Factores de riesgo:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Actividades laborales con brazos por encima de la cabeza</li>
                  <li>Deportes de lanzamiento (tenis, béisbol, natación)</li>
                  <li>Alteraciones en la biomecánica del hombro</li>
                  <li>Edad avanzada (degeneración tendinosa)</li>
                  <li>Diabetes y enfermedades metabólicas</li>
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento conservador:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Reposo relativo:</span> Evitar movimientos dolorosos</li>
                    <li><span className="font-medium">Fisioterapia:</span> Ejercicios de fortalecimiento del manguito rotador</li>
                    <li><span className="font-medium">Terapia manual:</span> Movilizaciones, masaje, punción seca</li>
                    <li><span className="font-medium">Electroterapia:</span> Ultrasonido, TENS, láser</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento médico-quirúrgico:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Medicación:</span> AINEs, analgésicos, infiltraciones</li>
                    <li><span className="font-medium">Infiltraciones:</span> Corticoesteroides, PRP, ácido hialurónico</li>
                    <li><span className="font-medium">Cirugía:</span> Descompresión subacromial artroscópica</li>
                    <li><span className="font-medium">Rehabilitación postquirúrgica:</span> 3-6 meses</li>
                  </ul>
                </div>
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
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Temporal (IT):</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Tratamiento conservador:</span> 15-30 días</li>
                    <li><span className="font-medium">Post-infiltración:</span> 3-7 días</li>
                    <li><span className="font-medium">Postoperatorio:</span> 1-3 meses</li>
                    <li><span className="font-medium">Rehabilitación:</span> Hasta 6 meses según evolución</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Parcial (5-15%):</span> Secuelas leves sin limitación funcional</li>
                    <li><span className="font-medium">Total (25-35%):</span> Limitación para trabajos que requieran movimientos por encima de la cabeza</li>
                    <li><span className="font-medium">Absoluta (50-65%):</span> Casos graves con pérdida severa de función</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Modificación de puestos de trabajo con brazos elevados</li>
                  <li>Pausas activas cada hora</li>
                  <li>Ejercicios de estiramiento y fortalecimiento</li>
                  <li>Uso de ayudas técnicas para tareas por encima de la cabeza</li>
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
                      <a href="https://www.sermef-ejercicio.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Rehabilitación y Medicina Física (SERMEF)
                      </a>
                      <p className="text-sm text-gray-600">Información sobre rehabilitación de lesiones musculoesqueléticas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.secot.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Cirugía Ortopédica y Traumatología (SECOT)
                      </a>
                      <p className="text-sm text-gray-600">Información sobre tratamientos quirúrgicos</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md">
                <h4 className="font-semibold text-green-800 mb-3">Teléfonos de ayuda:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">Sanidad Responde:</span>
                      <a href="tel:901400100" className="ml-2 text-green-600 hover:underline">901 400 100</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <div>
                      <span className="font-medium">Instituto Nacional de la Seguridad Social (INSS):</span>
                      <a href="tel:901166565" className="ml-2 text-green-600 hover:underline">901 16 65 65</a>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SindromeSubacromial;
