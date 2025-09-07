import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, HeartPulse, Activity, Pill, Stethoscope, HeartOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const CardiopatiaIsquemica = () => {
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
              <HeartOff className="h-8 w-8 text-red-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Cardiopatía Isquémica
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Cardiopatía Isquémica?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La cardiopatía isquémica es una enfermedad causada por la arteriosclerosis de las arterias coronarias, que son las encargadas de suministrar sangre al músculo cardíaco. En su forma total, puede causar una limitación significativa de la capacidad física.
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
                    <li>Dolor torácico (angina de pecho)</li>
                    <li>Dificultad para respirar (disnea)</li>
                    <li>Fatiga extrema con el esfuerzo</li>
                    <li>Palpitaciones o arritmias</li>
                    <li>Mareos o desmayos</li>
                    <li>Edema en extremidades inferiores</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Factores de Riesgo</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Hipertensión arterial</li>
                    <li>Colesterol elevado</li>
                    <li>Diabetes mellitus</li>
                    <li>Tabaquismo</li>
                    <li>Obesidad y sedentarismo</li>
                    <li>Antecedentes familiares</li>
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
                    <li>Antiagregantes plaquetarios (ácido acetilsalicílico, clopidogrel)</li>
                    <li>Estatinas para control del colesterol</li>
                    <li>Betabloqueantes</li>
                    <li>Inhibidores de la ECA o ARA II</li>
                    <li>Antianginosos (nitratos, ranolazina)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Intervenciones:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Angioplastia coronaria con stent</li>
                    <li>Cirugía de bypass coronario (CABG)</li>
                    <li>Rehabilitación cardíaca</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cambios en el estilo de vida:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Dieta cardiosaludable (baja en grasas saturadas y sal)</li>
                    <li>Ejercicio físico regular adaptado</li>
                    <li>Abandono del tabaco</li>
                    <li>Control del estrés</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Limitación de la Capacidad Física
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>La cardiopatía isquémica puede dar lugar a diferentes grados de incapacidad laboral:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Incapacidad temporal:</strong> Durante episodios agudos o postoperatorios</li>
                  <li><strong>Incapacidad permanente parcial:</strong> Para trabajos que requieran esfuerzo físico intenso</li>
                  <li><strong>Incapacidad permanente total:</strong> Cuando la enfermedad limita significativamente la capacidad laboral</li>
                  <li><strong>Incapacidad permanente absoluta:</strong> En casos de enfermedad muy avanzada con limitación severa</li>
                </ul>
                <p className="mt-2 font-medium">La valoración del grado de incapacidad se realiza en función de la capacidad funcional residual, la fracción de eyección del ventrículo izquierdo y la presencia de arritmias graves.</p>
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

export default CardiopatiaIsquemica;
