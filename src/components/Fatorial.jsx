import React, { useState, useMemo } from 'react';
import '../App.css'; 

const Fatorial = () => {
  const [numero, setNumero] = useState(1);
  const [OutroEstado, setOutroEstado] = useState('');

  const fatorial = (f) => {
    if (f <= 1) return 1;
    return f* fatorial(f - 1);
  };

  const memoizedFatorial = useMemo(() => fatorial(numero), [numero]);

  return (
    <div className="fatorial-calculator">
      <h1>Calcular Fatorial:</h1>
      <input
        type="numero"
        value={numero}
        onChange={(e) => setNumero(numero(e.target.value))}
      />
      <p>Fatorial de {numero} é {memoizedFatorial}</p>
    </div>
  );
};

export default Fatorial;
