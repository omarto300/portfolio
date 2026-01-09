import {Briefcase, GraduationCap, Baby, Code, Award } from 'lucide-react';
const timelineData = [
    {
      id: 1,
      year: '1992',
      type: 'birth',
      branch: 'main',
      title: 'Nacimiento',
      description: 'El inicio de una gran historia',
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      position: 'left'
    },
    {
      id: 2,
      year: '2007',
      type: 'education',
      branch: 'main',
      title: 'Centro de Bachillerato Technológico No.2',
      description: 'Tecnico en informática',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      position: 'right'
    },
    {
      id: 3,
      year: '2010',
      type: 'milestone',
      branch: 'education',
      title: 'Instituto Tecnológico de Tlaxiaco',
      description: 'Ingeniería en Sistemas Computacionales',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      position: 'left'
    },
    {
      id: 4,
      year: '2015',
      type: 'education',
      branch: 'education',
      title: 'Direccion general de educación superior tecnológica',
      description: 'Servicio social',
      icon: GraduationCap,
      color: 'from-indigo-500 to-blue-500',
      position: 'right'
    },
    {
      id: 5,
      year: '2016',
      type: 'work',
      branch: 'career',
      title: 'OfficeMax',
      description: 'Desarrollador Junior',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      position: 'left'
    },
    {
      id: 6,
      year: '2018',
      type: 'work',
      branch: 'career',
      title: 'Titulación',
      description: 'Obtención del título profesional, examen CENEVAL EGEL con calificación sobresaliente',
      icon: Code,
      color: 'from-teal-500 to-cyan-500',
      position: 'right'
    },
    {
      id: 7,
      year: '2018',
      type: 'work',
      branch: 'life',
      title: '2018',
      description: 'Profesor de Fisica y Matemáticas',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-500',
      position: 'left'
    },
    {
      id: 8,
      year: '2019',
      type: 'work',
      branch: 'career',
      title: 'THTEC',
      description: 'Desarrollador Web, asignado a Banco Azteca de Grupo Salinas',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-500',
      position: 'right'
    },
    {
      id: 9,
      year: '2020',
      type: 'work',
      branch: 'career',
      title: 'Banco Azteca - Grupo Salinas',
      description: 'Lider Tecnico de Desarrollo Web',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-500',
      position: 'left'
    },
    {
      id: 10,
      year: '2023',
      type: 'work',
      branch: 'career',
      title: 'IDS Comercial',
      description: 'Desarrollor Midleware Java',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-500',
      position: 'right'
    },
     {
      id: 11,
      year: '2025',
      type: 'work',
      branch: 'career',
      title: 'Softtek',
      description: 'Desarrollor Java',
      icon: Briefcase,
      color: 'from-amber-500 to-orange-500',
      position: 'left'
    }
  ];
  export default timelineData;