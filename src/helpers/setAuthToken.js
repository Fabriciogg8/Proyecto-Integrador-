export const setAuthToken = token => {
  if (token) {
    // Si hay un token, configurar el encabezado 'Authorization' en la petición
    const headers = {
      Authorization: `Bearer ${token}`,
    }
    return {
      headers: headers,
    }
  } else {
    // Si no hay token, retorna un objeto vacío para usar los encabezados por defecto
    return {}
  }
}
