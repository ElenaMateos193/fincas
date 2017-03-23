package com.sd.practica1;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.sd.practica1.model.Cif;
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
	
	@Autowired
	private CifRepository cifRepository;
	
	 
	@RequestMapping(value="/search")
	public String postSearch(Model model, @RequestParam("attribute") String attribute, @RequestParam("searchedPropietary") String consult){
		List<Propietario> prop= new LinkedList();
		if(attribute.toString().equals("Portal")){
			List<Propiedad> l= propiedadRepository.findByportalPropiedad(consult.toString());
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
			String s= consult.substring(1);
			Cif c= cifRepository.findBynumerosCif(s);
			List<Propiedad> l= comunidadDeVecinosRepository.findBycifComunidadVecinos(c).getPropiedadComunidadVecinos();
			for(Propiedad p:l){
				prop.add(p.getPropietarioPropiedad());
			}
			model.addAttribute("propietary",prop);
		}
			
			return "services";
	}
}
