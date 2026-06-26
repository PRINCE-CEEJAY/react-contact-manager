import ContactList from "./features/components/ContactList"
import ContactForm from "./features/components/ContactForm"

export default function App(){

  return(
    <div className='container'>
    <ContactForm /> 
    <ContactList/>
    </div>
  )
}