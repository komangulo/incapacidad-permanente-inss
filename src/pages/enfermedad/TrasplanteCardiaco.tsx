import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Heart, Activity, Pill, Stethoscope, HeartPulse, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrasplanteCardiaco = () => {
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
              <Heart className="h-8 w-8 text-red-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Trasplante Cardíaco
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es un Trasplante Cardíaco?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                El trasplante cardíaco es un procedimiento quirúrgico en el que un corazón enfermo es reemplazado por uno sano de un donante fallecido. Es una opción de tratamiento para la insuficiencia cardíaca en etapa terminal cuando otros tratamientos han fallado.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Indicaciones</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Insuficiencia cardíaca en estadio terminal</li>
                    <li>Bajo gasto cardíaco refractario</li>
                    <li>Angina incapacitante no susceptible de revascularización</li>
                    <li>Arritmias ventriculares malignas refractarias</li>
                    <li>Cardiomiopatías congénitas complejas</li>
                    <li>Rechazo agudo de un trasplante cardíaco previo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Contraindicaciones</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Edad avanzada (generalmente &gt;70 años)</li>
                    <li>Enfermedad vascular periférica o cerebral grave</li>
                    <li>Enfermedad pulmonar irreversible</li>
                    <li>Infección activa o neoplasia reciente</li>
                    <li>Enfermedad psiquiátrica grave no controlada</li>
                    <li>Falta de adherencia al tratamiento médico</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-xl">Tratamiento Post-Trasplante</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Inmunosupresión:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Inhibidores de la calcineurina (tacrolimus, ciclosporina)</li>
                    <li>Antiproliferativos (micofenolato mofetilo, azatioprina)</li>
                    <li>Corticosteroides (prednisona)</li>
                    <li>Terapias biológicas (basiliximab, timoglobulina)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Seguimiento:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Biopsias endomiocárdicas periódicas</li>
                    <li>Ecocardiografías de seguimiento</li>
                    <li>Monitoreo de niveles de fármacos inmunosupresores</li>
                    <li>Evaluación de función renal y hepática</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Complicaciones:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Rechazo agudo o crónico</li>
                    <li>Infecciones oportunistas</li>
                    <li>Enfermedad vascular del injerto</li>
                    <li>Neoplasias (especialmente de piel y linfomas)</li>
                    <li>Efectos secundarios de la medicación inmunosupresora</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <ShieldCheck className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Situación Post-Trasplante
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>Los pacientes trasplantados de corazón suelen ser considerados en situación de incapacidad absoluta debido a:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Necesidad de tratamiento inmunosupresor de por vida</li>
                  <li>Riesgo elevado de infecciones y complicaciones</li>
                  <li>Visitas médicas frecuentes y pruebas de seguimiento</li>
                  <li>Efectos secundarios de la medicación (hipertensión, diabetes, insuficiencia renal)</li>
                  <li>Riesgo de enfermedad vascular del injerto</li>
                </ul>
                <p className="mt-2 font-medium">La valoración de la incapacidad se realiza de forma individualizada, considerando la evolución clínica, la función del injerto y las complicaciones asociadas.</p>
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

export default TrasplanteCardiaco;
