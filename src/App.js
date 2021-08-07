import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home.js"
import Story from "./components/pages/Story"
import Resources from "./components/pages/Resources"
import AppTodoList from "./components/projects/todolist/AppTodoList"
import AppTours from "./components/projects/tours/AppTours"
import AppFavSongs from "./components/projects/menu/AppFavSongs"
import AppReviews from "./components/projects/reviews/AppReviews"
import AppQuestions from "./components/projects/questions/AppQuestions"
import AppBday from "./components/projects/birthday reminder/AppBday"
import AppParagraph from "./components/projects/paragraphs/AppParagraph"
import AppColors from "./components/projects/colorGenerator/AppColors"
import AppTodoListUpdate from "./components/projects/update todolist/AppTodoListUpdate"
import About from "./components/pages/About"
import More from "./components/pages/More"

/*
    Notes : 
    1. I guess we should wrap everything between Router! in the App.js, because It's like the main page
    that will be added to the root.
    2. Everytime we go to / , the Home component will be displayed
    3. When you have a website where you will be displaying the same navbar and the same footer you can do
    the following :
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/" exact component={About}/>
            </Switch>
            <Footer />
        </Router>
    4. Are Routes always supposed to be in the App.js ?
*/


function App() {
    return(
        <div>
            <Router className="wrapper">
                <Route path="/" exact component={Home}/>
                <Route path="/About" exact component={About}/>
                <Route path="/More" exact component={More}/>
                <Route path="/story" exact component={Story}/>
                <Route path="/resources" exact component={Resources}/>
                <Route path="/todolist" exact component={AppTodoList}/>
                <Route path="/birthday-reminder" exact component={AppBday}/>
                <Route path="/tours" exact component={AppTours}/>
                <Route path="/reviews" exact component={AppReviews}/>
                <Route path="/questions" exact component={AppQuestions}/>
                <Route path="/fav-songs" exact component={AppFavSongs}/>
                <Route path="/paragraphs" exact component={AppParagraph}/>
                <Route path="/colors" exact component={AppColors}/>
                <Route path="/todolist-update" exact component={AppTodoListUpdate} />
            </Router>
        </div>
    )
}

export default App