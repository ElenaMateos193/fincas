package com.sd.practica1;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sd.practica1.model.Direccion;
import com.sd.practica1.model.Propietario;

public interface DireccionRepository extends JpaRepository<Direccion, Long>{
	
	Direccion findBypropietarioDireccion(Propietario prop);

}
