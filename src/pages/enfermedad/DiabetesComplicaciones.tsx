import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Activity, Pill, Stethoscope, HeartPulse, Droplet, Eye, ActivityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiabetesComplicaciones = () => {
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

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Droplet className="h-8 w-8 text-red-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Diabetes con Complicaciones
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Diabetes con Complicaciones?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La diabetes es una enfermedad crónica que se produce cuando el páncreas no produce suficiente insulina o cuando el organismo no utiliza eficazmente la insulina que produce. Las complicaciones de la diabetes pueden ser agudas (a corto plazo) o crónicas (a largo plazo) y pueden afectar a múltiples sistemas del organismo.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Complicaciones Agudas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Hipoglucemia:</strong> Niveles bajos de azúcar en sangre</li>
                    <li><strong>Hiperglucemia:</strong> Niveles altos de azúcar en sangre</li>
                    <li><strong>Cetoacidosis diabética:</strong> Acumulación de cetonas en la sangre</li>
                    <li><strong>Estado hiperglucémico hiperosmolar:</strong> Niveles extremadamente altos de azúcar</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Complicaciones Crónicas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Retinopatía diabética:</strong> Daño en los vasos sanguíneos del ojo</li>
                    <li><strong>Nefropatía diabética:</strong> Daño renal</li>
                    <li><strong>Neuropatía diabética:</strong> Daño en los nervios</li>
                    <li><strong>Enfermedad cardiovascular:</strong> Aumento del riesgo de problemas cardíacos</li>
                    <li><strong>Pie diabético:</strong> Úlceras e infecciones en los pies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-xl">Tratamiento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Control de la glucosa:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Diabetes tipo 1:</strong> Insulina de por vida</li>
                    <li><strong>Diabetes tipo 2:</strong> Medicamentos orales, inyectables y/o insulina</li>
                    <li>Monitoreo regular de los niveles de glucosa</li>
                    <li>Dieta equilibrada y ejercicio regular</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento de las complicaciones:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Retinopatía:</strong> Tratamiento con láser, inyecciones o cirugía</li>
                    <li><strong>Nefropatía:</strong> Control de la presión arterial, diálisis o trasplante</li>
                    <li><strong>Neuropatía:</strong> Medicamentos para el dolor y el control de los síntomas</li>
                    <li><strong>Enfermedad cardiovascular:</strong> Control de la presión arterial y el colesterol</li>
                    <li><strong>Pie diabético:</strong> Cuidado de los pies, tratamiento de úlceras</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <ActivityIcon className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Consideraciones
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>La diabetes con complicaciones puede dar lugar a diferentes grados de incapacidad laboral:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Incapacidad temporal:</strong> Durante complicaciones agudas o descompensaciones</li>
                  <li><strong>Incapacidad permanente total:</strong> Para trabajos que requieran esfuerzo físico o concentración cuando hay complicaciones moderadas</li>
                  <li><strong>Incapacidad permanente absoluta:</strong> En casos de complicaciones graves que afecten significativamente la capacidad laboral</li>
                </ul>
                <p className="mt-2 font-medium">La valoración se realiza en función del control glucémico, la presencia y gravedad de las complicaciones, y las exigencias del puesto de trabajo.</p>
              </AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/calculadora" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Calcular mi prestación
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/CotizacionRecaudacionTrabajadores/36537" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Ver normativa</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiabetesComplicaciones;
