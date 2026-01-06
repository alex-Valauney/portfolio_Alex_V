import { ContactForm } from "@/components/Contact-Form";
import { HeaderForm } from "@/components/Header-Form";
import { PresentationForm } from "@/components/Presentation-Form";
import { ProjetsForm } from "@/components/Projets-Form";
import { TechUsedForm } from "@/components/TechUse-Form";


export default function Home() {
  return (
    <>
    <div className="pt-16"/>
    <HeaderForm></HeaderForm>
    <PresentationForm></PresentationForm>
    <TechUsedForm></TechUsedForm>
    <ProjetsForm></ProjetsForm>

    <ContactForm></ContactForm>
    </>
  );
}
