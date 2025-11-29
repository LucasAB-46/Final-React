// src/services/orders.js

// Asegurate de que este endpoint coincida con el recurso real de MockAPI.
// Ejemplo: si en MockAPI el recurso se llama "orders", está bien así.
// Si el recurso se llama distinto (ej. "ordenes" o "ordersReact"),
// CAMBIÁ SOLO ESTA LÍNEA:
const ORDERS_URL = "https://6917d26821a96359486dfb22.mockapi.io/orders";

export const createOrder = async (orderData) => {
  console.log("[ORDERS] Enviando orden a:", ORDERS_URL);
  console.log("[ORDERS] Payload:", orderData);

  try {
    const res = await fetch(ORDERS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    const rawText = await res.text(); // leemos como texto para debug
    console.log("[ORDERS] HTTP status:", res.status);
    console.log("[ORDERS] Respuesta RAW:", rawText);

    if (!res.ok) {
      throw new Error(
        `No se pudo crear la orden en MockAPI. Status: ${res.status} - ${rawText}`
      );
    }

    let result;
    try {
      result = JSON.parse(rawText);
    } catch (err) {
      console.error("[ORDERS] Error parseando JSON:", err);
      throw new Error("La respuesta de MockAPI no es JSON válido.");
    }

    console.log("[ORDERS] Orden creada OK:", result);
    return result; // { id, ...orderData }
  } catch (error) {
    console.error("[ORDERS] Error en createOrder:", error);
    throw error;
  }
};
