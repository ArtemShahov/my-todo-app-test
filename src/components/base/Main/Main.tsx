import React from "react";
import './styles.scss'
import Control from "../../Control";
import CategoriesMenu from '../../Categories/CategoriesMenu';
import CategoryContent from "../../Categories/CategoryContent";
import { useRouteMatch, Route, Switch  } from 'react-router';

function Main() {
    return (
        <main className="main-wrapper">
            <Control />
            <div className="main">
            <CategoriesMenu />
            <Switch>
                <Route path={`/categories/:category`}>
                    <CategoryContent />
                </Route>
            </Switch>
            </div>
        </main>
    )

}

export default Main;
