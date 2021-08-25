export class Proyecto {

    public titulo: string;
    public descripcion: string;
    public tecnologias: string;
    public img:string;
    public link_web: string;
    public link_git: string;

    constructor(titulo: string, descripcion: string, tecnologias: string, img:string, link_web: string, link_git: string){

        this.titulo=titulo;
        this.descripcion=descripcion;
        this.tecnologias=tecnologias;
        this.img=img;
        this.link_web=link_web;
        this.link_git=link_git;
    }
}
