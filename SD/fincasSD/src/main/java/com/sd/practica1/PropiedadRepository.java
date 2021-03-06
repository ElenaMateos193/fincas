package com.sd.practica1;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sd.practica1.model.ComunidadDeVecinos;
import com.sd.practica1.model.Propiedad;

public interface PropiedadRepository extends JpaRepository<Propiedad, Long>{
	List<Propiedad> findByportalPropiedad(String portalPropiedad);
	List<Propiedad> findByportalPropiedadAndPlantaPropiedad(String portalPropiedad, String plantaPropiedad);
	List<Propiedad> findDistinctBycomunidadPropiedadAndPropietarioPropiedad_dniPropietario(ComunidadDeVecinos comunidadPropiedad,String dniPropietario);
	Propiedad findByportalPropiedadAndPlantaPropiedadAndLetraPropiedadAndComunidadPropiedad_cifComunidadVecinos(String portalPropiedad, String plantaPropiedad, char letraPropiedad, String cifComunidadVecinos);
}