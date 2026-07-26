import type {
  ReactNode,
} from "react";


import Header from "../Header";


import ThemeToggle from "../../common/ThemeToggle/ThemeToggle";



type MainLayoutProps = {

  children: ReactNode;

};




export default function MainLayout({

  children,

}: MainLayoutProps) {


  return (

    <>


      <Header />



      <main>

        {children}

      </main>



      <ThemeToggle />


    </>

  );

}