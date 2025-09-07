import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Heart, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const TrastornoBipolar = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Trastorno Bipolar</h1>
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
                  <h4 className="font-semibold mb-2">¿Qué es el Trastorno Bipolar?</h4>
                  <p className="text-muted-foreground">
                    El trastorno bipolar es una enfermedad mental caracterizada por cambios extremos en el estado de ánimo, 
                    que incluye episodios de manía (o hipomanía) y depresión. Estos cambios afectan significativamente 
                    la capacidad funcional, las relaciones y el rendimiento laboral.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">¿Cómo afecta al cuerpo y la mente?</h4>
                  <p className="text-muted-foreground">
                    Es una enfermedad crónica y episódica que alterna entre fases de manía/hipomanía y depresión, 
                    con períodos de estabilidad. Afecta al 1-2% de la población y requiere tratamiento de por vida.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Causas y Factores de Riesgo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Causas y Factores de Riesgo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Causas principales:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Factores genéticos (heredabilidad del 60-80%)</li>
                      <li>Alteraciones neuroquímicas</li>
                      <li>Factores neurobiológicos</li>
                      <li>Estrés psicosocial como desencadenante</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Factores de riesgo:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Historia familiar de trastorno bipolar</li>
                      <li>Abuso de sustancias</li>
                      <li>Eventos vitales estresantes</li>
                      <li>Trastornos del sueño</li>
                      <li>Cambios hormonales</li>
                    </ul>
                  </div>
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
                    <h4 className="font-semibold mb-2">Episodio maníaco:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Estado de ánimo elevado o irritable</li>
                      <li>Disminución de la necesidad de sueño</li>
                      <li>Grandiosidad o autoestima inflada</li>
                      <li>Hiperactividad y agitación</li>
                      <li>Comportamientos de riesgo</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Episodio depresivo:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Estado de ánimo deprimido</li>
                      <li>Pérdida de interés o placer</li>
                      <li>Fatiga y pérdida de energía</li>
                      <li>Problemas de concentración</li>
                      <li>Pensamientos de muerte o suicidio</li>
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
                  <h4 className="font-semibold mb-2">STSJ Valencia, Sala Social, 22/01/2023</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "El trastorno bipolar con episodios maniacos y depresivos recurrentes, que impide 
                    el mantenimiento de rutinas laborales estables y relaciones interpersonales, 
                    justifica la incapacidad permanente absoluta."
                  </p>
                  <Badge variant="outline">Incapacidad Absoluta</Badge>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">STSJ Galicia, Sala Social, 15/09/2022</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "El trastorno bipolar estabilizado con tratamiento permite actividades laborales 
                    de baja exigencia, pero impide la profesión habitual de comercial que requiere 
                    constante interacción social."
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
                    <li>• Fundación Manía Bipolar</li>
                    <li>• FEAFES</li>
                    <li>• Confederación SALUD MENTAL España</li>
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

export default TrastornoBipolar;