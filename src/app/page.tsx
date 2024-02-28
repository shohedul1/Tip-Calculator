'use client';
import Image from "next/image";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



export default function Home() {
  const tips = [5, 10, 15, 25, 50];

  const [bill,setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

    const tipAmount = (bill * (tipPercentage / 100)) / numberOfPeople || 0;
    const totalPerson = bill / numberOfPeople + tipAmount || 0;
       // const tipAmount = (tipPercentage / 100) * bill;
    // const totalPerson = (bill - tipPercentage) / numberOfPeople;
    
    const handleRest=()=>{
      setBill(0);
      setTipPercentage(0);
      setNumberOfPeople(0);
    }


  return (
    <div className="min-h-screen w-full bg-[hsl(185,41%,84%)] flex justify-center items-center flex-col gap-10 p-2">
      <p className="text-dark-cyan">logo</p>
      <main className="bg-white p-4 rounded-2xl flex gap-6 flex-col md:flex-row w-full max-w-[700px]">
        {/* seft scetion */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* billl */}
          <section className="flex flex-col gap-2">
            <Lable>Bill</Lable>
            <div className="relative flex">
              <input
                onChange={(e)=>setBill(e.target.valueAsNumber)}
                type="number"
                placeholder="0"
                value={bill}
                className="text-right bg-[hsl(189,41%,97%)] h-[32px] w-full px-2 outline-strong-cyan"
              />

              <FaDollarSign className="absolute top-2 left-1 text-light-rayish-cyan" />

            </div>

          </section>

          {/* select tip */}
          <section className="flex flex-col gap-2">
            <Lable>Selected Tip%</Lable>
            <div className="grid grid-cols-3 gap-2">
              {tips.map((tip, index) => (
                <TipButton key={index}
                onClick={()=>setTipPercentage(tip)}
                > 
                {tip} %
              </TipButton>
              ))}
              <input
                value={tipPercentage}
                onChange={(e)=>setTipPercentage(e.target.valueAsNumber)}
                type="number"
                placeholder="custom"
                className=" text-center bg-[hsl(189,41%,97%)]  h-[38px] rounded  px-2 outline-strong-cyan text-dark-cyan font-bold"
              />

            </div>
          </section>

          {/* number of people */}
          <section className="flex flex-col gap-2">
            <Lable>Number of people</Lable>
            <div className="relative flex">
              <input
                value={numberOfPeople}
                onChange={(e)=>setNumberOfPeople(e.target.valueAsNumber)}
                type="number"
                placeholder="0"
                className="text-right bg-[hsl(189,41%,97%)] h-[32px] w-full px-2 outline-strong-cyan text-dark-cyan font-bold"
              />
              <FaUser className="absolute top-2 left-1 text-light-rayish-cyan" />

            </div>

          </section>


        </div>
        {/* right section */}
        <div className="bg-dark-cyan md:w-1/2 rounded-xl px-5 pt-8 pb-6 flex flex-col justify-between">
          {/* top items */}
          <section className="flex flex-col gap-5">
            {/* tip amout */}
            <PersonBill labe="tip Amount" bill={+tipAmount.toFixed(2)} />
            {/* total amout */}
            <PersonBill labe="Total" bill={+totalPerson.toFixed(2)} />
          </section>
          {/* button */}
          <button onClick={handleRest} className="w-full text-dark-cyan bg-strong-cyan rounded font-bold h-[38px] hover:bg-very-light-grayish-cyan hover:text-dark-cyan">
            RESET
         </button>
        </div>


      </main>
    </div>
  );
}


function Lable(props: React.HtmlHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} className="text-[hsl(184,14%,56%)] font-semibold" />
  )
}

function TipButton(props: React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button  {...props} className="bg-dark-cyan text-white font-semibold w-full h-[38px] rounded hover:bg-very-light-grayish-cyan hover:text-dark-cyan" />
  )
}

type PersonBillType = {
  labe: string;
  bill: number;
}

function PersonBill(props: PersonBillType) {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-white">{props.labe}</p>
        <p className="text-xl text-light-rayish-cyan"> / person</p>
      </div>
      <p className="font-bold text-4xl text-strong-cyan">${props.bill}</p>
    </div>
  )
}