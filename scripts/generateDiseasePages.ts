import fs from 'fs';
import path from 'path';

// Interface for disease data
interface DiseaseData {
  name: string;
  path: string;
  data: {
    titulo: string;
    grado: string;
    descripcion: string;
  };
}

// List of diseases to generate
const diseases: DiseaseData[] = [
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

// Function to generate a disease page
function generateDiseasePage(disease: DiseaseData) {
  const templatePath = path.join(__dirname, '../src/templates/DiseaseTemplate.tsx');
  const outputPath = path.join(__dirname, `../src/pages/enfermedad/${disease.name}.tsx`);
  
  // Read the template
  let content = fs.readFileSync(templatePath, 'utf8');
  
  // Replace placeholders with disease data
  content = content
    .replace(/NOMBRE_DE_LA_ENFERMEDAD/g, disease.data.titulo)
    .replace('GRADO_DE_INCAPACIDAD', disease.data.grado)
    .replace('Descripción breve de la enfermedad.', disease.data.descripcion);
  
  // Ensure the directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the file
  fs.writeFileSync(outputPath, content);
  console.log(`Generated: ${outputPath}`);
  
  return {
    name: disease.name,
    path: disease.path,
    componentName: disease.name
  };
}

// Generate all disease pages
console.log('Generating disease pages...');
const generatedPages = diseases.map(disease => generateDiseasePage(disease));

// Generate route imports and components for App.tsx
const routeImports = generatedPages.map(page => 
  `import ${page.name} from "./pages/enfermedad/${page.name}";`
).join('\n');

const routeComponents = generatedPages.map(page => 
  `          <Route path="/enfermedad/${page.path}" element={<${page.name} />} />`
).join('\n');

console.log('\nAdd these imports to App.tsx:');
console.log(routeImports);
console.log('\nAdd these routes to App.tsx:');
console.log(routeComponents);

console.log('\nDisease pages generation completed!');
