import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DudasFrecuentesIncapacidad = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dudas frecuentes sobre incapacidad permanente</h1>
        
        <section className="mb-8">
          <p className="text-lg mb-6">
            Resolvemos las dudas más comunes sobre la incapacidad permanente con ejemplos prácticos.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. ¿Qué es la incapacidad permanente?</h2>
          <p className="mb-4">
            Es una prestación económica para quienes no pueden trabajar por enfermedad o accidente.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Parcial, total, absoluta o gran invalidez</li>
            <li>Depende del impacto en la capacidad laboral</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. ¿Quién puede solicitarla?</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Trabajadores en activo o asimilados</li>
            <li>Con cotizaciones mínimas (salvo accidente laboral)</li>
            <li>Autónomos incluidos</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. ¿Necesito abogado?</h2>
          <p className="mb-4">No es obligatorio, pero recomendable, especialmente si:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Hay denegación previa</li>
            <li>El caso es complejo</li>
            <li>Hay que recurrir a vía judicial</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. ¿Qué enfermedades se reconocen?</h2>
          <p className="mb-4">No hay lista cerrada. Las más frecuentes incluyen:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Fibromialgia severa</li>
            <li>Cáncer en tratamiento</li>
            <li>Esclerosis múltiple</li>
            <li>Artritis reumatoide</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. ¿Cuánto se cobra?</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Parcial:</strong> Indemnización única</li>
            <li><strong>Total:</strong> 55% de la base reguladora</li>
            <li><strong>Absoluta:</strong> 100% de la base</li>
            <li><strong>Gran invalidez:</strong> 100% + complemento</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. ¿Puedo trabajar con incapacidad?</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Total:</strong> Sí, en otro trabajo</li>
            <li><strong>Absoluta:</strong> No, salvo excepciones</li>
            <li><strong>Gran invalidez:</strong> No, requiere ayuda constante</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg mt-12">
          <h2 className="text-2xl font-semibold mb-4">Conclusión</h2>
          <p className="mb-4">
            La incapacidad permanente es un derecho para quienes no pueden trabajar por enfermedad. La documentación médica es clave, y el asesoramiento profesional puede marcar la diferencia.
          </p>
          <p className="italic">
            "El proceso puede ser largo, pero con la preparación adecuada, es posible obtener el reconocimiento que mereces."
          </p>
        </section>
      </article>

      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link to="/blog">Volver al blog</Link>
        </Button>
      </div>
    </div>
  );
};

export default DudasFrecuentesIncapacidad;
