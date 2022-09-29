import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


export default function App() {
    return (
        <main className="page-wrapper">
            <section className="business-card-container">
                <Info />
                <About />
                <Interests />
                <Footer />
            </section>
        </main>
    )
}