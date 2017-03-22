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
	
	@RequestMapping(value="/services")
	public String serviceController(Model model){
		
		return "services";
	}
	@RequestMapping(value="/nowMore")
	public String nowMoreController(Model model){
		
		return "nowMore";
	}
	@RequestMapping(value="/services-properties")
	public String propertiesController(Model model){
		
		return "services-properties";
	}
	
	@RequestMapping(value="/aniadir")
	public String aniadirController(Model model){
		
		return "aniadir";
	}

}
