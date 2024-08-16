

export class Todo 
{
    sno :number 
    Tittle :string
    desc :string
    isactive :boolean

    constructor ( sno:number ,Tittle :string ,desc:string ,isactive:boolean)
    {
        this.sno = sno,
        this.Tittle =Tittle,
        this.desc = desc,
        this.isactive = isactive
    }
}