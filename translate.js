// translate.js
module.exports = {
    translateToSpanish: (data) => {
      // Implementa la lógica de traducción aquí
      // Puedes usar un mapeo o una biblioteca de traducción

      const translatedData = {
        ano_nacimiento: data.birth_year,
        color_ojos: data.eye_color,
        peliculas:data.films,
        genero:data.gender,
        colo_de_cabello:data.hair_color,
        altura:data.height,
        mundo_natal:data.homeworld,
        masa:data.mass,
        nombre:data.name,
        color_skin:data.skin_color,
        creado:data.created,
        editado:data.edited,
        especies:data.species,
        naves_estelares:data.starships,
        link:data.url,
        vehiculos:data.vehicles,
      };
    

      return translatedData;
    },
  };
  