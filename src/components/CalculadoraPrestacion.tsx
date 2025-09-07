import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Calculator, Euro, FileText } from "lucide-react";

interface FormData {
  fechaBaja: string;
  enfermedad: string;
  regimen: string;
  basesCotizacion8Anos: string;
  baseMesAnterior: string;
  anosCotizados: string;
  tipoJornada: string;
  contingencia: string;
  salarioDiario: string;
  antiguedad: string;
  pagasExtras: string;
  diasTrabajados: string;
}

interface ResultadoCalculo {
  parcial: number;
  total: number;
  totalCualificada: number;
  absoluta: number;
  granInvalidez: number;
}

const CalculadoraPrestacion = () => {
  const [formData, setFormData] = useState<FormData>({
    fechaBaja: "",
    enfermedad: "",
    regimen: "",
    basesCotizacion8Anos: "",
    baseMesAnterior: "",
    anosCotizados: "",
    tipoJornada: "",
    contingencia: "",
    salarioDiario: "",
    antiguedad: "",
    pagasExtras: "",
    diasTrabajados: "",
  });

  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calcularPrestaciones = () => {
    const baseReguladora = parseFloat(formData.baseMesAnterior) || 0;
    const anosCotizados = parseFloat(formData.anosCotizados) || 0;
    
    // Fórmulas simplificadas para el cálculo
    const porcentajeParcial = 0.24; // 24% para parcial
    const porcentajeTotal = Math.min(0.55 + (anosCotizados > 15 ? (anosCotizados - 15) * 0.005 : 0), 1); // 55% + incrementos
    const porcentajeTotalCualificada = porcentajeTotal + 0.20; // 20% adicional para mayores 55
    const porcentajeAbsoluta = 1; // 100%
    const porcentajeGranInvalidez = 1.5; // 150%

    const resultado: ResultadoCalculo = {
      parcial: baseReguladora * porcentajeParcial,
      total: baseReguladora * porcentajeTotal,
      totalCualificada: baseReguladora * Math.min(porcentajeTotalCualificada, 1),
      absoluta: baseReguladora * porcentajeAbsoluta,
      granInvalidez: baseReguladora * porcentajeGranInvalidez,
    };

    setResultado(resultado);
  };

  const esContingenciaProfesional = formData.contingencia === "enfermedad-profesional" || formData.contingencia === "accidente-trabajo";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculadora de Prestación por Incapacidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcula tu posible prestación por incapacidad permanente según tu situación laboral y cotizaciones
          </p>
        </div>

        {!mostrarFormulario ? (
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>¿Quieres calcular tu prestación?</CardTitle>
                <CardDescription>
                  Te ayudamos a estimar el importe de tu prestación por incapacidad permanente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => setMostrarFormulario(true)}
                  className="w-full"
                  size="lg"
                >
                  Iniciar Cálculo
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Datos para el Cálculo
                </CardTitle>
                <CardDescription>
                  Completa todos los campos para obtener una estimación precisa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fechaBaja">Fecha de Baja</Label>
                      <Input
                        id="fechaBaja"
                        type="date"
                        value={formData.fechaBaja}
                        onChange={(e) => handleInputChange("fechaBaja", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="enfermedad">Enfermedad/Lesión</Label>
                      <Input
                        id="enfermedad"
                        placeholder="Describe brevemente"
                        value={formData.enfermedad}
                        onChange={(e) => handleInputChange("enfermedad", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="regimen">Régimen de la Seguridad Social</Label>
                      <Select onValueChange={(value) => handleInputChange("regimen", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona régimen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Régimen General</SelectItem>
                          <SelectItem value="autonomos">Régimen de Autónomos</SelectItem>
                          <SelectItem value="agrario">Régimen Agrario</SelectItem>
                          <SelectItem value="mar">Régimen del Mar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="contingencia">Contingencia que la Causa</Label>
                      <Select onValueChange={(value) => handleInputChange("contingencia", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona contingencia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enfermedad-comun">Enfermedad Común</SelectItem>
                          <SelectItem value="accidente-no-laboral">Accidente no Laboral</SelectItem>
                          <SelectItem value="enfermedad-profesional">Enfermedad Profesional</SelectItem>
                          <SelectItem value="accidente-trabajo">Accidente de Trabajo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="tipoJornada">Tipo de Jornada Laboral</Label>
                      <Select onValueChange={(value) => handleInputChange("tipoJornada", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona jornada" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="completa">Jornada Completa</SelectItem>
                          <SelectItem value="parcial">Jornada Parcial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="basesCotizacion8Anos">Bases de Cotización (últimos 8 años - €/mes promedio)</Label>
                      <Input
                        id="basesCotizacion8Anos"
                        type="number"
                        placeholder="Ej: 2500"
                        value={formData.basesCotizacion8Anos}
                        onChange={(e) => handleInputChange("basesCotizacion8Anos", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="baseMesAnterior">Base de Cotización del Mes Anterior (€)</Label>
                      <Input
                        id="baseMesAnterior"
                        type="number"
                        placeholder="Ej: 2800"
                        value={formData.baseMesAnterior}
                        onChange={(e) => handleInputChange("baseMesAnterior", e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="anosCotizados">Años Cotizados Totales</Label>
                      <Input
                        id="anosCotizados"
                        type="number"
                        placeholder="Ej: 20"
                        value={formData.anosCotizados}
                        onChange={(e) => handleInputChange("anosCotizados", e.target.value)}
                      />
                    </div>

                    {esContingenciaProfesional && (
                      <>
                        <Separator className="my-4" />
                        <h4 className="font-semibold text-sm">Datos Adicionales (Contingencias Profesionales)</h4>
                        
                        <div>
                          <Label htmlFor="salarioDiario">Salario Diario Bruto (€)</Label>
                          <Input
                            id="salarioDiario"
                            type="number"
                            placeholder="Ej: 95"
                            value={formData.salarioDiario}
                            onChange={(e) => handleInputChange("salarioDiario", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="antiguedad">Antigüedad (años)</Label>
                          <Input
                            id="antiguedad"
                            type="number"
                            placeholder="Ej: 10"
                            value={formData.antiguedad}
                            onChange={(e) => handleInputChange("antiguedad", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="pagasExtras">Pagas Extraordinarias Año Anterior (€)</Label>
                          <Input
                            id="pagasExtras"
                            type="number"
                            placeholder="Ej: 5000"
                            value={formData.pagasExtras}
                            onChange={(e) => handleInputChange("pagasExtras", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="diasTrabajados">Días Trabajados Año Anterior</Label>
                          <Input
                            id="diasTrabajados"
                            type="number"
                            placeholder="Ej: 250"
                            value={formData.diasTrabajados}
                            onChange={(e) => handleInputChange("diasTrabajados", e.target.value)}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button onClick={calcularPrestaciones} className="flex-1">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calcular Prestaciones
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setMostrarFormulario(false)}
                  >
                    Volver
                  </Button>
                </div>
              </CardContent>
            </Card>

            {resultado && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-5 w-5" />
                    Resultados del Cálculo
                  </CardTitle>
                  <CardDescription>
                    Importes mensuales estimados según el grado de incapacidad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Incapacidad Permanente Parcial</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-blue-600">
                          {resultado.parcial.toFixed(2)}€
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Indemnización única (24 mensualidades)
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Incapacidad Permanente Total</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-green-600">
                          {resultado.total.toFixed(2)}€
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pensión mensual vitalicia
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-yellow-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Total Cualificada (+55 años)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-yellow-600">
                          {resultado.totalCualificada.toFixed(2)}€
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pensión mensual incrementada
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-orange-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Incapacidad Permanente Absoluta</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-orange-600">
                          {resultado.absoluta.toFixed(2)}€
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pensión mensual (100% base reguladora)
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Gran Invalidez</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-red-600">
                          {resultado.granInvalidez.toFixed(2)}€
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Pensión mensual + complemento (150%)
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Información Importante:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Estos cálculos son estimativos y pueden variar según cada caso particular</li>
                      <li>• Las prestaciones están sujetas a revisión por parte del INSS</li>
                      <li>• Se aplican límites máximos y mínimos establecidos anualmente</li>
                      <li>• Consulta con un abogado especialista para asesoramiento personalizado</li>
                    </ul>
                  </div>

                  <div className="mt-6 text-center">
                    <Button 
                      onClick={() => window.open('https://eu.jotform.com/es/build/252086191762359', '_blank')}
                      size="lg"
                    >
                      Consulta Gratuita con Especialista
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CalculadoraPrestacion;