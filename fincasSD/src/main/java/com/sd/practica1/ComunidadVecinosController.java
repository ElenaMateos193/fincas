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
	CifRepository cifRepository;
	
	@Autowired
	PropiedadRepository propiedadRepository;
	
	@Autowired
	PropietarioRepository propietarioRepository;
	
	@Autowired
	DireccionRepository direccionRepository;
	
	@PostConstruct
	public void init(){
		ComunidadDeVecinos cv = new ComunidadDeVecinos("Tulipan", 7, 28042, "1234567899874561230", "Móstoles");
		comVecRepository.save(cv);
		Cif cif1 = new Cif(12365478);
		cif1.setComunidadCif(cv);
		cifRepository.save(cif1);
		Propietario proprio1 = new Propietario("Manuel", "Ruiz Lopez", "42561379846M", 632541789, 52, "4578961231452879631");
		propietarioRepository.save(proprio1);
		Direccion dir = new Direccion("Manzano", 10, 2,'D');
		dir.setPropietarioDireccion(proprio1);
		direccionRepository.save(dir);
		Propiedad propiedad= new Propiedad(10, 4, 'D');
		propiedad.setPropietarioPropiedad(proprio1);
		propiedad.setComunidadPropiedad(cv);
		propiedadRepository.save(propiedad);

	}
}
