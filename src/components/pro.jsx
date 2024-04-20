import '../styles/inputStyle.css'
import { useState,useEffect } from 'react'
import { v4 as uuid } from 'uuid'
export default function Pro(props) {
  const [pro, setPro] = useState(0)
  const [canceled, setCanceled] = useState(0)
  const [prev] = useState({ ...props.Data })
  const handleSubmit = (e) => {
    e.preventDefault()
    setPro(0)
  }
  useEffect(() => {
    props.setData({ ...prev })
  }, [canceled])
  const items = props.Data.proInfo.map((item) => {
    if(item.companyname){
      return (
        <button
          onClick={() => {
            setPro(item.idd)
          }}
          className="myEducation"
          key={item.idd}
        >
          {item.companyname}
        </button>
      )
    }
  })
  return (
    <div className="personalInfo">
      <div className="mainText">Experience Info</div>
      {pro == 0 ? (
        <div className="allE">
          {items}
          <button
            className="eduadd"
            onClick={() => {
              const newId = uuid()
              const nextArray = [...props.Data.proInfo, { idd: newId }]
              props.setData({
                ...props.Data,
                proInfo: nextArray,
              })
              setPro(newId)
            }}
          >
            + Experience
          </button>
        </div>
      ) : (
        props.Data.proInfo.map((item) => {
          if (item.idd == pro) {
            return (
              <form className="Info" key={item.idd}>
                <label htmlFor="companyname">Company Name</label>
                <input
                  type="text"
                  name="companyname"
                  className="inInfo"
                  value={item.companyname || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.proInfo.map((it) => {
                      if (it.idd == item.idd) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      proInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="pos">Position Title</label>
                <input
                  type="text"
                  name="pos"
                  className="inInfo"
                  value={item.pos || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.proInfo.map((it) => {
                      if (it.idd == item.idd) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      proInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="ssdate">Start Date</label>
                <input
                  type="text"
                  name="ssdate"
                  className="inInfo"
                  value={item.ssdate || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.proInfo.map((it) => {
                      if (it.idd == item.idd) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      proInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="eedate">End Date</label>
                <input
                  type="text"
                  name="eedate"
                  className="inInfo"
                  value={item.eedate || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.proInfo.map((it) => {
                      if (it.idd == item.idd) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      proInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="locc">Location</label>
                <input
                  type="text"
                  name="locc"
                  className="inInfo"
                  value={item.locc || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.proInfo.map((it) => {
                      if (it.idd == item.idd) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      proInfo: nextArray,
                    })
                  }}
                />
                <label htmlFor="disc">Discription</label>
                <textarea
                  type="text"
                  name="disc"
                  className="inInfo"
                  value={item.disc || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.proInfo.map((it) => {
                      if (it.idd == item.idd) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      proInfo: nextArray,
                    })
                  }}
                />

                <div className="btnd">
                  <button
                    className="btnright"
                    onClick={() => {
                      const nextArray = props.Data.proInfo.filter((it) => {
                        return it.idd != item.idd
                      })
                      props.setData({
                        ...props.Data,
                        proInfo: nextArray,
                      })
                      setPro(0)
                    }}
                  >
                    Delete
                  </button>
                  <div className="btnleft">
                    <button
                      className="can"
                      onClick={() => {
                        setCanceled(!canceled)
                        setPro(0)
                      }}
                    >
                      Cancel
                    </button>
                    <button type="submit" onClick={handleSubmit}>
                      Add
                    </button>
                  </div>
                </div>
              </form>
            )
          }
        })
      )}
    </div>
  )
}