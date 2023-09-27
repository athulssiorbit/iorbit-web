import Image from 'next/image'
import styles from './page.module.css'
import HomePage from './Pages/HomePage/HomePage'
import SecondSection from './Pages/SecondSection/SecondSection'
import ThirdSection from './Pages/ThirdSection/ThirdSection'
import FourthSection from './Pages/FourthSection/FourthSection'
import FifthSection from './Pages/FifthSection/FifthSection'
import SixthSection from './Pages/SixthSection/SixthSection'
import Footer from './Pages/Footer/Footer'
import JoinUsSection from './Pages/JoinUsSection/JoinUsSection'
import ResponseCare from './Pages/ResponseCareSection/ResponseCare'
import OurService from './Pages/OurServiceSection/OurService'
export default function Home() {
  return (
    <>
      <HomePage />
      <SecondSection />
      <ThirdSection />
      <FourthSection image="/ipad.png" btn data={{count:1,title:"Book a meeting",content:"Need help with connectivity as part of your digital transformation? Contact iOrbit today to see how we can help."}}/>
      <FourthSection image="/iphone.png" rev data={{count:2,title:"Easy-install and go live",content:"When you partner with iOrbit, we take the implementation pain away with a quick integration into your existing IT infrastructure and workflows."}} />
      <FourthSection image="/monitor.png" data={{count:3,title:"Access, analyze, and deliver",content:"Data is connected within minutes of going live with iOrbit. With accessible data and powerful new insights right at your fingertips, your clinical staff will be ready to confidently increase caseload types and volume, without sacrificing the quality of care."}}/>
      <FifthSection />
      <SixthSection />
      <OurService />
      <ResponseCare />
      <JoinUsSection />
      <Footer />
    </>
  )
}
