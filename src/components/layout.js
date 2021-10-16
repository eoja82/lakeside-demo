import React from "react"
import Navigation from "./nav"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

export default ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Lakeside Lumber & Hardware, your local building material supplier!</title>
        <meta name="description" content="Proudly serving the Edge of the Wilderness area - Marcell, Bigfork, Effie, as well as Deer River, Balsom, Talmoon, and Grand Rapids areas." />
        <meta name="keywords" content="lumber, roofing, windows, doors, treated, spf, paint, stain, marcell, bigfork, effie, grand rapids" />
        <link rel="icon" type="image/png" href={withPrefix("/favicon.png")} />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:900&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      </Helmet>
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  )
}