import { useEffect, useState } from "react";
import Pay from "./Pay";
import { Navigate } from "react-router-dom";
import Header from "./Header";

function Home() {
    const [flag, setFlag] = useState(true);
    const [amount, setAmount] = useState(0);
    function handleClick(ev) {
        ev.preventDefault();
        setFlag(false);
    }
    
    return (flag ? (
        <>
            <div className="text-white grid grid-cols-2 mt-4 text-md" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                <div className="text-center ">
                    <h2 className="mb-10 mt-2 text-2xl font-bold">
                        IMPORTANCE OF TREES
                    </h2>
                    <div className="text-justify p-2">
                        Trees play a significant importance in our environment and human well-being. Trees provide us fresh water to drink,
                        air to breathe, shade, and food for humans, animals, and plants. Trees give habitats for various species of fauna
                        and flora, materials for construction, and places of spiritual, cultural, firewood for cooking, and heat and recreational
                        importance. Trees are so essential for the global environment and the health of the species that live there. And they
                        want our unconditional care and protection.
                    </div><br/>
                    <div className="text-justify p-2 font-bold">
                        This is an NGO dedicated for preservation of forests. Play your part by donating for this greater cause...
                        <p>(At maximum 10,000$ in a single transaction.)</p>
                        <p>(Successful payment redirects to homepage.)</p>
                    </div><br/><br/>
                </div>
                <div className="text-center flex flex-col justify-center font-bold bg-[#8533ff]/30 -mt-4 -mb-[80px] text-gray-300">
                    {/* */}
                    <div className="text-2xl">
                        PAYMENT
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-center">
                            <label className="mr-2">Amount (in $)</label>
                            <input className="text-white bg-blue-500/50" type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className="flex justify-center mt-8">
                            <button onClick={handleClick} type="submit" className="border border-solid max-w-[250px] hover:bg-blue-500/50  text-gray-300">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) :
        <Pay amount={amount} />
    )
}

export default Home;