import React, { Component } from "react"
import "../styles/global.css"
import CubePacks from "../components/cubePacks"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <CubePacks class="cube" />
    </Layout>
  )
}
