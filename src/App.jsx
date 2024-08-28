import React from 'react';
import Radio from './Form/Radio';
import perguntas from './Mocks/perguntas';

function App() {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    let acertos = 0;
    for (let resposta in respostas) {
      const respostaCorrespondente = perguntas.filter((item) => {
        if (item.resposta === respostas[resposta]) {
          acertos++;
        }
      });
    }
    if (slide >= perguntas.length - 1) {
      setResultado(`Você acertou ${acertos} de ${perguntas.length}`);
    }
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <div
            className="questions"
            style={{ display: index === slide ? 'block' : 'none' }}
          >
            <h2>{pergunta.pergunta}</h2>
            <div className="options">
              <Radio
                id={pergunta.id}
                options={pergunta.options}
                onChange={handleChange}
                value={respostas[pergunta.id]}
              />
            </div>
          </div>
        ))}
        {resultado ? (
          <div className="result">
            <p>{resultado}</p>
          </div>
        ) : (
          <button onClick={handleClick}>Próxima pergunta</button>
        )}
      </form>
    </div>
  );
}

export default App;
