import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const testimonials = [
    {
      text: 'Some days a motivational quote can provide a pick-me-up for employees and even management. They can be a breath of fresh air when it comes to a drab afternoon.',
      author: 'Patrick Bell CEO at Company'
    },
    {
      text: 'If you find yourself doing the same routine day after day, never remembering what you did the day before, having nothing to look forward to, living your life - but enjoying it or enything.',
      author: 'Zachary Cooper Project Manager at Company'
    },
    {
      text: "Large businesses require a lot of IT infrastructure and a department to look after it. Small businesses often can't afford to have that sort of internal supprot in place, yet they need fully operational IT systems in order for.",
      author: 'Caleb Swanson Managing Partner at Company'
    },
  ]

  return (
    <>
      <Head>
        <title>iCodeThis | Testimonials UI</title>
        <meta name="description" content="Testimonial UI challenge from iCodeThis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h4>Testimonials</h4>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) =>
            <>
              <div className={styles.eachTestimonial} key={index}>
                <div className={styles.content}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3.99999C0 3.99999 0.126761 1.87323 1 0.999987C1.87324 0.126748 3.5 0 3.5 0C2.5 1.5 2.5 1.99999 2.5 3.99999H4.5V7.99999H0V3.99999Z" fill="black" />
                    <path d="M5 3.99999C5 3.99999 5.12676 1.87323 6 0.999987C6.87324 0.126748 8.5 0 8.5 0C7.5 1.5 7.5 1.99999 7.5 3.99999H9.5V7.99999H5V3.99999Z" fill="black" />
                  </svg>
                  <p>{testimonial.text}</p>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 4.00001C9.5 4.00001 9.37324 6.12677 8.5 7.00001C7.62676 7.87325 6 8 6 8C7 6.5 7 6.00001 7 4.00001H5V1.33514e-05H9.5V4.00001Z" fill="black" />
                    <path d="M4.5 4.00001C4.5 4.00001 4.37324 6.12677 3.5 7.00001C2.62676 7.87325 1 8 1 8C2 6.5 2 6.00001 2 4.00001H0V1.33514e-05H4.5V4.00001Z" fill="black" />
                  </svg>
                  <h4>{testimonial.author}</h4>
                </div>
                <span className={styles.border}></span>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}
