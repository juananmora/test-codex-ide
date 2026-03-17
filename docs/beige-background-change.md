# Cambio visual: fondo beige claro y superficies coherentes

## Resumen
Se ajustó la home para que la experiencia visual sea más consistente y cálida: el fondo global ahora usa un beige claro y las superficies visibles que antes quedaban en blanco se alinean con esa misma paleta. El resultado evita el contraste de "pantalla blanca dentro de pantalla beige" y mantiene una lectura limpia.

## Archivo afectado
- `styles/globals.css`
- `components/Hero.tsx`
- `components/CodeExample.tsx`
- `components/Footer.tsx`

## Intención del cambio
- Cambiar el color de fondo global para que toda la página use un tono beige claro.
- Eliminar las superficies blancas más visibles de la home para que el hero, el bloque de ejemplo y el footer se sientan parte de la misma paleta.
- Mantener un contraste legible con el texto y el resto de los componentes.
- Limitar el cambio a estilos y presentación, sin tocar la lógica de la aplicación.

## Verificación local
1. Ejecuta `npm run dev`.
2. Abre la aplicación en el navegador.
3. Confirma que el fondo general de la página se vea en beige claro.
4. Revisa que ya no destaquen paneles blancos en el hero, el bloque de ejemplo ni el footer.
5. Verifica que el texto y los controles sigan siendo legibles sobre el nuevo fondo.
