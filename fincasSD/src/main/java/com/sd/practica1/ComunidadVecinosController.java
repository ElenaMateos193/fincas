package com.sd.practica1;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.sd.practica1.model.*;

@Controller
public class ComunidadVecinosController {

	@Autowired
	ComunidadVecinosRepository comVecRepository;
	
	@Autowired
	PropiedadRepository propiedadRepository;
	
	@Autowired
	PropietarioRepository propietarioRepository;
	
	@Autowired
	DireccionRepository direccionRepository;
	
	@PostConstruct
	public void init(){
		ComunidadDeVecinos cv = new ComunidadDeVecinos("H12354687","Tulipan", 7, 28042, "1234567899874561230", "Móstoles");
		comVecRepository.save(cv);
		Propietario proprio1 = new Propietario("Manuel", "Ruiz Lopez", "42561379846M", 632541789, 52, "4578961231452879631");
		propietarioRepository.save(proprio1);
		Direccion dir = new Direccion("Manzano", 10, 2,'D');
		dir.setPropietarioDireccion(proprio1);
		direccionRepository.save(dir);
		Propiedad propiedad= new Propiedad("10", "4", 'D');
		propiedad.setPropietarioPropiedad(proprio1);
		propiedad.setComunidadPropiedad(cv);
		propiedadRepository.save(propiedad);
		
		Direccion dir2 = new Direccion("Manzano", 10, 2,'D');
		dir2.setPropietarioDireccion(proprio1);
		direccionRepository.save(dir2);
		Propiedad propiedad2= new Propiedad("15", "4", 'D');
		propiedad2.setPropietarioPropiedad(proprio1);
		propiedad2.setComunidadPropiedad(cv);
		propiedadRepository.save(propiedad2);

	}
}
