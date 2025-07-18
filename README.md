# Evaluación Técnica - Clean Code y Escalabilidad

## Objetivo
Refactorizar código existente aplicando principios de **clean code** y **escalabilidad**. 

## El Problema
Nuestro sistema de seguros de auto actualiza precios diariamente. El código actual **funciona pero es difícil de mantener y tiene un bug**.

### Productos 
- **Productos normales**: precio baja en 1 por día, si está expirado (`sellIn < 0`) entonces 2 por día 
- **"Full Coverage"**: precio sube 1 por día
- **"Mega Coverage"**: precio fijo 80, nunca cambia
- **"Super Sale"**: debería bajar 2 por día, pero NO funciona correctamente

### Reglas
- **Limites de Precio**: el precio precio nunca < 0 y nunca > 50 (excepto Mega Coverage)
- **Constructor**: No debes modificar el constructor de `Product`

## Tu Tarea (30-45 min)

1. **Refactorizar** `updatePrice()`
2. **Arreglar** el producto "Super Sale" 
3. **Escribir tests** para validar las reglas

### Comandos
```bash
npm test        # Ejecutar tests (algunos fallan que debes corregir)
npm run start   # Ver ejemplo de 30 días
```

### Productos de ejemplo
```js
new Product('Medium Coverage', 10, 20),
new Product('Full Coverage', 2, 0),
new Product('Mega Coverage', 0, 80),
new Product('Super Sale', 3, 6), // ← Este tiene bugs
```

## Criterios de Evaluación
- **Clean Code**: Funciones pequeñas, nombres claros, principios SOLID
- **Escalabilidad**: Fácil agregar nuevos tipos de productos
- **Testing**: Casos de uso bien cubiertos
- **Refactoring**: Mejora del código manteniendo funcionalidad
