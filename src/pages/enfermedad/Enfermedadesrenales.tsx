import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle, Activity, Pill, Stethoscope, ActivityIcon, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnfermedadesRenales = () => {
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
              <Droplet className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-3xl font-bold text-blue-800">
                Enfermedades Renales
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué son las Enfermedades Renales?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                Las enfermedades renales son afecciones que dañan los riñones y disminuyen su capacidad para mantener el equilibrio químico del cuerpo. Pueden ser agudas (repentinas) o crónicas (de larga duración) y afectan la capacidad de los riñones para filtrar los desechos de la sangre, regular la presión arterial y mantener el equilibrio de electrolitos.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <CardTitle className="text-xl">Tipos Comunes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Enfermedad Renal Crónica (ERC):</strong> Pérdida gradual de la función renal</li>
                    <li><strong>Lesión Renal Aguda (LRA):</strong> Pérdida repentina de la función renal</li>
                    <li><strong>Nefropatía diabética:</strong> Daño renal por diabetes</li>
                    <li><strong>Glomerulonefritis:</strong> Inflamación de los glomérulos</li>
                    <li><strong>Enfermedad renal poliquística:</strong> Quistes en los riñones</li>
                    <li><strong>Infecciones renales:</strong> Pielonefritis</li>
                    <li><strong>Cálculos renales:</strong> Depósitos duros de minerales</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-blue-500" />
                    <CardTitle className="text-xl">Síntomas Comunes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Fatiga y debilidad</li>
                    <li>Dificultad para concentrarse</li>
                    <li>Pérdida de apetito</li>
                    <li>Problemas para dormir</li>
                    <li>Hinchazón en pies y tobillos</li>
                    <li>Calambres musculares</li>
                    <li>Piel seca y con picazón</li>
                    <li>Micción frecuente, especialmente por la noche</li>
                    <li>Náuseas y vómitos</li>
                    <li>Presión arterial alta difícil de controlar</li>
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
                <h3 className="font-semibold text-lg mb-2">Tratamiento según la etapa de la enfermedad:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><strong>Etapas tempranas (1-3):</strong> Control de la causa subyacente, medicamentos para la presión arterial, cambios en la dieta</li>
                  <li><strong>Etapas avanzadas (4-5):</strong> Planificación para terapia de reemplazo renal, manejo de complicaciones</li>
                  <li><strong>Terapia de reemplazo renal:</strong> Diálisis (hemodiálisis o diálisis peritoneal) o trasplante de riñón</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Manejo de complicaciones:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><strong>Anemia:</strong> Suplementos de hierro, agentes estimulantes de la eritropoyesis</li>
                  <li><strong>Enfermedad ósea:</strong> Suplementos de calcio y vitamina D, quelantes de fósforo</li>
                  <li><strong>Hipertensión:</strong> Inhibidores de la ECA o BRAII</li>
                  <li><strong>Acidosis metabólica:</strong> Bicarbonato de sodio</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Recomendaciones nutricionales:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Control de proteínas según la etapa de la enfermedad</li>
                  <li>Restricción de sodio, potasio y fósforo</li>
                  <li>Control de líquidos en etapas avanzadas</li>
                  <li>Monitoreo de peso y estado nutricional</li>
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
              <p>La enfermedad renal puede dar lugar a diferentes grados de incapacidad laboral:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Incapacidad temporal:</strong> Durante brotes agudos o complicaciones</li>
                <li><strong>Incapacidad permanente total:</strong> Para trabajos que requieran esfuerzo físico o exposición a tóxicos</li>
                <li><strong>Incapacidad permanente absoluta:</strong> En casos de insuficiencia renal terminal que requiera diálisis frecuente</li>
                <li><strong>Gran invalidez:</strong> Cuando se requiera la asistencia de otra persona para la realización de las actividades básicas de la vida diaria</li>
              </ul>
              <p className="mt-2 font-medium">La valoración se realiza en función de la tasa de filtración glomerular (TFG), la presencia de complicaciones, la respuesta al tratamiento y las exigencias del puesto de trabajo.</p>
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

export default EnfermedadesRenales;