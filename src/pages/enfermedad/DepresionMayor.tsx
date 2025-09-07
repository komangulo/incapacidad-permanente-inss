import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Heart, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const DepresionMayor = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Depresión Mayor</h1>
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
                  <h4 className="font-semibold mb-2">¿Qué es la Depresión Mayor?</h4>
                  <p className="text-muted-foreground">
                    La depresión mayor es un trastorno del estado de ánimo caracterizado por episodios persistentes de tristeza profunda, 
                    pérdida de interés y una variedad de síntomas físicos y cognitivos que interfieren significativamente con la vida diaria.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">¿Cómo afecta al cuerpo y la mente?</h4>
                  <p className="text-muted-foreground">
                    Afecta la capacidad de concentración, memoria, toma de decisiones y energía física. Puede ser episódica con períodos 
                    de remisión o convertirse en crónica. La prevalencia es del 4-5% de la población general.
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
                      <li>Factores genéticos (heredabilidad del 40%)</li>
                      <li>Desequilibrios neuroquímicos</li>
                      <li>Factores ambientales y estrés</li>
                      <li>Traumatismos psicológicos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Factores de riesgo:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Historia familiar de depresión</li>
                      <li>Episodios previos de depresión</li>
                      <li>Enfermedades médicas crónicas</li>
                      <li>Abuso de sustancias</li>
                      <li>Eventos vitales estresantes</li>
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
                    <h4 className="font-semibold mb-2">Síntomas emocionales:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Tristeza persistente</li>
                      <li>Pérdida de interés o placer</li>
                      <li>Sentimientos de culpa o inutilidad</li>
                      <li>Pensamientos de muerte o suicidio</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Síntomas físicos y cognitivos:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Fatiga y pérdida de energía</li>
                      <li>Problemas de concentración</li>
                      <li>Alteraciones del sueño</li>
                      <li>Cambios en el apetito</li>
                      <li>Síntomas somáticos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diagnóstico */}
            <Card>
              <CardHeader>
                <CardTitle>Diagnóstico</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Criterios diagnósticos:</h4>
                  <p className="text-muted-foreground mb-2">
                    Se requieren al menos 5 síntomas durante un período de 2 semanas, incluyendo obligatoriamente 
                    estado de ánimo deprimido o pérdida de interés.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Pruebas utilizadas:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Evaluación clínica estructurada</li>
                    <li>Escalas de depresión (Hamilton, Beck)</li>
                    <li>Descartar causas médicas</li>
                    <li>Evaluación del riesgo suicida</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Tratamiento */}
            <Card>
              <CardHeader>
                <CardTitle>Tratamiento y Manejo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Opciones de tratamiento:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Antidepresivos (ISRS, IRSN, tricíclicos)</li>
                    <li>Psicoterapia (cognitivo-conductual, interpersonal)</li>
                    <li>Terapia electroconvulsiva (casos graves)</li>
                    <li>Combinación farmacológica y psicológica</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Manejo del día a día:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Rutinas estructuradas</li>
                    <li>Ejercicio físico regular</li>
                    <li>Higiene del sueño</li>
                    <li>Apoyo social y familiar</li>
                  </ul>
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
                  <h4 className="font-semibold mb-2">STSJ Andalucía, Sala Social, 15/03/2023</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "La depresión mayor recurrente con episodios graves y resistencia al tratamiento farmacológico, 
                    que impide el mantenimiento de relaciones interpersonales y la realización de tareas que requieran 
                    concentración, justifica el reconocimiento de incapacidad permanente absoluta."
                  </p>
                  <Badge variant="outline">Incapacidad Absoluta</Badge>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">STSJ Madrid, Sala Social, 28/11/2022</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "El trastorno depresivo mayor con limitaciones cognitivas severas impide el desarrollo 
                    de la profesión habitual de administrativo, pero no impide actividades laborales menos 
                    exigentes desde el punto de vista intelectual."
                  </p>
                  <Badge variant="outline">Incapacidad Total</Badge>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">STSJ Cataluña, Sala Social, 07/06/2023</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "La depresión mayor con intentos autolíticos recurrentes y hospitalización psiquiátrica 
                    frecuente impide cualquier actividad laboral de forma permanente."
                  </p>
                  <Badge variant="outline">Incapacidad Absoluta</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Incapacidad Permanente */}
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
                
                <div>
                  <h4 className="font-semibold mb-2">Requisitos específicos:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Episodios recurrentes documentados</li>
                    <li>• Resistencia al tratamiento</li>
                    <li>• Limitaciones funcionales severas</li>
                    <li>• Evaluación psiquiátrica especializada</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Recursos y Apoyo */}
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
                    <li>• Confederación SALUD MENTAL España</li>
                    <li>• Fundación Española de Psiquiatría</li>
                    <li>• FEAFES (Confederación Española)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Teléfonos de ayuda:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Teléfono de la Esperanza: 914 590 050</li>
                    <li>• Línea de Atención al Suicidio: 024</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={() => window.open('https://eu.jotform.com/es/build/252086191762359', '_blank')}
                >
                  Consultar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepresionMayor;