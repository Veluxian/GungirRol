create  table if not exists rol_usuario (
	id_rol_usuario SERIAL primary key,
	nombre_rol_usuario varchar(50) not null UNIQUE
);
create  table if not exists genero (
	id_genero SERIAL primary key,
	nombre_genero varchar(30) not null UNIQUE
);
create table if not exists alineamiento (
	id_alineamiento SERIAL primary key,
	nombre_alineamiento varchar(30) not null UNIQUE
);
create table if not exists tipo_bestia (
	id_tipo_bestia SERIAL primary key,
	nombre_tipo_bestia varchar(30) not null UNIQUE
);
create table if not exists habilidad_bestia (
	id_habilidad_bestia SERIAL primary key,
	nombre_habilidad_bestia varchar(30) not null UNIQUE,
	descripcion_habilidad_bestia varchar(200) not null
);
create table if not exists elemento (
	id_elemento SERIAL primary key,
	nombre_elemento varchar(30) not null UNIQUE
);
create table if not exists tipo_objeto (
	id_tipo_objeto SERIAL primary key,
	nombre_tipo_objeto varchar(50) not null UNIQUE
);
create table if not exists tipo_lugar (
	id_tipo_lugar SERIAL primary key,
	nombre_tipo_lugar varchar(50) not null UNIQUE
);
create table if not exists tipo_usuario (
	id_tipo_usuario SERIAL primary key,
	nombre_tipo_usuario varchar(30) not null UNIQUE
);