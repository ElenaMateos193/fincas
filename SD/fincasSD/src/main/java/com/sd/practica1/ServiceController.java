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
import com.sd.practica1.model.Direccion;
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
	private DireccionRepository direccionRepository;
	
	
	 
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
					if(!prop.contains(p.getPropietarioPropiedad())){
						prop.add(p.getPropietarioPropiedad());
					}
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
	
	@RequestMapping(value="/modifyComunidad/{com.cifComunidad}", method=RequestMethod.POST)
	public String modificarComunidad(Model model, @PathVariable("com.cifComunidad") String cifC, @RequestParam("cif") String cif, @RequestParam("poblacion") String poblacion, @RequestParam("calle") String calle, @RequestParam("numero") int numero, 
			@RequestParam("codigoPostal") int codigoPostal, @RequestParam("numCuenta") String numCuenta){
		ComunidadDeVecinos cv =comunidadDeVecinosRepository.findBycifComunidadVecinos(cifC);
		if(cif!=cv.getCifComunidadVecinos()){
			cv.setCifComunidadVecinos(cif);
			comunidadDeVecinosRepository.save(cv);
		}
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
	
	
	@RequestMapping(value="/modifyPropiedad/{com.cifComunidad}/{dniUser}/{prop.portalPropiedad}/{prop.plantaPropiedad}/{prop.letraPropiedad}", method=RequestMethod.POST)
	public String modificarPropiedad(Model model, @PathVariable ("com.cifComunidad") String cif,@PathVariable ("dniUser") String dniUser, @PathVariable ("numPropiedad") String portal, @PathVariable ("letra") char letra,
			@RequestParam("planta") String plantaP, 
			@RequestParam("letra") char letraP, @RequestParam("nombre") String nombreProp, @RequestParam("apellidos") String apellidosProp, @RequestParam("dni") String dni, 
			@RequestParam("telf") int telefonoProp, @RequestParam("calleProp") String calleProp, @RequestParam("portalProp") int portalProp, @RequestParam("plantaProp") int plantaProp, 
			@RequestParam("letraProp") char letraProp, @RequestParam("numCuentaProp") String numCuentaProp, @RequestParam("porcentaje") double porcentaje){
		Propiedad p= propiedadRepository.findByportalPropiedadAndPlantaPropiedadAndLetraPropiedadAndComunidadPropiedad_cifComunidadVecinos(portal, plantaP, letra, cif);
		Propietario prop = propietarioRepository.findBydniPropietario(dniUser);
		Direccion dirP = direccionRepository.findBypropietarioDireccion(prop);
		if (plantaP!=p.getPlantaPropiedad()){
			p.setPlantaPropiedad(plantaP);
			propiedadRepository.save(p);
		}
		if(letraP!=p.getLetraPropiedad()){
			p.setLetraPropiedad(letraP);
			propiedadRepository.save(p);		
		}
		if(nombreProp!= prop.getNombrePropietario()){
			prop.setNombrePropietario(nombreProp);
			propietarioRepository.save(prop);
		}
		if(apellidosProp!=prop.getApellidosPropietarios()){
			prop.setApellidosPropietarios(apellidosProp);
			propietarioRepository.save(prop);
		}
		if(dni!=prop.getDniPropietario()){
			prop.setDniPropietario(dni);
			propietarioRepository.save(prop);
		}
		if(telefonoProp!=prop.getTelefonoPropietario()){
			prop.setTelefonoPropietario(telefonoProp);
			propietarioRepository.save(prop);
		}
		if(calleProp!=dirP.getCalleDireccion()){
			dirP.setCalleDireccion(calleProp);
			direccionRepository.save(dirP);
		}
		if(portalProp!=dirP.getPortalDireccion()){
			dirP.setPortalDireccion(portalProp);
			direccionRepository.save(dirP);
		}
		if(letraProp!=dirP.getLetraDireccion()){
			dirP.setLetraDireccion(letraProp);
			direccionRepository.save(dirP);
		}
		if(plantaProp!=dirP.getPlantaDireccion()){
			dirP.setPlantaDireccion(plantaProp);
			direccionRepository.save(dirP);
		}
		if(numCuentaProp!=prop.getNumeroCuentaPropietario()){
			prop.setNumeroCuentaPropietario(numCuentaProp);
			propietarioRepository.save(prop);
		}
		if(porcentaje!=prop.getPorcentajeParticipacionPropietario()){
			prop.setPorcentajeParticipacionPropietario(porcentaje);
			propietarioRepository.save(prop);
		}
		return "index";
	}
	@RequestMapping(value="/verTodo")
	public String seeAll(Model model){
		model.addAttribute("comunities", comunidadDeVecinosRepository.findAll());
		model.addAttribute("properties", propiedadRepository.findAll());
		model.addAttribute("propietaries", propietarioRepository.findAll());
		return "seeAll";
	}
}
