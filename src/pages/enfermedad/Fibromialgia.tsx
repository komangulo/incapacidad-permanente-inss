import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Heart, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Fibromialgia = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Fibromialgia</h1>
          <Badge variant="destructive" className="text-lg px-4 py-2">
            Incapacidad Total/Absoluta
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Descripción General */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Descripción General de la Enfermedad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">¿Qué es la Fibromialgia?</h4>
                  <p className="text-muted-foreground">
                    La fibromialgia es una enfermedad crónica caracterizada por dolor musculoesquelético 
                    generalizado, fatiga, alteraciones del sueño y puntos sensibles específicos. 
                    Se acompaña frecuentemente de rigidez matutina, síndrome del intestino irritable 
                    y trastornos cognitivos.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">¿Cómo afecta al cuerpo y la mente?</h4>
                  <p className="text-muted-foreground">
                    Es una enfermedad crónica que afecta al 2-8% de la población, principalmente mujeres. 
                    El dolor es persistente y fluctuante, afectando significativamente la calidad de vida 
                    y la capacidad funcional.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Síntomas */}
            <Card>
              <CardHeader>
                <CardTitle>Síntomas Comunes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Síntomas principales:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Dolor generalizado crónico</li>
                      <li>Fatiga persistente</li>
                      <li>Rigidez matutina</li>
                      <li>Puntos dolorosos específicos</li>
                      <li>Alteraciones del sueño</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Síntomas asociados:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Problemas cognitivos (fibroniebla)</li>
                      <li>Síndrome del intestino irritable</li>
                      <li>Cefaleas frecuentes</li>
                      <li>Síndrome de piernas inquietas</li>
                      <li>Ansiedad y depresión</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sentencias de Ejemplo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Sentencias de Ejemplo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold mb-2">STSJ Andalucía, Sala Social, 12/04/2023</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "La fibromialgia severa con dolor generalizado incapacitante, fatiga crónica 
                    y alteraciones cognitivas significativas impide la realización de cualquier 
                    actividad laboral de forma continuada."
                  </p>
                  <Badge variant="outline">Incapacidad Absoluta</Badge>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">STSJ Cataluña, Sala Social, 29/08/2022</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "La fibromialgia con dolor crónico moderado impide la profesión habitual 
                    de limpiadora que requiere esfuerzo físico, pero permite trabajos sedentarios 
                    con adaptaciones."
                  </p>
                  <Badge variant="outline">Incapacidad Total</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Incapacidad Permanente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Grados aplicables:</h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="w-full justify-center">Parcial (33%)</Badge>
                    <Badge variant="default" className="w-full justify-center">Total (55-75%)</Badge>
                    <Badge variant="destructive" className="w-full justify-center">Absoluta (100%)</Badge>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={() => window.open('https://eu.jotform.com/es/build/252086191762359', '_blank')}
                >
                  Consultar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Recursos y Apoyo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Asociaciones:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AFIBRO (Asociación de Fibromialgia)</li>
                    <li>• ACAF (Asociación Catalana)</li>
                    <li>• AVAFI (Asociación Valenciana)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fibromialgia;