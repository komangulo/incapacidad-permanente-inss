import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a disease page
function createDiseasePage(disease) {
  const { name, path: route, data } = disease;
  const componentName = name.replace(/(^|\s)\S/g, l => l.toUpperCase()).replace(/\s+/g, '');
  
  const template = `import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ${componentName} = () => {
  // Datos de la enfermedad
  const diseaseData = {
    titulo: "${data.titulo}",
    grado: "${data.grado}",
    descripcion: "${data.descripcion}",
    // ... resto de la estructura de datos
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{diseaseData.titulo}</h1>
          <div className="text-2xl font-semibold text-blue-600 mb-4">Incapacidad {diseaseData.grado}</div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {diseaseData.descripcion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;

  return {
    componentName,
    route,
    content: template
  };
}

// Disease data
const diseases = [
  {
    name: 'Agorafobia',
    path: 'agorafobia',
    data: {
      titulo: 'Agorafobia',
      grado: 'Variable',
      descripcion: 'Miedo intenso a los espacios abiertos o situaciones de las que podría ser difícil escapar o recibir ayuda.'
    }
  },
  {
    name: 'Alcoholismo',
    path: 'alcoholismo',
    data: {
      titulo: 'Alcoholismo',
      grado: 'Variable',
      descripcion: 'Trastorno por consumo de alcohol que afecta la salud física y mental.'
    }
  },
  {
    name: 'Alzheimer',
    path: 'alzheimer',
    data: {
      titulo: 'Enfermedad de Alzheimer',
      grado: 'Total/Absoluta',
      descripcion: 'Trastorno neurodegenerativo que afecta la memoria, el pensamiento y el comportamiento.'
    }
  },
  {
    name: 'Depresion',
    path: 'depresion',
    data: {
      titulo: 'Depresión Mayor',
      grado: 'Variable',
      descripcion: 'Trastorno del estado de ánimo que causa sentimientos de tristeza y pérdida de interés.'
    }
  },
  {
    name: 'Distimia',
    path: 'distimia',
    data: {
      titulo: 'Trastorno Depresivo Persistente (Distimia)',
      grado: 'Variable',
      descripcion: 'Forma crónica de depresión con síntomas menos intensos pero más duraderos.'
    }
  },
  {
    name: 'SindromeDeTourette',
    path: 'sindrome-de-tourette',
    data: {
      titulo: 'Síndrome de Tourette',
      grado: 'Variable',
      descripcion: 'Trastorno neurológico caracterizado por tics motores y vocales involuntarios.'
    }
  },
  {
    name: 'TrastornoDeAnsiedad',
    path: 'trastorno-de-ansiedad',
    data: {
      titulo: 'Trastorno de Ansiedad',
      grado: 'Variable',
      descripcion: 'Trastorno mental caracterizado por sentimientos de miedo, ansiedad o preocupación excesivos.'
    }
  },
  {
    name: 'TrastornoLimitePersonalidad',
    path: 'trastorno-limite-de-la-personalidad',
    data: {
      titulo: 'Trastorno Límite de la Personalidad (TLP)',
      grado: 'Variable',
      descripcion: 'Trastorno de la personalidad caracterizado por inestabilidad emocional y relaciones interpersonales inestables.'
    }
  },
  {
    name: 'TrastornoAdaptativoMixto',
    path: 'trastorno-adaptativo-mixto',
    data: {
      titulo: 'Trastorno Adaptativo Mixto',
      grado: 'Temporal/Variable',
      descripcion: 'Reacción emocional o conductual a un factor estresante identificable que causa malestar significativo.'
    }
  }
];

// Create pages directory if it doesn't exist
const pagesDir = path.join(__dirname, '../src/pages/enfermedad');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate pages and collect route info
const routes = [];
for (const disease of diseases) {
  const { componentName, route, content } = createDiseasePage(disease);
  const filePath = path.join(pagesDir, `${componentName}.tsx`);
  
  // Write component file
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
  
  routes.push({
    import: `import ${componentName} from "./pages/enfermedad/${componentName}";`,
    route: `          <Route path="/enfermedad/${route}" element={<${componentName} />} />`
  });
}

// Generate route imports and components for App.tsx
const routeImports = routes.map(r => r.import).join('\n');
const routeComponents = routes.map(r => r.route).join('\n');

console.log('\nAdd these imports to App.tsx:');
console.log(routeImports);
console.log('\nAdd these routes to App.tsx:');
console.log(routeComponents);

console.log('\nAll disease pages have been generated!');
