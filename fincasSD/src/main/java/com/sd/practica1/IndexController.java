package com.sd.practica1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	
	@Autowired
	private PropietarioRepository propietarioRepository;
	
	@Autowired
	private PropiedadRepository propiedadRepository;
	
	@Autowired
	private ComunidadVecinosRepository comunidadDeVecinosRepository;
	
	@RequestMapping(value={"/","/index"})
	public String index(Model model){
		String nombre = "Fincas Garcia";
		model.addAttribute("nombrePagina", nombre);
		return "index";
	}

}
