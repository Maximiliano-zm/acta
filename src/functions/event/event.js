const EventStatus = {
  ERRORJSON: {
    code: 422,
    mensaje:
      "El JSON recibido está incompleto. Asegúrese de incluir todos los campos obligatorios: 'Device', 'TipoDocumento', 'itemName', 'idDocument' y 'Document'.",
  },
  ErrorCREATEPDF: {
    code: 400,
    mensaje:
      "Hubo un error procesando la solicitud en DOC365. Por favor, revise los datos enviados e intente nuevamente.",
  },
  ErrorInternalAUTH: {
    code: 500,
    mensaje:
      "Ocurrió un error interno durante la autenticación. Por favor, contacte al soporte técnico si el problema persiste.",
  },
  ErrorServidor: {
    code: 500,
    mensaje:
      "Se produjo un error interno del servidor. Por favor, contacte al soporte técnico si el problema persiste.",
  },
  ListaEspera: {
    code: 202,
    mensaje:
      "La solicitud fue recibida y está en lista de espera para ser procesada.",
  },
  SuccessCREATEPDF: {
    code: 200,
    mensaje: "El documento se creó exitosamente.",
  },
};

export default EventStatus;
