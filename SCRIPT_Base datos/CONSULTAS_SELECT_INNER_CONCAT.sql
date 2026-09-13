--FILTRADO Y LOGICA BASICA
--WHERE NOS PERMITE HACER FILTROS
--Permite extraer unicamente los registros que cumplan esa condicion exacta

--TRAER LOS DATOS DE LOS PACIENTE QUE SEAN MASCULINOS(M)

SELECT *FROM Pacientes WHERE Genero = 'M'--trae todas las columnas

SELECT Nombre,ApellidoPaterno,ApellidoMaterno,FechaNacimiento,Genero
FROM Pacientes WHERE Genero = 'M'--trae todas las columnas que necesitemos

--UNIR TEXTOS LA FUNCION	CONCAT(CAMPOS Y SEPARADOS POR COMAS)
--EJEMPLO IMAGINEMOS QUE EL NOMBRE ESTE COMPLETO EN UN SOLO CAMPO
SELECT CONCAT(Nombre,' ',ApellidoPaterno,' ',ApellidoMaterno ) AS [Nombre Paciente]
FROM Pacientes  WHERE Genero = 'M'

SELECT CONCAT(Nombre,' ',ApellidoPaterno,' ',ApellidoMaterno ) AS [Nombre Paciente]
FROM Pacientes  WHERE Nombre like '%sa%'

SELECT *FROM Doctores


UPDATE Doctores SET IdEspecialidad=6 WHERE IdDoctor=6

SELECT  *FROM Especialidades

---------OPERADORES LOGICOS  AND , OR , LIKE----
---combinan multiples condiciones en un mismo filtro
--EJEMPLO: Obtener las citas que esten en estado pendiente y que el doctor sea Carlos Mendoza	Ruiz

SELECT IdCita,FechaHoraCita,Estado,Citas.IdDoctor,Doctores.Nombre,
Doctores.ApellidoPaterno,Doctores.ApellidoMaterno,Doctores.CedulaProfesional
FROM Citas 
INNER JOIN Doctores ON Citas.IdDoctor = Doctores.IdDoctor
WHERE Estado='Pendiente' AND Citas.IdDoctor=3

--utilizando alias

SELECT IdCita,FechaHoraCita,Estado,C.IdDoctor  AS NoDoctor,D.Nombre,
D.ApellidoPaterno,D.ApellidoMaterno,D.CedulaProfesional
FROM Citas C
INNER JOIN Doctores D ON C.IdDoctor = D.IdDoctor
WHERE Estado='Pendiente' AND C.IdDoctor=3

---LEFT JOIN DEVUELVE LOS DATOS QUE NO COINCIDAN EN LAS TABLAS Y LES COLOCA NULL
SELECT *FROM Doctores

SELECT  *FROM Especialidades

SELECT 
UPPER(CONCAT(Nombre,' ',ApellidoPaterno,' ',ApellidoMaterno )) AS [Nombre Paciente] ,
D.CedulaProfesional,
ISNULL(UPPER(E.NombreEspecialidad),UPPER('Sin especialidad registrada')) AS Especialidad
FROM Doctores D 
LEFT JOIN Especialidades E ON D.IdEspecialidad=E.IdEspecialidad


--GROUOP BY
--PERMITE AGRUPAR FILAS CON VALORES IDENTICOS PARA REALIZAR CALCULOS ESTADISTICOS O CONTEOS RAPIDOS CON FUNCIONS
--COUNT()


SELECT *FROM Citas

SELECT Estado,COUNT(*) AS TotalCitas
FROM  Citas
GROUP BY Estado

--EJERCICIO CONSULTA UTILIZANDO WHERE,AND,CONCAT,INNER JOIN GROUP BY
--GENERAR UN REPORTE PROFESIONAL DE CITAS ATENDIDAS POR DOCTORES
--CAMPOS QUE SE NECESITAN: NOMBRE DEL MEDIO,ESPECIALIDAD, TOTAL DE CITAS ANTENDIDAS

SELECT
CONCAT(D.Nombre,' ',D.ApellidoPaterno,' ',D.ApellidoMaterno ) AS Medico,
E.NombreEspecialidad As Especialidad,
COUNT(C.IdCita) AS TotalCitasAtendidas
FROM Doctores D
INNER JOIN Especialidades E ON D.IdEspecialidad = E.IdEspecialidad
INNER JOIN Citas C ON D.IdDoctor = C.IdDoctor
WHERE C.Estado='Atendida'
GROUP BY D.Nombre,D.ApellidoPaterno,D.ApellidoMaterno,E.NombreEspecialidad

SELECT *fROM Citas



