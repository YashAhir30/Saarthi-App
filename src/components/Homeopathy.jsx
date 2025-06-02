import React from 'react';

const Homeopathy = () => {
    return (
        <div className="relative text-black py-10 px-10 mt-10 mb-10">
            {/* Background Image with Opacity */}
            <div className="absolute inset-0 bg-[url('./src/assets/history1.jpg')] bg-cover bg-center bg-no-repeat opacity-40  rounded-lg"></div>
            
            {/* Content */}
            <div className="relative z-10 font-medium">
                <h1 className='text-3xl font-bold text-cyan-700 pb-8'>Why Choose Saarthi Homeopathy?</h1>
                <div className='flex flex-col gap-4'>
                    {[
                        "Saarthi Homeopathy Medicines are easy to administer. Even bedridden and comatose patients can take the medicines.",
                        "Saarthi Homeopathy treatments are safe and do not have any side effects.",
                        "Saarthi Homeopathy provides a painless treatment.",
                        "Saarthi Homeopathy increases the patient’s life expectancy.",
                        "Saarthi Homeopathy improves the life quality of the patient.",
                        "Saarthi Homeopathy has developed a curative line of treatment.",
                        "Saarthi Homeopathy has cost-effective treatments.",
                        "Saarthi Homeopathy is known for its effective treatment of chronic as well as acute illnesses."
                    ].map((text, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                            <img className='h-4' src="./src/assets/cut logo.png" alt="" />
                            <h2>{text}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Homeopathy;
