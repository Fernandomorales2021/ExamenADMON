USE gestionMercadito
GO

IF OBJECT_ID('dbo.OrdenProductos', 'U') IS NOT NULL
DROP TABLE dbo.OrdenProductos
GO
-- Create the table in the specified schema
CREATE TABLE dbo.OrdenProductos
(
  id [INT] IDENTITY(1,1) NOT NULL, -- primary key column
  ordenId [NVARCHAR](50) NOT NULL,
  productoId [NVARCHAR](50) NOT NULL,
  cantidad [INT] NOT NULL,
  costo [FLOAT] NOT NULL,
  precioSugerido [FLOAT](4) NOT NULL,
  CONSTRAINT pk_ID PRIMARY KEY(Id)
  -- specify more columns here
);
GO



CREATE TABLE [dbo].[Producto](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[categoriaId] [int] NULL,
	CONSTRAINT [PK_Producto] PRIMARY KEY(id),
	CONSTRAINT [FK_Producto_Categoria] FOREIGN KEY([categoriaId]) REFERENCES [dbo].[Categoria]([id])
	)
GO
CREATE TABLE [dbo].[Inventario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[productoId] [int] NULL,
	[cantidad] [int] NULL,
	[precio] [float] NULL,
 CONSTRAINT [PK_Inventario] PRIMARY KEY(id),
 CONSTRAINT [FK_Inventario_Producto] FOREIGN KEY([productoId]) REFERENCES [dbo].[Producto]([id])
 )
 GO

CREATE TABLE dbo.OrdenProveedores(
	[id] [int] IDENTITY(1,1) NOT NULL,
	[proveedorId] [int] NULL,
	[fechaOrden] [date] NULL,
	[fechaEntrega] [date] NULL,
	[estado] [bit] NULL,
	[cobroAdicional] [float] NULL,
 CONSTRAINT [PK_Or] PRIMARY KEY(Id),
 CONSTRAINT [FK_OrdenProductos_OrdenProveedores] FOREIGN KEY([ordenId])REFERENCES [dbo].[OrdenProveedores]([id])

);

CREATE TABLE [dbo].[Proveedor](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[observaciones] [varchar](50) NULL,
 CONSTRAINT [PK_Proveedor] PRIMARY KEY(id)
 )
 GO

IF OBJECT_ID('dbo.VentaDetalle', 'U') IS NOT NULL
DROP TABLE dbo.VentaDetalle
GO
CREATE TABLE dbo.VentaDetalle
(
    id [INT] IDENTITY(1,1) NOT NULL,
    ventaId [INT] NOT NULL,
    productoId [INT] NOT NULL,
    cantidad [INT] NOT NULL,
    CONSTRAINT pk_proveedorId PRIMARY KEY(id),
	CONSTRAINT [FK_VentaDetalle_Producto] FOREIGN KEY([productoId]) REFERENCES [dbo].[Producto]([id]),
	CONSTRAINT [FK_VentaDetalle_Venta] FOREIGN KEY([ventaId]) REFERENCES [dbo].[Venta]([id])
);
GO

CREATE TABLE [dbo].[Credito](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[clienteId] [int] NULL,
	[ventaId] [int] NULL,
	[estado] [bit] NULL,
 CONSTRAINT [PK_Credito] PRIMARY KEY(id),
 CONSTRAINT [FK_Credito_Cliente] FOREIGN KEY([clienteId]) REFERENCES [dbo].[Cliente]([id]),
 CONSTRAINT [FK_Credito_Venta] FOREIGN KEY([ventaId]) REFERENCES [dbo].[Venta]([id])
)
GO

drop table Credito
drop table abono
CREATE TABLE [dbo].[Cliente](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[limiteCredito] [float] NULL,
 CONSTRAINT [PK_Cliente_1] PRIMARY KEY(id)
)
GO

CREATE TABLE dbo.Venta
(
    id [INT] IDENTITY(1,1) NOT NULL,
    clienteId [INT] NOT NULL,
    fecha [DATE] NOT NULL,
    CONSTRAINT pkFactura PRIMARY KEY(id),
	CONSTRAINT [FK_Venta_Cliente] FOREIGN KEY([clienteId]) REFERENCES [dbo].[Cliente]([id])
    );
GO

CREATE TABLE dbo.Categoria
(
    id INT NOT NULL IDENTITY(1,1),
    Nombre [NVARCHAR](50) NOT NULL,
    CONSTRAINT pkCategoria PRIMARY KEY(id)
);
GO


CREATE TABLE dbo.Abono
(
    id [INT] IDENTITY(1,1) NOT NULL,
    creditoId [INT] NOT NULL,
    fecha [DATE] NOT NULL,
	monto [FLOAT](4) NOT NULL,
    CONSTRAINT pkabono PRIMARY KEY(id),
	CONSTRAINT [FK_Abono_Credito] FOREIGN KEY([creditoId])REFERENCES [dbo].[Credito]([id])
    );
GO

CREATE TABLE [dbo].[OrdenProductos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ordenId] [int] NULL,
	[productoId] [int] NULL,
	[cantidad] [int] NULL,
	[costo] [float] NULL,
	[precioSugerido] [float] NULL,
 CONSTRAINT [PK_OrdenProductos] PRIMARY KEY(id),
 CONSTRAINT [FK_OrdenProductos_OrdenProveedores] FOREIGN KEY([ordenId]) REFERENCES [dbo].[OrdenProveedores]([id])
);
GO

INSERT INTO Credito
([clienteId], [ventaId], [estado])
VALUES
(1, 1, 1),
(2, 2, 1),
(4, 3, 1)
GO

INSERT INTO [Categoria]
([nombre]) VALUES
(N'Carnes'),
(N'Lacteos'),
(N'Jugos')
GO

INSERT INTO [Proveedor]
([nombre], [observaciones])
VALUES
(N'Manuel Ortiz', N'Proveedor entrega inmediata'),
(N'Hector Lopez', N'Proveedor con fecha de anticipacion'),
(N'Juana Maradiaga', N'Proveedor mixto')
GO

INSERT INTO [Producto]
([nombre], [categoriaId])
VALUES
(N'Pollo', 1),
(N'Queso', 2),
(N'Jugo de Naranja', 3)
GO

INSERT INTO Cliente
(
[nombre], [limiteCredito])
VALUES
(N'Carlos Hernandez', 500),
(N'Julio Florencio', 500),
(N'Karla Perez', 700),
(N'Andrea Peraza', 700),
(N'Mario Velasquez', 800)
GO


INSERT INTO Abono
(
[fecha], [creditoId], [monto]
)
VALUES
(
 '2019-12-4', 1, 30.50
),
(
 '2019-12-1', 3, 45.53
)
GO


INSERT INTO OrdenProveedores
(
proveedorId, fechaOrden, fechaEntrega, estado, cobroAdicional
)
VALUES
(
1, '2020-11-01', '2020-11-01', 1, 100
),
(
2, '2020-11-01', '2020-11-05', 1, 200
),
(
3, '2020-11-01', '2020-11-01', 1, 140
),
(
3, '2020-11-01', '2020-11-04', 1, 190
)
GO

INSERT INTO OrdenProductos
(
ordenId, productoId, cantidad, costo, precioSugerido
)
VALUES
(
1, 1, 200, 40, 50
),
(
2, 2, 300, 30, 45
),
(
3, 3, 450, 20, 25
)
GO

INSERT INTO Inventario
(
productoId, cantidad, precio
)
VALUES
(
1, 50, 50
),
(
2, 100, 45
),
(
3, 130, 25
)
GO

INSERT INTO Venta
([clienteId], [fecha])
VALUES
(1, CAST(N'2020-12-01' AS Date)),
(2, CAST(N'2020-11-30' AS Date)),
(3, CAST(N'2020-11-24' AS Date))
GO

INSERT INTO VentaDetalle
([ventaId], [productoId], [cantidad])
VALUES
(1, 1, 2),
(2, 2, 5),
(3, 3, 2)
GO

select * from dbo.Credito
select * from dbo.Cliente
select * from dbo.Inventario
select * from dbo.OrdenProveedores
select * from dbo.OrdenProductos
select * from dbo.Proveedor
select * from dbo.VentaDetalle
select * from dbo.Venta
select * from dbo.Abono
select * from dbo.Categoria
select * from dbo.Producto

use gestionMercadito
GO


