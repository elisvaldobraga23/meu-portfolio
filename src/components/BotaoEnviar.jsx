export function BotaoEnviar({ enviado }) {
  return (
    <button
      type="submit"
      style={{ opacity: enviado ? 0.7 : 1 }}
    >
      {enviado ? "Mensagem enviada ✓" : "Enviar mensagem ✦"}
    </button>
  );
}