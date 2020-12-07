use gestionMercadito
GO

CREATE PROCEDURE [dbo].[ClasificarProveedores]
AS  
BEGIN  
   SELECT v.id as "Id Venta",cli.nombre as "Nombre de Cliente",p.nombre as "Nombre de Producto Vendido",ca.nombre as "Categoria del Producto"
,vd.cantidad as "Cantidad de Producto Vendido", inve.precio as "Precio de Venta",v.fecha as "Fecha de Venta", op.id as "Orden de Compra", p.nombre as "Producto Comprado",
op.cantidad as "Cantidad de Producto Comprado", op.costo "Costo del Producto", pro.nombre as "Nombre del Proveedor", opr.fechaOrden as "Fecha de Orden"
, opr.fechaEntrega as "Fecha de Entrega", inve.cantidad as "Cantidad en Inventario", "Tipo de Proveedor" =
CASE
WHEN op.cantidad >= 300 AND vd.cantidad>=5 then 'Proveedor Alto'
WHEN op.cantidad < 300 AND vd.cantidad<5 then 'Proveedor Bajo'
ELSE 'Proveedor Bajo'
END
FROM Producto p
INNER JOIN OrdenProductos op 
ON p.id = op.productoId
INNER JOIN Categoria ca
ON ca.id=p.categoriaId
INNER JOIN OrdenProveedores opr 
ON op.ordenId = opr.id
INNER JOIN Proveedor pro
ON opr.proveedorId = pro.id
INNER JOIN VentaDetalle vd
ON p.id = vd.productoId
INNER JOIN Venta v
ON v.id= vd.ventaId
INNER JOIN Credito cre
ON cre.ventaId = v.id
INNER JOIN Cliente cli
ON cli.id = cre.clienteId
INNER JOIN Inventario inve
ON inve.productoId = p.id
INNER JOIN Abono abo
ON abo.creditoId= cre.id

END  
GO

CREATE VIEW vwTransaccionesDiaras
AS
SELECT v.id as "Id Venta",cli.nombre as "Nombre de Cliente",p.nombre as "Nombre de Producto Vendido",ca.nombre as "Categoria del Producto"
,vd.cantidad as "Cantidad de Producto Vendido", inve.precio as "Precio de Venta",v.fecha as "Fecha de Venta", op.id as "Orden de Compra", p.nombre as "Producto Comprado",
op.cantidad as "Cantidad de Producto Comprado", op.costo "Costo del Producto", pro.nombre as "Nombre del Proveedor", opr.fechaOrden as "Fecha de Orden"
, opr.fechaEntrega as "Fecha de Entrega", inve.cantidad as "Cantidad en Inventario"
FROM Producto p
INNER JOIN OrdenProductos op 
ON p.id = op.productoId
INNER JOIN Categoria ca
ON ca.id=p.categoriaId
INNER JOIN OrdenProveedores opr 
ON op.ordenId = opr.id
INNER JOIN Proveedor pro
ON opr.proveedorId = pro.id
INNER JOIN VentaDetalle vd
ON p.id = vd.productoId
INNER JOIN Venta v
ON v.id= vd.ventaId
INNER JOIN Credito cre
ON cre.ventaId = v.id
INNER JOIN Cliente cli
ON cli.id = cre.clienteId
INNER JOIN Inventario inve
ON inve.productoId = p.id
INNER JOIN Abono abo
ON abo.creditoId= cre.id
GO
SET IDENTITY_INSERT [dbo].[Abono] ON