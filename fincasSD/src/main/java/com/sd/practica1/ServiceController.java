package com.sd.practica1;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
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
			List<ComunidadDeVecinos> v=comunidadDeVecinosRepository.findBycifComunidadVecinos(s[0]);
			if(v!=null){
				List<Propiedad> l= v.get(0).getPropiedadComunidadVecinos();
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
		List<ComunidadDeVecinos> l= comunidadDeVecinosRepository.findDistinctBypropiedadComunidadVecinos_propietarioPropiedad_dniPropietario(id);
		
		model.addAttribute("propietary", propietarioRepository.findBydniPropietario(id));
		if(!l.isEmpty()){
			model.addAttribute("comunities",l);
		}
		return "services";
	}
	@RequestMapping(value="/verConsulta/{prop.dniPropietario}/verPropiedades/{com.cifComunidad}")
	public String verConsultaPropiedadController(Model model,@PathVariable ("com.cifComunidad") String cif, @PathVariable ("prop.dniPropietario") String id){
		List<ComunidadDeVecinos> com= comunidadDeVecinosRepository.findBycifComunidadVecinos(cif);
		System.out.println("OK");
		List<Propiedad> p=propiedadRepository.findDistinctBycomunidadPropiedadAndPropietarioPropiedad_dniPropietario(com.get(0), id);
		model.addAttribute("propietary", propietarioRepository.findBydniPropietario(id));
		if(!p.isEmpty()){
			model.addAttribute("propertiescom",p);
		}
		return "services";
	}
}
