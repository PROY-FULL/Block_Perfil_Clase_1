
INSERT INTO Usuarios (Usuario, NombreUsuario, Correo, Password, Activo) VALUES
('agarcia', 'Ana Garcia Perez', 'ana.garcia@email.com', '123456', 1),
('cmendoza', 'Carlos Mendoza Ruiz', 'carlos.mendoza@email.com', '123456', 1),
('smartinez', 'Sofia Martinez Lopez', 'sofia.martinez@email.com', '123456', 1),
('jlopez', 'Juan Lopez Gomez', 'juan.lopez@email.com', '123456', 0),
('lrodriguez', 'Lucia Rodriguez Sosa', 'lucia.rodriguez@email.com', '123456', 1);
INSERT INTO Especialidades (NombreEspecialidad, Descripcion, Activo) VALUES
('Cardiologia', 'Enfermedades del corazon y sistema circulatorio', 1),
('Pediatria', 'Atencion integral de niños y adolescentes', 1),
('Dermatologia', 'Trastornos de la piel, cabello y uñas', 1),
('Medicina General', 'Atencion primaria y preventiva', 1),
('Oftalmologia', 'Salud visual y enfermedades de los ojos', 1);

INSERT INTO Doctores (IdUsuario, IdEspecialidad, Nombre, ApellidoPaterno, ApellidoMaterno, CedulaProfesional,Telefono) VALUES
(1, 1, 'Ana', 'Garcia', 'Perez', 'CED-1001', '9611112233'),
(2, 2, 'Carlos', 'Mendoza', 'Ruiz', 'CED-1002', '9612223344'),
(3, 3, 'Sofia', 'Martinez', 'Lopez', 'CED-1003', '9613334455'),
(4, 4, 'Juan', 'Lopez', 'Gomez', 'CED-1004', '9614445566'),
(5, 5, 'Lucia', 'Rodriguez', 'Sosa', 'CED-1005', '9615556677');
INSERT INTO Pacientes (Nombre, ApellidoPaterno, ApellidoMaterno, FechaNacimiento, Genero, Telefono, Direccion,TipoSangre,ContactoEmergenciaNombre,ContactoEmergenciaTelefono,FechaRegistro) VALUES
('Pedro', 'Ramirez', 'Cruz', '1990-05-12', 'M', '9619876543', 'Col. Centro, Tuxtla', 'O+', 'Maria Cruz Lopez','90983830',GETDATE()),
('Luisa', 'Gomez', 'Morales', '1985-10-22', 'F', '9618765432', 'Col. Las Palmas', 'A+', 'Jorge Lopez Lopez','9383340',GETDATE()),
('Miguel', 'Angel', 'Torres', '2000-03-15', 'M', '9617654321', 'Col. Teran', 'B+', 'Carmen Torres','93832320',GETDATE()),
('Rosa', 'Perez', 'Jimenez', '1995-07-08', 'F', '9616543210', 'Col. Shanká', 'AB+', 'Raul Perez','93832340',GETDATE()),
('Gabriel', 'Hernandez', 'Suri', '2012-12-01', 'M', '9615432109', 'Col. Albania', 'O-', 'Elena Gonzalez','93239340',GETDATE());




INSERT INTO Citas (IdPaciente, IdDoctor, FechaHoraCita, Estado, MotivoConsulta) VALUES
(1, 1, '2026-09-15 10:00:00', 'Atendida', 'Dolor en el pecho al respirar'),
(2, 2, '2026-09-15 11:30:00', 'Atendida', 'Revision general del niño'),
(3, 3, '2026-09-16 09:00:00', 'Pendiente', 'Manchas rojas en el brazo'),
(4, 4, '2026-09-16 11:00:00', 'Cancelada', 'Gripe y fiebre alta'),
(5, 5, '2026-09-17 16:00:00', 'Pendiente', 'Vision borrosa por las tardes');
INSERT INTO HistoriaClinico (IdCita, FechaConsulta, MotivoConsulta, Sintomas, Diagnostico, Observaciones) VALUES
(1, '2026-09-15 10:20:00', 'Dolor en el pecho al respirar', 'Presion toracica leve', 'Fatiga muscular','NINGUNA'),
(2, '2026-09-15 11:50:00', 'Revision general del niño', 'Ninguno, control de crecimiento', 'Paciente Recetas y Detalle de Recetas','NINGUNA')

INSERT INTO Recetas (IdHistorialClinico, FechaEmision, InstruccionesGenerales) VALUES
(1, '2026-09-15 10:30:00', 'Tomar los medicamentos despues de los alimentos con abundante agua.'),
(2, '2026-09-15 12:00:00', 'No requiere medicamentos fuertes, solo vitaminas.');
INSERT INTO DetalleRecetas (NombreMedicamento, Dosis, Frecuencia, IndicacionesEspeciales) VALUES
('Ibuprofeno 600mg', '1 tableta', 'Cada 8 horas', 'Tomar con alimentos'),
('Paracetamol 500mg', '1 tableta', 'Cada 6 horas en caso de dolor', 'No exceder 4 tabletas al dia'),
('Loratadina 10mg', '1 tableta', 'Cada 24 horas', 'Tomar por la noche'),
('Amoxicilina 500mg', '1 capsula', 'Cada 8 horas por 7 dias', 'Completar todo el tratamiento'),
('Omeprazol 20mg', '1 capsula', 'En ayunas', 'Tomar 30 minutos antes del desayuno');