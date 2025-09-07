import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SndromedeSjogren = () => {
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
              Síndrome de Sjögren
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es el Síndrome de Sjögren?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                El síndrome de Sjögren es un trastorno autoinmune que ataca las glándulas que producen lágrimas y saliva, causando sequedad en los ojos y la boca. También puede afectar otras partes del cuerpo, incluyendo las articulaciones, la piel y los órganos internos.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Síntomas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Sequedad ocular persistente</li>
                    <li>Sequedad bucal</li>
                    <li>Dificultad para tragar o hablar</li>
                    <li>Fatiga extrema</li>
                    <li>Dolor e inflamación en las articulaciones</li>
                    <li>Sequedad en la piel y otras mucosas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Causas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Respuesta autoinmune anormal</li>
                    <li>Factores genéticos</li>
                    <li>Infecciones virales o bacterianas</li>
                    <li>Factores hormonales (es más común en mujeres)</li>
                    <li>Puede aparecer junto con otras enfermedades autoinmunes</li>
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
                  <h3 className="font-semibold text-lg mb-2">Tratamiento sintomático:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Lágrimas artificiales para los ojos secos</li>
                    <li>Estimulantes de la saliva o sustitutos salivales</li>
                    <li>Medicamentos antiinflamatorios no esteroideos</li>
                    <li>Inmunosupresores en casos severos</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cuidados personales:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Beber agua con frecuencia</li>
                    <li>Usar humificadores</li>
                    <li>Mantener una buena higiene bucal</li>
                    <li>Evitar ambientes secos o con humo</li>
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
                El Síndrome de Sjögren puede ser considerado una enfermedad profesional si está relacionado con la actividad laboral, especialmente en entornos secos o con exposición a irritantes. La valoración de la incapacidad dependerá de la gravedad de los síntomas y el impacto en la capacidad laboral del paciente.
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

export default SndromedeSjogren;
