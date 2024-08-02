import { FaBuilding } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdForklift } from "react-icons/md";
import { Footer } from "./components/footer";
import { Aside } from "./components/aside";
import { Card } from "./components/card";

        

export default function Home() {
  const cards = [
    { id: 1, color: "bg-orange-200", qty: "100", text: "Ambientes", icon: <FaBuilding size={48} /> },
    { id: 2, color: "bg-blue-200", qty: "100", text: "Equipamentos", icon: <MdForklift size={48} /> },
    { id: 3, color: "bg-red-200", qty: "100", text: "O.S. Abertas", icon: <GrNotes size={48} /> },
    { id: 4, color: "bg-green-200", qty: "100", text: "O.S. Concluídas", icon: <IoMdCheckboxOutline size={48} /> },
  ];

  const requisitions = [
    { place: "Sala 01", equipment: "Projetor", requested: "27-jul", completed: "-" },
    { place: "Sala 01", equipment: "Lousa", requested: "27-jul", completed: "27-jul" },
    { place: "Sala 02", equipment: "Mesa", requested: "28-jul", completed: "-" },
  ];
    
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex h-4/5">
        
        <Aside />

        <main className="flex-1 flex flex-col">

          <h1 className="text-4xl font-bold uppercase w-full bg-white/40 p-6 text-center">
            Sistema de Gestão de Manutenção
          </h1>

          <div className="max-h-svh overflow-y-auto">

            <div className="grid grid-cols-4 gap-4 p-6">
              {cards.map((props) => (
                <Card key={props.id} color={props.color} qty={props.qty} text={props.text} icon={props.icon} />
              ))}
            </div>

            <div className="flex gap-2 p-6 pt-0">
              
            
            </div>

          </div>

        </main>

      </div>

      <Footer />

    </div>
  );
}
