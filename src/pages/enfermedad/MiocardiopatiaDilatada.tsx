import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Heart, Activity, Pill, Stethoscope, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const MiocardiopatiaDilatada = () => {
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
                Miocardiopatía Dilatada
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Miocardiopatía Dilatada?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La miocardiopatía dilatada es una enfermedad del músculo cardíaco que provoca que el corazón se dilate y se debilite, lo que reduce su capacidad para bombear sangre eficazmente. En su forma más grave, con función ventricular reducida, puede causar insuficiencia cardíaca grave.
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
                    <li>Dificultad para respirar (disnea) que empeora con el esfuerzo</li>
                    <li>Fatiga extrema y debilidad</li>
                    <li>Hinchazón en piernas, tobillos y pies (edema)</li>
                    <li>Latidos cardíacos irregulares o rápidos (arritmias)</li>
                    <li>Mareos o desmayos</li>
                    <li>Dolor en el pecho o malestar</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Causas y Factores de Riesgo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Enfermedad de las arterias coronarias</li>
                    <li>Infecciones virales del corazón (miocarditis)</li>
                    <li>Hipertensión arterial no controlada</li>
                    <li>Consumo excesivo de alcohol o drogas</li>
                    <li>Enfermedades hereditarias</li>
                    <li>Trastornos de las válvulas cardíacas</li>
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
                    <li>Betabloqueantes</li>
                    <li>Antagonistas de la aldosterona</li>
                    <li>Diuréticos para reducir la retención de líquidos</li>
                    <li>Digoxina en casos seleccionados</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dispositivos médicos:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Desfibrilador cardioversor implantable (DCI) para prevenir muerte súbita</li>
                    <li>Terapia de resincronización cardíaca (TRC)</li>
                    <li>Dispositivos de asistencia ventricular</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trasplante cardíaco:</h3>
                  <p className="text-gray-700 pl-5">
                    Opción para pacientes con enfermedad en estadio terminal que no responden a otros tratamientos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Función Ventricular Reducida
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>La miocardiopatía dilatada con función ventricular reducida puede dar lugar a diferentes grados de incapacidad laboral:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Incapacidad temporal:</strong> Durante fases de descompensación o postoperatorio</li>
                  <li><strong>Incapacidad permanente total:</strong> Para trabajos que requieran esfuerzo físico moderado o intenso</li>
                  <li><strong>Incapacidad permanente absoluta:</strong> En casos de insuficiencia cardíaca avanzada con fracción de eyección muy reducida</li>
                </ul>
                <p className="mt-2 font-medium">La valoración de la incapacidad se realiza en función de la clase funcional de la NYHA, la fracción de eyección del ventrículo izquierdo, la capacidad de ejercicio y la presencia de arritmias graves.</p>
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

export default MiocardiopatiaDilatada;
