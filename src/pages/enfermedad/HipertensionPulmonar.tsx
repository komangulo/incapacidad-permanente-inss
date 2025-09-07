import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Activity, Wind, Pill, Stethoscope, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const HipertensionPulmonar = () => {
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
              <Wind className="h-8 w-8 text-red-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Hipertensión Pulmonar
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Hipertensión Pulmonar?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La hipertensión pulmonar es una enfermedad rara y progresiva caracterizada por una presión arterial anormalmente alta en las arterias de los pulmones. Esta condición hace que el lado derecho del corazón se esfuerce más de lo normal para bombear sangre a los pulmones, lo que puede llevar a insuficiencia cardíaca.
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
                    <li>Fatiga y debilidad extrema</li>
                    <li>Mareos o desmayos (síncope)</li>
                    <li>Dolor o presión en el pecho</li>
                    <li>Hinchazón en tobillos, piernas y abdomen</li>
                    <li>Labios y piel azulados (cianosis)</li>
                    <li>Pulso acelerado o palpitaciones</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Clasificación (OMS)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Grupo 1:</strong> Hipertensión arterial pulmonar</li>
                    <li><strong>Grupo 2:</strong> Debida a enfermedad cardíaca izquierda</li>
                    <li><strong>Grupo 3:</strong> Debida a enfermedad pulmonar o hipoxia</li>
                    <li><strong>Grupo 4:</strong> Tromboembólica crónica</li>
                    <li><strong>Grupo 5:</strong> Mecanismos multifactoriales poco claros</li>
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
                  <h3 className="font-semibold text-lg mb-2">Tratamiento farmacológico específico:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Antagonistas de los receptores de endotelina:</strong> Bosentán, Ambrisentán, Macitentán</li>
                    <li><strong>Inhibidores de la fosfodiesterasa-5:</strong> Sildenafilo, Tadalafilo</li>
                    <li><strong>Análogos de la prostaciclina:</strong> Epoprostenol, Treprostinil, Iloprost</li>
                    <li><strong>Estimuladores de la guanilato ciclasa:</strong> Riociguat</li>
                    <li><strong>Anticoagulantes:</strong> Warfarina (en algunos casos)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento de soporte:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Diuréticos para reducir la retención de líquidos</li>
                    <li>Oxigenoterapia en caso de hipoxemia</li>
                    <li>Digoxina para la insuficiencia cardíaca derecha</li>
                    <li>Anticoagulantes en casos seleccionados</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamientos intervencionistas:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Septostomía auricular</li>
                    <li>Trasplante pulmonar o cardiopulmonar en casos avanzados</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <HeartPulse className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Situación de Incapacidad Total/Absoluta
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>La hipertensión pulmonar puede dar lugar a diferentes grados de incapacidad laboral:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Incapacidad temporal:</strong> Durante fases de descompensación o ajuste del tratamiento</li>
                  <li><strong>Incapacidad permanente total:</strong> Para trabajos que requieran esfuerzo físico moderado o intenso</li>
                  <li><strong>Incapacidad permanente absoluta:</strong> En casos avanzados con limitación severa de la capacidad funcional (clase funcional III-IV de la OMS)</li>
                </ul>
                <p className="mt-2 font-medium">La valoración se realiza en función de la clase funcional de la OMS, la capacidad de ejercicio (prueba de caminata de 6 minutos), parámetros hemodinámicos y la respuesta al tratamiento.</p>
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

export default HipertensionPulmonar;
