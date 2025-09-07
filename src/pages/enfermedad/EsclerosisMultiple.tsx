import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Heart, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const EsclerosisMultiple = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Esclerosis Múltiple</h1>
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
                  <h4 className="font-semibold mb-2">¿Qué es la Esclerosis Múltiple?</h4>
                  <p className="text-muted-foreground">
                    La esclerosis múltiple es una enfermedad autoinmune crónica del sistema nervioso central 
                    que afecta la mielina, causando inflamación, desmielinización y daño axonal. 
                    Esto resulta en una variedad de síntomas neurológicos progresivos.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">¿Cómo afecta al cuerpo y la mente?</h4>
                  <p className="text-muted-foreground">
                    Es una enfermedad progresiva que puede ser recurrente-remitente, primaria progresiva 
                    o secundaria progresiva. Afecta a aproximadamente 2-3 de cada 1000 personas, 
                    principalmente a adultos jóvenes.
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
                    <h4 className="font-semibold mb-2">Síntomas motores:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Debilidad muscular</li>
                      <li>Espasticidad</li>
                      <li>Problemas de coordinación</li>
                      <li>Temblor</li>
                      <li>Dificultades para caminar</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Otros síntomas:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Fatiga extrema</li>
                      <li>Problemas visuales</li>
                      <li>Alteraciones cognitivas</li>
                      <li>Problemas de esfínteres</li>
                      <li>Dolor neuropático</li>
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
                  <h4 className="font-semibold mb-2">STSJ Madrid, Sala Social, 18/06/2023</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "La esclerosis múltiple con progresión a forma secundaria progresiva, 
                    con limitaciones motoras severas y deterioro cognitivo, impide 
                    cualquier actividad laboral remunerada."
                  </p>
                  <Badge variant="outline">Incapacidad Absoluta</Badge>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">STSJ Valencia, Sala Social, 10/02/2023</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "La esclerosis múltiple recurrente-remitente con brotes frecuentes 
                    impide la profesión habitual de profesora, pero permite trabajos 
                    adaptados con menor exigencia física."
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
                    <Badge variant="default" className="w-full justify-center">Total (55-75%)</Badge>
                    <Badge variant="destructive" className="w-full justify-center">Absoluta (100%)</Badge>
                    <Badge variant="destructive" className="w-full justify-center">Gran Invalidez</Badge>
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
                    <li>• Esclerosis Múltiple España</li>
                    <li>• AEDEM (Asociación Española)</li>
                    <li>• Fundación GAEM</li>
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

export default EsclerosisMultiple;