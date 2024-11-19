import Event from "../event/event.js";
import puppeteer from "puppeteer";
// "main": "src/{index.js,functions/*.js}"
const FnCreateDocument = async (ContentMap) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Cargar el contenido HTML dinámico
    await page.setContent(ContentMap);

    // Generar el PDF y obtenerlo como un buffer
    const pdfBuffer = await page.pdf({
      format: "LETTER",
      printBackground: true,
      margin: {
        top: "10px",
        bottom: "10px",
        left: "10px",
        right: "10px",
      },
    });

    // Convertir el buffer del PDF a Base64
    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");
    await browser.close();

    // Retornar el PDF en Base64
    return {
      pdfBase64,
    };
  } catch (error) {
    console.error("Error al generar el PDF:", error);
    return {
      success: false,
      error: "Error al generar el PDF.",
    };
  }
};

const Document365 = async (json) => {
  const respuesta = await FnCreateDocument(json);
  return respuesta;
};

export default Document365;
