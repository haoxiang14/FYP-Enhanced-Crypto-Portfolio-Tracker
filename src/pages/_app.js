import "@/styles/globals.css";
import { PicketProvider } from "@picketapi/picket-react";


export default function App ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    
      <PicketProvider apiKey="pk_8480601e6d636a4ae26b6b276a5e1688">
          {getLayout(<Component {...pageProps} />)}
      </PicketProvider>
        
  );
};

