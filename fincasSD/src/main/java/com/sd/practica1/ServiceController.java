package com.sd.practica1;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.sd.practica1.model.ComunidadDeVecinos;
import com.sd.practica1.model.Propiedad;
import com.sd.practica1.model.Propietario;

@Controller
public class ServiceController {
	
	@Autowired
	private PropietarioRepository propietarioRepository;
	
	@Autowired
	private PropiedadRepository propiedadRepository;
	
	@Autowired
	private ComunidadVecinosRepository comunidadDeVecinosRepository;
	
	
	 
	@RequestMapping(value="/search")
	public String postSearch(Model model, @RequestParam("attribute") String attribute, @RequestParam("searchedPropietary") String consult){
		List<Propietario> prop= new LinkedList<Propietario>();
		if(attribute.toString().equals("Portal")){
			String[] s= consult.split(" ");
			List<Propiedad> l= propiedadRepository.findByportalPropiedad(s[0].toString());
			for(Propiedad p:l){
				prop.add(p.getPropietarioPropiedad());
			}
			model.addAttribute("propietary",prop);
		}else if(attribute.toString().equals("Portal y planta")){
			String[] s= consult.split(", ");
			List<Propiedad> l= propiedadRepository.findByportalPropiedadAndPlantaPropiedad(s[0].toString(),s[1].toString());
			for(Propiedad p:l){
				prop.add(p.getPropietarioPropiedad());
			}
			model.addAttribute("propietary",prop);
			
		}else if(attribute.toString().equals("Apellidos")){
			prop= propietarioRepository.findByapellidosPropietarios(consult.toString());
			model.addAttribute("propietary",prop);	
			
		}else if(attribute.toString().equals("DNI")){
			model.addAttribute("propietary", propietarioRepository.findBydniPropietario(consult.toString()));
		}else{
			String[] s= consult.split(" ");
			ComunidadDeVecinos v=comunidadDeVecinosRepository.findBycifComunidadVecinos(s[0]);
			if(v!=null){
				List<Propiedad> l= v.getPropiedadComunidadVecinos();
				for(Propiedad p:l){
					prop.add(p.getPropietarioPropiedad());
				}
			}
			model.addAttribute("propietary",prop);
		}
			
			return "services";
	}
	
	@RequestMapping(value="/verConsulta/{prop.dniPropietario}")
	public String verConsultaController(Model model, @PathVariable ("prop.dniPropietario") String id){
		model.addAttribute("propietary", propietarioRepository.findBydniPropietario(id));
		Propietario pAux= propietarioRepository.findBydniPropietario(id);
		List<Propiedad> l= pAux.getPropiedadesPropietario();
		List<ComunidadDeVecinos> c= new LinkedList<ComunidadDeVecinos>();
		if(!l.isEmpty()){
			for(Propiedad prop: l){
				if(!c.contains(prop.getComunidadPropiedad()))
					c.add(prop.getComunidadPropiedad());
			}
			model.addAttribute("comunities",c);
			model.addAttribute("dniUser",id);
		}
		return "services";
	}
	@RequestMapping(value="/verPropiedades/{com.cifComunidad}/{dniUser}")
	public String verConsultaPropiedadController(Model model,@PathVariable ("com.cifComunidad") String cif, @PathVariable ("dniUser") String dni){
		model.addAttribute("propietary", propietarioRepository.findBydniPropietario(dni));

		Propietario pAux= propietarioRepository.findBydniPropietario(dni);
		List<Propiedad> l= pAux.getPropiedadesPropietario();
		List<ComunidadDeVecinos> c= new LinkedList<ComunidadDeVecinos>();
		for(Propiedad prop: l){
			c.add(prop.getComunidadPropiedad());
		}
		model.addAttribute("propietary", propietarioRepository.findBydniPropietario(dni));
		if(!l.isEmpty()){
			model.addAttribute("comunities",c);
			model.addAttribute("dniUser",dni);
		}
		
		ComunidadDeVecinos com= comunidadDeVecinosRepository.findBycifComunidadVecinos(cif);
		List<Propiedad> p=propiedadRepository.findDistinctBycomunidadPropiedadAndPropietarioPropiedad_dniPropietario(com, dni);
		model.addAttribute("propietary", propietarioRepository.findBydniPropietario(dni));
		if(!p.isEmpty()){
			model.addAttribute("propertiescom",p);
		}
		return "services";
	}
	@RequestMapping(value="/service-properties/{com.cifComunidad}/{dniUser}/{prop.portalPropiedad}/{prop.plantaPropiedad}/{prop.letraPropiedad}")
	public String modificarPropiedadController(Model model,@PathVariable ("com.cifComunidad") String cif,@PathVariable ("dniUser") String dniUser, @PathVariable ("prop.portalPropiedad") String portal, @PathVariable ("prop.plantaPropiedad") String planta, @PathVariable ("prop.letraPropiedad") char letra){
		model.addAttribute("propietary", propietarioRepository.findBydniPropietario(dniUser));
		Propiedad p= propiedadRepository.findByportalPropiedadAndPlantaPropiedadAndLetraPropiedadAndComunidadPropiedad_cifComunidadVecinos(portal, planta, letra, cif);
		
		model.addAttribute("propertie", p);

		return "services-properties";
	}
	
	@RequestMapping(value="/modifyComunidad", method=RequestMethod.POST)
	public String modificarComunidad(Model model, @RequestParam("cif") String cif, @RequestParam("poblacion") String poblacion, @RequestParam("calle") String calle, @RequestParam("numero") int numero, 
			@RequestParam("codigoPostal") int codigoPostal, @RequestParam("numCuenta") String numCuenta){
		System.out.println(poblacion);
		System.out.println(calle);
		System.out.println(numero);
		System.out.println(codigoPostal);
		System.out.println(numCuenta);
		ComunidadDeVecinos cv =comunidadDeVecinosRepository.findBycifComunidadVecinos(cif);
		if (poblacion!=cv.getPoblacionComunidadVecinos()){
			cv.setPoblacionComunidadVecinos(poblacion);
			comunidadDeVecinosRepository.save(cv);
		}
		if(calle!=cv.getCalleComunidadVecinos()){
			cv.setCalleComunidadVecinos(calle);
			comunidadDeVecinosRepository.save(cv);
		}
		if(numero!=cv.getNumeroComunidadVecinos()){
			cv.setNumeroComunidadVecinos(numero);
			comunidadDeVecinosRepository.save(cv);
		}
		if(codigoPostal!=cv.getCpComunidadVecinos()){
			cv.setCpComunidadVecinos(codigoPostal);
			comunidadDeVecinosRepository.save(cv);
		}
		if(numCuenta!=cv.getNumeroCuentaComunidadVecinos()){
			cv.setNumeroCuentaComunidadVecinos(numCuenta);
			comunidadDeVecinosRepository.save(cv);
		}
		return "index";
	}
}
