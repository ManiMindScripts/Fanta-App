import React, {useState} from 'react'

const faqData =  [
    {
      question: "What is Fanta?",
      answer:  "Fanta is Popular fruit-flavoured carbonated soft drink created by the Coca-Cola Company"  
    },
    {
        question: "What flavour does Fanta offer?",
        answer:  "Fanta offer a variety of flavours including orange ,grape, pineapple and more!"  
      },
      {
        question: " Is Fanta gluten-free?",
        answer:  " Yes, Fanta is gluten-free making it suitable for those with gluten intolerence. "  
      },
      {
        question: "How Many calories are in a can of fanta?",
        answer:  "A 12 oz can of Fanta orange contains about 160 calories"  
      },
]

const FAQ = () => {
    const [acticve, setacticve] = useState(null)
    const handleClick = (index) => {
            setacticve (index === acticve ? null : index)
    }
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-20 py-4">
        <h1 className="text-3xl font-bold text-center pb-8">Frequently Asked Question</h1>

        {
            faqData.map((item,index)=> {
                return(
                 <div key={index} className="mb-4 py-4 border-b border-gray-300">
               <div className="flex justify-between items-center py-4 cursor-pointer" onClick={() => handleClick(index)}>
                <h3 className="font-semibold text-gray-800 text-xl">{item.question}</h3>
                <span>{acticve === index ? "➖" :  "➕" }</span>
               </div>
               {acticve === index && <p className="text-gray-600">{item.answer}</p> }
                 </div>
                )
            }
            )
        }
    </div>

  )
}

export default FAQ