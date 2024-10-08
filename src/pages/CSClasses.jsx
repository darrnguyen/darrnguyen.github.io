import '../components/css/Journal.css'
import { DefaultNavbar } from '../components/misc'

export default function CSCLASS() {

  return (
    <>
      <title>CS Classes</title>

      < DefaultNavbar/>

      <div className='fixed container px-4 rounded-lg text-white border border-2 sticky justify-center items-center pt-5 pb-5 z-0 leading-tight bg-[#252525] mt-[3.5rem]'>
      
        <div>

          <h2>Advanced Computer Science Content</h2>
          <hr className='flex my-5 border-2 rounded-lg'/>

          <div className='flex flex-col items-center mb-5'><h2>Journals</h2></div>

          <div className='flex flex-col items-center justify-center mx-auto w-[50%]'>
            <a href='/cs-classes/J1002' className='journalButton'>J1002: Shell</a>
            <a href='/cs-classes/J1006' className='journalButton'>J1006 Source Control</a>
            <a href='/cs-classes/J1012' className='journalButton'>J1012 Alternative Base Addition</a>
            <a href='/cs-classes/J1013' className='journalButton'>J1013 Boolean Algebra</a>
            <a href='../cs-classes/J1016' className='journalButton'>J1016: Logic Comparsion</a>
            <a href='../cs-classes/J1017' className='journalButton'>J1017: Binary Address</a>
            <a href='../cs-classes/J1089' className='journalButton'>J1089: Hello World</a>
            <a href='../cs-classes/J1151' className='journalButton'>J1151: Conditional and Flow Charts</a>
            <a href='../cs-classes/J1152' className='journalButton'>J1152: While Loops</a>
            <a href='../cs-classes/J1153' className='journalButton'>J1153: Repeat-While Loops</a>
          </div>

          <div className='align-items-center p-5'><h2>Essays</h2></div>

          <div className='flex flex-col items-center mx-auto w-[50%]'>
            <a href='../cs-classes/ConspiracyTheory' className='journalButton'>Conspiracy Theories</a>
          </div>

          <hr className='flex my-5 border-2 rounded-lg' />
        </div>
      </div>
    </>
  )
}