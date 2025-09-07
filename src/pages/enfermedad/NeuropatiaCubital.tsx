import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NeuropatiaCubital = () => {
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
              Neuropatía Cubital
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Alert className="bg-blue-50 border-blue-200">
              <AlertCircle className="h-5 w-5 text-blue-700" />
              <AlertTitle className="text-lg font-semibold text-blue-800">
                ¿Qué es la Neuropatía Cubital?
              </AlertTitle>
              <AlertDescription className="mt-2 text-blue-700">
                La neuropatía cubital, también conocida como síndrome del túnel cubital o atrapamiento del nervio cubital, es una afección que ocurre cuando el nervio cubital en el codo se comprime o se irrita. Este nervio es responsable de la sensibilidad del dedo meñique y la mitad del dedo anular, así como del control de los músculos finos de la mano.
              </AlertDescription>
            </Alert>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Síntomas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Hormigueo o entumecimiento en el dedo meñique y anular</li>
                    <li>Débil agarre de la mano</li>
                    <li>Dificultad para realizar movimientos finos con los dedos</li>
                    <li>Dolor en el codo que puede irradiarse al antebrazo</li>
                    <li>Pérdida de masa muscular en la mano (en casos crónicos)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Causas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Presión prolongada sobre el codo (apoyarse mucho tiempo sobre los codos)</li>
                    <li>Flexión prolongada del codo (como al hablar por teléfono)</li>
                    <li>Traumatismos en el codo</li>
                    <li>Artritis o quistes en el codo</li>
                    <li>Movimientos repetitivos del brazo y la muñeca</li>
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
                  <h3 className="font-semibold text-lg mb-2">Tratamiento conservador:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Evitar actividades que empeoren los síntomas</li>
                    <li>Uso de férulas nocturnas para mantener el codo extendido</li>
                    <li>Ejercicios de deslizamiento nervioso</li>
                    <li>Medicamentos antiinflamatorios</li>
                    <li>Inyecciones de corticosteroides</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tratamiento quirúrgico:</h3>
                  <p className="text-gray-700">
                    En casos severos o cuando el tratamiento conservador falla, puede ser necesaria la cirugía para liberar el nervio o cambiar su posición.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Alert className="bg-yellow-50 border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <AlertTitle className="text-lg font-semibold text-yellow-800">
                Incapacidad Laboral
              </AlertTitle>
              <AlertDescription className="mt-2 text-yellow-700">
                La neuropatía cubital puede ser considerada una enfermedad profesional si está relacionada con la actividad laboral. Los trabajos que requieren flexión prolongada del codo o presión sobre el mismo son los más afectados. La valoración de la incapacidad dependerá de la gravedad de los síntomas y de la respuesta al tratamiento.
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

export default NeuropatiaCubital;
