import React, {useState} from 'react'

function Form(props) {
    const [formData, setFormData] = useState({name: "", age: "", height: ""})
    const handleChange = e => {
        setFormData( {...formData, [e.target.name]: e.target.value } )
    }
    const postData = e => {
        e.preventDefault();
        props.postSmurfs(formData)
        setFormData({name: "", age: "", height: ""})
    }
    return (
        <div>
            <form>
                <input onChange={handleChange} name="name" placeholder="name" value={formData.name} />
                <input onChange={handleChange} name="age" placeholder="age" value={formData.age} />
                <input onChange={handleChange} name="height" placeholder="height" value={formData.height} />
                <button onClick={postData} type='submit'>Add Smurf</button>
            </form>
        </div>
    )
}

export default Form
