// Import Dependency 
import {toast} from 'react-toastify';

// Import Styling 
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose:5000,
    draggable: true,
    hideProgressBar: true,
    position: toast.POSITION.TOP_RIGHT,
    theme: "dark"
  })


export function warning(string){
    toast.warning(string)
}

export function success(string){
  toast.success(string) 
}
	


