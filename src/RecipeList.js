import React, {Component} from "react";
import PropTypes from 'prop-types';
import Recipe from "./Recipe";
import "./RecipeList.css";


class RecipeList extends Component{
  static defaultProps = { 
    recipes : [
      {
        title : "Pasta",
        instructions : "asdfk;ja;sdfka;sdfasdf;lkajsdf;lkjasdf",
        img : "pasta.png",
        ingredients : ["flour", "sugar", "water"]
      },
      {
        title : "Pasta2",
        instructions : "asdfk;ja;sdfka;sdfasdf;lkajsdf;lkjasdf",
        img : "pasta.png",
        ingredients : ["flour", "sugar", "water"]
      },
      {
        title : "Pasta3",
        instructions : "asdfk;ja;sdfka;sdfasdf;lkajsdf;lkjasdf",
        img : "pasta.png",
        ingredients : ["flour", "sugar", "water"]
      }
    ]
  };
  
  static propTypes = {
    recipes : PropTypes.arrayOf(PropTypes.object).isRequired
  };
  
  render(){
    const recipes = this.props.recipes.map((el, index) => 
      <Recipe
          key={index}
          title={el.title}
          ingredients={el.ingredients}
          instructions={el.instructions}
          img={el.img}
      />
      // <Recipe key={index} {...el} />
    );
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  };
}  

export default RecipeList;