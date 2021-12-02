-- VALUES (aquí se encuentran los valores para poblar las tablas de la db)

INSERT INTO gorras.roles VALUES(DEFAULT, DEFAULT, DEFAULT, "admin", DEFAULT), (DEFAULT, DEFAULT, DEFAULT, "customer", DEFAULT);

INSERT INTO gorras.users VALUES (DEFAULT, DEFAULT, DEFAULT, 'Matias', 'Maldonado', 'molporron@gmail.com', '12345678', 1999, '1634567211553_img_.jpg', 1, DEFAULT);

INSERT INTO gorras.categories VALUES(DEFAULT, DEFAULT, DEFAULT, 'Gorras', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Accesorios', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Indumentaria', DEFAULT);

INSERT INTO gorras.colours VALUES(DEFAULT, DEFAULT, DEFAULT, 'Azul', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Gris', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Bordo', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Coral', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Verde', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Gris topo', DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 'Camel', DEFAULT);

INSERT INTO gorras.products VALUES(DEFAULT, DEFAULT, DEFAULT, "Grey Cotton Trucker Cap", 3999, 'This grey cotton trucker cap ensures a cooling and breathable fit. It is adjustable that is guaranteed to fit all head sizes.', '1634649949039_img_.png', 1, DEFAULT), (DEFAULT, DEFAULT, DEFAULT, "Coral | Dad Hat", 3290, 'Gorra soft ajustable de visera semi curva, color coral. Tiene tira de ajuste removible. Hecha con algodón orgánico. Medidas: máx: 66cm  min: 52cm', 'gorra-1.jpeg', 1, DEFAULT);

INSERT INTO gorras.product_colour VALUES (DEFAULT, DEFAULT, DEFAULT, 2, 1, DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 3, 2, DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 4, 2, DEFAULT),(DEFAULT, DEFAULT, DEFAULT, 6, 1, DEFAULT);


