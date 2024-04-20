import '../styles/inputStyle.css'

export default function MainCV(props) {
  const handleChange = (e) => {
    props.setData({ ...props.Data, [e.target.name]: e.target.value })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="personalInfo">
      <div className="mainText">Personal Info</div>
      <form className="Info" onSubmit={handleSubmit}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          className="inInfo"
          value={props.Data.fname || ''}
          onChange={handleChange}
        />

        <label htmlFor="sname">Second Name</label>
        <input
          type="text"
          name="sname"
          className="inInfo"
          value={props.Data.sname || ''}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className="inInfo"
          value={props.Data.email || ''}
          onChange={handleChange}
        />

        <label htmlFor="num">Phone Number</label>
        <input
          type="text"
          name="num"
          className="inInfo"
          value={props.Data.num || ''}
          onChange={handleChange}
        />

        <label htmlFor="addr">Address</label>
        <input
          type="text"
          name="add"
          className="inInfo"
          value={props.Data.add || ''}
          onChange={handleChange}
        />

        <button type="submit" className='sv'>Save</button>
      </form>
    </div>
  )
}
