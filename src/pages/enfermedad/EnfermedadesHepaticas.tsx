import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Activity, Pill, Stethoscope, ActivityIcon, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnfermedadesHepaticas = () => {
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
              <Droplet className="h-8 w-8 text-green-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Enfermedades Hepáticas
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué son las Enfermedades Hepáticas?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                Las enfermedades hepáticas son un conjunto de afecciones que afectan al hígado, un órgano vital que realiza más de 500 funciones esenciales en el cuerpo. Estas enfermedades pueden ser agudas (corto plazo) o crónicas (largo plazo) y pueden tener diversas causas, incluyendo infecciones, consumo de alcohol, trastornos autoinmunitarios, factores genéticos y estilo de vida.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-xl">Tipos Comunes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Hepatitis viral:</strong> A, B, C, D y E</li>
                    <li><strong>Hígado graso no alcohólico:</strong> Esteatosis hepática</li>
                    <li><strong>Enfermedad hepática alcohólica:</strong> Por consumo excesivo de alcohol</li>
                    <li><strong>Cirrosis hepática:</strong> Daño hepático irreversible</li>
                    <li><strong>Hepatitis autoinmune:</strong> El sistema inmunitario ataca al hígado</li>
                    <li><strong>Enfermedades hereditarias:</strong> Hemocromatosis, enfermedad de Wilson, etc.</li>
                    <li><strong>Cáncer de hígado</strong></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-green-500" />
                    <CardTitle className="text-xl">Síntomas Comunes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Ictericia (piel y ojos amarillentos)</li>
                    <li>Dolor e hinchazón abdominal</li>
                    <li>Hinchazón en piernas y tobillos</li>
                    <li>Picor en la piel</li>
                    <li>Orina de color oscuro</li>
                    <li>Heces pálidas o con sangre</li>
                    <li>Fatiga crónica</li>
                    <li>Náuseas o vómitos</li>
                    <li>Pérdida de apetito</li>
                    <li>Facilidad para desarrollar moretones</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-xl">Tratamiento</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento según la causa:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Hepatitis viral:</strong> Antivirales, vacunas preventivas</li>
                    <li><strong>Enfermedad hepática alcohólica:</strong> Abstinencia de alcohol, terapia nutricional</li>
                    <li><strong>Hígado graso no alcohólico:</strong> Pérdida de peso, control de la diabetes y el colesterol</li>
                    <li><strong>Hepatitis autoinmune:</strong> Inmunosupresores como corticosteroides</li>
                    <li><strong>Enfermedades hereditarias:</strong> Tratamientos específicos según la enfermedad</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento de las complicaciones:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Hipertensión portal:</strong> Medicamentos para reducir la presión en las venas</li>
                    <li><strong>Ascitis:</strong> Reducción de sal, diuréticos, paracentesis</li>
                    <li><strong>Encefalopatía hepática:</strong> Medicamentos para reducir los niveles de amoníaco</li>
                    <li><strong>Sangrado por varices:</strong> Ligadura endoscópica, medicamentos</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Trasplante de hígado:</h3>
                  <p className="text-gray-700 pl-5">
                    En casos de insuficiencia hepática terminal o cáncer de hígado en etapa temprana, puede ser necesario un trasplante de hígado.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <ActivityIcon className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral - Consideraciones
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700 space-y-2">
                <p>Las enfermedades hepáticas pueden dar lugar a diferentes grados de incapacidad laboral:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Incapacidad temporal:</strong> Durante brotes agudos o complicaciones</li>
                  <li><strong>Incapacidad permanente total:</strong> Para trabajos que requieran esfuerzo físico o exposición a tóxicos</li>
                  <li><strong>Incapacidad permanente absoluta:</strong> En casos de insuficiencia hepática avanzada o cirrosis descompensada</li>
                </ul>
                <p className="mt-2 font-medium">La valoración se realiza en función de la función hepática, la presencia de complicaciones, la respuesta al tratamiento y las exigencias del puesto de trabajo.</p>
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

export default EnfermedadesHepaticas;
