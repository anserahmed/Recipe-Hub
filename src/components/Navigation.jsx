import React from 'react'
import { Outlet, Link } from "react-router-dom";
import recipe from "../Assests/recipehub.png";

export default function Navigation() {
    return (
        <>
            <nav class="navbar  sticky-top bg-body-tertiary d-flex ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={recipe} alt="Logo" width="60" height="60" class="mb-6 m-2 d-inline-block align-text-top" /></a>
                    <form class=" justify-content-start">
                        <Link to="/"><button class="btn btn-outline-success me-2" type="button">Home</button></Link>
                        <Link to="/recipe"><button class="btn btn-outline-success me-2" type="button">Recipe</button></Link>

                    </form>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>


            </nav>

        </>
    )
}
