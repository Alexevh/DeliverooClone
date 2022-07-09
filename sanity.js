import  sanityClient  from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";


//Para el backend estoy usando sanity, que es un CMS, una opcion barata para este tipo de contenido

const client =  sanityClient({
    projectId: "ptnbag52",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"

});

const builder = imageUrlBuilder(client);

export const urlFor= (source)=> builder.image(source);

export default client;