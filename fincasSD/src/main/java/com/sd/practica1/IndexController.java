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
	private DireccionRepository direccionRepository;
	
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
	
	@RequestMapping(value="/mostrar")
	public String mostrarComunidad(Model model){
		return "mostrar";
	}
	
	@RequestMapping(value="/aniadir")
	public String aniadirController(Model model){
		
		return "aniadir";
	}
	
	@RequestMapping(value="/uploadComunidad", method=RequestMethod.POST)
	public String addComunidad(Model model, @RequestParam("cif") String cif, @RequestParam("poblacion") String poblacion, @RequestParam("calle") String calle, @RequestParam("numero") int numero, 
			@RequestParam("codigoPostal") int codigoPostal, @RequestParam("numCuenta") String numCuenta, @RequestParam("portalPropiedad") String portalPropiedad, @RequestParam("planta") String planta, 
			@RequestParam("letra") char letra, @RequestParam("nombreProp") String nombreProp, @RequestParam("apellidosProp") String apellidosProp, @RequestParam("dni") String dni, 
			@RequestParam("telf") int telefonoProp, @RequestParam("calleProp") String calleProp, @RequestParam("portalProp") int portalProp, @RequestParam("plantaProp") int plantaProp, 
			@RequestParam("letraProp") char letraProp, @RequestParam("numCuentaProp") String numCuentaProp, @RequestParam("porcentaje") double porcentaje){
		ComunidadDeVecinos cv = new ComunidadDeVecinos(calle, numero, codigoPostal, numCuenta, poblacion);
		comunidadDeVecinosRepository.save(cv);
		Cif cif1 = new Cif(cif);
		cv.setCifComunidadVecinos(cif1);
		cifRepository.save(cif1);
		Propietario p1 = new Propietario(nombreProp, apellidosProp, dni, telefonoProp, porcentaje, numCuentaProp);
		propietarioRepository.save(p1);
		Direccion dir = new Direccion(calleProp, portalProp, plantaProp, letraProp);
		p1.setDireccionPropietario(dir);
		direccionRepository.save(dir);
		Propiedad pd1= new Propiedad(portalPropiedad, planta, letra);
		p1.addPropiedad(pd1);
		cv.addPropiedad(pd1);
		propiedadRepository.save(pd1);
		model.addAttribute("Comunidad", cv);
		return "mostrar";
	}
	
}
