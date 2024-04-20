import '../styles/inputStyle.css'
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
export default function Edu(props) {
  const [edu, setEdu] = useState(0)
  const [canceled, setCanceled] = useState(0)
  const [prev] = useState({ ...props.Data })
  const handleSubmit = (e) => {
    e.preventDefault()
    setEdu(0)
  }
  useEffect(() => {
    props.setData({ ...prev })
  }, [canceled])
  const items = props.Data.educationInfo.map((item) => {
    if (item.schoolname)
      return (
        <button
          onClick={() => {
            setEdu(item.id)
          }}
          className="myEducation"
          key={item.id}
        >
          {item.schoolname}
        </button>
      )
  })
  return (
    <div className="personalInfo">
      <div className="mainText">Education Info</div>
      {edu == 0 ? (
        <div className="allE">
          {items}
          <button
            className="eduadd"
            onClick={() => {
              const newId = uuid()
              const nextArray = [...props.Data.educationInfo, { id: newId }]
              props.setData({
                ...props.Data,
                educationInfo: nextArray,
              })
              setEdu(newId)
            }}
          >
            + Education
          </button>
        </div>
      ) : (
        props.Data.educationInfo.map((item) => {
          if (item.id == edu) {
            return (
              <form className="Info" key={item.id}>
                <label htmlFor="schoolname">School Name</label>
                <input
                  type="text"
                  name="schoolname"
                  className="inInfo"
                  value={item.schoolname || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.educationInfo.map((it) => {
                      if (it.id == item.id) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      educationInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="degree">Degree</label>
                <input
                  type="text"
                  name="degree"
                  className="inInfo"
                  value={item.degree || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.educationInfo.map((it) => {
                      if (it.id == item.id) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      educationInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="sdate">Start Date</label>
                <input
                  type="text"
                  name="sdate"
                  className="inInfo"
                  value={item.sdate || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.educationInfo.map((it) => {
                      if (it.id == item.id) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      educationInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="edate">End Date</label>
                <input
                  type="text"
                  name="edate"
                  className="inInfo"
                  value={item.edate || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.educationInfo.map((it) => {
                      if (it.id == item.id) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      educationInfo: nextArray,
                    })
                  }}
                />

                <label htmlFor="loc">Location</label>
                <input
                  type="text"
                  name="loc"
                  className="inInfo"
                  value={item.loc || ''}
                  onChange={(e) => {
                    const nextArray = props.Data.educationInfo.map((it) => {
                      if (it.id == item.id) {
                        return { ...it, [e.target.name]: e.target.value }
                      }
                      return it
                    })
                    props.setData({
                      ...props.Data,
                      educationInfo: nextArray,
                    })
                  }}
                />
                <div className="btnd">
                  <button
                    className="btnright"
                    onClick={() => {
                      const nextArray = props.Data.educationInfo.filter(
                        (it) => {
                          return it.id != item.id
                        },
                      )
                      props.setData({
                        ...props.Data,
                        educationInfo: nextArray,
                      })
                      setEdu(0)
                    }}
                  >
                    Delete
                  </button>
                  <div className="btnleft">
                    <button
                      className="can"
                      onClick={() => {
                        setCanceled(!canceled)
                        setEdu(0)
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
