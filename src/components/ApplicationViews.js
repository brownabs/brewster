import React, { Component } from "react"
import { Route } from 'react-router-dom'
import UserManager from "../modules/UserManager"
import RecipeManager from "../modules/RecipeManager";
import RecipeList from './recipe/RecipeList'
import RecipeForm from './recipe/RecipeForm'
import RecipeEditForm from './recipe/RecipeEditForm'
import RecipeDetail from './recipe/RecipeDetail'

class ApplicationViews extends Component {

  state = {
    users: [],
    recipes: []
  }

  addRecipe = recipe =>
    RecipeManager.post(recipe)
      .then(() => RecipeManager.getAll())
      .then(recipes => this.setState({ recipes: recipes }));


  deleteRecipe = id => {
    return RecipeManager.deleteAndList(id).then(recipes => {
      this.setState({ recipes: recipes });
    });
  };

  editRecipe = recipe => {
    return RecipeManager.put(recipe)
      .then(() => {
        return RecipeManager.getAll();
      })
      .then(recipes => this.setState({ recipes: recipes }));
  };

  componentDidMount() {
    UserManager.getAll().then(users => this.setState({ users: users }))

    RecipeManager.getAll().then(recipes => this.setState({ recipes: recipes }));
  }
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <RecipeList {...props} recipes={this.state.recipes}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}
          />
        }} />

        <Route path="/recipes/new" render={(props) => {
          return <RecipeForm {...props}
            addRecipe={this.addRecipe}
          />
        }} />

        <Route path="/recipes/:recipeId(\d+)/edit" render={props => {
          return <RecipeEditForm   {...props}
            recipes={this.state.recipes}
            editRecipe={this.editRecipe}
          />
        }} />
        <Route path="/recipes/:recipesId(\d+)" render={(props) => {
          return <RecipeDetail {...props} recipes={this.state.recipes} />
        }} />



      </React.Fragment>
    )

  }
}

export default ApplicationViews
