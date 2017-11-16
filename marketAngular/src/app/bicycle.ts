export class Bicycle {
    constructor(
        public title: String = "",
        public description: String = "",
        public price: Number = 0,
        public location: String = "",
        // public image: { data: Buffer, contentType: String} = {data : null, contentType : "image/png"},
        // public image: File = null,
        public _creator: String = ""
    ){}
}
