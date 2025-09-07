import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ataxia = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Ataxia</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Trastorno de la coordinación del movimiento</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pérdida del control muscular o coordinación de los movimientos voluntarios
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General de la Ataxia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">¿Qué es la ataxia?</h3>
                <p className="text-gray-700">
                  La ataxia es un término que describe un grupo de trastornos neurológicos que afectan la coordinación, el equilibrio y el habla. No es una enfermedad específica, sino un síntoma de diferentes condiciones que afectan el cerebelo, el tronco encefálico o la médula espinal.
                </p>
                <p className="text-gray-700 mt-2">
                  Afecta a personas de todas las edades, desde niños hasta adultos mayores. Algunas formas son hereditarias, mientras que otras pueden ser adquiridas como resultado de traumatismos, accidentes cerebrovasculares, esclerosis múltiple, tumores o exposición a ciertas toxinas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Síntomas y Tipos */}
          <Card>
            <CardHeader>
              <CardTitle>Síntomas y Tipos de Ataxia</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas principales:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Mala coordinación de movimientos:</span> Torpeza en brazos y piernas</li>
                  <li><span className="font-medium">Marcha inestable:</span> Caminar tambaleante o con las piernas separadas</li>
                  <li><span className="font-medium">Dificultades con el habla:</span> Habla arrastrada o lenta</li>
                  <li><span className="font-medium">Movimientos oculares anormales:</span> Nistagmo (movimientos oculares rápidos e involuntarios)</li>
                  <li><span className="font-medium">Problemas para tragar:</span> Dificultad al comer o beber</li>
                  <li><span className="font-medium">Temblores:</span> Especialmente durante movimientos intencionales</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Tipos principales de ataxia:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li><span className="font-medium">Ataxias hereditarias:</span> Como la ataxia de Friedreich (la más común) o la ataxia espinocerebelosa</li>
                  <li><span className="font-medium">Ataxias adquiridas:</span> Por traumatismos, accidentes cerebrovasculares, esclerosis múltiple, etc.</li>
                  <li><span className="font-medium">Ataxia idiopática de inicio tardío:</span> Sin causa conocida en personas mayores</li>
                  <li><span className="font-medium">Ataxia episódica:</span> Que aparece en episodios</li>
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
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Pruebas diagnósticas:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Examen neurológico completo</li>
                    <li>Resonancia magnética o TAC cerebral</li>
                    <li>Análisis genéticos (para formas hereditarias)</li>
                    <li>Análisis de sangre y orina</li>
                    <li>Punción lumbar en algunos casos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Opciones de tratamiento:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Fisioterapia:</span> Para mejorar la fuerza y coordinación</li>
                    <li><span className="font-medium">Terapia ocupacional:</span> Para adaptar las actividades diarias</li>
                    <li><span className="font-medium">Logopedia:</span> Para problemas del habla y deglución</li>
                    <li><span className="font-medium">Ayudas técnicas:</span> Bastones, andadores o sillas de ruedas</li>
                    <li><span className="font-medium">Tratamiento farmacológico:</span> Para síntomas específicos</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <h4 className="font-semibold text-blue-800 mb-2">Investigación actual:</h4>
                <p className="text-blue-700">
                  Aunque muchas formas de ataxia no tienen cura, la investigación en terapia génica y celular está mostrando resultados prometedores para algunas formas hereditarias. Los ensayos clínicos están en curso para desarrollar tratamientos más efectivos.
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
                    <li>Dificultad para trabajos que requieren coordinación motora fina</li>
                    <li>Limitaciones para trabajos que exijan equilibrio o movilidad</li>
                    <li>Problemas de fatiga que pueden limitar la jornada laboral</li>
                    <li>Dificultades en la comunicación verbal en algunos casos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Prestaciones disponibles:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Incapacidad Temporal (IT):</span> Durante brotes o empeoramiento</li>
                    <li><span className="font-medium">Incapacidad Permanente:</span> Según el grado de afectación</li>
                    <li><span className="font-medium">Grado de Discapacidad:</span> A partir del 33% según valoración</li>
                    <li><span className="font-medium">Dependencia:</span> En casos avanzados</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-2">Adaptaciones laborales recomendadas:</h4>
                <ul className="list-disc pl-5 space-y-1 text-green-700">
                  <li>Puesto de trabajo adaptado y accesible</li>
                  <li>Flexibilidad horaria para adaptarse a la fatiga</li>
                  <li>Uso de ayudas técnicas y tecnología de asistencia</li>
                  <li>Tareas que no requieran movimientos precisos o rápidos</li>
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
                      <a href="https://www.ataxia-y-ataxicos.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Federación de Ataxias de España (FEDAES)
                      </a>
                      <p className="text-sm text-gray-600">Información, apoyo y recursos para personas con ataxia</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.sen.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Sociedad Española de Neurología (SEN)
                      </a>
                      <p className="text-sm text-gray-600">Guías clínicas y recursos para profesionales</p>
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
                      <span className="font-medium">FEDAES Teléfono de Información:</span>
                      <a href="tel:983300021" className="ml-2 text-purple-600 hover:underline">983 300 021</a>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 text-purple-600 mr-2" />
                    <div>
                      <span className="font-medium">Información sobre discapacidad:</span>
                      <a href="tel:902151210" className="ml-2 text-purple-600 hover:underline">902 151 210</a>
                    </div>
                  </li>
                </ul>
              </div>

              <Alert variant="default" className="bg-blue-50 border-blue-200">
                <AlertDescription className="text-blue-800">
                  <p className="font-medium">Día Internacional de la Ataxia:</p>
                  <p>Se celebra el 25 de septiembre para concienciar sobre esta condición y apoyar la investigación.</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ataxia;
