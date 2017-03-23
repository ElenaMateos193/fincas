package com.sd.practica1;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sd.practica1.model.Propietario;

public interface PropietarioRepository extends JpaRepository<Propietario, Long>{
	List<Propietario> findByapellidosPropietarios(String apellidosPropietarios);
	Propietario findBydniPropietario(String dniPropietario);

}
