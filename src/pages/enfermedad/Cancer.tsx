import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cancer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Botón de volver */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cáncer</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad Total/Absoluta</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enfermedad que se caracteriza por el crecimiento descontrolado de células anormales
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-8">
          {/* Descripción General */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción General</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El cáncer es un conjunto de enfermedades relacionadas en las que se produce un crecimiento anormal de células que tienen la capacidad de invadir y destruir otros tejidos corporales. Puede comenzar en cualquier parte del cuerpo humano y a menudo se disemina a otras áreas.
              </p>
              <p className="text-gray-700">
                La gravedad y el impacto del cáncer en la capacidad laboral varían según el tipo de cáncer, su estadio en el momento del diagnóstico, el tratamiento requerido y la respuesta del paciente al mismo.
              </p>
            </CardContent>
          </Card>

          {/* Tipos de Cáncer */}
          <Card>
            <CardHeader>
              <CardTitle>Tipos Comunes de Cáncer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Cánceres más frecuentes:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Cáncer de mama</li>
                    <li>Cáncer de pulmón</li>
                    <li>Cáncer colorrectal</li>
                    <li>Cáncer de próstata</li>
                    <li>Leucemia</li>
                    <li>Linfoma</li>
                    <li>Melanoma</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Impacto laboral:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Fatiga crónica</li>
                    <li>Dolor persistente</li>
                    <li>Efectos secundarios del tratamiento</li>
                    <li>Necesidad de revisiones médicas frecuentes</li>
                    <li>Bajas defensas inmunitarias</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Incapacidad Laboral */}
          <Card>
            <CardHeader>
              <CardTitle>Incapacidad Laboral por Cáncer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Incapacidad Temporal (IT):</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Durante el tratamiento activo (quimioterapia, radioterapia, cirugía)</li>
                    <li>Período de recuperación post-tratamiento</li>
                    <li>Hasta 12 meses prorrogables por 6 meses más</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Incapacidad Permanente (IP):</h3>
                  <p className="text-gray-700 mb-2">Se valora una vez finalizados los tratamientos y estabilizada la enfermedad:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><span className="font-medium">Parcial:</span> Disminución del rendimiento laboral ≥33%</li>
                    <li><span className="font-medium">Total:</span> Imposibilidad para la profesión habitual</li>
                    <li><span className="font-medium">Absoluta:</span> Imposibilidad para todo tipo de trabajo</li>
                    <li><span className="font-medium">Gran Invalidez:</span> Cuando se necesita asistencia para actos básicos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tratamiento y Rehabilitación */}
          <Card>
            <CardHeader>
              <CardTitle>Tratamiento y Rehabilitación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Tratamientos comunes:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Cirugía oncológica</li>
                      <li>Quimioterapia</li>
                      <li>Radioterapia</li>
                      <li>Inmunoterapia</li>
                      <li>Terapia dirigida</li>
                      <li>Trasplante de médula ósea</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Rehabilitación:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Fisioterapia</li>
                      <li>Terapia ocupacional</li>
                      <li>Apoyo psicológico</li>
                      <li>Nutrición especializada</li>
                      <li>Grupos de apoyo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recursos y Asociaciones */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos y Asociaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Existen numerosas organizaciones que ofrecen apoyo a pacientes con cáncer y sus familias:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.aecc.es/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Asociación Española Contra el Cáncer (AECC)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.seom.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Sociedad Española de Oncología Médica (SEOM)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.grupogepac.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      • Grupo Español de Pacientes con Cáncer (GEPAC)
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Aviso Legal */}
          <Alert variant="destructive" className="mt-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Aviso Importante</AlertTitle>
            <AlertDescription className="text-sm">
              Esta información tiene fines informativos y no sustituye el asesoramiento médico profesional. 
              Para un diagnóstico y tratamiento adecuados, consulte a un oncólogo. 
              La valoración de la incapacidad laboral debe ser realizada por los organismos competentes en cada caso particular.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default Cancer;
