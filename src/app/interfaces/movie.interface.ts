export interface Movie {
    title:string,
    genres?:string[],
    page:string,
    image:string,
    studioImage?:string[],
    release:string,
    critic?:number,
    overview:string,
    tagline?:string
}