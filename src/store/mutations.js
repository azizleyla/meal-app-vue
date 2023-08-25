export   function  setSearchedMeals(state, meals) {
    state.searchedMeals = meals ||[]
}

export function setMealsByIngredient(state,meals){
    state.mealsByIngredient = meals || []
}
