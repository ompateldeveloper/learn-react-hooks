import React, { useEffect, useState } from 'react'

export default function ExUseState() {
    const [formData,setFormData] = useState({username:'', password:''})
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        console.log(e.target.value);
        

    }
    return (
        <form> 
            <input value={formData.username} onChange={handleChange} name='username' type="text"  />
            <input value={formData.password} onChange={handleChange} name='password' type="password"  />
            <div>
                {formData.username}
                &nbsp;:&nbsp;
                {formData.password}
            </div>
        </form>
    )
}
