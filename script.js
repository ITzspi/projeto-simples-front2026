// URL da API Back-end
// No ambiente local, conecta em http://localhost:5000
// Em produção (Vercel), conecta no seu serviço no Render
const BACKEND_URL = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  ? "http://localhost:5000"
  : "https://projeto-simples-back2026.onrender.com"; // <- Quando criar seu serviço no Render, atualize aqui com a sua URL!

async function chamarAPI() {
  const elementoResposta = document.getElementById("resposta");
  elementoResposta.textContent = "Carregando resposta da API...";

  try {
    const resposta = await fetch(BACKEND_URL);
    if (!resposta.ok) {
      throw new Error(`HTTP ${resposta.status} - ${resposta.statusText}`);
    }
    const dados = await resposta.json();
    elementoResposta.textContent = dados.message;
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    elementoResposta.textContent = `Aviso: Não foi possível conectar ao back-end (${BACKEND_URL}). Se o serviço no Render estiver hibernando (plano gratuito), aguarde cerca de 1 minuto e clique novamente. Detalhe: ${erro.message}`;
  }
}
