# DECISIONS

## ADR-001: React + Vite + Tailwind para Fast-Track

Elegimos React con Vite porque ofrece una base ligera para una aplicación modular sin introducir complejidad de backend ni dependencias de estado global. El retorno sobre la complejidad es favorable: obtenemos componentes reutilizables, build rápido y separación clara entre interfaz, hooks y servicios.

Tailwind CSS sustituye Bootstrap para controlar mejor la estética LegalTech minimalista y reducir estilos globales difíciles de auditar. La interfaz prioriza contraste, botones grandes, estados de foco visibles y textos verificables para usuarios con baja capacitación técnica.

## ADR-002: Monolito Modular

La primera versión se mantiene como monolito frontend porque el producto todavía no necesita microservicios. La estructura separa `components`, `hooks` y `services` para que la lógica de trámites oficiales pueda extraerse en el futuro sin reescribir la UI.

Este enfoque evita pagar ahora el coste operativo de microservicios, despliegues distribuidos, observabilidad avanzada y contratos de red internos. Si más adelante aparecen módulos independientes, como pagos, auditoría o gestión de citas online, podrán separarse con menor fricción.

## ADR-003: Certificado Digital Local-First

Fast-Track no custodia certificados, no solicita contraseñas y no firma en nombre del usuario. La app solo muestra instrucciones y redirige a sedes oficiales auditadas.

La lógica relacionada con certificado digital vive en `src/services/digitalCertificate.js` como reglas verificables y checklist de preparación. No existe almacenamiento de PII, formularios sensibles ni envío de datos personales a servidores externos desde esta interfaz.
