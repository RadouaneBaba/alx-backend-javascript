export default function guardrail(mathFunction) {
  try {
    return [
      mathFunction(),
      'Guardrail was processed',
    ];
  } catch (err) {
    return [`Error: ${err.message}`, 'Guardrail was processed'];
  }
}
