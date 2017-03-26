package com.sd.practica1;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sd.practica1.model.ComunidadDeVecinos;
import com.sd.practica1.model.Propiedad;

public interface ComunidadVecinosRepository extends JpaRepository<ComunidadDeVecinos, Long>{
	
	ComunidadDeVecinos findBycifComunidadVecinos(String cifComunidadVecinos);
	List<ComunidadDeVecinos> findDistinctBypropiedadComunidadVecinos_propietarioPropiedad_dniPropietario(String dniPropietario);
	
}
