import type { Metadata } from 'next'
import Image from 'next/image'
import { Heading } from '@/components/ui/heading'
import { CONFIG } from '@/constants/config'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE} specializing in ${CONFIG.SITE.KEYWORDS.join(', ')}. ${CONFIG.PERSONAL.BIO}`,
  openGraph: {
    title: `About | ${CONFIG.SITE.NAME}`,
    description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE} specializing in modern web development.`,
    url: `${CONFIG.SITE.URL}/about`,
    images: [
      {
        url: '/images/mehmed-khan.png',
        width: 1200,
        height: 630,
        alt: `${CONFIG.PERSONAL.NAME} - ${CONFIG.PERSONAL.ROLE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About | ${CONFIG.SITE.NAME}`,
    description: `Learn more about ${CONFIG.PERSONAL.NAME}, a ${CONFIG.PERSONAL.ROLE}.`,
    images: ['/images/mehmed-khan.png'],
  },
}

export default function AboutPage() {
  return (
    <main className="w-full min-h-dvh container py-20">
      <div className="flex flex-col items-center gap-12">
        <Heading variant="primary-heading">About Me</Heading>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl">
          <div className="shrink-0">
            <Image
              src="/images/mehmed-khan.png"
              alt={CONFIG.PERSONAL.NAME}
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>

          <div className="flex flex-col gap-6 text-lg leading-relaxed">
            <p>
              Hi, I'm <strong>{CONFIG.PERSONAL.NAME}</strong>, a passionate{' '}
              <strong>{CONFIG.PERSONAL.ROLE}</strong> based in Dhaka,
              Bangladesh. I specialize in building modern, responsive, and
              scalable web applications using cutting-edge technologies.
            </p>

            <p>
              My expertise lies in the MERN stack (MongoDB, Express, React, and
              Node.js), with a particular focus on React and Next.js for
              frontend development. I'm skilled at creating beautiful,
              eye-catching user interfaces that provide exceptional user
              experiences while ensuring the underlying code is clean,
              maintainable, and performant.
            </p>

            <p>
              On the backend, I build robust, secure, and enterprise-grade APIs
              that can handle high traffic and scale with your business needs. I
              follow best practices for security, performance optimization, and
              code quality, ensuring that every application I build is
              production-ready.
            </p>

            <p>
              I'm also exploring DevOps and DevSecOps practices to enhance my
              development workflow and ensure secure deployments. Continuous
              learning is a core part of my journey, and I stay updated with the
              latest trends and technologies in web development.
            </p>

            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-4">What I Do</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Build responsive and modern web applications</li>
                <li>Develop scalable RESTful APIs and microservices</li>
                <li>Create beautiful UI/UX designs with React and Next.js</li>
                <li>
                  Implement secure authentication and authorization systems
                </li>
                <li>Optimize applications for performance and SEO</li>
                <li>Write clean, maintainable, and well-documented code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
