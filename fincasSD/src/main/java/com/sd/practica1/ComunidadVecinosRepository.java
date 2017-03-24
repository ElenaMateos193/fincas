package com.sd.practica1;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sd.practica1.model.Cif;
import com.sd.practica1.model.ComunidadDeVecinos;

public interface ComunidadVecinosRepository extends JpaRepository<ComunidadDeVecinos, Long>{
	
	//@Query(value="SELECT c FROM ComunidadVecinos WHERE c.cifComunidadVecinos.numerosCif=?#{[0]}", nativeQuery = true)
	ComunidadDeVecinos findBycifComunidadVecinos_numerosCif(String numerosCif);
	List<ComunidadDeVecinos> findDistinctBypropiedadComunidadVecinos_propietarioPropiedad_dniPropietario(String dniPropietario);
}
