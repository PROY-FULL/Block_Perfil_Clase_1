CREATE TABLE Usuarios(
	IdUsuario INT IDENTITY(1,1) NOT NULL,
	Usuario VARCHAR(20) NULL,
	NombreUsuario VARCHAR(250) NULL,
	Correo VARCHAR(150) NULL,
	Password NVARCHAR(max) NULL,
	Activo BIT NULL)

CREATE TABLE Especialidades(
	IdEspecialidad int IDENTITY(1,1) NOT NULL,
	NombreEspecialidad VARCHAR(150) NULL,
	Descripcion VARCHAR(200) NULL,
	Activo BIT NULL)


CREATE TABLE Doctores(
IdDoctor INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
IdUsuario INT NOT NULL,
IdEspecialidad INT NOT NULL,
Nombre VARCHAR(100) NOT NULL,
ApellidoPaterno VARCHAR(100) NOT NULL,
ApellidoMaterno VARCHAR(100) NOT NULL,
CedulaProfesional VARCHAR(50) NOT NULL UNIQUE,
Telefono VARCHAR(20)
--FOREIGN KEY(IdUsuario) REFERENCES Usuarios(IdUsuario),
--FOREIGN KEY(IdEspecialidad) REFERENCES Especialidades(IdEspecialidad)
)

CREATE TABLE Pacientes(
IdPaciente INT IDENTITY(1,1) PRIMARY KEY,
Nombre VARCHAR(100) NOT NULL,
ApellidoPaterno VARCHAR(100) NOT NULL,
ApellidoMaterno VARCHAR(100) NOT NULL,
FechaNacimiento DATE NOT NULL,
Genero CHAR(1), -- F de Femenino y M Maculino
Telefono VARCHAR(12),
Direccion VARCHAR(250),
TipoSangre VARCHAR(5),
ContactoEmergenciaNombre VARCHAR(150),
ContactoEmergenciaTelefono VARCHAR(15),
FechaRegistro DATETIME
)

CREATE TABLE Citas(
IdCita INT IDENTITY(1,1) PRIMARY KEY,
IdPaciente INT NOT NULL,
IdDoctor INT NOT NULL,
FechaHoraCita DATETIME NOT NULL,
Estado VARCHAR(30),--Pendiente,Atendida,Cancelada
MotivoConsulta VARCHAR(500))


CREATE TABLE HistoriaClinico(
IdHistorialClinico INT IDENTITY(1,1) PRIMARY KEY,
IdCita INT NOT NULL,
FechaConsulta DATETIME,
MotivoConsulta VARCHAR(500),
Sintomas VARCHAR(200),
Diagnostico VARCHAR(500),
Observaciones  VARCHAR(500)
)

CREATE TABLE Recetas(
IdReceta INT IDENTITY(1,1) PRIMARY KEY,
IdHistorialClinico INT NOT NULL,
FechaEmision DATETIME NOT NULL,
InstruccionesGenerales VARCHAR(1500)
)

CREATE TABLE DetalleRecetas(
IdDetalleReceta INT IDENTITY(1,1) PRIMARY KEY,
NombreMedicamento VARCHAR(100) NOT NULL,
Dosis VARCHAR(100) NOT NULL, --Ejem 1 tableta cada 8 horas
Frecuencia VARCHAR(100) NOT NULL,---Ejemplo 5 dias
IndicacionesEspeciales VARCHAR(250)--Ejem. Tomar con alimentos
)


--EstadoCitas
--IdEstadoCita 
--Tipo--Pendiente,Atendida,Cancelada
--Descripcion



--CREATE TABLE Generos(
--IdGenero INT IDENTITY(1,1) PRIMARY KEY,
--Tipo VARCHAR(20),
--Codigo CHAR(1)) 
--1. Masculio  M
--2.- Femenino F              


--para alterar o agregar un campo nuevo podemos usar 
--ALTER TABLE NombreTabla ADD NombreCampoNuevo Tipo
--ALTER TABLE DetalleRecetas ADD IdReceta INT


---evidencias
--INSERT INTO Usuarios(Usuario,NombreUsuario,Correo,Password,Activo)
--VALUES('jperez','JOSE LUIS PEREZ LOPEZ','jperez@miclinica.com','',1)

--INSERT INTO Usuarios 
--VALUES('ptorrez','PABLO TORREZ MENDEZ','ptorrez@miclinica.com','',1)

INSERT INTO Especialidades 
VALUES('Pediatria','Doctor especializado en medecina para niños',1)

INSERT INTO Especialidades 
VALUES(UPPER('Dermatologia'),UPPER('Doctor especializado en medecina para la piel'),1)

select IdEspecialidad, UPPER(NombreEspecialidad) AS Especialidad,
UPPER(Descripcion) AS Descripcion
From Especialidades

INSERT INTO Doctores VALUES(1,1,'JOSE LUIS', 'PEREZ', 'LOPEZ','CRETD902','9613589798')

SELECT *FROM Doctores

SELECT D.Nombre,D.ApellidoPaterno,D.ApellidoMaterno,U.Usuario,E.NombreEspecialidad 
FROM Doctores D 
INNER JOIN Usuarios U ON D.IdUsuario = U.IdUsuario
INNER JOIN Especialidades E ON D.IdEspecialidad = E.IdEspecialidad


--	OBTENER INFORMACION
SELECT *FROM  Usuarios

SELECT TOP 1 *FROM Usuarios  ORDER BY IdUsuario DESC

--ELIMINAR REGISTROS
DELETE FROM Usuario -- se va a eliminar todos los registros de la tabla

DELETE FROM Usuarios WHERE IdUsuario=2

--ACTULIZAR REGISTROS
SELECT *FROM Usuarios WHERE Activo=1
UPDATE Usuarios SET Activo=0 WHERE IdUsuario=3
--UPDATE Usuarios SET Activo=1 WHERE IdUsuario=1

