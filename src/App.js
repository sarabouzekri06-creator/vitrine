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

// import ContactPage from "./page/ContactPage";

      // {/* Hero Section */}
      // <Hero />
      
      // {/* Contact page */}
      // <ContactPage />

      // {/* About / Presentation */}
      // <Presentation />

      // {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// export default App;
// */
import ContactPage from "./page/ContactPage";
const App = () => {
  return ( 
    <div>
      <ContactPage />
    </div>
   );
}
 
export default App;