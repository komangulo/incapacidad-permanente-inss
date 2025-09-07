import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft, ExternalLink, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LesionMedular = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Lesión Medular</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Alteración de la médula espinal con consecuencias motoras y sensitivas</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una condición que requiere un enfoque multidisciplinar y rehabilitación especializada
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
                <h3 className="text-xl font-semibold mb-4 text-gray-800">¿Qué es una Lesión Medular?</h3>
                <p className="text-gray-700 mb-4">
                  Una lesión medular es un daño en la médula espinal que causa cambios en su función, ya sea temporal o permanente. Estas lesiones pueden ser traumáticas (accidentes de tráfico, caídas, lesiones deportivas) o no traumáticas (tumores, infecciones, enfermedades degenerativas).
                </p>
                <p className="text-gray-700">
                  La gravedad de la lesión depende del nivel de la columna vertebral afectado (cervical, torácica, lumbar) y de si es completa (pérdida total de función) o incompleta (preservación parcial de la función por debajo del nivel de la lesión).
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
                <h4 className="font-semibold text-lg text-gray-800 mb-3">Síntomas según nivel de la lesión:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><span className="font-medium">Cervical alta (C1-C4):</span> Parálisis de brazos, piernas y tronco (tetraplejia), dificultad respiratoria</li>
                  <li><span className="font-medium">Cervical baja (C5-C8):</span> Parálisis de piernas y parcial de brazos, preservación de la función de hombros y codos</li>
                  <li><span className="font-medium">Torácica:</span> Paraplejia (parálisis de piernas), pérdida de sensibilidad en tronco y piernas</li>
                  <li><span className="font-medium">Lumbar:</span> Parálisis de caderas y piernas, disfunción intestinal y vesical</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-800 mb-2">Complicaciones frecuentes:</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                  <li>Úlceras por presión</li>
                  <li>Infecciones urinarias de repetición</li>
                  <li>Espasticidad y contracturas musculares</li>
                  <li>Dolor neuropático</li>
                  <li>Problemas respiratorios</li>
                  <li>Trombosis venosa profunda</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Rehabilitación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Tratamiento agudo:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Estabilización inicial:</span> Inmovilización de la columna</li>
                    <li><span className="font-medium">Tratamiento quirúrgico:</span> Descompresión y estabilización vertebral</li>
                    <li><span className="font-medium">Cuidados intensivos:</span> Soporte respiratorio si es necesario</li>
                    <li><span className="font-medium">Prevención de complicaciones:</span> Profilaxis de úlceras, trombosis, etc.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Rehabilitación:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Fisioterapia:</span> Movilizaciones, fortalecimiento muscular</li>
                    <li><span className="font-medium">Terapia ocupacional:</span> Entrenamiento en actividades de la vida diaria</li>
                    <li><span className="font-medium">Ayudas técnicas:</span> Sillas de ruedas, órtesis, dispositivos de asistencia</li>
                    <li><span className="font-medium">Rehabilitación urológica:</span> Manejo de la vejiga e intestino neurogénico</li>
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
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Incapacidad Permanente:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Total (55-75%):</span> Para la profesión habitual en la mayoría de los casos</li>
                    <li><span className="font-medium">Absoluta (75-100%):</span> En lesiones medulares altas (cervicales) o con graves complicaciones</li>
                    <li><span className="font-medium">Gran invalidez:</span> Cuando se precisa asistencia de tercera persona</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800 mb-3">Prestaciones sociales:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><span className="font-medium">Ayudas técnicas:</span> Sillas de ruedas, adaptaciones del hogar</li>
                    <li><span className="font-medium">Asistencia personal:</span> En casos de gran dependencia</li>
                    <li><span className="font-medium">Prestación por hijo a cargo:</span> Si hay menores dependientes</li>
                    <li><span className="font-medium">Beneficios fiscales:</span> Descuentos en impuestos y transporte</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Recomendaciones laborales:</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700">
                  <li>Valoración de capacidades residuales</li>
                  <li>Adaptación del puesto de trabajo (accesibilidad, horarios flexibles)</li>
                  <li>Reconversión profesional si es necesario</li>
                  <li>Trabajo a distancia cuando sea posible</li>
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
                      <a href="https://www.lesionmedular.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Fundación del Lesionado Medular
                      </a>
                      <p className="text-sm text-gray-600">Apoyo integral a personas con lesión medular y sus familias</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ExternalLink className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="https://www.consalud.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Confederación Española de Personas con Discapacidad Física y Orgánica (COCEMFE)
                      </a>
                      <p className="text-sm text-gray-600">Recursos y apoyo para personas con discapacidad física</p>
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
                      <span className="font-medium">Asociación Nacional de Lesionados Medulares (ASPAYM):</span>
                      <a href="tel:915980100" className="ml-2 text-green-600 hover:underline">91 598 01 00</a>
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

export default LesionMedular;
