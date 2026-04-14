import EducationCard from '@/components/assets/education/EducationCard'
import { educatons } from '@/data/education'
import EducationHeader from '../assets/education/EducationHeader'

export default function Educations() {
  return (
    <section className="wrapper education">
      <EducationHeader />
      <div className="edu-layout flex-inline flip">
        {educatons.map((item, index) => (
          <EducationCard key={item.id} data={item} index={index} />
        ))}
      </div>
    </section>
  )
}
