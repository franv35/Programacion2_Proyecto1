drop database ejemplo1;
create database ejemplo1;
use ejemplo1;

drop table usuarios;
create table usuarios(
ID int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombre VARCHAR(25) NOT NULL,
apellido VARCHAR(25) NOT NULL,
email VARCHAR(40) NOT NULL,
password VARCHAR(40) NOT NULL,
telefono VARCHAR(40) NOT NULL
);

create table turnos(
id_turnos int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombreUsuario VARCHAR(25) NOT NULL,
especialidad VARCHAR(25) NOT NULL,
profesional VARCHAR(25) NOT NULL,
fecha date NOT NULL,
hora time NOT NULL
);

select * from usuarios;
select * from turnos;
insert into usuarios(nombre, apellido, email, password, telefono) values("Juan", "Perez", "juanito@juanito", "asdasda", '09:00:00');

delete from turnos;
insert into turnos(nombreUsuario, especialidad, profesional, fecha, hora) values("a", "Cardiología", "Juan Pérez", '2025-02-20', '09:00:00');
