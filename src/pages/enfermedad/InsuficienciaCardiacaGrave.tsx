import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, HeartPulse, Activity, Pill, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsuficienciaCardiacaGrave = () => {
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
              <HeartPulse className="h-8 w-8 text-red-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Insuficiencia Cardíaca Grave
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Insuficiencia Cardíaca Grave?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La insuficiencia cardíaca grave es una afección en la que el corazón no puede bombear suficiente sangre para satisfacer las necesidades del cuerpo. En su forma más severa (grado funcional IV), los pacientes experimentan síntomas incluso en reposo.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Síntomas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Dificultad para respirar (disnea) en reposo</li>
                    <li>Fatiga extrema y debilidad</li>
                    <li>Hinchazón en piernas, tobillos y pies</li>
                    <li>Pérdida de apetito y náuseas</li>
                    <li>Dificultad para concentrarse o confusión</li>
                    <li>Pulso rápido o irregular</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Causas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Enfermedad de las arterias coronarias</li>
                    <li>Infarto de miocardio previo</li>
                    <li>Hipertensión arterial no controlada</li>
                    <li>Cardiomiopatías</li>
                    <li>Enfermedades de las válvulas cardíacas</li>
                    <li>Arritmias crónicas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-xl">Tratamiento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento farmacológico:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Inhibidores de la ECA o ARA II</li>
                    <li>Bloqueadores beta</li>
                    <li>Antagonistas de la aldosterona</li>
                    <li>Diuréticos para reducir la retención de líquidos</li>
                    <li>Digoxina en casos seleccionados</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dispositivos médicos:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Marcapasos biventricular</li>
                    <li>Desfibrilador cardioversor implantable (DCI)</li>
                    <li>Bombas de asistencia ventricular</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trasplante cardíaco:</h3>
                  <p className="text-gray-700 pl-5">
                    En casos seleccionados de insuficiencia cardíaca terminal que no responde a otros tratamientos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Grado de Discapacidad: Absoluta (Grado funcional IV)
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>La insuficiencia cardíaca grave en grado funcional IV se considera una condición de incapacidad absoluta debido a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Síntomas en reposo que empeoran con cualquier actividad física</li>
                  <li>Limitación severa de la capacidad funcional</li>
                  <li>Necesidad de asistencia para las actividades de la vida diaria</li>
                  <li>Hospitalizaciones frecuentes</li>
                  <li>Tratamiento médico complejo y continuo</li>
                </ul>
                <p className="mt-2 font-medium">Los pacientes con esta condición suelen requerir ayuda constante y no pueden mantener un empleo regular.</p>
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

export default InsuficienciaCardiacaGrave;
