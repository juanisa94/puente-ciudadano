export const certificateSecurityRules = [
  "El certificado digital permanece en el equipo del usuario.",
  "La web no solicita contraseñas, PIN ni archivos de certificado.",
  "La firma, si existe, ocurre dentro de la sede oficial correspondiente.",
  "No se envían datos personales a servidores externos desde esta interfaz.",
];

export function getCertificateReadinessChecklist() {
  return [
    "Usa el navegador donde tienes instalado tu certificado.",
    "Comprueba que estás en una URL oficial antes de identificarte.",
    "Revisa los datos antes de confirmar o firmar.",
    "Guarda el justificante emitido por la sede oficial.",
  ];
}

export function isOfficialUrl(url) {
  try {
    const hostname = new URL(url).hostname;

    return (
      hostname.endsWith(".gob.es") ||
      hostname.endsWith(".agenciatributaria.gob.es") ||
      hostname.endsWith(".seg-social.gob.es") ||
      hostname.endsWith(".us.es")
    );
  } catch {
    return false;
  }
}
