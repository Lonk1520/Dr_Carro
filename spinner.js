var opt_b = new Array("-", "Versa");
var opt_c = new Array("-", "March");
var opt_d = new Array("-", "Sentra");
var opt_e = new Array("-", "Maxima");
var opt_f = new Array("-", "Note");

function cambia(){
	var cosa;
	//Se toma el vamor de la "cosa seleccionada"	
	cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].value;
	//se chequea si la "cosa" esta definida
	if(cosa!=0){
		//selecionamos las cosas Correctas
		mis_opts=eval("opt_" + cosa);
		//se calcula el numero de cosas
		num_opts=mis_opts.length;
		//marco el numero de opt en el select
		document.formulario1.opt.length = num_opts;
		//para cada opt del array, la pongo en el select
		for(i=0; i<num_opts; i++){
			document.formulario1.opt.options[i].value=mis_opts[i];
			document.formulario1.opt.options[i].text=mis_opts[i];
		}
		}else{
			//si no habia ninguna opt seleccionada, elimino las cosas del select
			document.formulario1.opt.length = 1;
			//ponemos un guion en la unica opt que he dejado
			document.formulario1.opt.options[0].value="-";
			document.formulario1.opt.options[0].text="-";
		}
			//hacer un reset de las opts
			document.formulario1.opt.options[0].selected = true;
					
}
