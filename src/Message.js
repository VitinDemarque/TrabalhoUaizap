import React, { useState } from 'react';
import {
  MensagemStrong,
  BotaoEditar,
  BotaoExcluir,
  MensagemContainer,
  Div,
} from './App.js';

function Message({ mensagem, onEditar, onExcluir }) {
  const [novoConteudo, setNovoConteudo] = useState(mensagem.conteudo);
  const [modoEdicao, setModoEdicao] = useState(false);

  const handleEditarClick = () => {
    setModoEdicao(true);
  };

  const handleSalvarClick = () => {
    onEditar(mensagem.id, novoConteudo);
    setModoEdicao(false);
  };

  const handleCancelarClick = () => {
    setModoEdicao(false);
    setNovoConteudo(mensagem.conteudo);
  };

  const mensagemClass = mensagem.remetente === 'eu' ? 'mensagem-right' : 'mensagem-left';

  return (
    <MensagemContainer className={mensagemClass}>
      {mensagem.remetente !== 'eu' && (
        <div>
          <MensagemStrong>{mensagem.remetente}:</MensagemStrong>
        </div>
      )}
      {modoEdicao ? (
        <div>
          <input
            type="text"
            value={novoConteudo}
            onChange={(e) => setNovoConteudo(e.target.value)}
          />
          <BotaoEditar onClick={handleSalvarClick}>Salvar</BotaoEditar>
          <BotaoExcluir onClick={handleCancelarClick}>Cancelar</BotaoExcluir>
        </div>
      ) : (
        <span>{mensagem.conteudo}</span>
      )}
      {mensagem.remetente === 'Eu' && (
        <div>
          <BotaoEditar onClick={handleEditarClick}>Editar</BotaoEditar>
        </div>
      )}
      <BotaoExcluir onClick={onExcluir}>Excluir</BotaoExcluir>
    </MensagemContainer>
  );
}

export default Message;
