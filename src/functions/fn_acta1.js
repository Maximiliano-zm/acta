import { app } from "@azure/functions";
import Controller from "./controller/controller.js";

app.http("GeneratePdf", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const json = request.query.get("json") || (await request.json());
      const respuesta = await Controller(json);
      console.log(respuesta);
      if (!respuesta) {
      } else {
        return { jsonBody: respuesta };
      }
    } catch (error) {
      console.error("fnApitest error :", error);
      return { status: 500, jsonBody: { error: "Error interno del servidor" } };
    }
  },
});
export default app;
