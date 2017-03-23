package com.sd.practica1;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
		List<Propietario> prop= new LinkedList();
		if(attribute=="Portal"){
			List l= propiedadRepository.findByportalPropiedad(consult);
			//for()
			model.addAttribute("propietary");
		}else if(attribute=="Portal y planta"){
			
		}else if(attribute=="Apellidos"){
			
		}else if(attribute=="DNI"){
			
		}else{
			
		}
		/**Post currPost = postRepository.findBypostTitle(consultedPost);
		User u= userRepository.findByusername(consultedPost);
			loadNavbar(model);
			model.addAttribute("Post",currPost);
			model.addAttribute("User",u);**/
			
			return "services";
	}
}
