import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Activity, Pill, Stethoscope, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const FibrosisQuistica = () => {
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
              <Wind className="h-8 w-8 text-teal-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Fibrosis Quística
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Fibrosis Quística?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La fibrosis quística es una enfermedad genética, crónica y progresiva que afecta principalmente a los pulmones y el sistema digestivo. Es causada por mutaciones en el gen CFTR, lo que resulta en la producción de moco espeso y pegajoso que obstruye las vías respiratorias y los conductos del páncreas.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-teal-500" />
                    <CardTitle className="text-xl">Síntomas Principales</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Tos persistente con moco espeso</li>
                    <li>Infecciones pulmonares frecuentes</li>
                    <li>Dificultad para respirar</li>
                    <li>Silbidos al respirar (sibilancias)</li>
                    <li>Poco aumento de peso y crecimiento lento</li>
                    <li>Heces grasosas y malolientes</li>
                    <li>Infertilidad en los hombres</li>
                    <li>Sudor más salado de lo normal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-teal-500" />
                    <CardTitle className="text-xl">Complicaciones</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Infecciones respiratorias crónicas</li>
                    <li>Bronquiectasias (daño irreversible de las vías respiratorias)</li>
                    <li>Neumotórax (colapso pulmonar)</li>
                    <li>Insuficiencia respiratoria</li>
                    <li>Diabetes relacionada con la fibrosis quística</li>
                    <li>Enfermedad hepática</li>
                    <li>Desnutrición</li>
                    <li>Osteoporosis</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-teal-500" />
                  <CardTitle className="text-xl">Tratamiento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento de las vías respiratorias:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Fisioterapia respiratoria diaria</li>
                    <li>Medicamentos inhalados para abrir las vías respiratorias</li>
                    <li>Antibióticos para tratar infecciones</li>
                    <li>Moduladores de CFTR (ivacaftor, lumacaftor/ivacaftor, tezacaftor/ivacaftor, elexacaftor/tezacaftor/ivacaftor)</li>
                    <li>Oxigenoterapia en casos avanzados</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento digestivo y nutricional:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Enzimas pancreáticas con las comidas</li>
                    <li>Suplementos vitamínicos (A, D, E, K)</li>
                    <li>Dieta alta en calorías y proteínas</li>
                    <li>Suplementos nutricionales</li>
                    <li>Tratamiento para la diabetes si es necesario</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trasplante:</h3>
                  <p className="text-gray-700 pl-5">
                    El trasplante de pulmón o hígado puede considerarse en casos avanzados cuando otros tratamientos ya no son efectivos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Situación de Incapacidad Absoluta
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>La fibrosis quística es considerada una enfermedad discapacitante que puede dar lugar a diferentes grados de incapacidad laboral:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Incapacidad temporal:</strong> Durante exacerbaciones o complicaciones agudas</li>
                  <li><strong>Incapacidad permanente total:</strong> Para trabajos que requieran esfuerzo físico o exposición a agentes infecciosos</li>
                  <li><strong>Incapacidad permanente absoluta:</strong> En casos avanzados con deterioro significativo de la función pulmonar (FEV1 &lt; 40%)</li>
                </ul>
                <p className="mt-2 font-medium">La valoración se realiza en función de la función pulmonar, el estado nutricional, la presencia de complicaciones y la respuesta al tratamiento.</p>
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

export default FibrosisQuistica;
