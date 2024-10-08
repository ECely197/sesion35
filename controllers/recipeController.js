import Recipe from "../models/Recipe.js";
import User from "../models/user.js";
async function getAll(req, res) {
  try {
    const recipes = await Recipe.find({deleteAt: null }).populate("user");
    return res.json(recipes);
  } catch (error) {
    return res.status(404).json("Error en el servidor");
  }
  return res.json("Listado completo de recetas...");
}

async function getRecipe(req, res) {
  try {
    const recipeId = req.params.id;
    const recipe = await Recipe.findById(recipeId);
    return res.json(recipe);
  } catch (error) {
    return res.status(404).json(`Error no hay una receta con este ID`);
  }
}

async function createRecipe(req, res) {
  try {
    const newRecipe = await Recipe.create({
      title: req.body.title,
      description: req.body.description,
      img: req.body.img,  // Campo de imagen
      times: {
        preparation: req.body.preparation,
        cooking: req.body.cooking,
        total: req.body.total,
      },
      instructions: req.body.instructions,
      preparation: req.body.preparationDetails,  // Usado para los detalles de preparación
      nutritionalValues: {
        calories: req.body.calories,
        carbohydrates: req.body.carbohydrates,
        protein: req.body.protein,
        fat: req.body.fat,
      },
    });
    return res.json(newRecipe);
  } catch (error) {
    console.log(error.errors.title.properties.message);
    return res.status(501).json("Error en el servidor");
  }
}

async function updateRecipe(req, res) {
  const recipeToUpdate = await Recipe.findById(req.params.id);

  if (recipeToUpdate !== null) {
    const { title, description, preparation, cooking, total, instructions, preparationDetails, img, calories, carbohydrates, protein, fat } = req.body;

    recipeToUpdate.title = title || recipeToUpdate.title;
    recipeToUpdate.description = description || recipeToUpdate.description;
    recipeToUpdate.img = img || recipeToUpdate.img;  // Actualizar el campo de imagen
    recipeToUpdate.times.preparation = preparation || recipeToUpdate.times.preparation;
    recipeToUpdate.times.cooking = cooking || recipeToUpdate.times.cooking;
    recipeToUpdate.times.total = total || recipeToUpdate.times.total;
    recipeToUpdate.instructions = instructions || recipeToUpdate.instructions;
    recipeToUpdate.preparation = preparationDetails || recipeToUpdate.preparation;
    recipeToUpdate.nutritionalValues.calories = calories || recipeToUpdate.nutritionalValues.calories;
    recipeToUpdate.nutritionalValues.carbohydrates = carbohydrates || recipeToUpdate.nutritionalValues.carbohydrates;
    recipeToUpdate.nutritionalValues.protein = protein || recipeToUpdate.nutritionalValues.protein;
    recipeToUpdate.nutritionalValues.fat = fat || recipeToUpdate.nutritionalValues.fat;

    await recipeToUpdate.save();

    return res.json("La receta ha sido actualizada");
  } else {
    return res.json("No existe ninguna receta con el ID");
  }
}



async function destroyRecipe(req, res) {
const recipeTodelete = await Recipe.findById(req.params.id);

recipeTodelete.deleteAt = Date.now();
recipeTodelete.save();
return res.json("La receta se ha eliminado");
};

export default {
  getAll: getAll,
  getRecipe: getRecipe,
  createRecipe: createRecipe,
  updateRecipe: updateRecipe,
  destroyRecipe: destroyRecipe
};
