export const officialProcedures = [
  {
    id: "renta-online",
    title: "Renta Online",
    description:
      "Accede a tus datos fiscales y revisa los pasos disponibles para preparar o consultar tu declaración en sede oficial.",
    price: {
      type: "fixed",
      amount: "19 €",
    },
    estimatedTime: "10-20 min",
    organization: "Agencia Tributaria",
    officialUrl:
      "https://www1.agenciatributaria.gob.es/wlpl/DASR-CORE/AccesoDR2025RVlt",
    confidenceLevel: 5,
    icon: "document",
    securityNotice:
      "Vas a ser redirigido a la Sede Oficial de la Agencia Tributaria. Asegúrate de tener tu Certificado Digital listo en este navegador.",
  },
  {
    id: "becas-publicas",
    title: "Becas Públicas",
    description:
      "Te guiamos en la solicitud online de becas oficiales, siempre que la convocatoria permita presentación telemática.",
    price: {
      type: "fixed",
      amount: "29 €",
    },
    estimatedTime: "20-40 min",
    organization: "Ministerio de Educación",
    officialUrl:
      "https://sede.educacion.gob.es/sede/login/inicio.jjsp?idConvocatoria=2482",
    confidenceLevel: 5,
    icon: "grant",
    securityNotice:
      "Vas a ser redirigido a la Sede Oficial del Ministerio de Educación. Asegúrate de tener tu Certificado Digital listo en este navegador.",
  },
  {
    id: "matriculacion-universitaria",
    title: "Matriculación Universitaria",
    description:
      "Acompañamiento para completar matrículas académicas en plataformas online compatibles del centro o universidad.",
    price: {
      type: "fixed",
      amount: "29 €",
    },
    estimatedTime: "20-45 min",
    organization: "Universidad de Sevilla",
    officialUrl: "https://auto-matricula.us.es/",
    confidenceLevel: 4,
    icon: "university",
    securityNotice:
      "Vas a ser redirigido al portal oficial de la Universidad de Sevilla. Asegúrate de tener tus credenciales universitarias o Certificado Digital listo en este navegador.",
  },
];

export function getOfficialProcedures() {
  return officialProcedures;
}
