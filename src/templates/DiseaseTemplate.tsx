import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiseasePage = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "NOMBRE_DE_LA_ENFERMEDAD",
    grado: "GRADO_DE_INCAPACIDAD",
    descripcion: "Descripción breve de la enfermedad.",
    contenido: {
      descripcion: {
        titulo: "¿Qué es NOMBRE_DE_LA_ENFERMEDAD?",
        contenido: "Descripción detallada de la enfermedad.",
        impacto: "Impacto en la población y características generales."
      },
      causas: {
        titulo: "Causas y Factores de Riesgo",
        causas: [
          "Causa 1",
          "Causa 2",
          "Causa 3"
        ],
        factoresRiesgo: [
          "Factor de riesgo 1",
          "Factor de riesgo 2",
          "Factor de riesgo 3"
        ]
      },
      sintomas: {
        titulo: "Síntomas Comunes",
        emocionales: [
          "Síntoma emocional 1",
          "Síntoma emocional 2"
        ],
        fisicos: [
          "Síntoma físico 1",
          "Síntoma físico 2"
        ]
      },
      diagnostico: {
        titulo: "Diagnóstico",
        criterios: [
          "Criterio 1",
          "Criterio 2"
        ],
        evaluacion: [
          "Método de evaluación 1",
          "Método de evaluación 2"
        ]
      },
      tratamiento: {
        titulo: "Tratamiento y Manejo",
        opciones: [
          "Opción de tratamiento 1",
          "Opción de tratamiento 2"
        ],
        manejo: [
          "Estrategia de manejo 1",
          "Estrategia de manejo 2"
        ]
      },
      sentencias: [
        {
          texto: "Ejemplo de sentencia sobre la enfermedad.",
          tipo: "Tipo de incapacidad",
          referencia: "Tribunal, Fecha"
        }
      ]
    },
    incapacidad: {
      titulo: "Incapacidad Permanente",
      grados: [
        { tipo: "Parcial", porcentaje: "33%", descripcion: "Descripción" },
        { tipo: "Total", porcentaje: "55-75%", descripcion: "Descripción" },
        { tipo: "Absoluta", porcentaje: "100%", descripcion: "Descripción" }
      ],
      requisitos: [
        "Requisito 1",
        "Requisito 2"
      ]
    },
    recursos: {
      asociaciones: [
        { nombre: "Asociación 1", enlace: "#" },
        { nombre: "Asociación 2", enlace: "#" }
      ],
      telefonos: [
        { nombre: "Teléfono 1", numero: "123 456 789" },
        { nombre: "Teléfono 2", numero: "987 654 321" }
      ]
    }
  };

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

        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{diseaseData.titulo}</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad {diseaseData.grado}</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {diseaseData.descripcion}
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Descripción General */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Descripción General de la Enfermedad</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{diseaseData.contenido.descripcion.titulo}</h3>
                <p className="text-gray-700 mb-3">{diseaseData.contenido.descripcion.contenido}</p>
                <p className="text-gray-700">{diseaseData.contenido.descripcion.impacto}</p>
              </div>
            </div>
          </section>

          {/* Resto del contenido... */}
          
        </div>
      </div>
    </div>
  );
};

export default DiseasePage;
