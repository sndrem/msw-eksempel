import {http, HttpResponse, PathParams} from "msw";
import {Julesang} from "../App";

export const handlers = [
  // Intercept "GET requesten til mittapi.no/julesanger
  http.get<PathParams, string, Julesang[]>(
    "https://mittapi.no/julesanger",
    () => {
      // ...og responder med en json payload som matcher forventet   // resultat fra API'et
      return HttpResponse.json([
        {
          id: "123",
          navn: "Deilig er jorden",
        },
        {
          id: "321",
          navn: "På låven sitter nissen",
        },
        {
          id: "765",
          navn: "Nordnorsk julesalme",
        },
      ]);
    }
  ),
];
