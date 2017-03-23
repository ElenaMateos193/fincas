package com.sd.practica1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.sd.practica1.model.*;

@Controller
public class IndexController {
	
	@Autowired
	private PropietarioRepository propietarioRepository;
	
	@Autowired
	private PropiedadRepository propiedadRepository;
	
	@Autowired
	private ComunidadVecinosRepository comunidadDeVecinosRepository;
	
	@Autowired
	private CifRepository cifRepository;
	
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
	
	@RequestMapping(value="/uploadComunidad", method=RequestMethod.POST)
	public String addComunidad(Model model, @RequestParam("cif") String cif, @RequestParam("poblacion") String poblacion, @RequestParam("calle") String calle, @RequestParam("numero") int numero, @RequestParam("codigoPostal") int codigoPostal, @RequestParam("numCuenta") String numCuenta){
		ComunidadDeVecinos cv = new ComunidadDeVecinos(calle, numero, codigoPostal, numCuenta, poblacion);
		comunidadDeVecinosRepository.save(cv);
		Cif cif1 = new Cif(cif);
		cv.setCifComunidadVecinos(cif1);
		cifRepository.save(cif1);
		model.addAttribute("Comunidad", cv);
		return "";
	}
	
}
