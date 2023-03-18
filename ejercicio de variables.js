var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log("Resultado de test(): " + test());

var nombre = "Daniel";
function fun(){
    var apellido = "Santacoloma";
    console.log(this.apellido);
}
fun();