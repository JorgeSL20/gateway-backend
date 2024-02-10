const Producto = require('../models/producto');

exports.crearProducto = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        

        const producto = new Producto({
            nombre,
            categoria,
            ubicacion,
            precio
            
        });

        await producto.save();
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al crear el producto');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProductos = async (req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({ msg:'No existe el producto' });
        }

        // Actualizar los campos del producto
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;
        

        // Guardar los cambios
        await producto.save();
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el producto');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg:'No existe el producto' });
        }
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({ msg:'No existe el producto' });
        }

        // Eliminar imágenes asociadas al producto (opcional, depende de tu lógica de negocio)
        

        await Producto.findOneAndDelete({ _id: req.params.id });
        res.json({msg:'Producto eliminado con éxito'});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el producto');
    }
}