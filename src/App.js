import { Toaster } from 'sonner';
import ContactPage from "./page/ContactPage";

function App() {
  return (
    <div>
      <Toaster position="top-right" richColors />
         <ContactPage />
    </div>
  );
}

export default App;
