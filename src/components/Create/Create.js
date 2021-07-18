import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
const Create = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [create, setCreate] = useState([]);
    const [name, setName] = useState('');
    useEffect(() => {
        fetch('http://localhost/api/get_form.php')
            .then(res => res.json())
            .then(data => {
                setCreate([data.data.fields[0]])
                console.log(data.data.fields[0]);
                
            })
    }, [])
    const entries = Object.entries(create);
    console.log(entries);
    const onSubmit = (data) => {
        fetch('http://localhost/api/submit_form.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),

        })
            .then(res => res.json())
            .then(success => {
                console.log(success);
            })
            .catch(err => {
                console.log(err);
            })



        console.log(data);
    }
    const handleBlur = (e) =>{
        console.log(e.target.name,e.target.value);
  if (e.target.user_name === 'user_name') {
      const nameValid = /^[a-zA-Z ]+$/.test(e.target.value)
      console.log(nameValid);
  }
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    create.map(cre => (
                        <>
                            <div className="form-group">
                                <input type="text"{...register("FullName")} onChange={handleBlur} title={cre.user_name.title} required={cre.user_name.required} value={cre.user_name.value} class={cre.user_name.html_attr.class} id={cre.user_name.html_attr.id} 
                                 placeholder={cre.user_name.title} className="form-control" />
                            </div>
                            <input type="submit" value="submit" /> 
                        </>

            ))
                }
            {/* <div className="form-group">
                    <input type="text"{...register("FullName")} placeholder="Fulname" className="form-control" />

                    <div className="form-group">
                        <input type="text" {...register("Email")} placeholder="Emai" className="form-control" />

                    </div>
                    <div className="form-group">
                        <input type="text" {...register("Details")} placeholder="Details" className="form-control" />

                    </div>
                    <div class="input-group mb-3">
                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                        <select class="form-select" {...register("Gender")} id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="submit" /> */}
            </form>
        </div >
    );
};

export default Create;