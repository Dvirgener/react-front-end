import { useActionState, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostAsync } from "../store/post-slice";




export default function CreatePost(){
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    function handleSubmit(prevFormState, formData){

        const title = (formData.get("title") || "").trim();
        const body  = (formData.get("body")  || "").trim();

        const newErrors = {};

        if (title === "") {
            newErrors.titleError = "Title Field is Required";
        }

        if (body === "") {
            newErrors.bodyError = "Body Field is Required";
        } else if (body.length < 25) {
            newErrors.bodyError = "It is required to have at least 25 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length >= 1) {
            return {
            enteredValues: { title, body }
            };
        } else {
            dispatch(addPostAsync({
                title, body
            }));
        }
   
    }


    const [formState, formAction] = useActionState(handleSubmit,{});

    return (
        <form action={formAction}>

        <div className="w-full">
        <header className="font-bold mb-2 uppercase">Add a Post</header>
        <fieldset className="fieldset w-full" >
            <legend className="fieldset-legend">Post Title</legend>
            <input type="text" className="input w-full" placeholder="My awesome title" name="title" defaultValue={formState?.enteredValues?.title} />
            <p className="label text-red-500">{errors.titleError && `* ${errors.titleError}`}</p>
        </fieldset>
        <fieldset className="fieldset w-full" >
            <legend className="fieldset-legend">Post Content</legend>
        <textarea className="textarea w-full" placeholder="Enter your post here..." name="body" defaultValue={formState?.enteredValues?.body}></textarea>
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