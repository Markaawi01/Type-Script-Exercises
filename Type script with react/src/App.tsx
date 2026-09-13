import useNumberStorage from "./Type Script with React Exercises/Exercise10/useNumberStorage"
import ProductCard from "./Type Script with React Exercises/Exercise7/ProductCard"
import Welcome from "./Type Script with React Exercises/Exercise7/Welcome"
import Counter from "./Type Script with React Exercises/Exercise8/counter"
import TodoList from "./Type Script with React Exercises/Exercise8/TodoList"
import UserProfile from "./Type Script with React Exercises/Exercise8/UserProfile"
import AgeForm from "./Type Script with React Exercises/Exercise9/AgeForm"
import ContactForm from "./Type Script with React Exercises/Exercise9/ContactForm"
import EmailForm from "./Type Script with React Exercises/Exercise9/EmailForm"

function App() {
     const [count, setCount] = useNumberStorage("count", 0);

  return (
    <>
    <h1>Hello Every body</h1>
<Welcome username="Abdulkadir" isPremium={true} />  
<ProductCard
  name="Laptop"
  price={1200}
  description="A powerful development laptop"
/>
<Counter/>
<UserProfile/>
<TodoList/>
<EmailForm
  onSubmit={(email) => {
    console.log("Email:", email);
  }}
/>
 <AgeForm
        onSubmit={(age) => {
          console.log("User age:", age);
        }}
      />
<ContactForm
        onSubmit={(data) => {
          console.log("Name:", data.name);
          console.log("Email:", data.email);
        }}
      />
   
 </>
    
  )
}

export default App
