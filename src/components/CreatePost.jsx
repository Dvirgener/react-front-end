import { useActionState, useState } from "react";



export default function CreatePost(){

    const [errors, setErrors] = useState({titleError: null, bodyError: null});

    function handleSubmit(prevFormState, formData){

        const title = formData.get('title');
        const body = formData.get('body');


        if(title.trim() === ''){
            setErrors((e) => ({...e, titleError: "Title Field is Required"}));
        }else{
            setErrors(e => {});
        }

        if(body.trim() === ''){
            setErrors((e) => ({...e, bodyError: "Body Field is Required"}));
        }
        else if(body.length < 25) {
            setErrors((e) => ({...e, bodyError: "it is required to have at least 25 Characters"}));
        }

        return {
            enteredValues: {
                title, body
            }
        }   

    }

    const [formState, formAction] = useActionState(handleSubmit,{});

    return (
        <form action={formAction}>

        <div className="w-full">
        <header className="font-bold mb-2 uppercase">Add a Post</header>
        <fieldset className="fieldset w-full" >
            <legend className="fieldset-legend">Post Title</legend>
            <input type="text" className="input w-full" placeholder="My awesome title" name="title" defaultValue={formState.enteredValues?.title} />
            <p className="label text-red-500">{errors.titleError && `* ${errors.titleError}`}</p>
        </fieldset>
        <fieldset className="fieldset w-full" >
            <legend className="fieldset-legend">Post Content</legend>
        <textarea className="textarea w-full" placeholder="Enter your post here..." name="body" defaultValue={formState.enteredValues?.body}></textarea>
                    <p className="label text-red-500">{errors.bodyError && `* ${errors.bodyError}`}</p>
        </fieldset>

        </div>
        <div>
            {}
        </div>
        <div className="flex justify-end gap-5 my-5">
            <button className="btn btn-soft btn-primary">Submit</button>
            <button className="btn btn-soft btn-warning" type="button">Clear</button>
        </div>
        </form>

    )
}