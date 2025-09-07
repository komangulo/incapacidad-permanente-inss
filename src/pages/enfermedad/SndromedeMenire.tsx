import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SndromedeMenire = () => {
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
            <CardTitle className="text-3xl font-bold text-center text-blue-800">
              Síndrome de Ménière
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es el Síndrome de Ménière?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                El síndrome de Ménière es un trastorno del oído interno que puede afectar la audición y el equilibrio. Se caracteriza por episodios de vértigo, pérdida de audición, zumbidos en los oídos (tinnitus) y sensación de presión en el oído afectado.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Síntomas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Vértigo recurrente (mareos severos)</li>
                    <li>Pérdida de audición fluctuante</li>
                    <li>Tinnitus (zumbido en los oídos)</li>
                    <li>Sensación de presión en el oído</li>
                    <li>Náuseas y vómitos durante los episodios</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Causas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Exceso de líquido en el oído interno</li>
                    <li>Problemas con el drenaje del líquido</li>
                    <li>Respuesta inmunitaria anormal</li>
                    <li>Factores genéticos</li>
                    <li>Alergias o infecciones virales</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tratamiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento médico:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Medicamentos para el vértigo y las náuseas</li>
                    <li>Diuréticos para reducir la retención de líquidos</li>
                    <li>Inyecciones de medicamentos en el oído medio</li>
                    <li>Terapia de rehabilitación vestibular</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cambios en el estilo de vida:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Dieta baja en sal</li>
                    <li>Reducción del consumo de cafeína y alcohol</li>
                    <li>Manejo del estrés</li>
                    <li>Dejar de fumar</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700">
                El Síndrome de Ménière puede ser considerado una enfermedad profesional si está relacionado con la actividad laboral, especialmente en entornos ruidosos o estresantes. La valoración de la incapacidad dependerá de la frecuencia e intensidad de los episodios de vértigo y el grado de pérdida auditiva.
              </AlertDescription>
            </Alert>

            <div className="flex justify-center mt-8">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/calculadora">
                  Calcular mi prestación
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SndromedeMenire;
