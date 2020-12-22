import React, { useState } from 'react';
import data from './data';
function App() {

    const [num, setNum] = useState(0);
    const [filterdData, setFilteredData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFilteredData((data.slice(0, num)));
    }

    return (
        <section className="section-center">
            <h3>Tired of Boring Lorem Ipsum?</h3>
            <form onSubmit={handleSubmit} className="lorem-form">
                <label htmlFor="amount">
                    Paragrahps:
                </label>
                <input
                    id="amount"
                    name="amount"
                    type="number"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                />
                <button className="btn" type="submit">Generate</button>
            </form>
            {
                filterdData.map((para, index) => <p key={index} className="result">{para}</p>)
            }
        </section>
    )
}

export default App;
