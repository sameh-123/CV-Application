import { useState } from 'react'
import MainCV from './mainCV.jsx'
import phoneIcon from '../assets/icons8-phone-50.png'
import emailIcon from '../assets/icons8-email-50.png'
import addIcon from '../assets/icons8-address-50.png'
import Edu from './edu.jsx'
import Pro from './pro.jsx'
import { v4 as uuid } from 'uuid'
export default function App() {
  const [Data, setData] = useState({
    fname: 'Sameh',
    sname: 'Mohamed',
    email: 'sam07a@gmail.com',
    num: '+201553534948',
    add: 'Mansoura,Egypt',
    educationInfo: [
      {
        schoolname: 'Mansoura University',
        id: 1,
        sdate: '02/2014',
        edate: '04/2020',
        loc: 'Mansoura,Egypt',
        degree: 'Belchore',
      },
      {
        schoolname: 'Cairo University',
        id: 2,
        sdate: '02/2016',
        edate: '04/2017',
        loc: 'Cairo,Egypt',
        degree: 'Phd',
      },
    ],
    proInfo: [
      {
        companyname: 'ITI',
        ssdate: '08/2022',
        eedate: '01/2023',
        locc: 'Mansoura, Egypt',
        idd: 1,
        pos: 'Instructor',
        disc: 'Fullstack web developer using react and dijango',
      },
    ],
  })
  const [shown, setShown] = useState(0)
  const toPer = () => {
    setShown(0)
  }
  const toEdu = () => {
    setShown(1)
  }
  const toPro = () => {
    setShown(2)
  }
  const c1 = `btn ${shown == 0 ? 'act' : ''}`
  const c2 = `btn ${shown == 1 ? 'act' : ''}`
  const c3 = `btn ${shown == 2 ? 'act' : ''}`
  return (
    <div className="all">
      <div className="right">
        <div className="btns">
          <button onClick={toPer} className={c1}>
            Personal Info
          </button>
          <button onClick={toEdu} className={c2}>
            Education
          </button>
          <button onClick={toPro} className={c3}>
            Experience
          </button>
        </div>
        {shown == 0 ? (
          <MainCV Data={Data} setData={setData} />
        ) : shown == 1 ? (
          <Edu Data={Data} setData={setData} />
        ) : (
          <Pro Data={Data} setData={setData} />
        )}
      </div>

      <div className="cv">
        <div className="top">
          <div className="nm">
            {Data.fname || ''} {Data.sname || ''}
          </div>
          <div className="personal">
            <div className="cont">
              <img src={phoneIcon} alt="phone" />
              <div className="dt">{Data.num || ''}</div>
            </div>
            <div className="cont">
              <img src={emailIcon} alt="email" />
              <div className="dt">{Data.email || ''}</div>
            </div>
            <div className="cont">
              <img src={addIcon} alt="address" />
              <div className="dt">{Data.add || ''}</div>
            </div>
          </div>
        </div>

        <div className="education">
          {Data.educationInfo.length > 0 ? (
            <div className="txt">Education</div>
          ) : (
            ''
          )}
          {Data.educationInfo.map((item) => (
            <div className="einfo" key={uuid()}>
              <div className="rig">
                <div className="right_one">
                  {item.sdate} - {item.edate}
                </div>
                <div className="right_one">{item.loc}</div>
              </div>
              <div className="left">
                <div className="uname">{item.schoolname}</div>
                <div className="left_one">{item.degree}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="education">
          {Data.educationInfo.length > 0 ? (
            <div className="txt">Professional Experience</div>
          ) : (
            ''
          )}
          {Data.proInfo.map((item) => (
            <div className="einfo" key={uuid()}>
              <div className="rig">
                <div className="right_one">
                  {item.ssdate} - {item.eedate}
                </div>
                <div className="right_one">{item.locc}</div>
              </div>
              <div className="left">
                <div className="uname">{item.companyname}</div>
                <div className="left_one">{item.pos}</div>
                <div className="dis">{item.disc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
