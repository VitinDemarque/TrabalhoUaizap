import React, { useState } from 'react';
import Message from './Message';
import styled from 'styled-components';

function App() {
  // Armazenar as mensagens
  const [mensagens, setMensagens] = useState([
    { id: 1, remetente: 'Eu', conteudo: 'Olá, como você está?' },
    { id: 2, remetente: 'Outro Usuário', conteudo: 'Estou bem, obrigado!' },
    // Adicione mais mensagens aqui, se necessário
  ]);

  // Campos de entrada de mensagem
  const [novoRemetente, setNovoRemetente] = useState('');
  const [novoConteudo, setNovoConteudo] = useState('');

  // Adicionar uma nova mensagem
  const adicionarMensagem = () => {
    if (novoRemetente && novoConteudo) {
      const novaMensagem = {
        id: Date.now(),
        remetente: novoRemetente,
        conteudo: novoConteudo,
      };
      setMensagens([...mensagens, novaMensagem]);
      setNovoRemetente('');
      setNovoConteudo('');
    }
  };

  // editar uma mensagem pelo ID
  const editarMensagem = (id, novoConteudo) => {
    const mensagensAtualizadas = mensagens.map((mensagem) => {
      if (mensagem.id === id) {
        return { ...mensagem, conteudo: novoConteudo };
      }
      return mensagem;
    });
    setMensagens(mensagensAtualizadas);
  };

  // Deletar uma mensagem pelo ID
  const deletarMensagem = (id) => {
    const novasMensagens = mensagens.filter((mensagem) => mensagem.id !== id);
    setMensagens(novasMensagens);
  };

  // Enivar apertando Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      adicionarMensagem();
    }
  };

  return (
    <Divinicial>
      <Titulo>UAIZAP</Titulo>
      <div className="lista-mensagens">
        {mensagens.map((mensagem) => (
          <Message
            key={mensagem.id}
            mensagem={mensagem}
            onEditar={editarMensagem}
            onExcluir={() => deletarMensagem(mensagem.id)}
          />
        ))}
      </div>
      <Caixaenviar className="campo-de-envio">
        <input
          type="text"
          placeholder="Remetente"
          value={novoRemetente}
          onChange={(e) => setNovoRemetente(e.target.value)}

        />
        <input
          type="text"
          placeholder="Mensagem"
          value={novoConteudo}
          onChange={(e) => setNovoConteudo(e.target.value)}
          onKeyDown={handleKeyDown} // Para enviar ao pressionar Enter
        />
        <BotaoEnviar>Enviar</BotaoEnviar>
      </Caixaenviar>
    </Divinicial>
  );
}

// Estilização
const MensagemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px solid #d4d4d4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 50%;
  margin: 0 auto;
  background: green;
  color: black
`;

const MensagemBase = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  max-width: 70%;
  word-wrap: break-word;

  
  
`;

const Botao = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;
`;

const MensagemLeft = styled(MensagemBase)`
  background-color: #f0f0f0;
  display: flex;
  justify-content: flex-end;
  textAlign: 'left'
  

`;

const MensagemRight = styled(MensagemBase)`
  background-color: #4caf50;
  color: #ffffff;
  display: flex;
  justify-content: flex-start;
`;

const MensagemStrong = styled.strong`
  font-weight: bold;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-end;
`;

const MensagemDiv = styled.div`
  
  textAlign: 'left'
  display: flex;
  justify-content: left;
  

`;

const BotaoEditar = styled(Botao)`
  background-color: #007bff;
  color: #fff;
  margin-right: 4px;
`;

const BotaoExcluir = styled(Botao)`
  background-color: #ff0000;
  color: #fff;
`;

const BotaoEnviar = styled(Botao)`
  background-color: #007bff;
  color: #fff;
`;

const Div = styled.div`
  align-items: center;
  border: 5px;
  border-color:  ;
  

  
`;

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  border: 1px solid black;
  background: black ;
  color: green
`;

const Caixaenviar = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  border: 1px solid #d4d4d4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 50%;
  margin: 0 auto;
  color: black
  
  
`;

const Divinicial = styled.div`
  text-align: center;
  background: green ;
`;

export {
  MensagemLeft,
  MensagemRight,
  MensagemStrong,
  MensagemDiv,
  BotaoEditar,
  BotaoExcluir,
  MensagemContainer,
  Div,
};

export default App;

