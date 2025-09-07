import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Heart, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Esquizofrenia = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Esquizofrenia</h1>
          <Badge variant="destructive" className="text-lg px-4 py-2">
            Incapacidad Absoluta
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
                  <h4 className="font-semibold mb-2">¿Qué es la Esquizofrenia?</h4>
                  <p className="text-muted-foreground">
                    La esquizofrenia es un trastorno mental grave y crónico que afecta el pensamiento, 
                    las percepciones, las emociones y el comportamiento. Se caracteriza por síntomas psicóticos 
                    como delirios, alucinaciones y desorganización del pensamiento.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">¿Cómo afecta al cuerpo y la mente?</h4>
                  <p className="text-muted-foreground">
                    Es una enfermedad crónica que afecta aproximadamente al 1% de la población. 
                    Impacta severamente la capacidad cognitiva, social y laboral, requiriendo 
                    tratamiento especializado de por vida.
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
                    <h4 className="font-semibold mb-2">Síntomas positivos:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Delirios (ideas falsas)</li>
                      <li>Alucinaciones (percepciones falsas)</li>
                      <li>Pensamiento desorganizado</li>
                      <li>Comportamiento motor anormal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Síntomas negativos:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Reducción del habla (alogia)</li>
                      <li>Disminución de emociones</li>
                      <li>Pérdida de motivación</li>
                      <li>Aislamiento social</li>
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
                  <h4 className="font-semibold mb-2">STSJ Castilla y León, Sala Social, 08/11/2022</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "La esquizofrenia paranoide con síntomas psicóticos persistentes y deterioro 
                    cognitivo severo impide cualquier actividad laboral, justificando la 
                    incapacidad permanente absoluta."
                  </p>
                  <Badge variant="outline">Incapacidad Absoluta</Badge>
                </div>
                
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold mb-2">STSJ País Vasco, Sala Social, 25/05/2023</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    "Los síntomas negativos de la esquizofrenia, incluyendo apatía severa y 
                    deterioro de las funciones ejecutivas, impiden el desempeño de cualquier 
                    actividad laboral remunerada."
                  </p>
                  <Badge variant="outline">Incapacidad Absoluta</Badge>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Esquizofrenia;