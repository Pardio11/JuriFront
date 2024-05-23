import mock from '../../mockAdapter';
// import type { ContactType } from '@/types/apps/ContactType';

import { GavelIcon, ScaleIcon, HomeDollarIcon,BrandCashappIcon, UserPlusIcon } from 'vue-tabler-icons';


// types
export type KeyedObject = {
    [key: string]: string | number | KeyedObject | any;
};

const casos: KeyedObject[] = [
    {
        nExpedinete: '66/2024',
        juzgado: 'Juzgado 3 Civil',
        titulo: 'Pencion Alimenticia',
        descripcion: 'El demandado deve mas $1000',
        cliente: 'JuriFront',
        actores: 'Ramon Arellano',
        icon: GavelIcon,
        demandado: 'Raul Salamanca'
    },
    {
        nExpedinete: '23/2024',
        juzgado: 'Juzgado 5 Penal',
        titulo: 'Caso de Robo',
        descripcion: 'El acusado fue capturado con evidencia contundente',
        cliente: 'LegalPro',
        actores: 'María López',
        icon: ScaleIcon,
        demandado: 'Juan García'
        },
        
        {
        nExpedinete: '77/2024',
        juzgado: 'Juzgado 2 Laboral',
        titulo: 'Despido Injustificado',
        descripcion: 'El empleado fue despedido sin causa justificada',
        cliente: 'JusticiaYa',
        actores: 'Pedro Martínez',
        icon: BrandCashappIcon,
        demandado: 'Empresa XYZ'
        },
        
        {
        nExpedinete: '15/2024',
        juzgado: 'Juzgado 1 Familiar',
        titulo: 'Custodia de Menores',
        descripcion: 'La madre busca la custodia exclusiva de los niños',
        cliente: 'FamilyCare',
        actores: 'Laura Gómez',
        icon: HomeDollarIcon,
        demandado: 'David Rodríguez'
        },
        
        {
        nExpedinete: '42/2024',
        juzgado: 'Juzgado 4 Mercantil',
        titulo: 'Incumplimiento de Contrato',
        descripcion: 'La empresa no entregó los productos en la fecha acordada',
        cliente: 'ComercioLegal',
        actores: 'Carlos Fernández',
        icon: ScaleIcon,
        demandado: 'Empresa ABC'
        },
        
        {
        nExpedinete: '101/2024',
        juzgado: 'Juzgado 6 Administrativo',
        titulo: 'Reclamación de Deuda Tributaria',
        descripcion: 'El contribuyente no ha pagado sus impuestos desde hace tres años',
        cliente: 'TaxHelp',
        actores: 'Ana Ramírez',
        icon: ScaleIcon,
        demandado: 'Juan Pérez'
        },
        
        {
        nExpedinete: '55/2024',
        juzgado: 'Juzgado 3 Civil',
        titulo: 'Divorcio Contencioso',
        descripcion: 'Ambos cónyuges no llegan a un acuerdo sobre la división de bienes',
        cliente: 'DivorceCare',
        actores: 'Gabriela Sánchez',
        icon: ScaleIcon,
        demandado: 'Luis González'
        },
        
        {
        nExpedinete: '38/2024',
        juzgado: 'Juzgado 2 Penal',
        titulo: 'Apropiación Indebida',
        descripcion: 'El acusado utilizó fondos de la empresa para gastos personales',
        cliente: 'LegalDefense',
        actores: 'Roberto Pérez',
        icon: ScaleIcon,
        demandado: 'Ana Martínez'
        },
        
        {
        nExpedinete: '82/2024',
        juzgado: 'Juzgado 1 Laboral',
        titulo: 'Reclamación de Salarios Atrasados',
        descripcion: 'El empleador no ha pagado los salarios correspondientes al último mes',
        cliente: 'LaborRights',
        actores: 'Sandra García',
        icon: ScaleIcon,
        demandado: 'Empresa QRS'
        },
        
        {
        nExpedinete: '19/2024',
        juzgado: 'Juzgado 5 Familiar',
        titulo: 'Reparto de Herencia',
        descripcion: 'Los herederos no se ponen de acuerdo sobre la distribución de bienes',
        cliente: 'HeritageLaw',
        actores: 'Juan Hernández',
        icon: ScaleIcon,
        demandado: 'María Rodríguez'
        },
        
        {
        nExpedinete: '73/2024',
        juzgado: 'Juzgado 4 Civil',
        titulo: 'Incumplimiento de Acuerdo Precontractual',
        descripcion: 'El contratista no cumplió con las condiciones establecidas antes de la firma del contrato',
        cliente: 'ContractGuard',
        actores: 'Pablo Díaz',
        icon: ScaleIcon,
        demandado: 'Empresa WXYZ'
        },
        
        {
        nExpedinete: '29/2024',
        juzgado: 'Juzgado 3 Penal',
        titulo: 'Falsificación de Documentos',
        descripcion: 'El acusado presentó documentos falsos para obtener un préstamo',
        cliente: 'LegalTrust',
        actores: 'Elena Ruiz',
        icon: ScaleIcon,
        demandado: 'José López'
        },
        
        {
        nExpedinete: '64/2024',
        juzgado: 'Juzgado 2 Administrativo',
        titulo: 'Denegación de Licencia',
        descripcion: 'El solicitante fue denegado sin justificación aparente',
        cliente: 'LicenseAssist',
        actores: 'Miguel González',
        icon: ScaleIcon,
        demandado: 'Municipio ABC'
        },
        
        {
        nExpedinete: '37/2024',
        juzgado: 'Juzgado 1 Mercantil',
        titulo: 'Quiebra Fraudulenta',
        descripcion: 'Se sospecha que la empresa incurrió en prácticas fraudulentas para declararse en quiebra',
        cliente: 'BusinessJustice',
        actores: 'Rosa Martínez',
        icon: ScaleIcon,
        demandado: 'Empresa XYZ'
        },
        
        {
        nExpedinete: '88/2024',
        juzgado: 'Juzgado 3 Laboral',
        titulo: 'Acoso Laboral',
        descripcion: 'El empleado sufre acoso por parte de su superior en el lugar de trabajo',
        cliente: 'LaborRights',
        actores: 'Roberto Sánchez',
        icon: ScaleIcon,
        demandado: 'Empresa ABC'
        },
        
        {
        nExpedinete: '47/2024',
        juzgado: 'Juzgado 4 Civil',
        titulo: 'Responsabilidad Civil',
        descripcion: 'El demandado es acusado de causar daños a la propiedad de terceros',
        cliente: 'LegalGuard',
        actores: 'María Rodríguez',
        icon: ScaleIcon,
        demandado: 'Pedro González'
        },
        
        {
        nExpedinete: '92/2024',
        juzgado: 'Juzgado 1 Familiar',
        titulo: 'Modificación de Medidas Paternofiliales',
        descripcion: 'Se solicita modificar las medidas de custodia y visitas establecidas anteriormente',
        cliente: 'FamilyLaw',
        actores: 'Ana Pérez',
        icon: ScaleIcon,
        demandado: 'Juan Martínez'
        },
        
        {
        nExpedinete: '57/2024',
        juzgado: 'Juzgado 5 Mercantil',
        titulo: 'Competencia Desleal',
        descripcion: 'La empresa demandada utiliza prácticas desleales para perjudicar a la competencia',
        cliente: 'BusinessProtect',
        actores: 'Juan López',
        icon: ScaleIcon,
        demandado: 'Empresa XYZ'
        },
        
        {
        nExpedinete: '34/2024',
        juzgado: 'Juzgado 2 Penal',
        titulo: 'Estafa',
        descripcion: 'El acusado engañó a la víctima para obtener beneficios financieros de manera fraudulenta',
        cliente: 'LegalJustice',
        actores: 'Carlos Martínez',
        icon: ScaleIcon,
        demandado: 'Luisa González'
        },
        
        {
        nExpedinete: '81/2024',
        juzgado: 'Juzgado 3 Laboral',
        titulo: 'Discriminación Laboral',
        descripcion: 'El empleado alega haber sido discriminado en el trabajo por motivos de género',
        cliente: 'LaborRights',
        actores: 'Sara Ramírez',
        icon: ScaleIcon,
        demandado: 'Empresa ABC'
        }
    
   
];

// ==============================|| MOCK SERVICES ||============================== //

// mock.onGet('/api/products/list').reply(200, { products });
mock.onGet('/api/casos').reply(() => {
    return [200, casos];
});


export default casos;
