import type { Educaton } from '@/types'

export const educatons: Educaton[] = [
  {
    id: 1,
    icon: 'GraduationCap',
    degree: 'BSc Computer Science & Engineering',
    institute: 'Tejgaon College',
    board: 'NU',
    description:
      'Bachelor of Science in Computer Science and Engineering (BSc CSE) is an undergraduate degree program that focuses on the study of computer science and engineering principles. The course typically spans four years and covers a wide range of topics including programming, algorithms, data structures, computer architecture, software engineering, and more.',
    startDate: new Date('2024-11'),
    endDate: 'Present',
  },
  {
    id: 2,
    icon: 'University',
    degree: 'Higher Secondary Certificate (HSC)',
    institute: 'Tejgaon College',
    board: 'Dhaka',
    description:
      'Higher Secondary Certificate (HSC) or Intermediate Examination is a secondary education qualification in Bangladesh. The program is designed to prepare students for higher education and covers a wide range of subjects including science, arts, commerce, and more.',
    startDate: new Date('2020-09'),
    endDate: new Date('2022-12'),
    field: 'Science',
    gpa: 4.17,
  },
  {
    id: 3,
    icon: 'School',
    degree: 'Secondary School Certificate (SSC)',
    institute: 'S.R.G.H.S',
    board: 'Dhaka',
    description:
      'The Secondary School Certificate (SSC) is a public examination in Bangladesh, administered by the Board of Intermediate and Secondary Education. The SSC curriculum covers a wide range of subjects including science, arts, commerce, and more.',
    startDate: new Date('2018-01'),
    endDate: new Date('2020-02'),
    field: 'Science',
    gpa: 4.67,
  },
]
