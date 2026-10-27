async function chamarAPI() {
  const resposta = await fetch("https://projeto-simples-back2026-ulpi.onrender.com")
  const dados = await resposta.json()
  document.getElementById("resposta").textContent = dados.message
}
