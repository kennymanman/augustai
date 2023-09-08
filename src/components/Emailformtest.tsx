import React, {useState} from 'react'


function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

export default function Emailformtest() {
const [state, setState] = useState<string>();
    
async function handleOnSubmit (e: React.SyntheticEvent <HTMLFormElement>) {
e.preventDefault();


const formData: Record<string, string> = {};

Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
        if (!field.name) return;
        formData[field.name] = field.value;
});


setState("loading");

await fetch ("/api/email", {
method: "POST",
body: JSON.stringify({
firstName: FormData.firstName
})
})


setState("ready");
    
}



  return (


    <div>


<form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="FirstName"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <button
            disabled={state === 'loading'}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
    </div>
  )
}
